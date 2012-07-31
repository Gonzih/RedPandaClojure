(ns red-panda.plugins
  (:require [red-panda.messages :as messages]
            [red-panda.web-socket-server :as ws])
  (:use [red-panda.util]
        [clj-time.core :as time]
        [clj-time.format]
        [clj-time.coerce]))

(def plugins (atom {}))

(defn add-plugin [regexp f]
  (swap! plugins assoc regexp f))

; === Plugins ===
; plugins function parameters [regexp nick host message]
; regexp - regular expression passed to add-plugin as first parameter
; nick - user's nick
; host - user's host
; message - user's message
; channel - channel

; PING PONG plugin
;(add-plugin #"(?i)ping" (fn [_ nick & opts]
                          ;(str nick ": PONG")))

(add-plugin #".*" (fn [_ nick host message channel]
                    (messages/add-message {:nick nick :message message :channel channel :host host :time (time-now)})
                    false))

(add-plugin #".*" (fn [_ nick host message channel]
                    (let [tf (formatter "hh:mm:ss")
                          tm (unparse tf (from-long (time-now)))]
                      (ws/send-message {:nick nick :message message :channel channel :host host :time tm}))
                    false))

; === End of Plugins ===
; Collect plugins
