(ns red-panda.views.channel-templates
  (:use [noir.core :only [defpartial defpage]]
        [hiccup.core :only [html]]
        [hiccup.element]
        [hiccup.page]
        [clj-time.coerce])
  (:require [red-panda.irc-channels :as irc]
            [noir.session :as session]
            [red-panda.messages :as messages]
            [clj-time.core :as time]
            [red-panda.web-socket-server :as ws]))

(defn current []
  (session/get :channel))

(defpartial badge [count]
            (if (pos? count)
              [:span.badge.badge-success count]
              [:span.badge.badge-info count]))

(defn clients-count [channel]
  (badge (count (@ws/clients channel))))

(defn channel-caption [channel]
  (html [:span.channel (str "#" channel " ")] (clients-count channel)))

(defn channel-url [channel]
  (str "/channels/" channel))

(defpartial channel-link [channel]
  (link-to (channel-url channel) (channel-caption channel)))

(defpartial channel [channel]
            (let [a (channel-link channel)]
              (if (= channel (current))
                [:li.active.channel {:data-channel channel} a]
                [:li a])))

(defpartial render-channels []
            [:ul.nav.nav-list
             [:li.nav-header "Channels"]
             (map channel irc/channels)])
