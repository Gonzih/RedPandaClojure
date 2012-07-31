(ns red-panda.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]])
  (:require [red-panda.views.channel-templates :as channels]))

(defpartial layout [& content]
            (html5
              [:head
                [:title "red-panda"]
                  (include-js  "/js/jquery.min.js")
                  (include-js  "/cljs/bootstrap.js")
                  (include-css "/css/bootstrap.min.css")
                  (include-css "/css/red-panda.css")]
              [:body
                [:div.container-fluid
                 [:div.row-fluid
                  [:div.span2 (channels/render-channels)]
                  [:div.span10 content]]]]))
