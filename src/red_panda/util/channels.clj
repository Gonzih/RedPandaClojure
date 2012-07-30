(ns red-panda.util.channels
  (:use [red-panda.util])
  (:require [clj-time.core :as time]
            [noir.session :as session]))

(defn visited-channel-page [channel]
  (let [old-val (session/get :last-checked)]
    (session/put! :last-checked (assoc old-val channel (time-now)))))

