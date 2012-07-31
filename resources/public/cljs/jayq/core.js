goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{var temp__3695__auto____8367 = jayq.core.crate_meta.call(null,sel);

if(cljs.core.truth_(temp__3695__auto____8367))
{var cm__8368 = temp__3695__auto____8367;

return cljs.core.str.call(null,"[crateGroup=",cm__8368,"]");
} else
{return sel;
}
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__8369){
var vec__8370__8371 = p__8369;
var context__8372 = cljs.core.nth.call(null,vec__8370__8371,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__8372)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__8372);
}
};
var $ = function (sel,var_args){
var p__8369 = null;
if (goog.isDef(var_args)) {
  p__8369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__8369);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__8373){
var sel = cljs.core.first(arglist__8373);
var p__8369 = cljs.core.rest(arglist__8373);
return $__delegate.call(this, sel, p__8369);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8375 = null;
var G__8375__8376 = (function (this$,k){
var or__3548__auto____8374 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____8374))
{return or__3548__auto____8374;
} else
{return null;
}
});
var G__8375__8377 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__8375 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__8375__8376.call(this,this$,k);
case  3 :
return G__8375__8377.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8375;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__8379 = null;
var G__8379__8380 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8379__8381 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8379 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8379__8380.call(this,_,k);
case  3 :
return G__8379__8381.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8379;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__8383){
var vec__8384__8385 = p__8383;
var v__8386 = cljs.core.nth.call(null,vec__8384__8385,0,null);

var a__8387 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__8386)))
{return $elem.attr(a__8387);
} else
{return $elem.attr(a__8387,v__8386);
}
};
var attr = function ($elem,a,var_args){
var p__8383 = null;
if (goog.isDef(var_args)) {
  p__8383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__8383);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__8388){
var $elem = cljs.core.first(arglist__8388);
var a = cljs.core.first(cljs.core.next(arglist__8388));
var p__8383 = cljs.core.rest(cljs.core.next(arglist__8388));
return attr__delegate.call(this, $elem, a, p__8383);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__8389){
var vec__8390__8391 = p__8389;
var v__8392 = cljs.core.nth.call(null,vec__8390__8391,0,null);

var k__8393 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__8392)))
{return $elem.data(k__8393);
} else
{return $elem.data(k__8393,v__8392);
}
};
var data = function ($elem,k,var_args){
var p__8389 = null;
if (goog.isDef(var_args)) {
  p__8389 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__8389);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__8394){
var $elem = cljs.core.first(arglist__8394);
var k = cljs.core.first(cljs.core.next(arglist__8394));
var p__8389 = cljs.core.rest(cljs.core.next(arglist__8394));
return data__delegate.call(this, $elem, k, p__8389);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__8395 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__8395);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__8396 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__8396);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__8397){
var vec__8398__8399 = p__8397;
var speed__8400 = cljs.core.nth.call(null,vec__8398__8399,0,null);
var on_finish__8401 = cljs.core.nth.call(null,vec__8398__8399,1,null);

return $elem.hide(speed__8400,on_finish__8401);
};
var hide = function ($elem,var_args){
var p__8397 = null;
if (goog.isDef(var_args)) {
  p__8397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__8397);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__8402){
var $elem = cljs.core.first(arglist__8402);
var p__8397 = cljs.core.rest(arglist__8402);
return hide__delegate.call(this, $elem, p__8397);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__8403){
var vec__8404__8405 = p__8403;
var speed__8406 = cljs.core.nth.call(null,vec__8404__8405,0,null);
var on_finish__8407 = cljs.core.nth.call(null,vec__8404__8405,1,null);

return $elem.show(speed__8406,on_finish__8407);
};
var show = function ($elem,var_args){
var p__8403 = null;
if (goog.isDef(var_args)) {
  p__8403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__8403);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__8408){
var $elem = cljs.core.first(arglist__8408);
var p__8403 = cljs.core.rest(arglist__8408);
return show__delegate.call(this, $elem, p__8403);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__8409){
var vec__8410__8411 = p__8409;
var speed__8412 = cljs.core.nth.call(null,vec__8410__8411,0,null);
var on_finish__8413 = cljs.core.nth.call(null,vec__8410__8411,1,null);

return $elem.toggle(speed__8412,on_finish__8413);
};
var toggle = function ($elem,var_args){
var p__8409 = null;
if (goog.isDef(var_args)) {
  p__8409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__8409);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__8414){
var $elem = cljs.core.first(arglist__8414);
var p__8409 = cljs.core.rest(arglist__8414);
return toggle__delegate.call(this, $elem, p__8409);
});
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__8415){
var vec__8416__8417 = p__8415;
var speed__8418 = cljs.core.nth.call(null,vec__8416__8417,0,null);
var on_finish__8419 = cljs.core.nth.call(null,vec__8416__8417,1,null);

return $elem.fadeOut(speed__8418,on_finish__8419);
};
var fade_out = function ($elem,var_args){
var p__8415 = null;
if (goog.isDef(var_args)) {
  p__8415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__8415);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__8420){
var $elem = cljs.core.first(arglist__8420);
var p__8415 = cljs.core.rest(arglist__8420);
return fade_out__delegate.call(this, $elem, p__8415);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__8421){
var vec__8422__8423 = p__8421;
var speed__8424 = cljs.core.nth.call(null,vec__8422__8423,0,null);
var on_finish__8425 = cljs.core.nth.call(null,vec__8422__8423,1,null);

return $elem.fadeIn(speed__8424,on_finish__8425);
};
var fade_in = function ($elem,var_args){
var p__8421 = null;
if (goog.isDef(var_args)) {
  p__8421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__8421);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__8426){
var $elem = cljs.core.first(arglist__8426);
var p__8421 = cljs.core.rest(arglist__8426);
return fade_in__delegate.call(this, $elem, p__8421);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__8427){
var vec__8428__8429 = p__8427;
var speed__8430 = cljs.core.nth.call(null,vec__8428__8429,0,null);
var on_finish__8431 = cljs.core.nth.call(null,vec__8428__8429,1,null);

return $elem.slideUp(speed__8430,on_finish__8431);
};
var slide_up = function ($elem,var_args){
var p__8427 = null;
if (goog.isDef(var_args)) {
  p__8427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__8427);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__8432){
var $elem = cljs.core.first(arglist__8432);
var p__8427 = cljs.core.rest(arglist__8432);
return slide_up__delegate.call(this, $elem, p__8427);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__8433){
var vec__8434__8435 = p__8433;
var speed__8436 = cljs.core.nth.call(null,vec__8434__8435,0,null);
var on_finish__8437 = cljs.core.nth.call(null,vec__8434__8435,1,null);

return $elem.slideDown(speed__8436,on_finish__8437);
};
var slide_down = function ($elem,var_args){
var p__8433 = null;
if (goog.isDef(var_args)) {
  p__8433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__8433);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__8438){
var $elem = cljs.core.first(arglist__8438);
var p__8433 = cljs.core.rest(arglist__8438);
return slide_down__delegate.call(this, $elem, p__8433);
});
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__8439){
var vec__8440__8441 = p__8439;
var v__8442 = cljs.core.nth.call(null,vec__8440__8441,0,null);

if(cljs.core.truth_(v__8442))
{return $elem.val(v__8442);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__8439 = null;
if (goog.isDef(var_args)) {
  p__8439 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__8439);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__8443){
var $elem = cljs.core.first(arglist__8443);
var p__8439 = cljs.core.rest(arglist__8443);
return val__delegate.call(this, $elem, p__8439);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__8444,content,callback){
var vec__8445__8446 = p__8444;
var method__8447 = cljs.core.nth.call(null,vec__8445__8446,0,null);
var uri__8448 = cljs.core.nth.call(null,vec__8445__8446,1,null);

var params__8449 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__8447)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__8448,params__8449);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e)))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,e)))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Unknown event type: ",e)));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__8450){
var vec__8451__8452 = p__8450;
var sel__8453 = cljs.core.nth.call(null,vec__8451__8452,0,null);
var data__8454 = cljs.core.nth.call(null,vec__8451__8452,1,null);
var handler__8455 = cljs.core.nth.call(null,vec__8451__8452,2,null);

return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__8453),data__8454,handler__8455);
};
var on = function ($elem,events,var_args){
var p__8450 = null;
if (goog.isDef(var_args)) {
  p__8450 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__8450);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__8456){
var $elem = cljs.core.first(arglist__8456);
var events = cljs.core.first(cljs.core.next(arglist__8456));
var p__8450 = cljs.core.rest(cljs.core.next(arglist__8456));
return on__delegate.call(this, $elem, events, p__8450);
});
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__8457){
var vec__8458__8459 = p__8457;
var sel__8460 = cljs.core.nth.call(null,vec__8458__8459,0,null);
var data__8461 = cljs.core.nth.call(null,vec__8458__8459,1,null);
var handler__8462 = cljs.core.nth.call(null,vec__8458__8459,2,null);

return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__8460),data__8461,handler__8462);
};
var one = function ($elem,events,var_args){
var p__8457 = null;
if (goog.isDef(var_args)) {
  p__8457 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__8457);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__8463){
var $elem = cljs.core.first(arglist__8463);
var events = cljs.core.first(cljs.core.next(arglist__8463));
var p__8457 = cljs.core.rest(cljs.core.next(arglist__8463));
return one__delegate.call(this, $elem, events, p__8457);
});
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__8464){
var vec__8465__8466 = p__8464;
var sel__8467 = cljs.core.nth.call(null,vec__8465__8466,0,null);
var handler__8468 = cljs.core.nth.call(null,vec__8465__8466,1,null);

return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__8467),handler__8468);
};
var off = function ($elem,events,var_args){
var p__8464 = null;
if (goog.isDef(var_args)) {
  p__8464 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__8464);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__8469){
var $elem = cljs.core.first(arglist__8469);
var events = cljs.core.first(cljs.core.next(arglist__8469));
var p__8464 = cljs.core.rest(cljs.core.next(arglist__8469));
return off__delegate.call(this, $elem, events, p__8464);
});
return off;
})()
;
