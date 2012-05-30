(ns red-panda.views.index
  (:require [red-panda.irc-server :as irc]
            [noir.response :as resp]
            [red-panda.views.channel-templates :as channels])
  (:use [noir.core :only [defpage]]))

(defpage "/" []
         (let [channel (first irc/channels)]
           (resp/redirect (channels/channel-url channel))))
