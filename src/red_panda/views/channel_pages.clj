(ns red-panda.views.channel-pages
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]])
  (:require [red-panda.views.common :as common]
            [red-panda.views.messages :as msg-templates]
            [red-panda.messages :as messages]
            [noir.session :as session]))

(defpage "/channels/:channel/:page" {:keys [channel page]}
         (session/put! :channel channel)
         (let [page (Integer/parseInt (or page 1))]
           (common/layout
             (msg-templates/messages (messages/get-messages channel page)
                                     channel
                                     page
                                     (messages/count channel)))))
