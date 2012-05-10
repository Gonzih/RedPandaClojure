(ns red-panda.plugins)

(def plugins (atom {}))

(defn add-plugin [regexp f]
  (swap! plugins assoc regexp f))

; === Plugins ===
; plugins function parameters [regexp nick host message]
; regexp - regular expression passed to add-plugin as first parameter
; nick - user's nick
; host - user's host
; message - user's message

(add-plugin #"(?i)ping" (fn [_ nick host message]
                      (str nick ": PONG")))

; === End of Plugins ===
; Collect plugins
