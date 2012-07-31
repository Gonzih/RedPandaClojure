(ns red-panda.core
  (:use [jayq.core   :only [$ css inner prepend document-ready data]]
        [jayq.util   :only [log map->js]]))

(defn to-json [data]
  "Convert map -> json -> string"
  (.stringify js/JSON (map->js data)))

(defn subscribe []
  (let [current_channel (data ($ "li.active.channel") "channel")
        json (to-json {:action "subscribe" :channel current_channel})]
    (.send ws json)))

(defn on-open []
  (js/setTimeout subscribe 1000)
  (log "WebSocket Opened"))

(defn on-close []
  (log "WebSocket Closed"))

(defn row [& html]
  (str "<tr>" (apply str html) "</tr>"))

(defn cell [html]
  (str "<td>" html "</td>"))

(defn on-message [message]
  (when message
    (let [data (.parse js/JSON (.-data message))
          html (row (cell (.-time data))
                    (cell (.-nick data))
                    (cell (.-message data)))]
      (prepend ($ "table tbody") html))))

(def host "ws://localhost:8080/websocket")

(def ws (js/WebSocket. host))

(document-ready
  #((set! (.-onopen ws) on-open)
    (set! (.-onclose ws) on-close)
    (set! (.-onmessage ws) on-message)))
