(ns red-panda.messages
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            monger.joda-time)
  (:import [com.mongodb MongoOptions ServerAddress]))

(mg/connect!)
(mg/set-db! (mg/get-db "red-panda"))

(def db "messages")

(defn add-message [data]
  (mc/insert db data))

(defn get-messages [& [page]]
  (mc/find-maps db))
