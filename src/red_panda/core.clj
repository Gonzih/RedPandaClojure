(ns red-panda.core
  (:require [red-panda.irc-server :as irc]))

(defn -main [& m]
  (irc/start))
