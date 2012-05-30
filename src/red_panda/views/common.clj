(ns red-panda.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page-helpers :only [include-css html5]]
        [red-panda.views.channel-templates :as chan-templates]))

(defpartial layout [& content]
            (html5
              [:head
                [:title "red-panda"]
                  (include-css "/css/bootstrap.min.css")
                  (include-css "/css/red-panda.css")]
              [:body
                [:div.container-fluid
                 [:div.row-fluid
                  [:div.span2 (chan-templates/render-channels)]
                  [:div.span10 content]]]]))
