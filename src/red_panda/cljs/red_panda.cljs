(ns red-panda.core
  (:use [jayq.core   :only [$ css inner prepend document-ready]]
        [jayq.util   :only [log]]))

(defn on-open []
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
          html (row (cell (.-time data)) (cell (.-nick data)) (cell (.-message data)))]
      (log html)
      (prepend ($ "table tbody") html))))

(def host "ws://localhost:8080/websocket")

(document-ready
  #((let [ws (js/WebSocket. host)]
      (set! (.-onopen ws) on-open)
      (set! (.-onclose ws) on-close)
      (set! (.-onmessage ws) on-message))))
