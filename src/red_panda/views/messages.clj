(ns red-panda.views.messages
  (:use [noir.core :only [defpartial]]
        [hiccup.core :only [html]]
        [clj-time.format])
  (:require [red-panda.views.paging :as paging]))

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

(defpartial messages [messages channel page total]
            (paging/paging channel page total)
            [:table.table
             [:tbody
              (map message messages)]]
            (paging/paging channel page total))
