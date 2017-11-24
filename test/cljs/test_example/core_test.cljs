(ns test-example.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [rf-calculator.core :as rf]
            [reagent.core :as r]))

(defmacro expected-degen [app-state]
  (rf/calculate-rf-degen (r/cursor app-state [:effective-health])
                         (r/cursor app-state [:defensive])))

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
    (let [stats (r/atom {:effective-health {:life 2500
                                            :energy-shield 1000}
                         :defensive {:inc-damage 50
                                     :more-damage 10}})]
      (is (= 4867.5
             (rf/calculate-rf-degen (r/cursor stats [:effective-health])
                                    (r/cursor stats [:defensive])))))))
