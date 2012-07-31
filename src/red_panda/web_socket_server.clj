(ns red-panda.web-socket-server
  (:require [clojure.data.json :as json]
            [clojure.string :as s])
  (:import [org.webbitserver WebServer WebServers WebSocketHandler]
           [org.webbitserver.handler StaticFileHandler]))

(def clients (atom {}))

(defn add-client [clients connection channel]
   (let [channel_clients (get clients channel #{})]
     (assoc clients channel (conj channel_clients connection))))

(defn rm-client [clients connection]
  (into {} (for [[k v] clients] [k (disj v connection)])))

(defn subscribe [connection channel]
  (swap! clients add-client connection channel))

(defn unsubscribe [connection]
  (swap! clients rm-client connection))

(defn on-message [connection json-message]
  (let [message (-> json-message json/read-json)]
    (println "recievd-data" message)
    (cond
      (= (str (:action message)) "subscribe")
        (subscribe connection (str (:channel message))))))

(defn on-open [connection]
  (println "opened" connection))

(defn on-close [connection]
  (unsubscribe connection)
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

(defn send-message [{:keys [channel] :as m}]
  (let [channel (s/replace channel "#" "")
        clients (@clients channel)]
    (doseq [client clients]
      (future (.send client (json/json-str m))))))
