(ns red-panda.util
  (:import [java.util Date]))

(defn time-now [] (.getTime (Date.)))
