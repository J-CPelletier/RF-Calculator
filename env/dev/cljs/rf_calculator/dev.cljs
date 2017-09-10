(ns ^:figwheel-no-load rf-calculator.dev
  (:require
    [rf-calculator.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
