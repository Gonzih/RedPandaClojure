(ns red-panda.core
  (:use [jayq.core :only [$ css inner prepend append document-ready data anim fade-in fade-out bind]]
        [jayq.util :only [log map->js clj->js]]))

(def current-page 1)
(def loading-page 0)

(defn to-json [data]
  "Convert map -> js -> string"
  (.stringify js/JSON (map->js data)))

(defn from-json [data]
  "Convert string -> js -> map"
  (.parse js/JSON data))

(defn current-channel []
  (data ($ "li.active.channel") "channel"))

(defn page-loader [] ($ "table tbody tr.loader"))

(defn hide-page-loader []
  (fade-out (page-loader) 100))

(defn show-page-loader []
  (fade-in (page-loader) 100))

(defn page-callback [data]
  (hide-page-loader)
  (let [data (from-json data)
        page (js/parseInt (.-page data))
        html (.-html data)]
    (set! current-page (inc page))
    (.before (page-loader) html)))

(defn load-page []
  (when (not= current-page loading-page)
    (set! loading-page current-page)
    (show-page-loader)
    (let [params (clj->js {:type "GET" :success page-callback})
          uri    (str "/channels/"
                      (current-channel)
                      "/"
                      current-page)]
      (.ajax js/jQuery uri params))))

(defn scroll-handler []
  (when (=
          (.scrollTop ($ js/window))
          (-
            (.height ($ js/document))
            (.height ($ js/window))))
    (load-page)))

(defn bind-scroll []
  (bind ($ js/window) :scroll scroll-handler))

(defn subscribe []
  (let [json (to-json {:action "subscribe" :channel (current-channel)})]
    (.send ws json)))

(defn on-open []
  (js/setTimeout subscribe 1000)
  (log "WebSocket Opened"))

(defn on-close []
  (log "WebSocket Closed"))

(defn row [html & {:keys [uniq]}]
  (str "<tr class='new " uniq "'>" (apply str html) "</tr>"))

(defn cell [html klass]
  (str "<td class='" (name klass) "'>" html "</td>"))

(defn on-message [message]
  (when message
    (let [data (.parse js/JSON (.-data message))
          id (.floor js/Math (* (.random js/Math) 10000))
          html (row [(cell (.-time data) :time)
                     (cell (.-nick data) :nick)
                     (cell (.-message data) :message)] :uniq id)]
      (prepend ($ "table tbody") html)
      (fade-in ($ (str "tr." id)) 1000))))

(def host "ws://localhost:8080/websocket")

(def ws (js/WebSocket. host))

(document-ready
  #((set! (.-onopen ws) on-open)
    (set! (.-onclose ws) on-close)
    (set! (.-onmessage ws) on-message))
    (bind-scroll))
