(ns rf-calculator.prod
  (:require
    [rf-calculator.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
