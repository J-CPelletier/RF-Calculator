// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('rf_calculator.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
rf_calculator.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$effective_DASH_health,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$life,(1000),cljs.core.cst$kw$energy_DASH_shield,(0)], null),cljs.core.cst$kw$offensive,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$inc_DASH_ele,(0),cljs.core.cst$kw$more_DASH_ele,(0),cljs.core.cst$kw$inc_DASH_fire,(0),cljs.core.cst$kw$more_DASH_fire,(0),cljs.core.cst$kw$inc_DASH_damage,(0),cljs.core.cst$kw$more_DASH_damage,(0)], null),cljs.core.cst$kw$defensive,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fire_DASH_res,(75),cljs.core.cst$kw$life_DASH_regen,(0),cljs.core.cst$kw$life_DASH_regen_DASH_percent,(0),cljs.core.cst$kw$inc_DASH_damage,(0),cljs.core.cst$kw$more_DASH_damage,(0)], null)], null));
rf_calculator.core.cursor = (function rf_calculator$core$cursor(var_args){
var G__13700 = arguments.length;
switch (G__13700) {
case 1:
return rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.cursor(rf_calculator.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
});

rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2 = (function (type,key){
return reagent.core.cursor(rf_calculator.core.app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,key], null));
});

rf_calculator.core.cursor.cljs$lang$maxFixedArity = 2;

rf_calculator.core.one_col_input = (function rf_calculator$core$one_col_input(title,value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"form-group row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"col-sm-2 col-form-label",cljs.core.cst$kw$for,title], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-sm-10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,title,cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$on_DASH_change,(function (p1__13702_SHARP_){
return cljs.core.reset_BANG_(value,p1__13702_SHARP_.target.value);
})], null)], null)], null)], null);
});
rf_calculator.core.two_col_input = (function rf_calculator$core$two_col_input(first_title,first_value,second_title,second_value){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"form-group row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"col-sm-2 col-form-label",cljs.core.cst$kw$for,first_title], null),first_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-sm-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,first_title,cljs.core.cst$kw$value,cljs.core.deref(first_value),cljs.core.cst$kw$on_DASH_change,(function (p1__13703_SHARP_){
return cljs.core.reset_BANG_(first_value,p1__13703_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"col-sm-2 col-form-label",cljs.core.cst$kw$for,second_title], null),second_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-sm-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,second_title,cljs.core.cst$kw$value,cljs.core.deref(second_value),cljs.core.cst$kw$on_DASH_change,(function (p1__13704_SHARP_){
return cljs.core.reset_BANG_(second_value,p1__13704_SHARP_.target.value);
})], null)], null)], null)], null);
});
rf_calculator.core.calculate_rf_degen = (function rf_calculator$core$calculate_rf_degen(effective_health,defensive){
var base_damage = ((0.9 * (cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(effective_health)) | (0))) + (0.7 * (cljs.core.cst$kw$energy_DASH_shield.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(effective_health)) | (0))));
var fire_res_dmg_reduction = ((1) - ((cljs.core.cst$kw$fire_DASH_res.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(defensive)) | (0)) / (100)));
var life_regen_reduction = (cljs.core.cst$kw$life_DASH_regen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(defensive)) | (0));
var life_regen_percent_reduction = ((cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(effective_health)) | (0)) * (cljs.core.cst$kw$life_DASH_regen_DASH_percent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(defensive)) / (100)));
var inc_damage_increase = ((1) + ((cljs.core.cst$kw$inc_DASH_damage.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(defensive)) | (0)) / (100)));
var more_damage_increase = ((1) + ((cljs.core.cst$kw$more_DASH_damage.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(defensive)) | (0)) / (100)));
return ((((base_damage * fire_res_dmg_reduction) * inc_damage_increase) * more_damage_increase) - (life_regen_reduction + life_regen_percent_reduction));
});
rf_calculator.core.calculate_rf_damage = (function rf_calculator$core$calculate_rf_damage(effective_health,offensive){
var base_damage = ((0.4 * (cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(effective_health)) | (0))) + (0.4 * (cljs.core.cst$kw$energy_DASH_shield.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(effective_health)) | (0))));
var damage_multiplier = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (base_damage){
return (function (x){
return ((1) + ((x | (0)) / (100)));
});})(base_damage))
,cljs.core.vals(cljs.core.deref(offensive))));
return (base_damage * damage_multiplier);
});
rf_calculator.core.rf_degen_str = (function rf_calculator$core$rf_degen_str(effective_health,defensive){
var damage = Math.round(rf_calculator.core.calculate_rf_degen(effective_health,defensive));
if((damage >= (0))){
return ["| You take ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(damage)," damage per second | "].join('');
} else {
return ["| You gain ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- damage))," life per second | "].join('');
}
});
rf_calculator.core.rf_damage_str = (function rf_calculator$core$rf_damage_str(effective_health,offensive){
return ["| You deal ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rf_calculator.core.calculate_rf_damage(effective_health,offensive))," damage per second |"].join('');
});
rf_calculator.core.percent_max_life_str = (function rf_calculator$core$percent_max_life_str(effective_health,defensive){
var life_per_second = (rf_calculator.core.calculate_rf_degen(effective_health,defensive) / cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(effective_health)));
if((life_per_second < (2))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((life_per_second * (100)))),"% of your maximum life | "].join('');
} else {
return "";
}
});
rf_calculator.core.percent_max_es_str = (function rf_calculator$core$percent_max_es_str(effective_health,defensive){
var es_per_second = (rf_calculator.core.calculate_rf_degen(effective_health,defensive) / cljs.core.cst$kw$energy_DASH_shield.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(effective_health)));
if((es_per_second < (2))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((es_per_second * (100)))),"% of your maximum ES |"].join('');
} else {
return "";
}
});
rf_calculator.core.home_page = (function rf_calculator$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"mt-5 col-md-12 mb-5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"RF Calculator"], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Effective Health"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rf_calculator.core.two_col_input,"Life",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$effective_DASH_health,cljs.core.cst$kw$life),"ES",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$effective_DASH_health,cljs.core.cst$kw$energy_DASH_shield)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Defensive Stats"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rf_calculator.core.one_col_input,"Fire resist",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defensive,cljs.core.cst$kw$fire_DASH_res)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rf_calculator.core.two_col_input,"Inc. damage",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defensive,cljs.core.cst$kw$inc_DASH_damage),"More damage",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defensive,cljs.core.cst$kw$more_DASH_damage)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rf_calculator.core.two_col_input,"Life regen",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defensive,cljs.core.cst$kw$life_DASH_regen),"Life regen (%)",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defensive,cljs.core.cst$kw$life_DASH_regen_DASH_percent)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Offensive Stats"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rf_calculator.core.two_col_input,"Inc. elemental damage",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offensive,cljs.core.cst$kw$inc_DASH_ele),"More elemental damage",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offensive,cljs.core.cst$kw$more_DASH_ele)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rf_calculator.core.two_col_input,"Inc. fire damage",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offensive,cljs.core.cst$kw$inc_DASH_fire),"More fire damage",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offensive,cljs.core.cst$kw$more_DASH_fire)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rf_calculator.core.two_col_input,"Inc. damage",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offensive,cljs.core.cst$kw$inc_DASH_damage),"More damage",rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offensive,cljs.core.cst$kw$more_DASH_damage)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,rf_calculator.core.rf_degen_str(rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$effective_DASH_health),rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$defensive)),rf_calculator.core.percent_max_life_str(rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$effective_DASH_health),rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$defensive)),rf_calculator.core.percent_max_es_str(rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$effective_DASH_health),rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$defensive))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,rf_calculator.core.rf_damage_str(rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$effective_DASH_health),rf_calculator.core.cursor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$offensive))], null)], null);
});
});
rf_calculator.core.mount_root = (function rf_calculator$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rf_calculator.core.home_page], null),document.getElementById("app"));
});
rf_calculator.core.init_BANG_ = (function rf_calculator$core$init_BANG_(){
return rf_calculator.core.mount_root();
});
