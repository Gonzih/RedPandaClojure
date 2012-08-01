(defproject red-panda "1.0.0-SNAPSHOT"
  :description "IRC bot written in clojure"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [congomongo "0.1.10"]
                 [clj-time "0.4.4"]
                 [noir-cljs "0.3.0"]
                 [jayq "0.1.0-alpha4"]
                 [org.webbitserver/webbit "0.4.14"]
                 [org.clojure/data.json "0.1.3"]
                 [noir "1.3.0-beta10"]]
  :main ^{:skip-aot true} red-panda.core)
