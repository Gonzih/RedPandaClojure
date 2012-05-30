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
  (str "(" (messages/count channel) ") #" channel))

(defpartial channel [channel]
            (let [a (link-to (str "/channels/" channel "/1") (channel-caption channel))]
              (if (= channel (current))
                [:li.active a]
                [:li a])))

(defpartial render-channels []
            [:ul.nav.nav-list
             [:li.nav-header "Channels"]
             (map channel irc/channels)])
