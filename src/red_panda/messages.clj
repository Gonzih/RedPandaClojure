(ns red-panda.messages
  (:refer-clojure :exclude [count])
  (:require [somnium.congomongo :as mongo])
  (:use [red-panda.util]))

(let [uri (or (System/getenv "MONGOHQ_URL") (System/getenv "MONGOLAB_URI") (System/getenv "MONGO_URI") "mongodb://localhost")]
  (println uri)
  (-> (mongo/make-connection uri) mongo/set-connection!)
  (mongo/set-database! "red-panda"))


(def coll "messages")
(def per-page 50)
(mongo/add-index! coll {:time -1})


(defn add-message [data]
  (let [now (time-now)
        new-data (assoc data :time now)]
    (mongo/insert! coll new-data)))

(defn get-messages [& [channel page date]]
  (let [channel (str "#" channel)
        page (or page 1)
        skip (* per-page (dec page))]
    (mongo/fetch coll :where {:channel channel}
                      :skip skip
                      :limit per-page
                      :sort {:id -1})))

(defn count [channel]
  (let [chan (str "#" channel)]
    (mongo/fetch-count coll :where {:channel chan})))

(defn count-unread [channel last-time]
  (let [chan (str "#" channel)]
    (mongo/fetch-count coll :where {:channel chan :time {"$gt" last-time}})))
