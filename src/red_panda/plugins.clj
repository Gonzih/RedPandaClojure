(ns red-panda.plugins
  (:require [red-panda.messages :as messages]))

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
                    (messages/add-message {:nick nick :message message :channel channel :host host})
                    false))

; === End of Plugins ===
; Collect plugins
