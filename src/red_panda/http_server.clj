(ns red-panda.http-server
  (:require [noir.server :as http]))

(defn start [env]
  (http/load-views "src/red_panda/views/")
  (let [port (Integer. (get (System/getenv) "PORT" "8080"))]
    (http/start port {:mode env
                      :ns 'red-panda})))
