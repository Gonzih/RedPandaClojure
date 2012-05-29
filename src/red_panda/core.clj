(ns red-panda.core
  (:require [red-panda.irc-server  :as irc]
            [red-panda.http-server :as http]))

(defn -main [& m]
  (let [env (keyword (or (first m) :dev))]
    (irc/start)
    (http/start env)))
