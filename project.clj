(defproject red-panda "1.0.0-SNAPSHOT"
  :description "IRC bot written in clojure"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [congomongo "0.1.9"]
                 [joda-time "1.6"]
                 [noir-cljs "0.3.0"]
                 [noir "1.3.0-beta10"]]
  :main ^{:skip-aot true} red-panda.core)
