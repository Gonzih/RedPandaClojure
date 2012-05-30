(ns red-panda.messages
  (:refer-clojure :exclude [count])
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.query :as mq]
            monger.joda-time)
  (:import [com.mongodb MongoOptions ServerAddress]))

(mg/connect!)
(mg/set-db! (mg/get-db "red-panda"))

(def coll "messages")
(def per-page 50)

(defn add-message [data]
  (mc/insert coll data))

(defn get-messages [& [channel page]]
  (let [chan (str "#" channel)]
    (mq/with-collection coll
                        (mq/find {:channel chan})
                        (mq/paginate :page (or page 1) :per-page per-page)
                        (mq/sort {:time -1}))))

(defn count [channel]
  (let [chan (str "#" channel)]
    (mc/count coll {:channel chan})))
