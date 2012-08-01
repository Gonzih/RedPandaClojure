(ns red-panda.views.messages
  (:use [clj-time.format]
        [clj-time.coerce]
        [noir.core :only [defpartial]]
        [hiccup.core :only [html]]
        [hiccup.element :only [image]])
  (:require [red-panda.views.paging :as paging]
            [noir.session :as session]
            [clj-time.core :as time]))

(defn formatted-time [tm]
            (let [tf (formatter "dd/MM/yy hh:mm:ss")]
              (unparse tf (from-long tm))))

(defpartial message-time [message]
              (formatted-time (:time message)))

(defn message [message]
  (html [:tr
         [:td.time
          (message-time message)]
         [:td.nick
          (:nick message)]
         [:td.message
          (:message message)]]))

(defpartial messages [messages channel]
            [:table.table
             [:tbody
              (map message messages)
              [:tr.loader
               [:td {:colspan 3} (image "/img/loader.gif" "Loading")]]]])
