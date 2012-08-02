(ns red-panda.messages
  (:refer-clojure :exclude [count])
  (:require [somnium.congomongo :as mongo])
  (:use [red-panda.util]))

(let [uri (or (System/getenv "MONGOHQ_URL") (System/getenv "MONGOLAB_URI") (System/getenv "MONGO_URI") "mongodb://localhost/red-panda")]
  (-> (mongo/make-connection uri) mongo/set-connection!))


(def coll "messages")
(def per-page 50)
(mongo/add-index! coll {:time -1})


(defn add-message [data]
  (mongo/insert! coll data))

(defn get-messages [& [channel page params]]
  (let [channel (str "#" channel)
        page (or page 1)
        skip (* per-page (dec page))
        where (into {:channel channel} params)]
    (pr params)
    (pr where)
    (mongo/fetch coll :where where
                      :skip skip
                      :limit per-page
                      :sort {:time -1})))

(defn count [channel]
  (let [chan (str "#" channel)]
    (mongo/fetch-count coll :where {:channel chan})))

(defn count-unread [channel last-time]
  (let [chan (str "#" channel)]
    (mongo/fetch-count coll :where {:channel chan :time {"$gt" last-time}})))
