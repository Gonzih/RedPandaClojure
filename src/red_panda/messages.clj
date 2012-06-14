(ns red-panda.messages
  (:refer-clojure :exclude [count])
  (:use [clj-time.coerce])
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.query :as mq]
            [clj-time.core :as time]
            [monger.joda-time])
  (:import [com.mongodb MongoOptions ServerAddress]))

(if-let [uri (or (System/getenv "MONGOHQ_URL") (System/getenv "MONGOLAB_URI"))]
  (mg/connect-via-uri! uri)
  (do (mg/connect!)
      (mg/set-db! (mg/get-db "red-panda"))))


(def coll "messages")
(mc/ensure-index coll {"time" -1})
(def per-page 50)

(defn add-message [data]
  (let [now (to-long (time/now))
        new-data (assoc data :time now)]
    (mc/insert coll new-data)))

(defn get-messages [& [channel page]]
  (let [chan (str "#" channel)]
    (mq/with-collection coll
                        (mq/find {:channel chan})
                        (mq/paginate :page (or page 1) :per-page per-page)
                        (mq/sort {:time -1}))))

(defn count [channel]
  (let [chan (str "#" channel)]
    (mc/count coll {:channel chan})))

(defn count-unread [channel last_time]
  (let [chan (str "#" channel)]
    (mc/count coll {:channel chan :time {"$gt" last_time}})))
