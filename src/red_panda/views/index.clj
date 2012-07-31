(ns red-panda.views.index
  (:require [noir.response :as resp]
            [red-panda.views.channel-templates :as channels]
            [red-panda.irc-channels :as irc])
  (:use [noir.core :only [defpage]]))

(defpage "/" []
         (let [channel (or (channels/current) (first irc/channels))]
           (resp/redirect (channels/channel-url channel))))
