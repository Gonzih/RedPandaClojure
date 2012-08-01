(ns red-panda.plugins
  (:require [red-panda.messages :as messages]
            [red-panda.views.messages :as msg-templates]
            [red-panda.web-socket-server :as ws]
            [clj-time.core :as time])
  (:use [red-panda.util]
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
                    (let [now (time-now)
                          tm (msg-templates/formatted-time now)
                          msg {:nick nick :message message :channel channel :host host}]
                      (messages/add-message (assoc msg :time now))
                      (ws/send-message      (assoc msg :time tm))
                    false)))

; === End of Plugins ===
; Collect plugins
