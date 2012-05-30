(ns red-panda.views.channel-pages
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]
        [clj-time.coerce])
  (:require [red-panda.views.common :as common]
            [red-panda.views.messages :as msg-templates]
            [red-panda.messages :as messages]
            [noir.session :as session]
            [clj-time.core :as time]
            [red-panda.util.channels :as channels]))

(defpage "/channels/:channel/:page" {:keys [channel page]}
         (session/put! :channel channel)
         (let [page (Integer/parseInt (or page 1))
               output (common/layout
                        (msg-templates/messages (messages/get-messages channel page)
                                                channel
                                                page
                                                (messages/count channel)))]
           (channels/visited-channel-page channel)
           output))
