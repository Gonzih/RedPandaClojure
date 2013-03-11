(ns red-panda.http-server
  (:require [noir.server :as http]
            [noir.cljs.core]))

(def cljs-options {:advanced {:externs ["externs/jquery.js"]}})

(defn start [mode]
  (http/load-views "src/red_panda/views/")
  (let [port (Integer. (get (System/getenv) "PORT" "3000"))]
    (println (str "Running on port: " port))
    (noir.cljs.core/start mode cljs-options)
    (http/start port {:mode mode
                      :ns 'red-panda})))
