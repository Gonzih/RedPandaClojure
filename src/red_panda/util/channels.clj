(ns red-panda.util.channels
  (:use [clj-time.coerce])
  (:require [clj-time.core :as time]
            [noir.session :as session]))

(defn visited-channel-page [channel]
  (let [old_val (session/get :last_checked)
        tm (to-long (time/now))]
    (session/put! :last_checked (assoc old_val channel tm))))

