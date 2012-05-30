(ns red-panda.views.channel-templates
  (:use [noir.core :only [defpartial defpage]]
        [hiccup.core :only [html]]
        [hiccup.page-helpers]
        [clj-time.coerce])
  (:require [red-panda.irc-server :as irc]
            [noir.session :as session]
            [red-panda.messages :as messages]
            [clj-time.core :as time]
            [red-panda.views.channel-pages :as channels]))

(defn current []
  (session/get :channel))

(defpartial unread-badge [channel]
            (if (nil? ((session/get :last_checked) channel))
              (channels/visited-channel-page channel))
            (let [lc (session/get :last_checked)
                  tm (lc channel)
                  count (messages/count-unread channel tm)]
              (if (> count 0)
                [:span.badge.badge-important count]
                [:span.badge.badge-success count])))

(defn channel-caption [channel]
  (html [:span.channel (str "#" channel " ")] (unread-badge channel)))

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
