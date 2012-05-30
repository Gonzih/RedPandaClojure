(ns red-panda.core
  (:require [red-panda.irc-server  :as irc]
            [red-panda.http-server :as http]))

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))]
    (irc/start mode)
    (http/start mode)))
