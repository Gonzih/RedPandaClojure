(ns red-panda.views.paging
  (:refer-clojure :exclude [next])
  (:use [noir.core :only [defpartial]]
        [hiccup.core :only [html]]
        [hiccup.element]
        [hiccup.page])
  (:require [red-panda.messages :as messages]))

(defn pages [total]
  (let [per-page messages/per-page
        p (quot total per-page)]
    (if (zero? (mod total per-page))
      p
      (inc p))))

(defpartial prev [channel page]
            (if (= page 1)
               [:li.disabled (link-to "#" "«")]
               [:li (link-to (str "/channels/" channel "/" (dec page)) "«")]))

(defpartial next [channel page pages]
            (if (= page pages)
               [:li.disabled (link-to "#" "»")]
               [:li (link-to (str "/channels/" channel "/" (inc page)) "»")]))

(defpartial paging [channel page total]
            [:div.pagination
             [:ul (prev channel page)
                  [:li.active (link-to "#" page)]
                  (next channel
                        page
                        (pages total))]])
