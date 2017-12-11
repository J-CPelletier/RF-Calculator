(ns test-example.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [rf-calculator.core :as rf]
            [reagent.core :as r]))

(defonce stats-mock
  (r/atom {:effective-health {:life 2500
                              :energy-shield 1000}
           :defensive {:inc-damage 50
                       :more-damage 10}}))

(deftest calculate-rf-degen
  (testing "Base damage calculations"
    (let [stats (r/atom {:effective-health {:life 2500
                                            :energy-shield 1000}
                         :defensive {}})]
      (is (= 2950
             (rf/calculate-rf-degen (r/cursor stats [:effective-health])
                                    (r/cursor stats [:defensive]))))))
  (testing "Damage calculations with fire resistance"
    (let [stats (r/atom {:effective-health {:life 2500
                                            :energy-shield 1000}
                         :defensive {:fire-res 75}})]
      (is (= 737.5
             (rf/calculate-rf-degen (r/cursor stats [:effective-health])
                                    (r/cursor stats [:defensive]))))))
  (testing "Damage calculations with flat life regeneration"
    (let [stats (r/atom {:effective-health {:life 2500
                                            :energy-shield 1000}
                         :defensive {:life-regen "2950"}})]
      (is (= 0
             (rf/calculate-rf-degen (r/cursor stats [:effective-health])
                                    (r/cursor stats [:defensive]))))))
  (testing "Damage calculations with life regeneration percent"
    (let [stats (r/atom {:effective-health {:life 4000}
                         :defensive {:fire-res 88
                                     :life-regen-percent 10.8}})]
      (is (= 0
             (int (rf/calculate-rf-degen (r/cursor stats [:effective-health])
                                         (r/cursor stats [:defensive])))))))
  (testing "Damage calculations with increased damage"
    (let [stats (r/atom {:effective-health {:life 2500
                                            :energy-shield 1000}
                         :defensive {:inc-damage 50}})]
      (is (= 4425
             (rf/calculate-rf-degen (r/cursor stats [:effective-health])
                                    (r/cursor stats [:defensive]))))))
  (testing "Damage calculations with increased and more damage"
    (is (= 4867.5
           (rf/calculate-rf-degen (r/cursor stats-mock [:effective-health])
                                  (r/cursor stats-mock [:defensive]))))))

(deftest rf-degen-str
  (testing "Calculating using stats from mock"
    (is (= "| You take 4868 damage per second | "
           (rf/rf-degen-str (r/cursor stats-mock [:effective-health])
                            (r/cursor stats-mock [:defensive])))))
  (testing "Gaining life"
    (let [stats (r/atom {:effective-health {:life 4000}
                         :defensive {:fire-res 110}})]
      (is (= "| You gain 360 life per second | "
             (rf/rf-degen-str (r/cursor stats [:effective-health])
                              (r/cursor stats [:defensive])))))))

(deftest percent-max-life-str
  (testing "Calculating using stats from mock"
    (is (= "195% of your maximum life | "
           (rf/percent-max-life-str (r/cursor stats-mock [:effective-health])
                               (r/cursor stats-mock [:defensive]))))))
