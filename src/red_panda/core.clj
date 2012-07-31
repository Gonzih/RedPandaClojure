(ns red-panda.core
  (:require [red-panda.irc-client  :as irc]
            [red-panda.web-socket-server :as ws]
            [red-panda.http-server :as http]))

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))]
    (irc/start mode)
    (ws/start mode)
    (http/start mode)))
