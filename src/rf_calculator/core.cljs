(ns rf-calculator.core
    (:require
      [reagent.core :as r]))

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

;; -------------------------
;; Views

(defn home-page []
  (let [life (r/atom 0)
        es (r/atom 0)]
    (fn []
      [:div.container
       [:div.row
        [:div {:class "mt-5 col-md-12 mb-5"}
         [:h1 "RF Calculator life " @life]]]
       [:form
        [two-col-input "Life" life "ES" es]
        [one-col-input "Life" life]
        [one-col-input "ES" es]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
