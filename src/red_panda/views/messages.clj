(ns red-panda.views.messages
  (:use [noir.core :only [defpartial]]
        [hiccup.core :only [html]]
        [clj-time.format]
        [clj-time.coerce]))

(defpartial message-time [message]
            (let [tf (formatter "hh:mm:ss dd/MM/yyyy")]
              (unparse tf (to-local-date-time (:time message)))))

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
