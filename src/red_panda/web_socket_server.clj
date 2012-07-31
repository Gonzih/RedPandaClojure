(ns red-panda.web-socket-server
  (:require [clojure.data.json :as json]
            [clojure.string :as s])
  (:import [org.webbitserver WebServer WebServers WebSocketHandler]
           [org.webbitserver.handler StaticFileHandler]))

(def clients (atom #{}))

(defn on-message [connection json-message]
  (println json-message)
  (.send connection "received"))
  ;(let [message (-> json-message json/read-json (get-in [:data :message]))]
    ;(.send connection (json/json-str {:type "upcased" :message (s/upper-case message) }))))

(defn on-open [connection]
  (swap! clients conj connection)
  (println "opened" connection))

(defn on-close [connection]
  (swap! clients disj connection)
  (println "closed" connection))

(defn start [mode]
  (doto (WebServers/createWebServer 8080)
    (.add "/websocket"
          (proxy [WebSocketHandler] []
            (onOpen [c] (on-open c))
            (onClose [c] (on-close c))
            (onMessage [c j] (on-message c j))))

    (.add (StaticFileHandler. "."))
    (.start)))

(defn send-message [m]
  (doseq [client @clients]
    (future (.send client (json/json-str m)))))
