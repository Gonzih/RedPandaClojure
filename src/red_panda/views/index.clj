(ns red-panda.views.index
  (:require [red-panda.views.common :as common]
            [red-panda.views.messages :as msg-templates]
            [red-panda.messages :as messages]
            [red-panda.irc-server :as irc]
            [noir.session :as session])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
         (let [channel (first irc/channels)]
           (session/put! :channel channel)
           (common/layout
             (msg-templates/messages (messages/get-messages channel)
                                     channel
                                     1
                                     (messages/count channel)))))
