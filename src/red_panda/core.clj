(ns red-panda.core
  (:use [red-panda.servers :as servers]
        [red-panda.plugins :as plugins])
  (:import (java.net Socket)
           (java.io PrintWriter InputStreamReader BufferedReader)))

(def user {:nick "RedPandaClojure"})
(declare conn-handler msg-handler)

(defn connect [server]
  (let [socket (Socket. (:host server) (:port server))
        in (BufferedReader. (InputStreamReader. (.getInputStream socket)))
        out (PrintWriter. (.getOutputStream socket))
        conn (ref {:in in :out out})]
    (doto (Thread. #(conn-handler conn)) (.start))
    conn))

(defn write [conn msg]
  (doto (:out @conn)
    (.println (str msg "\r"))
    (.flush)))

(defn conn-handler [conn]
  (while (nil? (:exit @conn))
    (let [msg (.readLine (:in @conn))]
      (cond
        (re-find #"^ERROR :Closing Link:" msg)
        (dosync (alter conn merge {:exit true}))
        (re-find #"^PING" msg)
        (write conn (str "PONG " (re-find #":." msg)))
        (re-find #"PRIVMSG" msg)
        (msg-handler conn msg)))))

(defn msg-handler [conn msg]
  (let [[_ nick host channel message :as match] (first (re-seq #"^:(\w+)!~([^\s]+)\sPRIVMSG\s(#[^\s]+)\s:(.+)$" msg))]
    (if (string? message)
      (doseq [[regexp f] @plugins/plugins]
        (if (re-find regexp message)
          (let [response (f regexp nick host message)]
            (write conn (str "PRIVMSG " channel " :" response))))))))

(defn login [conn user]
  (write conn (str "NICK " (:nick user)))
  (write conn (str "USER " (:nick user) " 0 * :" (:nick user))))

(defn -main []
  (let [irc (connect servers/freenode)]
    (login irc user)
    (write irc "JOIN #gnzh-panda-test"))
  "RedPanda is alive")
