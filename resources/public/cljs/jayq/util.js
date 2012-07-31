goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__8470 = cljs.core.js_obj.call(null);

var G__8471__8472 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__8471__8472))
{var G__8474__8476 = cljs.core.first.call(null,G__8471__8472);
var vec__8475__8477 = G__8474__8476;
var k__8478 = cljs.core.nth.call(null,vec__8475__8477,0,null);
var v__8479 = cljs.core.nth.call(null,vec__8475__8477,1,null);
var G__8471__8480 = G__8471__8472;

var G__8474__8481 = G__8474__8476;
var G__8471__8482 = G__8471__8480;

while(true){
var vec__8483__8484 = G__8474__8481;
var k__8485 = cljs.core.nth.call(null,vec__8483__8484,0,null);
var v__8486 = cljs.core.nth.call(null,vec__8483__8484,1,null);
var G__8471__8487 = G__8471__8482;

(out__8470[cljs.core.name.call(null,k__8485)] = v__8486);
var temp__3698__auto____8488 = cljs.core.next.call(null,G__8471__8487);

if(cljs.core.truth_(temp__3698__auto____8488))
{var G__8471__8489 = temp__3698__auto____8488;

{
var G__8490 = cljs.core.first.call(null,G__8471__8489);
var G__8491 = G__8471__8489;
G__8474__8481 = G__8490;
G__8471__8482 = G__8491;
continue;
}
} else
{}
break;
}
} else
{}
return out__8470;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__8492 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__8492);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__8493){
var v = cljs.core.first(arglist__8493);
var text = cljs.core.rest(arglist__8493);
return log__delegate.call(this, v, text);
});
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__8494){
var vec__8495__8496 = p__8494;
var k__8497 = cljs.core.nth.call(null,vec__8495__8496,0,null);
var v__8498 = cljs.core.nth.call(null,vec__8495__8496,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__8497),clj__GT_js.call(null,v__8498));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
