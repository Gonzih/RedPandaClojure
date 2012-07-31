(ns red-panda.views.channel-pages
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]
        [clj-time.coerce])
  (:require [red-panda.views.common :as common]
            [red-panda.views.messages :as msg-templates]
            [red-panda.messages :as messages]
            [noir.session :as session]
            [clj-time.core :as time]))

(defpage "/channels/:channel" {:keys [channel]}
         (session/put! :channel channel)
         (common/layout
           (msg-templates/messages (messages/get-messages channel)
                                   channel)))
