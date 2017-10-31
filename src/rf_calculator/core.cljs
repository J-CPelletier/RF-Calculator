(ns rf-calculator.core
    (:require
      [reagent.core :as r]))

(def app-state (r/atom {:effective-health {:life 1000
                                           :energy-shield 0}
                        :offensive {:inc-ele 0
                                    :more-ele 0
                                    :inc-fire 0
                                    :more-fire 0
                                    :inc-damage 0
                                    :more-damage 0}
                        :defensive {:fire-res 75
                                    :life-regen 0
                                    :life-regen-percent 0
                                    :inc-damage 0
                                    :more-damage 0}}))

(defn cursor
  ([type] (r/cursor app-state [type]))
  ([type key] (r/cursor app-state [type key])))

(defn one-col-input [title value]
  [:div {:class "form-group row"}
   [:label {:class "col-sm-2 col-form-label" :for title} title]
   [:div {:class "col-sm-10"}
    [:input {:type "text"
             :class "form-control"
             :id title
             :value @value
             :on-change #(reset! value (-> % .-target .-value))}]]])

(defn two-col-input [first-title first-value second-title second-value]
  [:div {:class "form-group row"}
   [:label {:class "col-sm-2 col-form-label" :for first-title} first-title]
   [:div {:class "col-sm-4"}
    [:input {:type "text"
             :class "form-control"
             :id first-title
             :value @first-value
             :on-change #(reset! first-value (-> % .-target .-value))}]]
   [:label {:class "col-sm-2 col-form-label" :for second-title} second-title]
   [:div {:class "col-sm-4"}
    [:input {:type "text"
             :class "form-control"
             :id second-title
             :value @second-value
             :on-change #(reset! second-value (-> % .-target .-value))}]]])

(defn calculate-rf-degen [effective-health defensive]
  (let [base-damage (+ (* 0.9 (int (:life @effective-health)))
                       (* 0.7 (int (:energy-shield @effective-health))))
        fire-res-dmg-reduction (- 1 (/ (int (:fire-res @defensive))
                                       100))
        life-regen-reduction (int (:life-regen @defensive))
        life-regen-percent-reduction (* (int (:life @effective-health))
                                        (/ (float (:life-regen-percent @defensive))
                                           100))
        inc-damage-increase (+ 1 (/ (int (:inc-damage @defensive))
                                    100))
        more-damage-increase (+ 1 (/ (int (:more-damage @defensive))
                                     100))]
    (-
     (*
      base-damage
      fire-res-dmg-reduction
      inc-damage-increase
      more-damage-increase)
     (+
      life-regen-reduction
      life-regen-percent-reduction))))

(defn rf-degen-str [effective-health defensive]
  (str "| You take "
       (.round js/Math (calculate-rf-degen effective-health defensive))
       " damage per second | "))

(defn percent-max-life-str [effective-health defensive]
  (let [life-per-second (/ (calculate-rf-degen effective-health defensive)
                           (:life @effective-health))]
  (if (< life-per-second 2)
    (str (.round js/Math (* life-per-second 100)) "% of your maximum life | ")
    "")))

(defn percent-max-es-str [effective-health defensive]
  (let [es-per-second (/ (calculate-rf-degen effective-health defensive)
                         (:energy-shield @effective-health))]
  (if (< es-per-second 2)
    (str (.round js/Math (* es-per-second 100)) "% of your maximum ES |")
    "")))

;; -------------------------
;; Views

(defn home-page []
  (fn []
    [:div.container
     [:div.row
      [:div {:class "mt-5 col-md-12 mb-5"}
       [:h1 "RF Calculator"]]]
     [:form
      [:h2 "Effective Health"]
      [two-col-input
       "Life" (cursor :effective-health :life)
       "ES" (cursor :effective-health :energy-shield)]
      [:h2 "Defensive Stats"]
      [one-col-input
       "Fire resist" (cursor :defensive :fire-res)]
      [two-col-input
       "Inc damage" (cursor :defensive :inc-damage)
       "More damage" (cursor :defensive :more-damage)]
      [two-col-input
       "Life regen" (cursor :defensive :life-regen)
       "Life regen (%)" (cursor :defensive :life-regen-percent)]]
     [:p
      (rf-degen-str (cursor :effective-health)
                    (cursor :defensive))
      (percent-max-life-str (cursor :effective-health)
                            (cursor :defensive))
      (percent-max-es-str (cursor :effective-health)
                          (cursor :defensive))]]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
