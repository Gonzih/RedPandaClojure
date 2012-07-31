(ns red-panda.views.messages
  (:use [clj-time.format]
        [clj-time.coerce]
        [noir.core :only [defpartial]]
        [hiccup.core :only [html]]
        [hiccup.element :only [image]])
  (:require [red-panda.views.paging :as paging]
            [noir.session :as session]
            [clj-time.core :as time]))

(defpartial message-time [message]
            (let [tf (formatter "hh:mm:ss")]
              (unparse tf (from-long (:time message)))))

(defn message [channel message]
  (html [:tr
         [:td
          (message-time message)]
         [:td
          (:nick message)]
         [:td
          (:message message)]]))

(defpartial messages [messages channel]
            [:table.table
             [:tbody
              (map (partial message channel) messages)
              [:tr.loader
               [:td {:colspan 3} (image "/img/loader.gif" "Loading")]]]])
