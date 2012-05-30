(ns red-panda.views.channels
  (:use [noir.core :only [defpartial]]
        [hiccup.core :only [html]])
  (:require [red-panda.irc-server :as irc]))

(defn current []
  (first irc/channels))

(defpartial channel [channel]
            (let [a [:a channel]]
              (if (= channel (current))
                [:li.active a]
                [:li a])))

(defpartial render-channels []
            [:ul.nav.nav-list
             [:li.nav-header "Channels"]
             (map channel irc/channels)])

