(defproject red-panda "1.0.0-SNAPSHOT"
  :description "IRC bot written in clojure"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [congomongo "0.1.9"]
                 [joda-time "1.6"]
                 [noir "1.2.2"]]
  :plugins [[lein-cljsbuild "0.2.4"]]
  :cljsbuild {:builds [{:builds nil,
                        :source-path "src-cljs",
                        :compiler {:pretty-print true,
                                   :output-to "resources/public/js/cljs.js",
                                   :optimizations :simple}}]}
  :main red-panda.core)
