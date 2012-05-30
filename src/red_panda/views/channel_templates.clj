(ns red-panda.views.channel-templates
  (:use [noir.core :only [defpartial defpage]]
        [hiccup.core :only [html]]
        [hiccup.page-helpers])
  (:require [red-panda.irc-server :as irc]
            [noir.session :as session]
            [red-panda.messages :as messages]))

(defn current []
  (session/get :channel))

(defn channel-caption [channel]
  (html [:span.channel (str "#" channel " ")]
        [:span.badge.badge-important (messages/count channel)]))

(defn channel-url [channel & [page]]
  (str "/channels/" channel "/" (or page 1)))

(defpartial channel-link [channel & [page]]
  (link-to (channel-url channel page) (channel-caption channel)))

(defpartial channel [channel]
            (let [a (channel-link channel)]
              (if (= channel (current))
                [:li.active a]
                [:li a])))

(defpartial render-channels []
            [:ul.nav.nav-list
             [:li.nav-header "Channels"]
             (map channel irc/channels)])
