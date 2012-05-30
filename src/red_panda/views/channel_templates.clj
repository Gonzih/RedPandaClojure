(ns red-panda.views.channel-templates
  (:use [noir.core :only [defpartial defpage]]
        [hiccup.core :only [html]]
        [hiccup.page-helpers])
  (:require [red-panda.irc-server :as irc]
            [noir.session :as session]))

(defn current []
  (or (session/get :channel) (first irc/channels)))

(defn channel-caption [channel]
  channel)

(defpartial channel [channel]
            (let [a (link-to (str "/channels/" channel) (channel-caption channel))]
              (if (= channel (current))
                [:li.active a]
                [:li a])))

(defpartial render-channels []
            [:ul.nav.nav-list
             [:li.nav-header "Channels"]
             (map channel irc/channels)])
