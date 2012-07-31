(ns red-panda.core
  (:use [jayq.core   :only [$ css inner prepend append document-ready data anim fade-in fade-out bind]]
        [jayq.util   :only [log map->js]]))


(defn page-loader [] ($ "table tbody tr.loader"))

(defn hide-page-loader []
  (fade-out (page-loader) 100))

(defn show-page-loader []
  (fade-in (page-loader) 100))

(defn load-page [] (show-page-loader))

(defn scroll-handler []
  (when (=
          (.scrollTop ($ js/window))
          (-
            (.height ($ js/document))
            (.height ($ js/window))))
    (load-page)))

(defn bind-scroll []
  (bind ($ js/window) :scroll scroll-handler))

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

(defn row [html & {:keys [class]}]
  (str "<tr class='new " class "'>" (apply str html) "</tr>"))

(defn cell [html]
  (str "<td>" html "</td>"))

(defn on-message [message]
  (when message
    (let [data (.parse js/JSON (.-data message))
          id (.floor js/Math (* (.random js/Math) 10000))
          html (row [(cell (.-time data))
                     (cell (.-nick data))
                     (cell (.-message data))] :class id)]
      (prepend ($ "table tbody") html)
      (fade-in ($ (str "tr." id)) 1000))))

(def host "ws://localhost:8080/websocket")

(def ws (js/WebSocket. host))

(document-ready
  #((set! (.-onopen ws) on-open)
    (set! (.-onclose ws) on-close)
    (set! (.-onmessage ws) on-message))
    (bind-scroll))
