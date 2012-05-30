(ns red-panda.views.messages
  (:use [noir.core :only [defpartial]]
        [hiccup.core :only [html]]
        [clj-time.format]))

(defpartial message-time [message]
            (let [tf (formatter "hh:mm:ss")]
              (unparse tf (:time message))))

(defpartial message [message]
            [:tr
             [:td
              (message-time message)]
             [:td
              (:nick message)]
             [:td
              (:message message)]])

(defpartial messages [messages]
            [:table.table
             [:tbody
              (map message (reverse messages))]])
