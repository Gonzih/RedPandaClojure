(ns red-panda.views.messages
  (:use [noir.core :only [defpartial]]
        [hiccup.core :only [html]]
        [clj-time.core :as time]
        [clj-time.format]
        [clj-time.coerce])
  (:require [red-panda.views.paging :as paging]
            [noir.session :as session]))

(defpartial message-time [message]
            (let [tf (formatter "hh:mm:ss")]
              (unparse tf (from-long (:time message)))))

(defn message-tr [channel message]
  (let [t (:time message)
        l (if-let [last-checked (session/get :last_checked)]
            (last-checked channel)
            (to-long (time/now)))]
    (if (> t l) :tr.new :tr)))

(defn message [channel message]
  (html [(message-tr channel message)
         [:td
          (message-time message)]
         [:td
          (:nick message)]
         [:td
          (:message message)]]))

(defpartial messages [messages channel page total]
            (paging/paging channel page total)
            [:table.table
             [:tbody
              (map (partial message channel) messages)]]
            (paging/paging channel page total))
