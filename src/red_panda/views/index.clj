(ns red-panda.views.index
  (:require [red-panda.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
        (common/layout
          [:h1 "Hi there!"]))
