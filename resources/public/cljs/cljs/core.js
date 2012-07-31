goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____6668 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6668))
{return or__3548__auto____6668;
} else
{var or__3548__auto____6669 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6669))
{return or__3548__auto____6669;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__6733 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6670 = this$;

if(cljs.core.truth_(and__3546__auto____6670))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6670;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6671 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6671))
{return or__3548__auto____6671;
} else
{var or__3548__auto____6672 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6672))
{return or__3548__auto____6672;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6734 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6673 = this$;

if(cljs.core.truth_(and__3546__auto____6673))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6673;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6674 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6674))
{return or__3548__auto____6674;
} else
{var or__3548__auto____6675 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6675))
{return or__3548__auto____6675;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6735 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6676 = this$;

if(cljs.core.truth_(and__3546__auto____6676))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6676;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6677 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6677))
{return or__3548__auto____6677;
} else
{var or__3548__auto____6678 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6678))
{return or__3548__auto____6678;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6736 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6679 = this$;

if(cljs.core.truth_(and__3546__auto____6679))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6679;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6680 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6680))
{return or__3548__auto____6680;
} else
{var or__3548__auto____6681 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6681))
{return or__3548__auto____6681;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6737 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6682 = this$;

if(cljs.core.truth_(and__3546__auto____6682))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6682;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6683 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6683))
{return or__3548__auto____6683;
} else
{var or__3548__auto____6684 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6684))
{return or__3548__auto____6684;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6738 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6685 = this$;

if(cljs.core.truth_(and__3546__auto____6685))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6685;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6686 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6686))
{return or__3548__auto____6686;
} else
{var or__3548__auto____6687 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6687))
{return or__3548__auto____6687;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6739 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6688 = this$;

if(cljs.core.truth_(and__3546__auto____6688))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6688;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6689 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6689))
{return or__3548__auto____6689;
} else
{var or__3548__auto____6690 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6690))
{return or__3548__auto____6690;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6740 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6691 = this$;

if(cljs.core.truth_(and__3546__auto____6691))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6691;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6692 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6692))
{return or__3548__auto____6692;
} else
{var or__3548__auto____6693 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6693))
{return or__3548__auto____6693;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6741 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6694 = this$;

if(cljs.core.truth_(and__3546__auto____6694))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6694;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6695 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6695))
{return or__3548__auto____6695;
} else
{var or__3548__auto____6696 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6696))
{return or__3548__auto____6696;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6742 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6697 = this$;

if(cljs.core.truth_(and__3546__auto____6697))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6697;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6698 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6698))
{return or__3548__auto____6698;
} else
{var or__3548__auto____6699 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6699))
{return or__3548__auto____6699;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6743 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6700 = this$;

if(cljs.core.truth_(and__3546__auto____6700))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6700;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6701 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6701))
{return or__3548__auto____6701;
} else
{var or__3548__auto____6702 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6702))
{return or__3548__auto____6702;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6744 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6703 = this$;

if(cljs.core.truth_(and__3546__auto____6703))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6703;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6704 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6704))
{return or__3548__auto____6704;
} else
{var or__3548__auto____6705 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6705))
{return or__3548__auto____6705;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6745 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6706 = this$;

if(cljs.core.truth_(and__3546__auto____6706))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6706;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6707 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6707))
{return or__3548__auto____6707;
} else
{var or__3548__auto____6708 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6708))
{return or__3548__auto____6708;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6746 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6709 = this$;

if(cljs.core.truth_(and__3546__auto____6709))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6709;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6710 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6710))
{return or__3548__auto____6710;
} else
{var or__3548__auto____6711 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6711))
{return or__3548__auto____6711;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6747 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6712 = this$;

if(cljs.core.truth_(and__3546__auto____6712))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6712;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6713 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6713))
{return or__3548__auto____6713;
} else
{var or__3548__auto____6714 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6714))
{return or__3548__auto____6714;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6748 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6715 = this$;

if(cljs.core.truth_(and__3546__auto____6715))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6715;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6716 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6716))
{return or__3548__auto____6716;
} else
{var or__3548__auto____6717 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6717))
{return or__3548__auto____6717;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6749 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6718 = this$;

if(cljs.core.truth_(and__3546__auto____6718))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6718;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6719 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6719))
{return or__3548__auto____6719;
} else
{var or__3548__auto____6720 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6720))
{return or__3548__auto____6720;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6750 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6721 = this$;

if(cljs.core.truth_(and__3546__auto____6721))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6721;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____6722 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6722))
{return or__3548__auto____6722;
} else
{var or__3548__auto____6723 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6723))
{return or__3548__auto____6723;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6751 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6724 = this$;

if(cljs.core.truth_(and__3546__auto____6724))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6724;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____6725 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6725))
{return or__3548__auto____6725;
} else
{var or__3548__auto____6726 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6726))
{return or__3548__auto____6726;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6752 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6727 = this$;

if(cljs.core.truth_(and__3546__auto____6727))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6727;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____6728 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6728))
{return or__3548__auto____6728;
} else
{var or__3548__auto____6729 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6729))
{return or__3548__auto____6729;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6753 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6730 = this$;

if(cljs.core.truth_(and__3546__auto____6730))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6730;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6731 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6731))
{return or__3548__auto____6731;
} else
{var or__3548__auto____6732 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6732))
{return or__3548__auto____6732;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__6733.call(this,this$);
case  2 :
return _invoke__6734.call(this,this$,a);
case  3 :
return _invoke__6735.call(this,this$,a,b);
case  4 :
return _invoke__6736.call(this,this$,a,b,c);
case  5 :
return _invoke__6737.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6738.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6739.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6740.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6741.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6742.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6743.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6744.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6745.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6746.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6747.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6748.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6749.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6750.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6751.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6752.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6753.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6755 = coll;

if(cljs.core.truth_(and__3546__auto____6755))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6755;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6756 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6756))
{return or__3548__auto____6756;
} else
{var or__3548__auto____6757 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6757))
{return or__3548__auto____6757;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6758 = coll;

if(cljs.core.truth_(and__3546__auto____6758))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6758;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6759 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6759))
{return or__3548__auto____6759;
} else
{var or__3548__auto____6760 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6760))
{return or__3548__auto____6760;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6761 = coll;

if(cljs.core.truth_(and__3546__auto____6761))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6761;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6762 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6762))
{return or__3548__auto____6762;
} else
{var or__3548__auto____6763 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6763))
{return or__3548__auto____6763;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__6770 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6764 = coll;

if(cljs.core.truth_(and__3546__auto____6764))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6764;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6765 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6765))
{return or__3548__auto____6765;
} else
{var or__3548__auto____6766 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6766))
{return or__3548__auto____6766;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6771 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6767 = coll;

if(cljs.core.truth_(and__3546__auto____6767))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6767;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6768 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6768))
{return or__3548__auto____6768;
} else
{var or__3548__auto____6769 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6769))
{return or__3548__auto____6769;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__6770.call(this,coll,n);
case  3 :
return _nth__6771.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6773 = coll;

if(cljs.core.truth_(and__3546__auto____6773))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6773;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6774 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6774))
{return or__3548__auto____6774;
} else
{var or__3548__auto____6775 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6775))
{return or__3548__auto____6775;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6776 = coll;

if(cljs.core.truth_(and__3546__auto____6776))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6776;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6777 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6777))
{return or__3548__auto____6777;
} else
{var or__3548__auto____6778 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6778))
{return or__3548__auto____6778;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__6785 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6779 = o;

if(cljs.core.truth_(and__3546__auto____6779))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6779;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6780 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6780))
{return or__3548__auto____6780;
} else
{var or__3548__auto____6781 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6781))
{return or__3548__auto____6781;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__6786 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6782 = o;

if(cljs.core.truth_(and__3546__auto____6782))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6782;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____6783 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6783))
{return or__3548__auto____6783;
} else
{var or__3548__auto____6784 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6784))
{return or__3548__auto____6784;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__6785.call(this,o,k);
case  3 :
return _lookup__6786.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6788 = coll;

if(cljs.core.truth_(and__3546__auto____6788))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____6788;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____6789 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6789))
{return or__3548__auto____6789;
} else
{var or__3548__auto____6790 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6790))
{return or__3548__auto____6790;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____6791 = coll;

if(cljs.core.truth_(and__3546__auto____6791))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____6791;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____6792 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6792))
{return or__3548__auto____6792;
} else
{var or__3548__auto____6793 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____6793))
{return or__3548__auto____6793;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6794 = coll;

if(cljs.core.truth_(and__3546__auto____6794))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____6794;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____6795 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6795))
{return or__3548__auto____6795;
} else
{var or__3548__auto____6796 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____6796))
{return or__3548__auto____6796;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____6797 = coll;

if(cljs.core.truth_(and__3546__auto____6797))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____6797;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____6798 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6798))
{return or__3548__auto____6798;
} else
{var or__3548__auto____6799 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____6799))
{return or__3548__auto____6799;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6800 = coll;

if(cljs.core.truth_(and__3546__auto____6800))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____6800;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____6801 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6801))
{return or__3548__auto____6801;
} else
{var or__3548__auto____6802 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____6802))
{return or__3548__auto____6802;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6803 = coll;

if(cljs.core.truth_(and__3546__auto____6803))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____6803;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____6804 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6804))
{return or__3548__auto____6804;
} else
{var or__3548__auto____6805 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____6805))
{return or__3548__auto____6805;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____6806 = coll;

if(cljs.core.truth_(and__3546__auto____6806))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____6806;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____6807 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6807))
{return or__3548__auto____6807;
} else
{var or__3548__auto____6808 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____6808))
{return or__3548__auto____6808;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____6809 = o;

if(cljs.core.truth_(and__3546__auto____6809))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____6809;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____6810 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6810))
{return or__3548__auto____6810;
} else
{var or__3548__auto____6811 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____6811))
{return or__3548__auto____6811;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____6812 = o;

if(cljs.core.truth_(and__3546__auto____6812))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____6812;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____6813 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6813))
{return or__3548__auto____6813;
} else
{var or__3548__auto____6814 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____6814))
{return or__3548__auto____6814;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____6815 = o;

if(cljs.core.truth_(and__3546__auto____6815))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____6815;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____6816 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6816))
{return or__3548__auto____6816;
} else
{var or__3548__auto____6817 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____6817))
{return or__3548__auto____6817;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____6818 = o;

if(cljs.core.truth_(and__3546__auto____6818))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____6818;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____6819 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6819))
{return or__3548__auto____6819;
} else
{var or__3548__auto____6820 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____6820))
{return or__3548__auto____6820;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__6827 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____6821 = coll;

if(cljs.core.truth_(and__3546__auto____6821))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6821;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____6822 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6822))
{return or__3548__auto____6822;
} else
{var or__3548__auto____6823 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6823))
{return or__3548__auto____6823;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__6828 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____6824 = coll;

if(cljs.core.truth_(and__3546__auto____6824))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6824;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____6825 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6825))
{return or__3548__auto____6825;
} else
{var or__3548__auto____6826 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6826))
{return or__3548__auto____6826;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__6827.call(this,coll,f);
case  3 :
return _reduce__6828.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____6830 = o;

if(cljs.core.truth_(and__3546__auto____6830))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____6830;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____6831 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6831))
{return or__3548__auto____6831;
} else
{var or__3548__auto____6832 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____6832))
{return or__3548__auto____6832;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____6833 = o;

if(cljs.core.truth_(and__3546__auto____6833))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____6833;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____6834 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6834))
{return or__3548__auto____6834;
} else
{var or__3548__auto____6835 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____6835))
{return or__3548__auto____6835;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____6836 = o;

if(cljs.core.truth_(and__3546__auto____6836))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____6836;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____6837 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6837))
{return or__3548__auto____6837;
} else
{var or__3548__auto____6838 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____6838))
{return or__3548__auto____6838;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____6839 = o;

if(cljs.core.truth_(and__3546__auto____6839))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____6839;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____6840 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6840))
{return or__3548__auto____6840;
} else
{var or__3548__auto____6841 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____6841))
{return or__3548__auto____6841;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____6842 = d;

if(cljs.core.truth_(and__3546__auto____6842))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____6842;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____6843 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____6843))
{return or__3548__auto____6843;
} else
{var or__3548__auto____6844 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6844))
{return or__3548__auto____6844;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____6845 = this$;

if(cljs.core.truth_(and__3546__auto____6845))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____6845;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____6846 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6846))
{return or__3548__auto____6846;
} else
{var or__3548__auto____6847 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____6847))
{return or__3548__auto____6847;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____6848 = this$;

if(cljs.core.truth_(and__3546__auto____6848))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____6848;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____6849 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6849))
{return or__3548__auto____6849;
} else
{var or__3548__auto____6850 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6850))
{return or__3548__auto____6850;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____6851 = this$;

if(cljs.core.truth_(and__3546__auto____6851))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____6851;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____6852 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6852))
{return or__3548__auto____6852;
} else
{var or__3548__auto____6853 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6853))
{return or__3548__auto____6853;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6854 = null;
var G__6854__6855 = (function (o,k){
return null;
});
var G__6854__6856 = (function (o,k,not_found){
return not_found;
});
G__6854 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__6854__6855.call(this,o,k);
case  3 :
return G__6854__6856.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6854;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6858 = null;
var G__6858__6859 = (function (_,f){
return f.call(null);
});
var G__6858__6860 = (function (_,f,start){
return start;
});
G__6858 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6858__6859.call(this,_,f);
case  3 :
return G__6858__6860.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6858;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6862 = null;
var G__6862__6863 = (function (_,n){
return null;
});
var G__6862__6864 = (function (_,n,not_found){
return not_found;
});
G__6862 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__6862__6863.call(this,_,n);
case  3 :
return G__6862__6864.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6862;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__6872 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__6866 = cljs.core._nth.call(null,cicoll,0);
var n__6867 = 1;

while(true){
if(cljs.core.truth_((n__6867 < cljs.core._count.call(null,cicoll))))
{{
var G__6876 = f.call(null,val__6866,cljs.core._nth.call(null,cicoll,n__6867));
var G__6877 = (n__6867 + 1);
val__6866 = G__6876;
n__6867 = G__6877;
continue;
}
} else
{return val__6866;
}
break;
}
}
});
var ci_reduce__6873 = (function (cicoll,f,val){
var val__6868 = val;
var n__6869 = 0;

while(true){
if(cljs.core.truth_((n__6869 < cljs.core._count.call(null,cicoll))))
{{
var G__6878 = f.call(null,val__6868,cljs.core._nth.call(null,cicoll,n__6869));
var G__6879 = (n__6869 + 1);
val__6868 = G__6878;
n__6869 = G__6879;
continue;
}
} else
{return val__6868;
}
break;
}
});
var ci_reduce__6874 = (function (cicoll,f,val,idx){
var val__6870 = val;
var n__6871 = idx;

while(true){
if(cljs.core.truth_((n__6871 < cljs.core._count.call(null,cicoll))))
{{
var G__6880 = f.call(null,val__6870,cljs.core._nth.call(null,cicoll,n__6871));
var G__6881 = (n__6871 + 1);
val__6870 = G__6880;
n__6871 = G__6881;
continue;
}
} else
{return val__6870;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__6872.call(this,cicoll,f);
case  3 :
return ci_reduce__6873.call(this,cicoll,f,val);
case  4 :
return ci_reduce__6874.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6882 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6895 = null;
var G__6895__6896 = (function (_,f){
var this__6883 = this;
return cljs.core.ci_reduce.call(null,this__6883.a,f,(this__6883.a[this__6883.i]),(this__6883.i + 1));
});
var G__6895__6897 = (function (_,f,start){
var this__6884 = this;
return cljs.core.ci_reduce.call(null,this__6884.a,f,start,this__6884.i);
});
G__6895 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6895__6896.call(this,_,f);
case  3 :
return G__6895__6897.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6895;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6885 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6886 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6899 = null;
var G__6899__6900 = (function (coll,n){
var this__6887 = this;
var i__6888 = (n + this__6887.i);

if(cljs.core.truth_((i__6888 < this__6887.a.length)))
{return (this__6887.a[i__6888]);
} else
{return null;
}
});
var G__6899__6901 = (function (coll,n,not_found){
var this__6889 = this;
var i__6890 = (n + this__6889.i);

if(cljs.core.truth_((i__6890 < this__6889.a.length)))
{return (this__6889.a[i__6890]);
} else
{return not_found;
}
});
G__6899 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6899__6900.call(this,coll,n);
case  3 :
return G__6899__6901.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6899;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__6891 = this;
return (this__6891.a.length - this__6891.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__6892 = this;
return (this__6892.a[this__6892.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__6893 = this;
if(cljs.core.truth_(((this__6893.i + 1) < this__6893.a.length)))
{return (new cljs.core.IndexedSeq(this__6893.a,(this__6893.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__6894 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6903 = null;
var G__6903__6904 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6903__6905 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6903 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__6903__6904.call(this,array,f);
case  3 :
return G__6903__6905.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6903;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6907 = null;
var G__6907__6908 = (function (array,k){
return (array[k]);
});
var G__6907__6909 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6907 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__6907__6908.call(this,array,k);
case  3 :
return G__6907__6909.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6907;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6911 = null;
var G__6911__6912 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__6911__6913 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__6911 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__6911__6912.call(this,array,n);
case  3 :
return G__6911__6913.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6911;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____6915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6915))
{var s__6916 = temp__3698__auto____6915;

return cljs.core._first.call(null,s__6916);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__6917 = cljs.core.next.call(null,s);
s = G__6917;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__6918 = cljs.core.seq.call(null,x);
var n__6919 = 0;

while(true){
if(cljs.core.truth_(s__6918))
{{
var G__6920 = cljs.core.next.call(null,s__6918);
var G__6921 = (n__6919 + 1);
s__6918 = G__6920;
n__6919 = G__6921;
continue;
}
} else
{return n__6919;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__6922 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__6923 = (function() { 
var G__6925__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6926 = conj.call(null,coll,x);
var G__6927 = cljs.core.first.call(null,xs);
var G__6928 = cljs.core.next.call(null,xs);
coll = G__6926;
x = G__6927;
xs = G__6928;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6925 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6925__delegate.call(this, coll, x, xs);
};
G__6925.cljs$lang$maxFixedArity = 2;
G__6925.cljs$lang$applyTo = (function (arglist__6929){
var coll = cljs.core.first(arglist__6929);
var x = cljs.core.first(cljs.core.next(arglist__6929));
var xs = cljs.core.rest(cljs.core.next(arglist__6929));
return G__6925__delegate.call(this, coll, x, xs);
});
return G__6925;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__6922.call(this,coll,x);
default:
return conj__6923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__6923.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__6930 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__6931 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__6930.call(this,coll,n);
case  3 :
return nth__6931.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__6933 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__6934 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__6933.call(this,o,k);
case  3 :
return get__6934.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__6937 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__6938 = (function() { 
var G__6940__delegate = function (coll,k,v,kvs){
while(true){
var ret__6936 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__6941 = ret__6936;
var G__6942 = cljs.core.first.call(null,kvs);
var G__6943 = cljs.core.second.call(null,kvs);
var G__6944 = cljs.core.nnext.call(null,kvs);
coll = G__6941;
k = G__6942;
v = G__6943;
kvs = G__6944;
continue;
}
} else
{return ret__6936;
}
break;
}
};
var G__6940 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6940__delegate.call(this, coll, k, v, kvs);
};
G__6940.cljs$lang$maxFixedArity = 3;
G__6940.cljs$lang$applyTo = (function (arglist__6945){
var coll = cljs.core.first(arglist__6945);
var k = cljs.core.first(cljs.core.next(arglist__6945));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6945)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6945)));
return G__6940__delegate.call(this, coll, k, v, kvs);
});
return G__6940;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__6937.call(this,coll,k,v);
default:
return assoc__6938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__6938.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__6947 = (function (coll){
return coll;
});
var dissoc__6948 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__6949 = (function() { 
var G__6951__delegate = function (coll,k,ks){
while(true){
var ret__6946 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__6952 = ret__6946;
var G__6953 = cljs.core.first.call(null,ks);
var G__6954 = cljs.core.next.call(null,ks);
coll = G__6952;
k = G__6953;
ks = G__6954;
continue;
}
} else
{return ret__6946;
}
break;
}
};
var G__6951 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6951__delegate.call(this, coll, k, ks);
};
G__6951.cljs$lang$maxFixedArity = 2;
G__6951.cljs$lang$applyTo = (function (arglist__6955){
var coll = cljs.core.first(arglist__6955);
var k = cljs.core.first(cljs.core.next(arglist__6955));
var ks = cljs.core.rest(cljs.core.next(arglist__6955));
return G__6951__delegate.call(this, coll, k, ks);
});
return G__6951;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__6947.call(this,coll);
case  2 :
return dissoc__6948.call(this,coll,k);
default:
return dissoc__6949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__6949.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__3293__auto____6956 = o;

if(cljs.core.truth_((function (){var and__3546__auto____6957 = x__3293__auto____6956;

if(cljs.core.truth_(and__3546__auto____6957))
{var and__3546__auto____6958 = x__3293__auto____6956.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____6958))
{return cljs.core.not.call(null,x__3293__auto____6956.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____6958;
}
} else
{return and__3546__auto____6957;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3293__auto____6956);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__6960 = (function (coll){
return coll;
});
var disj__6961 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__6962 = (function() { 
var G__6964__delegate = function (coll,k,ks){
while(true){
var ret__6959 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__6965 = ret__6959;
var G__6966 = cljs.core.first.call(null,ks);
var G__6967 = cljs.core.next.call(null,ks);
coll = G__6965;
k = G__6966;
ks = G__6967;
continue;
}
} else
{return ret__6959;
}
break;
}
};
var G__6964 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6964__delegate.call(this, coll, k, ks);
};
G__6964.cljs$lang$maxFixedArity = 2;
G__6964.cljs$lang$applyTo = (function (arglist__6968){
var coll = cljs.core.first(arglist__6968);
var k = cljs.core.first(cljs.core.next(arglist__6968));
var ks = cljs.core.rest(cljs.core.next(arglist__6968));
return G__6964__delegate.call(this, coll, k, ks);
});
return G__6964;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__6960.call(this,coll);
case  2 :
return disj__6961.call(this,coll,k);
default:
return disj__6962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__6962.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3293__auto____6969 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6970 = x__3293__auto____6969;

if(cljs.core.truth_(and__3546__auto____6970))
{var and__3546__auto____6971 = x__3293__auto____6969.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____6971))
{return cljs.core.not.call(null,x__3293__auto____6969.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____6971;
}
} else
{return and__3546__auto____6970;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3293__auto____6969);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3293__auto____6972 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6973 = x__3293__auto____6972;

if(cljs.core.truth_(and__3546__auto____6973))
{var and__3546__auto____6974 = x__3293__auto____6972.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____6974))
{return cljs.core.not.call(null,x__3293__auto____6972.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____6974;
}
} else
{return and__3546__auto____6973;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3293__auto____6972);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3293__auto____6975 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6976 = x__3293__auto____6975;

if(cljs.core.truth_(and__3546__auto____6976))
{var and__3546__auto____6977 = x__3293__auto____6975.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____6977))
{return cljs.core.not.call(null,x__3293__auto____6975.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____6977;
}
} else
{return and__3546__auto____6976;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3293__auto____6975);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3293__auto____6978 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6979 = x__3293__auto____6978;

if(cljs.core.truth_(and__3546__auto____6979))
{var and__3546__auto____6980 = x__3293__auto____6978.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____6980))
{return cljs.core.not.call(null,x__3293__auto____6978.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____6980;
}
} else
{return and__3546__auto____6979;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3293__auto____6978);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3293__auto____6981 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6982 = x__3293__auto____6981;

if(cljs.core.truth_(and__3546__auto____6982))
{var and__3546__auto____6983 = x__3293__auto____6981.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____6983))
{return cljs.core.not.call(null,x__3293__auto____6981.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____6983;
}
} else
{return and__3546__auto____6982;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3293__auto____6981);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3293__auto____6984 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6985 = x__3293__auto____6984;

if(cljs.core.truth_(and__3546__auto____6985))
{var and__3546__auto____6986 = x__3293__auto____6984.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____6986))
{return cljs.core.not.call(null,x__3293__auto____6984.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____6986;
}
} else
{return and__3546__auto____6985;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3293__auto____6984);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3293__auto____6987 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6988 = x__3293__auto____6987;

if(cljs.core.truth_(and__3546__auto____6988))
{var and__3546__auto____6989 = x__3293__auto____6987.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____6989))
{return cljs.core.not.call(null,x__3293__auto____6987.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____6989;
}
} else
{return and__3546__auto____6988;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3293__auto____6987);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__6990 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__6990.push(key);
}));
return keys__6990;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__3293__auto____6991 = s;

if(cljs.core.truth_((function (){var and__3546__auto____6992 = x__3293__auto____6991;

if(cljs.core.truth_(and__3546__auto____6992))
{var and__3546__auto____6993 = x__3293__auto____6991.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____6993))
{return cljs.core.not.call(null,x__3293__auto____6991.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____6993;
}
} else
{return and__3546__auto____6992;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3293__auto____6991);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____6994 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6994))
{return cljs.core.not.call(null,(function (){var or__3548__auto____6995 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____6995))
{return or__3548__auto____6995;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____6994;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____6996 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6996))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____6996;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____6997 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____6997))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____6997;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____6998 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____6998))
{return (n == n.toFixed());
} else
{return and__3546__auto____6998;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6999 = coll;

if(cljs.core.truth_(and__3546__auto____6999))
{var and__3546__auto____7000 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7000))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7000;
}
} else
{return and__3546__auto____6999;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___7005 = (function (x){
return true;
});
var distinct_QMARK___7006 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7007 = (function() { 
var G__7009__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7001 = cljs.core.set([y,x]);
var xs__7002 = more;

while(true){
var x__7003 = cljs.core.first.call(null,xs__7002);
var etc__7004 = cljs.core.next.call(null,xs__7002);

if(cljs.core.truth_(xs__7002))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7001,x__7003)))
{return false;
} else
{{
var G__7010 = cljs.core.conj.call(null,s__7001,x__7003);
var G__7011 = etc__7004;
s__7001 = G__7010;
xs__7002 = G__7011;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7009 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7009__delegate.call(this, x, y, more);
};
G__7009.cljs$lang$maxFixedArity = 2;
G__7009.cljs$lang$applyTo = (function (arglist__7012){
var x = cljs.core.first(arglist__7012);
var y = cljs.core.first(cljs.core.next(arglist__7012));
var more = cljs.core.rest(cljs.core.next(arglist__7012));
return G__7009__delegate.call(this, x, y, more);
});
return G__7009;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7005.call(this,x);
case  2 :
return distinct_QMARK___7006.call(this,x,y);
default:
return distinct_QMARK___7007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7007.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7013 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7013)))
{return r__7013;
} else
{if(cljs.core.truth_(r__7013))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__7015 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7016 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7014 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7014,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7014);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7015.call(this,comp);
case  2 :
return sort__7016.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__7018 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7019 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7018.call(this,keyfn,comp);
case  3 :
return sort_by__7019.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__7021 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7022 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7021.call(this,f,val);
case  3 :
return reduce__7022.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7028 = (function (f,coll){
var temp__3695__auto____7024 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7024))
{var s__7025 = temp__3695__auto____7024;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7025),cljs.core.next.call(null,s__7025));
} else
{return f.call(null);
}
});
var seq_reduce__7029 = (function (f,val,coll){
var val__7026 = val;
var coll__7027 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7027))
{{
var G__7031 = f.call(null,val__7026,cljs.core.first.call(null,coll__7027));
var G__7032 = cljs.core.next.call(null,coll__7027);
val__7026 = G__7031;
coll__7027 = G__7032;
continue;
}
} else
{return val__7026;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7028.call(this,f,val);
case  3 :
return seq_reduce__7029.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7033 = null;
var G__7033__7034 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7033__7035 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7033 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7033__7034.call(this,coll,f);
case  3 :
return G__7033__7035.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7033;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7037 = (function (){
return 0;
});
var _PLUS___7038 = (function (x){
return x;
});
var _PLUS___7039 = (function (x,y){
return (x + y);
});
var _PLUS___7040 = (function() { 
var G__7042__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7042 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7042__delegate.call(this, x, y, more);
};
G__7042.cljs$lang$maxFixedArity = 2;
G__7042.cljs$lang$applyTo = (function (arglist__7043){
var x = cljs.core.first(arglist__7043);
var y = cljs.core.first(cljs.core.next(arglist__7043));
var more = cljs.core.rest(cljs.core.next(arglist__7043));
return G__7042__delegate.call(this, x, y, more);
});
return G__7042;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7037.call(this);
case  1 :
return _PLUS___7038.call(this,x);
case  2 :
return _PLUS___7039.call(this,x,y);
default:
return _PLUS___7040.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7040.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___7044 = (function (x){
return (- x);
});
var ___7045 = (function (x,y){
return (x - y);
});
var ___7046 = (function() { 
var G__7048__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7048 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7048__delegate.call(this, x, y, more);
};
G__7048.cljs$lang$maxFixedArity = 2;
G__7048.cljs$lang$applyTo = (function (arglist__7049){
var x = cljs.core.first(arglist__7049);
var y = cljs.core.first(cljs.core.next(arglist__7049));
var more = cljs.core.rest(cljs.core.next(arglist__7049));
return G__7048__delegate.call(this, x, y, more);
});
return G__7048;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7044.call(this,x);
case  2 :
return ___7045.call(this,x,y);
default:
return ___7046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7046.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7050 = (function (){
return 1;
});
var _STAR___7051 = (function (x){
return x;
});
var _STAR___7052 = (function (x,y){
return (x * y);
});
var _STAR___7053 = (function() { 
var G__7055__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7055 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7055__delegate.call(this, x, y, more);
};
G__7055.cljs$lang$maxFixedArity = 2;
G__7055.cljs$lang$applyTo = (function (arglist__7056){
var x = cljs.core.first(arglist__7056);
var y = cljs.core.first(cljs.core.next(arglist__7056));
var more = cljs.core.rest(cljs.core.next(arglist__7056));
return G__7055__delegate.call(this, x, y, more);
});
return G__7055;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7050.call(this);
case  1 :
return _STAR___7051.call(this,x);
case  2 :
return _STAR___7052.call(this,x,y);
default:
return _STAR___7053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7053.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___7057 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7058 = (function (x,y){
return (x / y);
});
var _SLASH___7059 = (function() { 
var G__7061__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7061 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7061__delegate.call(this, x, y, more);
};
G__7061.cljs$lang$maxFixedArity = 2;
G__7061.cljs$lang$applyTo = (function (arglist__7062){
var x = cljs.core.first(arglist__7062);
var y = cljs.core.first(cljs.core.next(arglist__7062));
var more = cljs.core.rest(cljs.core.next(arglist__7062));
return G__7061__delegate.call(this, x, y, more);
});
return G__7061;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7057.call(this,x);
case  2 :
return _SLASH___7058.call(this,x,y);
default:
return _SLASH___7059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7059.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___7063 = (function (x){
return true;
});
var _LT___7064 = (function (x,y){
return (x < y);
});
var _LT___7065 = (function() { 
var G__7067__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7068 = y;
var G__7069 = cljs.core.first.call(null,more);
var G__7070 = cljs.core.next.call(null,more);
x = G__7068;
y = G__7069;
more = G__7070;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7067 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7067__delegate.call(this, x, y, more);
};
G__7067.cljs$lang$maxFixedArity = 2;
G__7067.cljs$lang$applyTo = (function (arglist__7071){
var x = cljs.core.first(arglist__7071);
var y = cljs.core.first(cljs.core.next(arglist__7071));
var more = cljs.core.rest(cljs.core.next(arglist__7071));
return G__7067__delegate.call(this, x, y, more);
});
return G__7067;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7063.call(this,x);
case  2 :
return _LT___7064.call(this,x,y);
default:
return _LT___7065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7065.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___7072 = (function (x){
return true;
});
var _LT__EQ___7073 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7074 = (function() { 
var G__7076__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7077 = y;
var G__7078 = cljs.core.first.call(null,more);
var G__7079 = cljs.core.next.call(null,more);
x = G__7077;
y = G__7078;
more = G__7079;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7076 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7076__delegate.call(this, x, y, more);
};
G__7076.cljs$lang$maxFixedArity = 2;
G__7076.cljs$lang$applyTo = (function (arglist__7080){
var x = cljs.core.first(arglist__7080);
var y = cljs.core.first(cljs.core.next(arglist__7080));
var more = cljs.core.rest(cljs.core.next(arglist__7080));
return G__7076__delegate.call(this, x, y, more);
});
return G__7076;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7072.call(this,x);
case  2 :
return _LT__EQ___7073.call(this,x,y);
default:
return _LT__EQ___7074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7074.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___7081 = (function (x){
return true;
});
var _GT___7082 = (function (x,y){
return (x > y);
});
var _GT___7083 = (function() { 
var G__7085__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7086 = y;
var G__7087 = cljs.core.first.call(null,more);
var G__7088 = cljs.core.next.call(null,more);
x = G__7086;
y = G__7087;
more = G__7088;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7085 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7085__delegate.call(this, x, y, more);
};
G__7085.cljs$lang$maxFixedArity = 2;
G__7085.cljs$lang$applyTo = (function (arglist__7089){
var x = cljs.core.first(arglist__7089);
var y = cljs.core.first(cljs.core.next(arglist__7089));
var more = cljs.core.rest(cljs.core.next(arglist__7089));
return G__7085__delegate.call(this, x, y, more);
});
return G__7085;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7081.call(this,x);
case  2 :
return _GT___7082.call(this,x,y);
default:
return _GT___7083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7083.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___7090 = (function (x){
return true;
});
var _GT__EQ___7091 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7092 = (function() { 
var G__7094__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7095 = y;
var G__7096 = cljs.core.first.call(null,more);
var G__7097 = cljs.core.next.call(null,more);
x = G__7095;
y = G__7096;
more = G__7097;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7094 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7094__delegate.call(this, x, y, more);
};
G__7094.cljs$lang$maxFixedArity = 2;
G__7094.cljs$lang$applyTo = (function (arglist__7098){
var x = cljs.core.first(arglist__7098);
var y = cljs.core.first(cljs.core.next(arglist__7098));
var more = cljs.core.rest(cljs.core.next(arglist__7098));
return G__7094__delegate.call(this, x, y, more);
});
return G__7094;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7090.call(this,x);
case  2 :
return _GT__EQ___7091.call(this,x,y);
default:
return _GT__EQ___7092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7092.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__7099 = (function (x){
return x;
});
var max__7100 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7101 = (function() { 
var G__7103__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7103 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7103__delegate.call(this, x, y, more);
};
G__7103.cljs$lang$maxFixedArity = 2;
G__7103.cljs$lang$applyTo = (function (arglist__7104){
var x = cljs.core.first(arglist__7104);
var y = cljs.core.first(cljs.core.next(arglist__7104));
var more = cljs.core.rest(cljs.core.next(arglist__7104));
return G__7103__delegate.call(this, x, y, more);
});
return G__7103;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7099.call(this,x);
case  2 :
return max__7100.call(this,x,y);
default:
return max__7101.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7101.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7105 = (function (x){
return x;
});
var min__7106 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7107 = (function() { 
var G__7109__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7109 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7109__delegate.call(this, x, y, more);
};
G__7109.cljs$lang$maxFixedArity = 2;
G__7109.cljs$lang$applyTo = (function (arglist__7110){
var x = cljs.core.first(arglist__7110);
var y = cljs.core.first(cljs.core.next(arglist__7110));
var more = cljs.core.rest(cljs.core.next(arglist__7110));
return G__7109__delegate.call(this, x, y, more);
});
return G__7109;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7105.call(this,x);
case  2 :
return min__7106.call(this,x,y);
default:
return min__7107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7107.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7111 = (n % d);

return cljs.core.fix.call(null,((n - rem__7111) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7112 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7112));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7113 = (function (){
return Math.random.call(null);
});
var rand__7114 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7113.call(this);
case  1 :
return rand__7114.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___7116 = (function (x){
return true;
});
var _EQ__EQ___7117 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7118 = (function() { 
var G__7120__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7121 = y;
var G__7122 = cljs.core.first.call(null,more);
var G__7123 = cljs.core.next.call(null,more);
x = G__7121;
y = G__7122;
more = G__7123;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7120 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7120__delegate.call(this, x, y, more);
};
G__7120.cljs$lang$maxFixedArity = 2;
G__7120.cljs$lang$applyTo = (function (arglist__7124){
var x = cljs.core.first(arglist__7124);
var y = cljs.core.first(cljs.core.next(arglist__7124));
var more = cljs.core.rest(cljs.core.next(arglist__7124));
return G__7120__delegate.call(this, x, y, more);
});
return G__7120;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7116.call(this,x);
case  2 :
return _EQ__EQ___7117.call(this,x,y);
default:
return _EQ__EQ___7118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7118.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7125 = n;
var xs__7126 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7127 = xs__7126;

if(cljs.core.truth_(and__3546__auto____7127))
{return (n__7125 > 0);
} else
{return and__3546__auto____7127;
}
})()))
{{
var G__7128 = (n__7125 - 1);
var G__7129 = cljs.core.next.call(null,xs__7126);
n__7125 = G__7128;
xs__7126 = G__7129;
continue;
}
} else
{return xs__7126;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__7134 = null;
var G__7134__7135 = (function (coll,n){
var temp__3695__auto____7130 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7130))
{var xs__7131 = temp__3695__auto____7130;

return cljs.core.first.call(null,xs__7131);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__7134__7136 = (function (coll,n,not_found){
var temp__3695__auto____7132 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7132))
{var xs__7133 = temp__3695__auto____7132;

return cljs.core.first.call(null,xs__7133);
} else
{return not_found;
}
});
G__7134 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7134__7135.call(this,coll,n);
case  3 :
return G__7134__7136.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7134;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___7138 = (function (){
return "";
});
var str_STAR___7139 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___7140 = (function() { 
var G__7142__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7143 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7144 = cljs.core.next.call(null,more);
sb = G__7143;
more = G__7144;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7142 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7142__delegate.call(this, x, ys);
};
G__7142.cljs$lang$maxFixedArity = 1;
G__7142.cljs$lang$applyTo = (function (arglist__7145){
var x = cljs.core.first(arglist__7145);
var ys = cljs.core.rest(arglist__7145);
return G__7142__delegate.call(this, x, ys);
});
return G__7142;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___7138.call(this);
case  1 :
return str_STAR___7139.call(this,x);
default:
return str_STAR___7140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___7140.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__7146 = (function (){
return "";
});
var str__7147 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__7148 = (function() { 
var G__7150__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__7150 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7150__delegate.call(this, x, ys);
};
G__7150.cljs$lang$maxFixedArity = 1;
G__7150.cljs$lang$applyTo = (function (arglist__7151){
var x = cljs.core.first(arglist__7151);
var ys = cljs.core.rest(arglist__7151);
return G__7150__delegate.call(this, x, ys);
});
return G__7150;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__7146.call(this);
case  1 :
return str__7147.call(this,x);
default:
return str__7148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__7148.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__7152 = (function (s,start){
return s.substring(start);
});
var subs__7153 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__7152.call(this,s,start);
case  3 :
return subs__7153.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__7155 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__7156 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__7155.call(this,ns);
case  2 :
return symbol__7156.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__7158 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__7159 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__7158.call(this,ns);
case  2 :
return keyword__7159.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7161 = cljs.core.seq.call(null,x);
var ys__7162 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__7161 === null)))
{return (ys__7162 === null);
} else
{if(cljs.core.truth_((ys__7162 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7161),cljs.core.first.call(null,ys__7162))))
{{
var G__7163 = cljs.core.next.call(null,xs__7161);
var G__7164 = cljs.core.next.call(null,ys__7162);
xs__7161 = G__7163;
ys__7162 = G__7164;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7165_SHARP_,p2__7166_SHARP_){
return cljs.core.hash_combine.call(null,p1__7165_SHARP_,cljs.core.hash.call(null,p2__7166_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7167__7168 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__7167__7168))
{var G__7170__7172 = cljs.core.first.call(null,G__7167__7168);
var vec__7171__7173 = G__7170__7172;
var key_name__7174 = cljs.core.nth.call(null,vec__7171__7173,0,null);
var f__7175 = cljs.core.nth.call(null,vec__7171__7173,1,null);
var G__7167__7176 = G__7167__7168;

var G__7170__7177 = G__7170__7172;
var G__7167__7178 = G__7167__7176;

while(true){
var vec__7179__7180 = G__7170__7177;
var key_name__7181 = cljs.core.nth.call(null,vec__7179__7180,0,null);
var f__7182 = cljs.core.nth.call(null,vec__7179__7180,1,null);
var G__7167__7183 = G__7167__7178;

var str_name__7184 = cljs.core.name.call(null,key_name__7181);

obj[str_name__7184] = f__7182;
var temp__3698__auto____7185 = cljs.core.next.call(null,G__7167__7183);

if(cljs.core.truth_(temp__3698__auto____7185))
{var G__7167__7186 = temp__3698__auto____7185;

{
var G__7187 = cljs.core.first.call(null,G__7167__7186);
var G__7188 = G__7167__7186;
G__7170__7177 = G__7187;
G__7167__7178 = G__7188;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7189 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7190 = this;
return (new cljs.core.List(this__7190.meta,o,coll,(this__7190.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7191 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7192 = this;
return this__7192.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7193 = this;
return this__7193.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7194 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7195 = this;
return this__7195.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7196 = this;
return this__7196.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7197 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7198 = this;
return (new cljs.core.List(meta,this__7198.first,this__7198.rest,this__7198.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7199 = this;
return this__7199.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7200 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7201 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7202 = this;
return (new cljs.core.List(this__7202.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7203 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7204 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7205 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7206 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7207 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7208 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7209 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7210 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7211 = this;
return this__7211.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7212 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__7213){
var items = cljs.core.seq( arglist__7213 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7214 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7215 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7216 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7217 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7217.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7218 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7219 = this;
return this__7219.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7220 = this;
if(cljs.core.truth_((this__7220.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__7220.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7221 = this;
return this__7221.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7222 = this;
return (new cljs.core.Cons(meta,this__7222.first,this__7222.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7223 = null;
var G__7223__7224 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7223__7225 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7223 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__7223__7224.call(this,string,f);
case  3 :
return G__7223__7225.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7223;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7227 = null;
var G__7227__7228 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7227__7229 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7227 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__7227__7228.call(this,string,k);
case  3 :
return G__7227__7229.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7227;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7231 = null;
var G__7231__7232 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__7231__7233 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7231 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__7231__7232.call(this,string,n);
case  3 :
return G__7231__7233.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7231;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7241 = null;
var G__7241__7242 = (function (tsym7235,coll){
var tsym7235__7237 = this;

var this$__7238 = tsym7235__7237;

return cljs.core.get.call(null,coll,this$__7238.toString());
});
var G__7241__7243 = (function (tsym7236,coll,not_found){
var tsym7236__7239 = this;

var this$__7240 = tsym7236__7239;

return cljs.core.get.call(null,coll,this$__7240.toString(),not_found);
});
G__7241 = function(tsym7236,coll,not_found){
switch(arguments.length){
case  2 :
return G__7241__7242.call(this,tsym7236,coll);
case  3 :
return G__7241__7243.call(this,tsym7236,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7241;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7245 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__7245;
} else
{lazy_seq.x = x__7245.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7246 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7247 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7248 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7249 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7249.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7250 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7251 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7252 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7253 = this;
return this__7253.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7254 = this;
return (new cljs.core.LazySeq(meta,this__7254.realized,this__7254.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7255 = cljs.core.array.call(null);

var s__7256 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__7256)))
{ary__7255.push(cljs.core.first.call(null,s__7256));
{
var G__7257 = cljs.core.next.call(null,s__7256);
s__7256 = G__7257;
continue;
}
} else
{return ary__7255;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__7258 = s;
var i__7259 = n;
var sum__7260 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7261 = (i__7259 > 0);

if(cljs.core.truth_(and__3546__auto____7261))
{return cljs.core.seq.call(null,s__7258);
} else
{return and__3546__auto____7261;
}
})()))
{{
var G__7262 = cljs.core.next.call(null,s__7258);
var G__7263 = (i__7259 - 1);
var G__7264 = (sum__7260 + 1);
s__7258 = G__7262;
i__7259 = G__7263;
sum__7260 = G__7264;
continue;
}
} else
{return sum__7260;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__7268 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__7269 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__7270 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7265 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__7265))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7265),concat.call(null,cljs.core.rest.call(null,s__7265),y));
} else
{return y;
}
})));
});
var concat__7271 = (function() { 
var G__7273__delegate = function (x,y,zs){
var cat__7267 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7266 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__7266))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7266),cat.call(null,cljs.core.rest.call(null,xys__7266),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__7267.call(null,concat.call(null,x,y),zs);
};
var G__7273 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7273__delegate.call(this, x, y, zs);
};
G__7273.cljs$lang$maxFixedArity = 2;
G__7273.cljs$lang$applyTo = (function (arglist__7274){
var x = cljs.core.first(arglist__7274);
var y = cljs.core.first(cljs.core.next(arglist__7274));
var zs = cljs.core.rest(cljs.core.next(arglist__7274));
return G__7273__delegate.call(this, x, y, zs);
});
return G__7273;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__7268.call(this);
case  1 :
return concat__7269.call(this,x);
case  2 :
return concat__7270.call(this,x,y);
default:
return concat__7271.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__7271.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___7275 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___7276 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___7277 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___7278 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___7279 = (function() { 
var G__7281__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7281 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7281__delegate.call(this, a, b, c, d, more);
};
G__7281.cljs$lang$maxFixedArity = 4;
G__7281.cljs$lang$applyTo = (function (arglist__7282){
var a = cljs.core.first(arglist__7282);
var b = cljs.core.first(cljs.core.next(arglist__7282));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7282)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7282))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7282))));
return G__7281__delegate.call(this, a, b, c, d, more);
});
return G__7281;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___7275.call(this,a);
case  2 :
return list_STAR___7276.call(this,a,b);
case  3 :
return list_STAR___7277.call(this,a,b,c);
case  4 :
return list_STAR___7278.call(this,a,b,c,d);
default:
return list_STAR___7279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___7279.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__7292 = (function (f,args){
var fixed_arity__7283 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__7283 + 1)) <= fixed_arity__7283)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__7293 = (function (f,x,args){
var arglist__7284 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7285 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7284,fixed_arity__7285) <= fixed_arity__7285)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7284));
} else
{return f.cljs$lang$applyTo(arglist__7284);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7284));
}
});
var apply__7294 = (function (f,x,y,args){
var arglist__7286 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7287 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7286,fixed_arity__7287) <= fixed_arity__7287)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7286));
} else
{return f.cljs$lang$applyTo(arglist__7286);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7286));
}
});
var apply__7295 = (function (f,x,y,z,args){
var arglist__7288 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7289 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7288,fixed_arity__7289) <= fixed_arity__7289)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7288));
} else
{return f.cljs$lang$applyTo(arglist__7288);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7288));
}
});
var apply__7296 = (function() { 
var G__7298__delegate = function (f,a,b,c,d,args){
var arglist__7290 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7291 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__7290,fixed_arity__7291) <= fixed_arity__7291)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__7290));
} else
{return f.cljs$lang$applyTo(arglist__7290);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7290));
}
};
var G__7298 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7298__delegate.call(this, f, a, b, c, d, args);
};
G__7298.cljs$lang$maxFixedArity = 5;
G__7298.cljs$lang$applyTo = (function (arglist__7299){
var f = cljs.core.first(arglist__7299);
var a = cljs.core.first(cljs.core.next(arglist__7299));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7299)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7299))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7299)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7299)))));
return G__7298__delegate.call(this, f, a, b, c, d, args);
});
return G__7298;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__7292.call(this,f,a);
case  3 :
return apply__7293.call(this,f,a,b);
case  4 :
return apply__7294.call(this,f,a,b,c);
case  5 :
return apply__7295.call(this,f,a,b,c,d);
default:
return apply__7296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__7296.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7300){
var obj = cljs.core.first(arglist__7300);
var f = cljs.core.first(cljs.core.next(arglist__7300));
var args = cljs.core.rest(cljs.core.next(arglist__7300));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___7301 = (function (x){
return false;
});
var not_EQ___7302 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___7303 = (function() { 
var G__7305__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7305 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7305__delegate.call(this, x, y, more);
};
G__7305.cljs$lang$maxFixedArity = 2;
G__7305.cljs$lang$applyTo = (function (arglist__7306){
var x = cljs.core.first(arglist__7306);
var y = cljs.core.first(cljs.core.next(arglist__7306));
var more = cljs.core.rest(cljs.core.next(arglist__7306));
return G__7305__delegate.call(this, x, y, more);
});
return G__7305;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___7301.call(this,x);
case  2 :
return not_EQ___7302.call(this,x,y);
default:
return not_EQ___7303.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___7303.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7307 = pred;
var G__7308 = cljs.core.next.call(null,coll);
pred = G__7307;
coll = G__7308;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____7309 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____7309))
{return or__3548__auto____7309;
} else
{{
var G__7310 = pred;
var G__7311 = cljs.core.next.call(null,coll);
pred = G__7310;
coll = G__7311;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7312 = null;
var G__7312__7313 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7312__7314 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7312__7315 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7312__7316 = (function() { 
var G__7318__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7318 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7318__delegate.call(this, x, y, zs);
};
G__7318.cljs$lang$maxFixedArity = 2;
G__7318.cljs$lang$applyTo = (function (arglist__7319){
var x = cljs.core.first(arglist__7319);
var y = cljs.core.first(cljs.core.next(arglist__7319));
var zs = cljs.core.rest(cljs.core.next(arglist__7319));
return G__7318__delegate.call(this, x, y, zs);
});
return G__7318;
})()
;
G__7312 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__7312__7313.call(this);
case  1 :
return G__7312__7314.call(this,x);
case  2 :
return G__7312__7315.call(this,x,y);
default:
return G__7312__7316.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7312.cljs$lang$maxFixedArity = 2;
G__7312.cljs$lang$applyTo = G__7312__7316.cljs$lang$applyTo;
return G__7312;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7320__delegate = function (args){
return x;
};
var G__7320 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7320__delegate.call(this, args);
};
G__7320.cljs$lang$maxFixedArity = 0;
G__7320.cljs$lang$applyTo = (function (arglist__7321){
var args = cljs.core.seq( arglist__7321 );;
return G__7320__delegate.call(this, args);
});
return G__7320;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__7325 = (function (){
return cljs.core.identity;
});
var comp__7326 = (function (f){
return f;
});
var comp__7327 = (function (f,g){
return (function() {
var G__7331 = null;
var G__7331__7332 = (function (){
return f.call(null,g.call(null));
});
var G__7331__7333 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7331__7334 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7331__7335 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7331__7336 = (function() { 
var G__7338__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7338 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7338__delegate.call(this, x, y, z, args);
};
G__7338.cljs$lang$maxFixedArity = 3;
G__7338.cljs$lang$applyTo = (function (arglist__7339){
var x = cljs.core.first(arglist__7339);
var y = cljs.core.first(cljs.core.next(arglist__7339));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7339)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7339)));
return G__7338__delegate.call(this, x, y, z, args);
});
return G__7338;
})()
;
G__7331 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7331__7332.call(this);
case  1 :
return G__7331__7333.call(this,x);
case  2 :
return G__7331__7334.call(this,x,y);
case  3 :
return G__7331__7335.call(this,x,y,z);
default:
return G__7331__7336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7331.cljs$lang$maxFixedArity = 3;
G__7331.cljs$lang$applyTo = G__7331__7336.cljs$lang$applyTo;
return G__7331;
})()
});
var comp__7328 = (function (f,g,h){
return (function() {
var G__7340 = null;
var G__7340__7341 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7340__7342 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7340__7343 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7340__7344 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7340__7345 = (function() { 
var G__7347__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7347 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7347__delegate.call(this, x, y, z, args);
};
G__7347.cljs$lang$maxFixedArity = 3;
G__7347.cljs$lang$applyTo = (function (arglist__7348){
var x = cljs.core.first(arglist__7348);
var y = cljs.core.first(cljs.core.next(arglist__7348));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7348)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7348)));
return G__7347__delegate.call(this, x, y, z, args);
});
return G__7347;
})()
;
G__7340 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__7340__7341.call(this);
case  1 :
return G__7340__7342.call(this,x);
case  2 :
return G__7340__7343.call(this,x,y);
case  3 :
return G__7340__7344.call(this,x,y,z);
default:
return G__7340__7345.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7340.cljs$lang$maxFixedArity = 3;
G__7340.cljs$lang$applyTo = G__7340__7345.cljs$lang$applyTo;
return G__7340;
})()
});
var comp__7329 = (function() { 
var G__7349__delegate = function (f1,f2,f3,fs){
var fs__7322 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__7350__delegate = function (args){
var ret__7323 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7322),args);
var fs__7324 = cljs.core.next.call(null,fs__7322);

while(true){
if(cljs.core.truth_(fs__7324))
{{
var G__7351 = cljs.core.first.call(null,fs__7324).call(null,ret__7323);
var G__7352 = cljs.core.next.call(null,fs__7324);
ret__7323 = G__7351;
fs__7324 = G__7352;
continue;
}
} else
{return ret__7323;
}
break;
}
};
var G__7350 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7350__delegate.call(this, args);
};
G__7350.cljs$lang$maxFixedArity = 0;
G__7350.cljs$lang$applyTo = (function (arglist__7353){
var args = cljs.core.seq( arglist__7353 );;
return G__7350__delegate.call(this, args);
});
return G__7350;
})()
;
};
var G__7349 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7349__delegate.call(this, f1, f2, f3, fs);
};
G__7349.cljs$lang$maxFixedArity = 3;
G__7349.cljs$lang$applyTo = (function (arglist__7354){
var f1 = cljs.core.first(arglist__7354);
var f2 = cljs.core.first(cljs.core.next(arglist__7354));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7354)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7354)));
return G__7349__delegate.call(this, f1, f2, f3, fs);
});
return G__7349;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__7325.call(this);
case  1 :
return comp__7326.call(this,f1);
case  2 :
return comp__7327.call(this,f1,f2);
case  3 :
return comp__7328.call(this,f1,f2,f3);
default:
return comp__7329.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__7329.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__7355 = (function (f,arg1){
return (function() { 
var G__7360__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7360 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7360__delegate.call(this, args);
};
G__7360.cljs$lang$maxFixedArity = 0;
G__7360.cljs$lang$applyTo = (function (arglist__7361){
var args = cljs.core.seq( arglist__7361 );;
return G__7360__delegate.call(this, args);
});
return G__7360;
})()
;
});
var partial__7356 = (function (f,arg1,arg2){
return (function() { 
var G__7362__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7362 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7362__delegate.call(this, args);
};
G__7362.cljs$lang$maxFixedArity = 0;
G__7362.cljs$lang$applyTo = (function (arglist__7363){
var args = cljs.core.seq( arglist__7363 );;
return G__7362__delegate.call(this, args);
});
return G__7362;
})()
;
});
var partial__7357 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7364__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7364 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7364__delegate.call(this, args);
};
G__7364.cljs$lang$maxFixedArity = 0;
G__7364.cljs$lang$applyTo = (function (arglist__7365){
var args = cljs.core.seq( arglist__7365 );;
return G__7364__delegate.call(this, args);
});
return G__7364;
})()
;
});
var partial__7358 = (function() { 
var G__7366__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7367__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7367 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7367__delegate.call(this, args);
};
G__7367.cljs$lang$maxFixedArity = 0;
G__7367.cljs$lang$applyTo = (function (arglist__7368){
var args = cljs.core.seq( arglist__7368 );;
return G__7367__delegate.call(this, args);
});
return G__7367;
})()
;
};
var G__7366 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7366__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7366.cljs$lang$maxFixedArity = 4;
G__7366.cljs$lang$applyTo = (function (arglist__7369){
var f = cljs.core.first(arglist__7369);
var arg1 = cljs.core.first(cljs.core.next(arglist__7369));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7369)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7369))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7369))));
return G__7366__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__7366;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__7355.call(this,f,arg1);
case  3 :
return partial__7356.call(this,f,arg1,arg2);
case  4 :
return partial__7357.call(this,f,arg1,arg2,arg3);
default:
return partial__7358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__7358.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__7370 = (function (f,x){
return (function() {
var G__7374 = null;
var G__7374__7375 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__7374__7376 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__7374__7377 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__7374__7378 = (function() { 
var G__7380__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__7380 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7380__delegate.call(this, a, b, c, ds);
};
G__7380.cljs$lang$maxFixedArity = 3;
G__7380.cljs$lang$applyTo = (function (arglist__7381){
var a = cljs.core.first(arglist__7381);
var b = cljs.core.first(cljs.core.next(arglist__7381));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7381)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7381)));
return G__7380__delegate.call(this, a, b, c, ds);
});
return G__7380;
})()
;
G__7374 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__7374__7375.call(this,a);
case  2 :
return G__7374__7376.call(this,a,b);
case  3 :
return G__7374__7377.call(this,a,b,c);
default:
return G__7374__7378.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7374.cljs$lang$maxFixedArity = 3;
G__7374.cljs$lang$applyTo = G__7374__7378.cljs$lang$applyTo;
return G__7374;
})()
});
var fnil__7371 = (function (f,x,y){
return (function() {
var G__7382 = null;
var G__7382__7383 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7382__7384 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__7382__7385 = (function() { 
var G__7387__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__7387 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7387__delegate.call(this, a, b, c, ds);
};
G__7387.cljs$lang$maxFixedArity = 3;
G__7387.cljs$lang$applyTo = (function (arglist__7388){
var a = cljs.core.first(arglist__7388);
var b = cljs.core.first(cljs.core.next(arglist__7388));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7388)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7388)));
return G__7387__delegate.call(this, a, b, c, ds);
});
return G__7387;
})()
;
G__7382 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7382__7383.call(this,a,b);
case  3 :
return G__7382__7384.call(this,a,b,c);
default:
return G__7382__7385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7382.cljs$lang$maxFixedArity = 3;
G__7382.cljs$lang$applyTo = G__7382__7385.cljs$lang$applyTo;
return G__7382;
})()
});
var fnil__7372 = (function (f,x,y,z){
return (function() {
var G__7389 = null;
var G__7389__7390 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__7389__7391 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__7389__7392 = (function() { 
var G__7394__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__7394 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7394__delegate.call(this, a, b, c, ds);
};
G__7394.cljs$lang$maxFixedArity = 3;
G__7394.cljs$lang$applyTo = (function (arglist__7395){
var a = cljs.core.first(arglist__7395);
var b = cljs.core.first(cljs.core.next(arglist__7395));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7395)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7395)));
return G__7394__delegate.call(this, a, b, c, ds);
});
return G__7394;
})()
;
G__7389 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__7389__7390.call(this,a,b);
case  3 :
return G__7389__7391.call(this,a,b,c);
default:
return G__7389__7392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__7389.cljs$lang$maxFixedArity = 3;
G__7389.cljs$lang$applyTo = G__7389__7392.cljs$lang$applyTo;
return G__7389;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__7370.call(this,f,x);
case  3 :
return fnil__7371.call(this,f,x,y);
case  4 :
return fnil__7372.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7398 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7396 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7396))
{var s__7397 = temp__3698__auto____7396;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7397)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7397)));
} else
{return null;
}
})));
});

return mapi__7398.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7399 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7399))
{var s__7400 = temp__3698__auto____7399;

var x__7401 = f.call(null,cljs.core.first.call(null,s__7400));

if(cljs.core.truth_((x__7401 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__7400));
} else
{return cljs.core.cons.call(null,x__7401,keep.call(null,f,cljs.core.rest.call(null,s__7400)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7411 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7408 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7408))
{var s__7409 = temp__3698__auto____7408;

var x__7410 = f.call(null,idx,cljs.core.first.call(null,s__7409));

if(cljs.core.truth_((x__7410 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7409));
} else
{return cljs.core.cons.call(null,x__7410,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__7409)));
}
} else
{return null;
}
})));
});

return keepi__7411.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__7456 = (function (p){
return (function() {
var ep1 = null;
var ep1__7461 = (function (){
return true;
});
var ep1__7462 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__7463 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7418 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7418))
{return p.call(null,y);
} else
{return and__3546__auto____7418;
}
})());
});
var ep1__7464 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7419 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____7419))
{var and__3546__auto____7420 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____7420))
{return p.call(null,z);
} else
{return and__3546__auto____7420;
}
} else
{return and__3546__auto____7419;
}
})());
});
var ep1__7465 = (function() { 
var G__7467__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7421 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7421))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____7421;
}
})());
};
var G__7467 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7467__delegate.call(this, x, y, z, args);
};
G__7467.cljs$lang$maxFixedArity = 3;
G__7467.cljs$lang$applyTo = (function (arglist__7468){
var x = cljs.core.first(arglist__7468);
var y = cljs.core.first(cljs.core.next(arglist__7468));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7468)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7468)));
return G__7467__delegate.call(this, x, y, z, args);
});
return G__7467;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__7461.call(this);
case  1 :
return ep1__7462.call(this,x);
case  2 :
return ep1__7463.call(this,x,y);
case  3 :
return ep1__7464.call(this,x,y,z);
default:
return ep1__7465.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__7465.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__7457 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__7469 = (function (){
return true;
});
var ep2__7470 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7422 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7422))
{return p2.call(null,x);
} else
{return and__3546__auto____7422;
}
})());
});
var ep2__7471 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7423 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7423))
{var and__3546__auto____7424 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7424))
{var and__3546__auto____7425 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7425))
{return p2.call(null,y);
} else
{return and__3546__auto____7425;
}
} else
{return and__3546__auto____7424;
}
} else
{return and__3546__auto____7423;
}
})());
});
var ep2__7472 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7426 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7426))
{var and__3546__auto____7427 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7427))
{var and__3546__auto____7428 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7428))
{var and__3546__auto____7429 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7429))
{var and__3546__auto____7430 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7430))
{return p2.call(null,z);
} else
{return and__3546__auto____7430;
}
} else
{return and__3546__auto____7429;
}
} else
{return and__3546__auto____7428;
}
} else
{return and__3546__auto____7427;
}
} else
{return and__3546__auto____7426;
}
})());
});
var ep2__7473 = (function() { 
var G__7475__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7431 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7431))
{return cljs.core.every_QMARK_.call(null,(function (p1__7402_SHARP_){
var and__3546__auto____7432 = p1.call(null,p1__7402_SHARP_);

if(cljs.core.truth_(and__3546__auto____7432))
{return p2.call(null,p1__7402_SHARP_);
} else
{return and__3546__auto____7432;
}
}),args);
} else
{return and__3546__auto____7431;
}
})());
};
var G__7475 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7475__delegate.call(this, x, y, z, args);
};
G__7475.cljs$lang$maxFixedArity = 3;
G__7475.cljs$lang$applyTo = (function (arglist__7476){
var x = cljs.core.first(arglist__7476);
var y = cljs.core.first(cljs.core.next(arglist__7476));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7476)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7476)));
return G__7475__delegate.call(this, x, y, z, args);
});
return G__7475;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__7469.call(this);
case  1 :
return ep2__7470.call(this,x);
case  2 :
return ep2__7471.call(this,x,y);
case  3 :
return ep2__7472.call(this,x,y,z);
default:
return ep2__7473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__7473.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__7458 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__7477 = (function (){
return true;
});
var ep3__7478 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7433 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7433))
{var and__3546__auto____7434 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7434))
{return p3.call(null,x);
} else
{return and__3546__auto____7434;
}
} else
{return and__3546__auto____7433;
}
})());
});
var ep3__7479 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7435 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7435))
{var and__3546__auto____7436 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7436))
{var and__3546__auto____7437 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7437))
{var and__3546__auto____7438 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7438))
{var and__3546__auto____7439 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7439))
{return p3.call(null,y);
} else
{return and__3546__auto____7439;
}
} else
{return and__3546__auto____7438;
}
} else
{return and__3546__auto____7437;
}
} else
{return and__3546__auto____7436;
}
} else
{return and__3546__auto____7435;
}
})());
});
var ep3__7480 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7440 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____7440))
{var and__3546__auto____7441 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____7441))
{var and__3546__auto____7442 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____7442))
{var and__3546__auto____7443 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____7443))
{var and__3546__auto____7444 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____7444))
{var and__3546__auto____7445 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____7445))
{var and__3546__auto____7446 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____7446))
{var and__3546__auto____7447 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____7447))
{return p3.call(null,z);
} else
{return and__3546__auto____7447;
}
} else
{return and__3546__auto____7446;
}
} else
{return and__3546__auto____7445;
}
} else
{return and__3546__auto____7444;
}
} else
{return and__3546__auto____7443;
}
} else
{return and__3546__auto____7442;
}
} else
{return and__3546__auto____7441;
}
} else
{return and__3546__auto____7440;
}
})());
});
var ep3__7481 = (function() { 
var G__7483__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7448 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7448))
{return cljs.core.every_QMARK_.call(null,(function (p1__7403_SHARP_){
var and__3546__auto____7449 = p1.call(null,p1__7403_SHARP_);

if(cljs.core.truth_(and__3546__auto____7449))
{var and__3546__auto____7450 = p2.call(null,p1__7403_SHARP_);

if(cljs.core.truth_(and__3546__auto____7450))
{return p3.call(null,p1__7403_SHARP_);
} else
{return and__3546__auto____7450;
}
} else
{return and__3546__auto____7449;
}
}),args);
} else
{return and__3546__auto____7448;
}
})());
};
var G__7483 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7483__delegate.call(this, x, y, z, args);
};
G__7483.cljs$lang$maxFixedArity = 3;
G__7483.cljs$lang$applyTo = (function (arglist__7484){
var x = cljs.core.first(arglist__7484);
var y = cljs.core.first(cljs.core.next(arglist__7484));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7484)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7484)));
return G__7483__delegate.call(this, x, y, z, args);
});
return G__7483;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__7477.call(this);
case  1 :
return ep3__7478.call(this,x);
case  2 :
return ep3__7479.call(this,x,y);
case  3 :
return ep3__7480.call(this,x,y,z);
default:
return ep3__7481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__7481.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__7459 = (function() { 
var G__7485__delegate = function (p1,p2,p3,ps){
var ps__7451 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__7486 = (function (){
return true;
});
var epn__7487 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7404_SHARP_){
return p1__7404_SHARP_.call(null,x);
}),ps__7451);
});
var epn__7488 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7405_SHARP_){
var and__3546__auto____7452 = p1__7405_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7452))
{return p1__7405_SHARP_.call(null,y);
} else
{return and__3546__auto____7452;
}
}),ps__7451);
});
var epn__7489 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7406_SHARP_){
var and__3546__auto____7453 = p1__7406_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____7453))
{var and__3546__auto____7454 = p1__7406_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____7454))
{return p1__7406_SHARP_.call(null,z);
} else
{return and__3546__auto____7454;
}
} else
{return and__3546__auto____7453;
}
}),ps__7451);
});
var epn__7490 = (function() { 
var G__7492__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____7455 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____7455))
{return cljs.core.every_QMARK_.call(null,(function (p1__7407_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7407_SHARP_,args);
}),ps__7451);
} else
{return and__3546__auto____7455;
}
})());
};
var G__7492 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7492__delegate.call(this, x, y, z, args);
};
G__7492.cljs$lang$maxFixedArity = 3;
G__7492.cljs$lang$applyTo = (function (arglist__7493){
var x = cljs.core.first(arglist__7493);
var y = cljs.core.first(cljs.core.next(arglist__7493));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7493)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7493)));
return G__7492__delegate.call(this, x, y, z, args);
});
return G__7492;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__7486.call(this);
case  1 :
return epn__7487.call(this,x);
case  2 :
return epn__7488.call(this,x,y);
case  3 :
return epn__7489.call(this,x,y,z);
default:
return epn__7490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__7490.cljs$lang$applyTo;
return epn;
})()
};
var G__7485 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7485__delegate.call(this, p1, p2, p3, ps);
};
G__7485.cljs$lang$maxFixedArity = 3;
G__7485.cljs$lang$applyTo = (function (arglist__7494){
var p1 = cljs.core.first(arglist__7494);
var p2 = cljs.core.first(cljs.core.next(arglist__7494));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7494)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7494)));
return G__7485__delegate.call(this, p1, p2, p3, ps);
});
return G__7485;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__7456.call(this,p1);
case  2 :
return every_pred__7457.call(this,p1,p2);
case  3 :
return every_pred__7458.call(this,p1,p2,p3);
default:
return every_pred__7459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__7459.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__7534 = (function (p){
return (function() {
var sp1 = null;
var sp1__7539 = (function (){
return null;
});
var sp1__7540 = (function (x){
return p.call(null,x);
});
var sp1__7541 = (function (x,y){
var or__3548__auto____7496 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{return p.call(null,y);
}
});
var sp1__7542 = (function (x,y,z){
var or__3548__auto____7497 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____7497))
{return or__3548__auto____7497;
} else
{var or__3548__auto____7498 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
} else
{return p.call(null,z);
}
}
});
var sp1__7543 = (function() { 
var G__7545__delegate = function (x,y,z,args){
var or__3548__auto____7499 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7545 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7545__delegate.call(this, x, y, z, args);
};
G__7545.cljs$lang$maxFixedArity = 3;
G__7545.cljs$lang$applyTo = (function (arglist__7546){
var x = cljs.core.first(arglist__7546);
var y = cljs.core.first(cljs.core.next(arglist__7546));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7546)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7546)));
return G__7545__delegate.call(this, x, y, z, args);
});
return G__7545;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__7539.call(this);
case  1 :
return sp1__7540.call(this,x);
case  2 :
return sp1__7541.call(this,x,y);
case  3 :
return sp1__7542.call(this,x,y,z);
default:
return sp1__7543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__7543.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__7535 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__7547 = (function (){
return null;
});
var sp2__7548 = (function (x){
var or__3548__auto____7500 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7500))
{return or__3548__auto____7500;
} else
{return p2.call(null,x);
}
});
var sp2__7549 = (function (x,y){
var or__3548__auto____7501 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
} else
{var or__3548__auto____7502 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{var or__3548__auto____7503 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7503))
{return or__3548__auto____7503;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__7550 = (function (x,y,z){
var or__3548__auto____7504 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7504))
{return or__3548__auto____7504;
} else
{var or__3548__auto____7505 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
} else
{var or__3548__auto____7506 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7506))
{return or__3548__auto____7506;
} else
{var or__3548__auto____7507 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{var or__3548__auto____7508 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__7551 = (function() { 
var G__7553__delegate = function (x,y,z,args){
var or__3548__auto____7509 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7509))
{return or__3548__auto____7509;
} else
{return cljs.core.some.call(null,(function (p1__7412_SHARP_){
var or__3548__auto____7510 = p1.call(null,p1__7412_SHARP_);

if(cljs.core.truth_(or__3548__auto____7510))
{return or__3548__auto____7510;
} else
{return p2.call(null,p1__7412_SHARP_);
}
}),args);
}
};
var G__7553 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7553__delegate.call(this, x, y, z, args);
};
G__7553.cljs$lang$maxFixedArity = 3;
G__7553.cljs$lang$applyTo = (function (arglist__7554){
var x = cljs.core.first(arglist__7554);
var y = cljs.core.first(cljs.core.next(arglist__7554));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7554)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7554)));
return G__7553__delegate.call(this, x, y, z, args);
});
return G__7553;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__7547.call(this);
case  1 :
return sp2__7548.call(this,x);
case  2 :
return sp2__7549.call(this,x,y);
case  3 :
return sp2__7550.call(this,x,y,z);
default:
return sp2__7551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__7551.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__7536 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__7555 = (function (){
return null;
});
var sp3__7556 = (function (x){
var or__3548__auto____7511 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7511))
{return or__3548__auto____7511;
} else
{var or__3548__auto____7512 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7512))
{return or__3548__auto____7512;
} else
{return p3.call(null,x);
}
}
});
var sp3__7557 = (function (x,y){
var or__3548__auto____7513 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{var or__3548__auto____7514 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7514))
{return or__3548__auto____7514;
} else
{var or__3548__auto____7515 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7515))
{return or__3548__auto____7515;
} else
{var or__3548__auto____7516 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{var or__3548__auto____7517 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__7558 = (function (x,y,z){
var or__3548__auto____7518 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____7518))
{return or__3548__auto____7518;
} else
{var or__3548__auto____7519 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
} else
{var or__3548__auto____7520 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____7520))
{return or__3548__auto____7520;
} else
{var or__3548__auto____7521 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____7521))
{return or__3548__auto____7521;
} else
{var or__3548__auto____7522 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____7522))
{return or__3548__auto____7522;
} else
{var or__3548__auto____7523 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____7523))
{return or__3548__auto____7523;
} else
{var or__3548__auto____7524 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____7524))
{return or__3548__auto____7524;
} else
{var or__3548__auto____7525 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____7525))
{return or__3548__auto____7525;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__7559 = (function() { 
var G__7561__delegate = function (x,y,z,args){
var or__3548__auto____7526 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7526))
{return or__3548__auto____7526;
} else
{return cljs.core.some.call(null,(function (p1__7413_SHARP_){
var or__3548__auto____7527 = p1.call(null,p1__7413_SHARP_);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{var or__3548__auto____7528 = p2.call(null,p1__7413_SHARP_);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{return p3.call(null,p1__7413_SHARP_);
}
}
}),args);
}
};
var G__7561 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7561__delegate.call(this, x, y, z, args);
};
G__7561.cljs$lang$maxFixedArity = 3;
G__7561.cljs$lang$applyTo = (function (arglist__7562){
var x = cljs.core.first(arglist__7562);
var y = cljs.core.first(cljs.core.next(arglist__7562));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7562)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7562)));
return G__7561__delegate.call(this, x, y, z, args);
});
return G__7561;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__7555.call(this);
case  1 :
return sp3__7556.call(this,x);
case  2 :
return sp3__7557.call(this,x,y);
case  3 :
return sp3__7558.call(this,x,y,z);
default:
return sp3__7559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__7559.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__7537 = (function() { 
var G__7563__delegate = function (p1,p2,p3,ps){
var ps__7529 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__7564 = (function (){
return null;
});
var spn__7565 = (function (x){
return cljs.core.some.call(null,(function (p1__7414_SHARP_){
return p1__7414_SHARP_.call(null,x);
}),ps__7529);
});
var spn__7566 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7415_SHARP_){
var or__3548__auto____7530 = p1__7415_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{return p1__7415_SHARP_.call(null,y);
}
}),ps__7529);
});
var spn__7567 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7416_SHARP_){
var or__3548__auto____7531 = p1__7416_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{var or__3548__auto____7532 = p1__7416_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{return p1__7416_SHARP_.call(null,z);
}
}
}),ps__7529);
});
var spn__7568 = (function() { 
var G__7570__delegate = function (x,y,z,args){
var or__3548__auto____7533 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{return cljs.core.some.call(null,(function (p1__7417_SHARP_){
return cljs.core.some.call(null,p1__7417_SHARP_,args);
}),ps__7529);
}
};
var G__7570 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7570__delegate.call(this, x, y, z, args);
};
G__7570.cljs$lang$maxFixedArity = 3;
G__7570.cljs$lang$applyTo = (function (arglist__7571){
var x = cljs.core.first(arglist__7571);
var y = cljs.core.first(cljs.core.next(arglist__7571));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7571)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7571)));
return G__7570__delegate.call(this, x, y, z, args);
});
return G__7570;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__7564.call(this);
case  1 :
return spn__7565.call(this,x);
case  2 :
return spn__7566.call(this,x,y);
case  3 :
return spn__7567.call(this,x,y,z);
default:
return spn__7568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__7568.cljs$lang$applyTo;
return spn;
})()
};
var G__7563 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7563__delegate.call(this, p1, p2, p3, ps);
};
G__7563.cljs$lang$maxFixedArity = 3;
G__7563.cljs$lang$applyTo = (function (arglist__7572){
var p1 = cljs.core.first(arglist__7572);
var p2 = cljs.core.first(cljs.core.next(arglist__7572));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7572)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7572)));
return G__7563__delegate.call(this, p1, p2, p3, ps);
});
return G__7563;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__7534.call(this,p1);
case  2 :
return some_fn__7535.call(this,p1,p2);
case  3 :
return some_fn__7536.call(this,p1,p2,p3);
default:
return some_fn__7537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__7537.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__7585 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7573 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7573))
{var s__7574 = temp__3698__auto____7573;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7574)),map.call(null,f,cljs.core.rest.call(null,s__7574)));
} else
{return null;
}
})));
});
var map__7586 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7575 = cljs.core.seq.call(null,c1);
var s2__7576 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____7577 = s1__7575;

if(cljs.core.truth_(and__3546__auto____7577))
{return s2__7576;
} else
{return and__3546__auto____7577;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7575),cljs.core.first.call(null,s2__7576)),map.call(null,f,cljs.core.rest.call(null,s1__7575),cljs.core.rest.call(null,s2__7576)));
} else
{return null;
}
})));
});
var map__7587 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7578 = cljs.core.seq.call(null,c1);
var s2__7579 = cljs.core.seq.call(null,c2);
var s3__7580 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____7581 = s1__7578;

if(cljs.core.truth_(and__3546__auto____7581))
{var and__3546__auto____7582 = s2__7579;

if(cljs.core.truth_(and__3546__auto____7582))
{return s3__7580;
} else
{return and__3546__auto____7582;
}
} else
{return and__3546__auto____7581;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7578),cljs.core.first.call(null,s2__7579),cljs.core.first.call(null,s3__7580)),map.call(null,f,cljs.core.rest.call(null,s1__7578),cljs.core.rest.call(null,s2__7579),cljs.core.rest.call(null,s3__7580)));
} else
{return null;
}
})));
});
var map__7588 = (function() { 
var G__7590__delegate = function (f,c1,c2,c3,colls){
var step__7584 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7583 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7583)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7583),step.call(null,map.call(null,cljs.core.rest,ss__7583)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__7495_SHARP_){
return cljs.core.apply.call(null,f,p1__7495_SHARP_);
}),step__7584.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7590 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7590__delegate.call(this, f, c1, c2, c3, colls);
};
G__7590.cljs$lang$maxFixedArity = 4;
G__7590.cljs$lang$applyTo = (function (arglist__7591){
var f = cljs.core.first(arglist__7591);
var c1 = cljs.core.first(cljs.core.next(arglist__7591));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7591)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7591))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7591))));
return G__7590__delegate.call(this, f, c1, c2, c3, colls);
});
return G__7590;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__7585.call(this,f,c1);
case  3 :
return map__7586.call(this,f,c1,c2);
case  4 :
return map__7587.call(this,f,c1,c2,c3);
default:
return map__7588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__7588.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____7592 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7592))
{var s__7593 = temp__3698__auto____7592;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__7593),take.call(null,(n - 1),cljs.core.rest.call(null,s__7593)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7596 = (function (n,coll){
while(true){
var s__7594 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____7595 = (n > 0);

if(cljs.core.truth_(and__3546__auto____7595))
{return s__7594;
} else
{return and__3546__auto____7595;
}
})()))
{{
var G__7597 = (n - 1);
var G__7598 = cljs.core.rest.call(null,s__7594);
n = G__7597;
coll = G__7598;
continue;
}
} else
{return s__7594;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__7596.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__7599 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__7600 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__7599.call(this,n);
case  2 :
return drop_last__7600.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7602 = cljs.core.seq.call(null,coll);
var lead__7603 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__7603))
{{
var G__7604 = cljs.core.next.call(null,s__7602);
var G__7605 = cljs.core.next.call(null,lead__7603);
s__7602 = G__7604;
lead__7603 = G__7605;
continue;
}
} else
{return s__7602;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7608 = (function (pred,coll){
while(true){
var s__7606 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____7607 = s__7606;

if(cljs.core.truth_(and__3546__auto____7607))
{return pred.call(null,cljs.core.first.call(null,s__7606));
} else
{return and__3546__auto____7607;
}
})()))
{{
var G__7609 = pred;
var G__7610 = cljs.core.rest.call(null,s__7606);
pred = G__7609;
coll = G__7610;
continue;
}
} else
{return s__7606;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__7608.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7611 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7611))
{var s__7612 = temp__3698__auto____7611;

return cljs.core.concat.call(null,s__7612,cycle.call(null,s__7612));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__7613 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__7614 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__7613.call(this,n);
case  2 :
return repeat__7614.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__7616 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__7617 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__7616.call(this,n);
case  2 :
return repeatedly__7617.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__7623 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7619 = cljs.core.seq.call(null,c1);
var s2__7620 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____7621 = s1__7619;

if(cljs.core.truth_(and__3546__auto____7621))
{return s2__7620;
} else
{return and__3546__auto____7621;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7619),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7620),interleave.call(null,cljs.core.rest.call(null,s1__7619),cljs.core.rest.call(null,s2__7620))));
} else
{return null;
}
})));
});
var interleave__7624 = (function() { 
var G__7626__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7622 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7622)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7622),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7622)));
} else
{return null;
}
})));
};
var G__7626 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7626__delegate.call(this, c1, c2, colls);
};
G__7626.cljs$lang$maxFixedArity = 2;
G__7626.cljs$lang$applyTo = (function (arglist__7627){
var c1 = cljs.core.first(arglist__7627);
var c2 = cljs.core.first(cljs.core.next(arglist__7627));
var colls = cljs.core.rest(cljs.core.next(arglist__7627));
return G__7626__delegate.call(this, c1, c2, colls);
});
return G__7626;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__7623.call(this,c1,c2);
default:
return interleave__7624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__7624.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7630 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____7628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7628))
{var coll__7629 = temp__3695__auto____7628;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7629),cat.call(null,cljs.core.rest.call(null,coll__7629),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__7630.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__7631 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__7632 = (function() { 
var G__7634__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7634 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7634__delegate.call(this, f, coll, colls);
};
G__7634.cljs$lang$maxFixedArity = 2;
G__7634.cljs$lang$applyTo = (function (arglist__7635){
var f = cljs.core.first(arglist__7635);
var coll = cljs.core.first(cljs.core.next(arglist__7635));
var colls = cljs.core.rest(cljs.core.next(arglist__7635));
return G__7634__delegate.call(this, f, coll, colls);
});
return G__7634;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__7631.call(this,f,coll);
default:
return mapcat__7632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__7632.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7636 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7636))
{var s__7637 = temp__3698__auto____7636;

var f__7638 = cljs.core.first.call(null,s__7637);
var r__7639 = cljs.core.rest.call(null,s__7637);

if(cljs.core.truth_(pred.call(null,f__7638)))
{return cljs.core.cons.call(null,f__7638,filter.call(null,pred,r__7639));
} else
{return filter.call(null,pred,r__7639);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7641 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__7641.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7640_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__7640_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__7648 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__7649 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7642 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7642))
{var s__7643 = temp__3698__auto____7642;

var p__7644 = cljs.core.take.call(null,n,s__7643);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__7644))))
{return cljs.core.cons.call(null,p__7644,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7643)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__7650 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7645 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7645))
{var s__7646 = temp__3698__auto____7645;

var p__7647 = cljs.core.take.call(null,n,s__7646);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__7647))))
{return cljs.core.cons.call(null,p__7647,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7646)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7647,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__7648.call(this,n,step);
case  3 :
return partition__7649.call(this,n,step,pad);
case  4 :
return partition__7650.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__7656 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__7657 = (function (m,ks,not_found){
var sentinel__7652 = cljs.core.lookup_sentinel;
var m__7653 = m;
var ks__7654 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__7654))
{var m__7655 = cljs.core.get.call(null,m__7653,cljs.core.first.call(null,ks__7654),sentinel__7652);

if(cljs.core.truth_((sentinel__7652 === m__7655)))
{return not_found;
} else
{{
var G__7659 = sentinel__7652;
var G__7660 = m__7655;
var G__7661 = cljs.core.next.call(null,ks__7654);
sentinel__7652 = G__7659;
m__7653 = G__7660;
ks__7654 = G__7661;
continue;
}
}
} else
{return m__7653;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__7656.call(this,m,ks);
case  3 :
return get_in__7657.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7662,v){
var vec__7663__7664 = p__7662;
var k__7665 = cljs.core.nth.call(null,vec__7663__7664,0,null);
var ks__7666 = cljs.core.nthnext.call(null,vec__7663__7664,1);

if(cljs.core.truth_(ks__7666))
{return cljs.core.assoc.call(null,m,k__7665,assoc_in.call(null,cljs.core.get.call(null,m,k__7665),ks__7666,v));
} else
{return cljs.core.assoc.call(null,m,k__7665,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7667,f,args){
var vec__7668__7669 = p__7667;
var k__7670 = cljs.core.nth.call(null,vec__7668__7669,0,null);
var ks__7671 = cljs.core.nthnext.call(null,vec__7668__7669,1);

if(cljs.core.truth_(ks__7671))
{return cljs.core.assoc.call(null,m,k__7670,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__7670),ks__7671,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7670,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__7670),args));
}
};
var update_in = function (m,p__7667,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7667, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7672){
var m = cljs.core.first(arglist__7672);
var p__7667 = cljs.core.first(cljs.core.next(arglist__7672));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7672)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7672)));
return update_in__delegate.call(this, m, p__7667, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7673 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7706 = null;
var G__7706__7707 = (function (coll,k){
var this__7674 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__7706__7708 = (function (coll,k,not_found){
var this__7675 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__7706 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7706__7707.call(this,coll,k);
case  3 :
return G__7706__7708.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7706;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7676 = this;
var new_array__7677 = cljs.core.aclone.call(null,this__7676.array);

(new_array__7677[k] = v);
return (new cljs.core.Vector(this__7676.meta,new_array__7677));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__7710 = null;
var G__7710__7711 = (function (tsym7678,k){
var this__7680 = this;
var tsym7678__7681 = this;

var coll__7682 = tsym7678__7681;

return cljs.core._lookup.call(null,coll__7682,k);
});
var G__7710__7712 = (function (tsym7679,k,not_found){
var this__7683 = this;
var tsym7679__7684 = this;

var coll__7685 = tsym7679__7684;

return cljs.core._lookup.call(null,coll__7685,k,not_found);
});
G__7710 = function(tsym7679,k,not_found){
switch(arguments.length){
case  2 :
return G__7710__7711.call(this,tsym7679,k);
case  3 :
return G__7710__7712.call(this,tsym7679,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7710;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7686 = this;
var new_array__7687 = cljs.core.aclone.call(null,this__7686.array);

new_array__7687.push(o);
return (new cljs.core.Vector(this__7686.meta,new_array__7687));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7714 = null;
var G__7714__7715 = (function (v,f){
var this__7688 = this;
return cljs.core.ci_reduce.call(null,this__7688.array,f);
});
var G__7714__7716 = (function (v,f,start){
var this__7689 = this;
return cljs.core.ci_reduce.call(null,this__7689.array,f,start);
});
G__7714 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__7714__7715.call(this,v,f);
case  3 :
return G__7714__7716.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7714;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7690 = this;
if(cljs.core.truth_((this__7690.array.length > 0)))
{var vector_seq__7691 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__7690.array.length)))
{return cljs.core.cons.call(null,(this__7690.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__7691.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7692 = this;
return this__7692.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7693 = this;
var count__7694 = this__7693.array.length;

if(cljs.core.truth_((count__7694 > 0)))
{return (this__7693.array[(count__7694 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7695 = this;
if(cljs.core.truth_((this__7695.array.length > 0)))
{var new_array__7696 = cljs.core.aclone.call(null,this__7695.array);

new_array__7696.pop();
return (new cljs.core.Vector(this__7695.meta,new_array__7696));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__7697 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7698 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7699 = this;
return (new cljs.core.Vector(meta,this__7699.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7700 = this;
return this__7700.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7718 = null;
var G__7718__7719 = (function (coll,n){
var this__7701 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7702 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____7702))
{return (n < this__7701.array.length);
} else
{return and__3546__auto____7702;
}
})()))
{return (this__7701.array[n]);
} else
{return null;
}
});
var G__7718__7720 = (function (coll,n,not_found){
var this__7703 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7704 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____7704))
{return (n < this__7703.array.length);
} else
{return and__3546__auto____7704;
}
})()))
{return (this__7703.array[n]);
} else
{return not_found;
}
});
G__7718 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7718__7719.call(this,coll,n);
case  3 :
return G__7718__7720.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7718;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7705 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7705.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__7722){
var args = cljs.core.seq( arglist__7722 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7723 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7751 = null;
var G__7751__7752 = (function (coll,k){
var this__7724 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__7751__7753 = (function (coll,k,not_found){
var this__7725 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__7751 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7751__7752.call(this,coll,k);
case  3 :
return G__7751__7753.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7751;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__7726 = this;
var v_pos__7727 = (this__7726.start + key);

return (new cljs.core.Subvec(this__7726.meta,cljs.core._assoc.call(null,this__7726.v,v_pos__7727,val),this__7726.start,((this__7726.end > (v_pos__7727 + 1)) ? this__7726.end : (v_pos__7727 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__7755 = null;
var G__7755__7756 = (function (tsym7728,k){
var this__7730 = this;
var tsym7728__7731 = this;

var coll__7732 = tsym7728__7731;

return cljs.core._lookup.call(null,coll__7732,k);
});
var G__7755__7757 = (function (tsym7729,k,not_found){
var this__7733 = this;
var tsym7729__7734 = this;

var coll__7735 = tsym7729__7734;

return cljs.core._lookup.call(null,coll__7735,k,not_found);
});
G__7755 = function(tsym7729,k,not_found){
switch(arguments.length){
case  2 :
return G__7755__7756.call(this,tsym7729,k);
case  3 :
return G__7755__7757.call(this,tsym7729,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7755;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7736 = this;
return (new cljs.core.Subvec(this__7736.meta,cljs.core._assoc_n.call(null,this__7736.v,this__7736.end,o),this__7736.start,(this__7736.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7759 = null;
var G__7759__7760 = (function (coll,f){
var this__7737 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__7759__7761 = (function (coll,f,start){
var this__7738 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__7759 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7759__7760.call(this,coll,f);
case  3 :
return G__7759__7761.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7759;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7739 = this;
var subvec_seq__7740 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__7739.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__7739.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__7740.call(null,this__7739.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7741 = this;
return (this__7741.end - this__7741.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7742 = this;
return cljs.core._nth.call(null,this__7742.v,(this__7742.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7743 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__7743.start,this__7743.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__7743.meta,this__7743.v,this__7743.start,(this__7743.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__7744 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7745 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7746 = this;
return (new cljs.core.Subvec(meta,this__7746.v,this__7746.start,this__7746.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7747 = this;
return this__7747.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7763 = null;
var G__7763__7764 = (function (coll,n){
var this__7748 = this;
return cljs.core._nth.call(null,this__7748.v,(this__7748.start + n));
});
var G__7763__7765 = (function (coll,n,not_found){
var this__7749 = this;
return cljs.core._nth.call(null,this__7749.v,(this__7749.start + n),not_found);
});
G__7763 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7763__7764.call(this,coll,n);
case  3 :
return G__7763__7765.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7763;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7750 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7750.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__7767 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__7768 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__7767.call(this,v,start);
case  3 :
return subvec__7768.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7770 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7771 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7772 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7773 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7773.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7774 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7775 = this;
return cljs.core._first.call(null,this__7775.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7776 = this;
var temp__3695__auto____7777 = cljs.core.next.call(null,this__7776.front);

if(cljs.core.truth_(temp__3695__auto____7777))
{var f1__7778 = temp__3695__auto____7777;

return (new cljs.core.PersistentQueueSeq(this__7776.meta,f1__7778,this__7776.rear));
} else
{if(cljs.core.truth_((this__7776.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__7776.meta,this__7776.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7779 = this;
return this__7779.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7780 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__7780.front,this__7780.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7781 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7782 = this;
if(cljs.core.truth_(this__7782.front))
{return (new cljs.core.PersistentQueue(this__7782.meta,(this__7782.count + 1),this__7782.front,cljs.core.conj.call(null,(function (){var or__3548__auto____7783 = this__7782.rear;

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__7782.meta,(this__7782.count + 1),cljs.core.conj.call(null,this__7782.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7784 = this;
var rear__7785 = cljs.core.seq.call(null,this__7784.rear);

if(cljs.core.truth_((function (){var or__3548__auto____7786 = this__7784.front;

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{return rear__7785;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__7784.front,cljs.core.seq.call(null,rear__7785)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7787 = this;
return this__7787.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__7788 = this;
return cljs.core._first.call(null,this__7788.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__7789 = this;
if(cljs.core.truth_(this__7789.front))
{var temp__3695__auto____7790 = cljs.core.next.call(null,this__7789.front);

if(cljs.core.truth_(temp__3695__auto____7790))
{var f1__7791 = temp__3695__auto____7790;

return (new cljs.core.PersistentQueue(this__7789.meta,(this__7789.count - 1),f1__7791,this__7789.rear));
} else
{return (new cljs.core.PersistentQueue(this__7789.meta,(this__7789.count - 1),cljs.core.seq.call(null,this__7789.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__7792 = this;
return cljs.core.first.call(null,this__7792.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__7793 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7794 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7795 = this;
return (new cljs.core.PersistentQueue(meta,this__7795.count,this__7795.front,this__7795.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7796 = this;
return this__7796.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7797 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__7798 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__7799 = array.length;

var i__7800 = 0;

while(true){
if(cljs.core.truth_((i__7800 < len__7799)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__7800]))))
{return i__7800;
} else
{{
var G__7801 = (i__7800 + incr);
i__7800 = G__7801;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___7803 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___7804 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____7802))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____7802;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___7803.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___7804.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__7807 = cljs.core.hash.call(null,a);
var b__7808 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__7807 < b__7808)))
{return -1;
} else
{if(cljs.core.truth_((a__7807 > b__7808)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7809 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7836 = null;
var G__7836__7837 = (function (coll,k){
var this__7810 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__7836__7838 = (function (coll,k,not_found){
var this__7811 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7811.strobj,(this__7811.strobj[k]),not_found);
});
G__7836 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7836__7837.call(this,coll,k);
case  3 :
return G__7836__7838.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7836;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7812 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__7813 = goog.object.clone.call(null,this__7812.strobj);
var overwrite_QMARK___7814 = new_strobj__7813.hasOwnProperty(k);

(new_strobj__7813[k] = v);
if(cljs.core.truth_(overwrite_QMARK___7814))
{return (new cljs.core.ObjMap(this__7812.meta,this__7812.keys,new_strobj__7813));
} else
{var new_keys__7815 = cljs.core.aclone.call(null,this__7812.keys);

new_keys__7815.push(k);
return (new cljs.core.ObjMap(this__7812.meta,new_keys__7815,new_strobj__7813));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__7812.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__7816 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__7816.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__7840 = null;
var G__7840__7841 = (function (tsym7817,k){
var this__7819 = this;
var tsym7817__7820 = this;

var coll__7821 = tsym7817__7820;

return cljs.core._lookup.call(null,coll__7821,k);
});
var G__7840__7842 = (function (tsym7818,k,not_found){
var this__7822 = this;
var tsym7818__7823 = this;

var coll__7824 = tsym7818__7823;

return cljs.core._lookup.call(null,coll__7824,k,not_found);
});
G__7840 = function(tsym7818,k,not_found){
switch(arguments.length){
case  2 :
return G__7840__7841.call(this,tsym7818,k);
case  3 :
return G__7840__7842.call(this,tsym7818,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7840;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__7825 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7826 = this;
if(cljs.core.truth_((this__7826.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__7806_SHARP_){
return cljs.core.vector.call(null,p1__7806_SHARP_,(this__7826.strobj[p1__7806_SHARP_]));
}),this__7826.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7827 = this;
return this__7827.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7828 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7829 = this;
return (new cljs.core.ObjMap(meta,this__7829.keys,this__7829.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7830 = this;
return this__7830.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7831 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__7831.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__7832 = this;
if(cljs.core.truth_((function (){var and__3546__auto____7833 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____7833))
{return this__7832.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____7833;
}
})()))
{var new_keys__7834 = cljs.core.aclone.call(null,this__7832.keys);
var new_strobj__7835 = goog.object.clone.call(null,this__7832.strobj);

new_keys__7834.splice(cljs.core.scan_array.call(null,1,k,new_keys__7834),1);
cljs.core.js_delete.call(null,new_strobj__7835,k);
return (new cljs.core.ObjMap(this__7832.meta,new_keys__7834,new_strobj__7835));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7845 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7883 = null;
var G__7883__7884 = (function (coll,k){
var this__7846 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__7883__7885 = (function (coll,k,not_found){
var this__7847 = this;
var bucket__7848 = (this__7847.hashobj[cljs.core.hash.call(null,k)]);
var i__7849 = (cljs.core.truth_(bucket__7848)?cljs.core.scan_array.call(null,2,k,bucket__7848):null);

if(cljs.core.truth_(i__7849))
{return (bucket__7848[(i__7849 + 1)]);
} else
{return not_found;
}
});
G__7883 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__7883__7884.call(this,coll,k);
case  3 :
return G__7883__7885.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7883;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__7850 = this;
var h__7851 = cljs.core.hash.call(null,k);
var bucket__7852 = (this__7850.hashobj[h__7851]);

if(cljs.core.truth_(bucket__7852))
{var new_bucket__7853 = cljs.core.aclone.call(null,bucket__7852);
var new_hashobj__7854 = goog.object.clone.call(null,this__7850.hashobj);

(new_hashobj__7854[h__7851] = new_bucket__7853);
var temp__3695__auto____7855 = cljs.core.scan_array.call(null,2,k,new_bucket__7853);

if(cljs.core.truth_(temp__3695__auto____7855))
{var i__7856 = temp__3695__auto____7855;

(new_bucket__7853[(i__7856 + 1)] = v);
return (new cljs.core.HashMap(this__7850.meta,this__7850.count,new_hashobj__7854));
} else
{new_bucket__7853.push(k,v);
return (new cljs.core.HashMap(this__7850.meta,(this__7850.count + 1),new_hashobj__7854));
}
} else
{var new_hashobj__7857 = goog.object.clone.call(null,this__7850.hashobj);

(new_hashobj__7857[h__7851] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__7850.meta,(this__7850.count + 1),new_hashobj__7857));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__7858 = this;
var bucket__7859 = (this__7858.hashobj[cljs.core.hash.call(null,k)]);
var i__7860 = (cljs.core.truth_(bucket__7859)?cljs.core.scan_array.call(null,2,k,bucket__7859):null);

if(cljs.core.truth_(i__7860))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__7887 = null;
var G__7887__7888 = (function (tsym7861,k){
var this__7863 = this;
var tsym7861__7864 = this;

var coll__7865 = tsym7861__7864;

return cljs.core._lookup.call(null,coll__7865,k);
});
var G__7887__7889 = (function (tsym7862,k,not_found){
var this__7866 = this;
var tsym7862__7867 = this;

var coll__7868 = tsym7862__7867;

return cljs.core._lookup.call(null,coll__7868,k,not_found);
});
G__7887 = function(tsym7862,k,not_found){
switch(arguments.length){
case  2 :
return G__7887__7888.call(this,tsym7862,k);
case  3 :
return G__7887__7889.call(this,tsym7862,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7887;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__7869 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7870 = this;
if(cljs.core.truth_((this__7870.count > 0)))
{var hashes__7871 = cljs.core.js_keys.call(null,this__7870.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__7844_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__7870.hashobj[p1__7844_SHARP_])));
}),hashes__7871);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7872 = this;
return this__7872.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7873 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7874 = this;
return (new cljs.core.HashMap(meta,this__7874.count,this__7874.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7875 = this;
return this__7875.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7876 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__7876.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__7877 = this;
var h__7878 = cljs.core.hash.call(null,k);
var bucket__7879 = (this__7877.hashobj[h__7878]);
var i__7880 = (cljs.core.truth_(bucket__7879)?cljs.core.scan_array.call(null,2,k,bucket__7879):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__7880)))
{return coll;
} else
{var new_hashobj__7881 = goog.object.clone.call(null,this__7877.hashobj);

if(cljs.core.truth_((3 > bucket__7879.length)))
{cljs.core.js_delete.call(null,new_hashobj__7881,h__7878);
} else
{var new_bucket__7882 = cljs.core.aclone.call(null,bucket__7879);

new_bucket__7882.splice(i__7880,2);
(new_hashobj__7881[h__7878] = new_bucket__7882);
}
return (new cljs.core.HashMap(this__7877.meta,(this__7877.count - 1),new_hashobj__7881));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__7891 = ks.length;

var i__7892 = 0;
var out__7893 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__7892 < len__7891)))
{{
var G__7894 = (i__7892 + 1);
var G__7895 = cljs.core.assoc.call(null,out__7893,(ks[i__7892]),(vs[i__7892]));
i__7892 = G__7894;
out__7893 = G__7895;
continue;
}
} else
{return out__7893;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__7896 = cljs.core.seq.call(null,keyvals);
var out__7897 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__7896))
{{
var G__7898 = cljs.core.nnext.call(null,in$__7896);
var G__7899 = cljs.core.assoc.call(null,out__7897,cljs.core.first.call(null,in$__7896),cljs.core.second.call(null,in$__7896));
in$__7896 = G__7898;
out__7897 = G__7899;
continue;
}
} else
{return out__7897;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__7900){
var keyvals = cljs.core.seq( arglist__7900 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__7901_SHARP_,p2__7902_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____7903 = p1__7901_SHARP_;

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__7902_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__7904){
var maps = cljs.core.seq( arglist__7904 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__7907 = (function (m,e){
var k__7905 = cljs.core.first.call(null,e);
var v__7906 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__7905)))
{return cljs.core.assoc.call(null,m,k__7905,f.call(null,cljs.core.get.call(null,m,k__7905),v__7906));
} else
{return cljs.core.assoc.call(null,m,k__7905,v__7906);
}
});
var merge2__7909 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__7907,(function (){var or__3548__auto____7908 = m1;

if(cljs.core.truth_(or__3548__auto____7908))
{return or__3548__auto____7908;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__7909,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__7910){
var f = cljs.core.first(arglist__7910);
var maps = cljs.core.rest(arglist__7910);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__7912 = cljs.core.ObjMap.fromObject([],{});
var keys__7913 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__7913))
{var key__7914 = cljs.core.first.call(null,keys__7913);
var entry__7915 = cljs.core.get.call(null,map,key__7914,"\uFDD0'user/not-found");

{
var G__7916 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__7915,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__7912,key__7914,entry__7915):ret__7912);
var G__7917 = cljs.core.next.call(null,keys__7913);
ret__7912 = G__7916;
keys__7913 = G__7917;
continue;
}
} else
{return ret__7912;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7918 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7939 = null;
var G__7939__7940 = (function (coll,v){
var this__7919 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__7939__7941 = (function (coll,v,not_found){
var this__7920 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__7920.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__7939 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__7939__7940.call(this,coll,v);
case  3 :
return G__7939__7941.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7939;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__7943 = null;
var G__7943__7944 = (function (tsym7921,k){
var this__7923 = this;
var tsym7921__7924 = this;

var coll__7925 = tsym7921__7924;

return cljs.core._lookup.call(null,coll__7925,k);
});
var G__7943__7945 = (function (tsym7922,k,not_found){
var this__7926 = this;
var tsym7922__7927 = this;

var coll__7928 = tsym7922__7927;

return cljs.core._lookup.call(null,coll__7928,k,not_found);
});
G__7943 = function(tsym7922,k,not_found){
switch(arguments.length){
case  2 :
return G__7943__7944.call(this,tsym7922,k);
case  3 :
return G__7943__7945.call(this,tsym7922,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7943;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7929 = this;
return (new cljs.core.Set(this__7929.meta,cljs.core.assoc.call(null,this__7929.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__7930 = this;
return cljs.core.keys.call(null,this__7930.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__7931 = this;
return (new cljs.core.Set(this__7931.meta,cljs.core.dissoc.call(null,this__7931.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__7932 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7933 = this;
var and__3546__auto____7934 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____7934))
{var and__3546__auto____7935 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____7935))
{return cljs.core.every_QMARK_.call(null,(function (p1__7911_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__7911_SHARP_);
}),other);
} else
{return and__3546__auto____7935;
}
} else
{return and__3546__auto____7934;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__7936 = this;
return (new cljs.core.Set(meta,this__7936.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__7937 = this;
return this__7937.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__7938 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__7938.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__7948 = cljs.core.seq.call(null,coll);
var out__7949 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__7948))))
{{
var G__7950 = cljs.core.rest.call(null,in$__7948);
var G__7951 = cljs.core.conj.call(null,out__7949,cljs.core.first.call(null,in$__7948));
in$__7948 = G__7950;
out__7949 = G__7951;
continue;
}
} else
{return out__7949;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__7952 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____7953 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____7953))
{var e__7954 = temp__3695__auto____7953;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__7954));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__7952,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__7947_SHARP_){
var temp__3695__auto____7955 = cljs.core.find.call(null,smap,p1__7947_SHARP_);

if(cljs.core.truth_(temp__3695__auto____7955))
{var e__7956 = temp__3695__auto____7955;

return cljs.core.second.call(null,e__7956);
} else
{return p1__7947_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__7964 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__7957,seen){
while(true){
var vec__7958__7959 = p__7957;
var f__7960 = cljs.core.nth.call(null,vec__7958__7959,0,null);
var xs__7961 = vec__7958__7959;

var temp__3698__auto____7962 = cljs.core.seq.call(null,xs__7961);

if(cljs.core.truth_(temp__3698__auto____7962))
{var s__7963 = temp__3698__auto____7962;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__7960)))
{{
var G__7965 = cljs.core.rest.call(null,s__7963);
var G__7966 = seen;
p__7957 = G__7965;
seen = G__7966;
continue;
}
} else
{return cljs.core.cons.call(null,f__7960,step.call(null,cljs.core.rest.call(null,s__7963),cljs.core.conj.call(null,seen,f__7960)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__7964.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__7967 = cljs.core.Vector.fromArray([]);
var s__7968 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__7968)))
{{
var G__7969 = cljs.core.conj.call(null,ret__7967,cljs.core.first.call(null,s__7968));
var G__7970 = cljs.core.next.call(null,s__7968);
ret__7967 = G__7969;
s__7968 = G__7970;
continue;
}
} else
{return cljs.core.seq.call(null,ret__7967);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____7971 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__7972 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__7972 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__7972 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____7973 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__7974 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__7974 > -1)))
{return cljs.core.subs.call(null,x,2,i__7974);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__7977 = cljs.core.ObjMap.fromObject([],{});
var ks__7978 = cljs.core.seq.call(null,keys);
var vs__7979 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = ks__7978;

if(cljs.core.truth_(and__3546__auto____7980))
{return vs__7979;
} else
{return and__3546__auto____7980;
}
})()))
{{
var G__7981 = cljs.core.assoc.call(null,map__7977,cljs.core.first.call(null,ks__7978),cljs.core.first.call(null,vs__7979));
var G__7982 = cljs.core.next.call(null,ks__7978);
var G__7983 = cljs.core.next.call(null,vs__7979);
map__7977 = G__7981;
ks__7978 = G__7982;
vs__7979 = G__7983;
continue;
}
} else
{return map__7977;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__7986 = (function (k,x){
return x;
});
var max_key__7987 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__7988 = (function() { 
var G__7990__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__7975_SHARP_,p2__7976_SHARP_){
return max_key.call(null,k,p1__7975_SHARP_,p2__7976_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__7990 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7990__delegate.call(this, k, x, y, more);
};
G__7990.cljs$lang$maxFixedArity = 3;
G__7990.cljs$lang$applyTo = (function (arglist__7991){
var k = cljs.core.first(arglist__7991);
var x = cljs.core.first(cljs.core.next(arglist__7991));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7991)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7991)));
return G__7990__delegate.call(this, k, x, y, more);
});
return G__7990;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__7986.call(this,k,x);
case  3 :
return max_key__7987.call(this,k,x,y);
default:
return max_key__7988.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__7988.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__7992 = (function (k,x){
return x;
});
var min_key__7993 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__7994 = (function() { 
var G__7996__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__7984_SHARP_,p2__7985_SHARP_){
return min_key.call(null,k,p1__7984_SHARP_,p2__7985_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__7996 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7996__delegate.call(this, k, x, y, more);
};
G__7996.cljs$lang$maxFixedArity = 3;
G__7996.cljs$lang$applyTo = (function (arglist__7997){
var k = cljs.core.first(arglist__7997);
var x = cljs.core.first(cljs.core.next(arglist__7997));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7997)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7997)));
return G__7996__delegate.call(this, k, x, y, more);
});
return G__7996;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__7992.call(this,k,x);
case  3 :
return min_key__7993.call(this,k,x,y);
default:
return min_key__7994.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__7994.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8000 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8001 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____7998 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7998))
{var s__7999 = temp__3698__auto____7998;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__7999),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__7999)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8000.call(this,n,step);
case  3 :
return partition_all__8001.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8003 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8003))
{var s__8004 = temp__3698__auto____8003;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8004))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8004),take_while.call(null,pred,cljs.core.rest.call(null,s__8004)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__8005 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8006 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8022 = null;
var G__8022__8023 = (function (rng,f){
var this__8007 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8022__8024 = (function (rng,f,s){
var this__8008 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8022 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8022__8023.call(this,rng,f);
case  3 :
return G__8022__8024.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8022;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8009 = this;
var comp__8010 = (cljs.core.truth_((this__8009.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8010.call(null,this__8009.start,this__8009.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8011 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8011.end - this__8011.start) / this__8011.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8012 = this;
return this__8012.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8013 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8013.meta,(this__8013.start + this__8013.step),this__8013.end,this__8013.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8014 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8015 = this;
return (new cljs.core.Range(meta,this__8015.start,this__8015.end,this__8015.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8016 = this;
return this__8016.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8026 = null;
var G__8026__8027 = (function (rng,n){
var this__8017 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8017.start + (n * this__8017.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8018 = (this__8017.start > this__8017.end);

if(cljs.core.truth_(and__3546__auto____8018))
{return cljs.core._EQ_.call(null,this__8017.step,0);
} else
{return and__3546__auto____8018;
}
})()))
{return this__8017.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__8026__8028 = (function (rng,n,not_found){
var this__8019 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8019.start + (n * this__8019.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8020 = (this__8019.start > this__8019.end);

if(cljs.core.truth_(and__3546__auto____8020))
{return cljs.core._EQ_.call(null,this__8019.step,0);
} else
{return and__3546__auto____8020;
}
})()))
{return this__8019.start;
} else
{return not_found;
}
}
});
G__8026 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__8026__8027.call(this,rng,n);
case  3 :
return G__8026__8028.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8026;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8021 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8021.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__8030 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__8031 = (function (end){
return range.call(null,0,end,1);
});
var range__8032 = (function (start,end){
return range.call(null,start,end,1);
});
var range__8033 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__8030.call(this);
case  1 :
return range__8031.call(this,start);
case  2 :
return range__8032.call(this,start,end);
case  3 :
return range__8033.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8035 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8035))
{var s__8036 = temp__3698__auto____8035;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8036),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8036)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8038 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8038))
{var s__8039 = temp__3698__auto____8038;

var fst__8040 = cljs.core.first.call(null,s__8039);
var fv__8041 = f.call(null,fst__8040);
var run__8042 = cljs.core.cons.call(null,fst__8040,cljs.core.take_while.call(null,(function (p1__8037_SHARP_){
return cljs.core._EQ_.call(null,fv__8041,f.call(null,p1__8037_SHARP_));
}),cljs.core.next.call(null,s__8039)));

return cljs.core.cons.call(null,run__8042,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8042),s__8039))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__8057 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8053 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8053))
{var s__8054 = temp__3695__auto____8053;

return reductions.call(null,f,cljs.core.first.call(null,s__8054),cljs.core.rest.call(null,s__8054));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__8058 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8055))
{var s__8056 = temp__3698__auto____8055;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8056)),cljs.core.rest.call(null,s__8056));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__8057.call(this,f,init);
case  3 :
return reductions__8058.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__8061 = (function (f){
return (function() {
var G__8066 = null;
var G__8066__8067 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8066__8068 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8066__8069 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8066__8070 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8066__8071 = (function() { 
var G__8073__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8073 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8073__delegate.call(this, x, y, z, args);
};
G__8073.cljs$lang$maxFixedArity = 3;
G__8073.cljs$lang$applyTo = (function (arglist__8074){
var x = cljs.core.first(arglist__8074);
var y = cljs.core.first(cljs.core.next(arglist__8074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8074)));
return G__8073__delegate.call(this, x, y, z, args);
});
return G__8073;
})()
;
G__8066 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8066__8067.call(this);
case  1 :
return G__8066__8068.call(this,x);
case  2 :
return G__8066__8069.call(this,x,y);
case  3 :
return G__8066__8070.call(this,x,y,z);
default:
return G__8066__8071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8066.cljs$lang$maxFixedArity = 3;
G__8066.cljs$lang$applyTo = G__8066__8071.cljs$lang$applyTo;
return G__8066;
})()
});
var juxt__8062 = (function (f,g){
return (function() {
var G__8075 = null;
var G__8075__8076 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8075__8077 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8075__8078 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8075__8079 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8075__8080 = (function() { 
var G__8082__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8082 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8082__delegate.call(this, x, y, z, args);
};
G__8082.cljs$lang$maxFixedArity = 3;
G__8082.cljs$lang$applyTo = (function (arglist__8083){
var x = cljs.core.first(arglist__8083);
var y = cljs.core.first(cljs.core.next(arglist__8083));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8083)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8083)));
return G__8082__delegate.call(this, x, y, z, args);
});
return G__8082;
})()
;
G__8075 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8075__8076.call(this);
case  1 :
return G__8075__8077.call(this,x);
case  2 :
return G__8075__8078.call(this,x,y);
case  3 :
return G__8075__8079.call(this,x,y,z);
default:
return G__8075__8080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8075.cljs$lang$maxFixedArity = 3;
G__8075.cljs$lang$applyTo = G__8075__8080.cljs$lang$applyTo;
return G__8075;
})()
});
var juxt__8063 = (function (f,g,h){
return (function() {
var G__8084 = null;
var G__8084__8085 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8084__8086 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8084__8087 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8084__8088 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8084__8089 = (function() { 
var G__8091__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8091 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8091__delegate.call(this, x, y, z, args);
};
G__8091.cljs$lang$maxFixedArity = 3;
G__8091.cljs$lang$applyTo = (function (arglist__8092){
var x = cljs.core.first(arglist__8092);
var y = cljs.core.first(cljs.core.next(arglist__8092));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8092)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8092)));
return G__8091__delegate.call(this, x, y, z, args);
});
return G__8091;
})()
;
G__8084 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8084__8085.call(this);
case  1 :
return G__8084__8086.call(this,x);
case  2 :
return G__8084__8087.call(this,x,y);
case  3 :
return G__8084__8088.call(this,x,y,z);
default:
return G__8084__8089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8084.cljs$lang$maxFixedArity = 3;
G__8084.cljs$lang$applyTo = G__8084__8089.cljs$lang$applyTo;
return G__8084;
})()
});
var juxt__8064 = (function() { 
var G__8093__delegate = function (f,g,h,fs){
var fs__8060 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__8094 = null;
var G__8094__8095 = (function (){
return cljs.core.reduce.call(null,(function (p1__8043_SHARP_,p2__8044_SHARP_){
return cljs.core.conj.call(null,p1__8043_SHARP_,p2__8044_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__8060);
});
var G__8094__8096 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8045_SHARP_,p2__8046_SHARP_){
return cljs.core.conj.call(null,p1__8045_SHARP_,p2__8046_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__8060);
});
var G__8094__8097 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8047_SHARP_,p2__8048_SHARP_){
return cljs.core.conj.call(null,p1__8047_SHARP_,p2__8048_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__8060);
});
var G__8094__8098 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8049_SHARP_,p2__8050_SHARP_){
return cljs.core.conj.call(null,p1__8049_SHARP_,p2__8050_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__8060);
});
var G__8094__8099 = (function() { 
var G__8101__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8051_SHARP_,p2__8052_SHARP_){
return cljs.core.conj.call(null,p1__8051_SHARP_,cljs.core.apply.call(null,p2__8052_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__8060);
};
var G__8101 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8101__delegate.call(this, x, y, z, args);
};
G__8101.cljs$lang$maxFixedArity = 3;
G__8101.cljs$lang$applyTo = (function (arglist__8102){
var x = cljs.core.first(arglist__8102);
var y = cljs.core.first(cljs.core.next(arglist__8102));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8102)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8102)));
return G__8101__delegate.call(this, x, y, z, args);
});
return G__8101;
})()
;
G__8094 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8094__8095.call(this);
case  1 :
return G__8094__8096.call(this,x);
case  2 :
return G__8094__8097.call(this,x,y);
case  3 :
return G__8094__8098.call(this,x,y,z);
default:
return G__8094__8099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8094.cljs$lang$maxFixedArity = 3;
G__8094.cljs$lang$applyTo = G__8094__8099.cljs$lang$applyTo;
return G__8094;
})()
};
var G__8093 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8093__delegate.call(this, f, g, h, fs);
};
G__8093.cljs$lang$maxFixedArity = 3;
G__8093.cljs$lang$applyTo = (function (arglist__8103){
var f = cljs.core.first(arglist__8103);
var g = cljs.core.first(cljs.core.next(arglist__8103));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8103)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8103)));
return G__8093__delegate.call(this, f, g, h, fs);
});
return G__8093;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__8061.call(this,f);
case  2 :
return juxt__8062.call(this,f,g);
case  3 :
return juxt__8063.call(this,f,g,h);
default:
return juxt__8064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__8064.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__8105 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8108 = cljs.core.next.call(null,coll);
coll = G__8108;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__8106 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8104))
{return (n > 0);
} else
{return and__3546__auto____8104;
}
})()))
{{
var G__8109 = (n - 1);
var G__8110 = cljs.core.next.call(null,coll);
n = G__8109;
coll = G__8110;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__8105.call(this,n);
case  2 :
return dorun__8106.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__8111 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__8112 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__8111.call(this,n);
case  2 :
return doall__8112.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__8114 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8114),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8114),1)))
{return cljs.core.first.call(null,matches__8114);
} else
{return cljs.core.vec.call(null,matches__8114);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__8115 = re.exec(s);

if(cljs.core.truth_((matches__8115 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8115),1)))
{return cljs.core.first.call(null,matches__8115);
} else
{return cljs.core.vec.call(null,matches__8115);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8116 = cljs.core.re_find.call(null,re,s);
var match_idx__8117 = s.search(re);
var match_str__8118 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__8116))?cljs.core.first.call(null,match_data__8116):match_data__8116);
var post_match__8119 = cljs.core.subs.call(null,s,(match_idx__8117 + cljs.core.count.call(null,match_str__8118)));

if(cljs.core.truth_(match_data__8116))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8116,re_seq.call(null,re,post_match__8119));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__8121__8122 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___8123 = cljs.core.nth.call(null,vec__8121__8122,0,null);
var flags__8124 = cljs.core.nth.call(null,vec__8121__8122,1,null);
var pattern__8125 = cljs.core.nth.call(null,vec__8121__8122,2,null);

return (new RegExp(pattern__8125,flags__8124));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8120_SHARP_){
return print_one.call(null,p1__8120_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____8126 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____8126))
{var and__3546__auto____8130 = (function (){var x__3293__auto____8127 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8128 = x__3293__auto____8127;

if(cljs.core.truth_(and__3546__auto____8128))
{var and__3546__auto____8129 = x__3293__auto____8127.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8129))
{return cljs.core.not.call(null,x__3293__auto____8127.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8129;
}
} else
{return and__3546__auto____8128;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3293__auto____8127);
}
})();

if(cljs.core.truth_(and__3546__auto____8130))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____8130;
}
} else
{return and__3546__auto____8126;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3293__auto____8131 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8132 = x__3293__auto____8131;

if(cljs.core.truth_(and__3546__auto____8132))
{var and__3546__auto____8133 = x__3293__auto____8131.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____8133))
{return cljs.core.not.call(null,x__3293__auto____8131.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____8133;
}
} else
{return and__3546__auto____8132;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3293__auto____8131);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__8134 = cljs.core.first.call(null,objs);
var sb__8135 = (new goog.string.StringBuffer());

var G__8136__8137 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8136__8137))
{var obj__8138 = cljs.core.first.call(null,G__8136__8137);
var G__8136__8139 = G__8136__8137;

while(true){
if(cljs.core.truth_((obj__8138 === first_obj__8134)))
{} else
{sb__8135.append(" ");
}
var G__8140__8141 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8138,opts));

if(cljs.core.truth_(G__8140__8141))
{var string__8142 = cljs.core.first.call(null,G__8140__8141);
var G__8140__8143 = G__8140__8141;

while(true){
sb__8135.append(string__8142);
var temp__3698__auto____8144 = cljs.core.next.call(null,G__8140__8143);

if(cljs.core.truth_(temp__3698__auto____8144))
{var G__8140__8145 = temp__3698__auto____8144;

{
var G__8148 = cljs.core.first.call(null,G__8140__8145);
var G__8149 = G__8140__8145;
string__8142 = G__8148;
G__8140__8143 = G__8149;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8146 = cljs.core.next.call(null,G__8136__8139);

if(cljs.core.truth_(temp__3698__auto____8146))
{var G__8136__8147 = temp__3698__auto____8146;

{
var G__8150 = cljs.core.first.call(null,G__8136__8147);
var G__8151 = G__8136__8147;
obj__8138 = G__8150;
G__8136__8139 = G__8151;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__8135);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8152 = cljs.core.first.call(null,objs);

var G__8153__8154 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8153__8154))
{var obj__8155 = cljs.core.first.call(null,G__8153__8154);
var G__8153__8156 = G__8153__8154;

while(true){
if(cljs.core.truth_((obj__8155 === first_obj__8152)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__8157__8158 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8155,opts));

if(cljs.core.truth_(G__8157__8158))
{var string__8159 = cljs.core.first.call(null,G__8157__8158);
var G__8157__8160 = G__8157__8158;

while(true){
cljs.core.string_print.call(null,string__8159);
var temp__3698__auto____8161 = cljs.core.next.call(null,G__8157__8160);

if(cljs.core.truth_(temp__3698__auto____8161))
{var G__8157__8162 = temp__3698__auto____8161;

{
var G__8165 = cljs.core.first.call(null,G__8157__8162);
var G__8166 = G__8157__8162;
string__8159 = G__8165;
G__8157__8160 = G__8166;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8163 = cljs.core.next.call(null,G__8153__8156);

if(cljs.core.truth_(temp__3698__auto____8163))
{var G__8153__8164 = temp__3698__auto____8163;

{
var G__8167 = cljs.core.first.call(null,G__8153__8164);
var G__8168 = G__8153__8164;
obj__8155 = G__8167;
G__8153__8156 = G__8168;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__8169){
var objs = cljs.core.seq( arglist__8169 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__8170){
var objs = cljs.core.seq( arglist__8170 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__8171){
var objs = cljs.core.seq( arglist__8171 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__8172){
var objs = cljs.core.seq( arglist__8172 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__8173){
var objs = cljs.core.seq( arglist__8173 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__8174 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8174,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____8175 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8175))
{var nspc__8176 = temp__3698__auto____8175;

return cljs.core.str.call(null,nspc__8176,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____8177 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____8177))
{var nspc__8178 = temp__3698__auto____8177;

return cljs.core.str.call(null,nspc__8178,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__8179 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__8179,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__8180 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__8181 = this;
var G__8182__8183 = cljs.core.seq.call(null,this__8181.watches);

if(cljs.core.truth_(G__8182__8183))
{var G__8185__8187 = cljs.core.first.call(null,G__8182__8183);
var vec__8186__8188 = G__8185__8187;
var key__8189 = cljs.core.nth.call(null,vec__8186__8188,0,null);
var f__8190 = cljs.core.nth.call(null,vec__8186__8188,1,null);
var G__8182__8191 = G__8182__8183;

var G__8185__8192 = G__8185__8187;
var G__8182__8193 = G__8182__8191;

while(true){
var vec__8194__8195 = G__8185__8192;
var key__8196 = cljs.core.nth.call(null,vec__8194__8195,0,null);
var f__8197 = cljs.core.nth.call(null,vec__8194__8195,1,null);
var G__8182__8198 = G__8182__8193;

f__8197.call(null,key__8196,this$,oldval,newval);
var temp__3698__auto____8199 = cljs.core.next.call(null,G__8182__8198);

if(cljs.core.truth_(temp__3698__auto____8199))
{var G__8182__8200 = temp__3698__auto____8199;

{
var G__8207 = cljs.core.first.call(null,G__8182__8200);
var G__8208 = G__8182__8200;
G__8185__8192 = G__8207;
G__8182__8193 = G__8208;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__8201 = this;
return this$.watches = cljs.core.assoc.call(null,this__8201.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__8202 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8202.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__8203 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__8203.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__8204 = this;
return this__8204.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8205 = this;
return this__8205.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8206 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__8215 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__8216 = (function() { 
var G__8218__delegate = function (x,p__8209){
var map__8210__8211 = p__8209;
var map__8210__8212 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8210__8211))?cljs.core.apply.call(null,cljs.core.hash_map,map__8210__8211):map__8210__8211);
var validator__8213 = cljs.core.get.call(null,map__8210__8212,"\uFDD0'validator");
var meta__8214 = cljs.core.get.call(null,map__8210__8212,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__8214,validator__8213,null));
};
var G__8218 = function (x,var_args){
var p__8209 = null;
if (goog.isDef(var_args)) {
  p__8209 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8218__delegate.call(this, x, p__8209);
};
G__8218.cljs$lang$maxFixedArity = 1;
G__8218.cljs$lang$applyTo = (function (arglist__8219){
var x = cljs.core.first(arglist__8219);
var p__8209 = cljs.core.rest(arglist__8219);
return G__8218__delegate.call(this, x, p__8209);
});
return G__8218;
})()
;
atom = function(x,var_args){
var p__8209 = var_args;
switch(arguments.length){
case  1 :
return atom__8215.call(this,x);
default:
return atom__8216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__8216.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____8220 = a.validator;

if(cljs.core.truth_(temp__3698__auto____8220))
{var validate__8221 = temp__3698__auto____8220;

if(cljs.core.truth_(validate__8221.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__8222 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__8222,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___8223 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___8224 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___8225 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___8226 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___8227 = (function() { 
var G__8229__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__8229 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8229__delegate.call(this, a, f, x, y, z, more);
};
G__8229.cljs$lang$maxFixedArity = 5;
G__8229.cljs$lang$applyTo = (function (arglist__8230){
var a = cljs.core.first(arglist__8230);
var f = cljs.core.first(cljs.core.next(arglist__8230));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8230)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8230))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8230)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8230)))));
return G__8229__delegate.call(this, a, f, x, y, z, more);
});
return G__8229;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___8223.call(this,a,f);
case  3 :
return swap_BANG___8224.call(this,a,f,x);
case  4 :
return swap_BANG___8225.call(this,a,f,x,y);
case  5 :
return swap_BANG___8226.call(this,a,f,x,y,z);
default:
return swap_BANG___8227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___8227.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__8231){
var iref = cljs.core.first(arglist__8231);
var f = cljs.core.first(cljs.core.next(arglist__8231));
var args = cljs.core.rest(cljs.core.next(arglist__8231));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__8232 = (function (){
return gensym.call(null,"G__");
});
var gensym__8233 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__8232.call(this);
case  1 :
return gensym__8233.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__8235 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__8235.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__8236 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__8236.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__8236.state,this__8236.f);
}
return cljs.core.deref.call(null,this__8236.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__8237){
var body = cljs.core.seq( arglist__8237 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__8238__8239 = options;
var map__8238__8240 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__8238__8239))?cljs.core.apply.call(null,cljs.core.hash_map,map__8238__8239):map__8238__8239);
var keywordize_keys__8241 = cljs.core.get.call(null,map__8238__8240,"\uFDD0'keywordize-keys");
var keyfn__8242 = (cljs.core.truth_(keywordize_keys__8241)?cljs.core.keyword:cljs.core.str);
var f__8248 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3357__auto____8247 = (function iter__8243(s__8244){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8244__8245 = s__8244;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8244__8245)))
{var k__8246 = cljs.core.first.call(null,s__8244__8245);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__8242.call(null,k__8246),thisfn.call(null,(x[k__8246]))]),iter__8243.call(null,cljs.core.rest.call(null,s__8244__8245)));
} else
{return null;
}
break;
}
})));
});

return iter__3357__auto____8247.call(null,cljs.core.js_keys.call(null,x));
})());
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

return f__8248.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__8249){
var x = cljs.core.first(arglist__8249);
var options = cljs.core.rest(arglist__8249);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__8250 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__8254__delegate = function (args){
var temp__3695__auto____8251 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__8250),args);

if(cljs.core.truth_(temp__3695__auto____8251))
{var v__8252 = temp__3695__auto____8251;

return v__8252;
} else
{var ret__8253 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__8250,cljs.core.assoc,args,ret__8253);
return ret__8253;
}
};
var G__8254 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8254__delegate.call(this, args);
};
G__8254.cljs$lang$maxFixedArity = 0;
G__8254.cljs$lang$applyTo = (function (arglist__8255){
var args = cljs.core.seq( arglist__8255 );;
return G__8254__delegate.call(this, args);
});
return G__8254;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__8257 = (function (f){
while(true){
var ret__8256 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__8256)))
{{
var G__8260 = ret__8256;
f = G__8260;
continue;
}
} else
{return ret__8256;
}
break;
}
});
var trampoline__8258 = (function() { 
var G__8261__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__8261 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8261__delegate.call(this, f, args);
};
G__8261.cljs$lang$maxFixedArity = 1;
G__8261.cljs$lang$applyTo = (function (arglist__8262){
var f = cljs.core.first(arglist__8262);
var args = cljs.core.rest(arglist__8262);
return G__8261__delegate.call(this, f, args);
});
return G__8261;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__8257.call(this,f);
default:
return trampoline__8258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__8258.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8263 = (function (){
return rand.call(null,1);
});
var rand__8264 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8263.call(this);
case  1 :
return rand__8264.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__8266 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__8266,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__8266,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___8275 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___8276 = (function (h,child,parent){
var or__3548__auto____8267 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____8267))
{return or__3548__auto____8267;
} else
{var or__3548__auto____8268 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____8268))
{return or__3548__auto____8268;
} else
{var and__3546__auto____8269 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____8269))
{var and__3546__auto____8270 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____8270))
{var and__3546__auto____8271 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____8271))
{var ret__8272 = true;
var i__8273 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____8274 = cljs.core.not.call(null,ret__8272);

if(cljs.core.truth_(or__3548__auto____8274))
{return or__3548__auto____8274;
} else
{return cljs.core._EQ_.call(null,i__8273,cljs.core.count.call(null,parent));
}
})()))
{return ret__8272;
} else
{{
var G__8278 = isa_QMARK_.call(null,h,child.call(null,i__8273),parent.call(null,i__8273));
var G__8279 = (i__8273 + 1);
ret__8272 = G__8278;
i__8273 = G__8279;
continue;
}
}
break;
}
} else
{return and__3546__auto____8271;
}
} else
{return and__3546__auto____8270;
}
} else
{return and__3546__auto____8269;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___8275.call(this,h,child);
case  3 :
return isa_QMARK___8276.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__8280 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__8281 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__8280.call(this,h);
case  2 :
return parents__8281.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__8283 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__8284 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__8283.call(this,h);
case  2 :
return ancestors__8284.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__8286 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__8287 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__8286.call(this,h);
case  2 :
return descendants__8287.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__8297 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__8298 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__8292 = "\uFDD0'parents".call(null,h);
var td__8293 = "\uFDD0'descendants".call(null,h);
var ta__8294 = "\uFDD0'ancestors".call(null,h);
var tf__8295 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____8296 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__8292.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8294.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__8294.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__8292,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__8295.call(null,"\uFDD0'ancestors".call(null,h),tag,td__8293,parent,ta__8294),"\uFDD0'descendants":tf__8295.call(null,"\uFDD0'descendants".call(null,h),parent,ta__8294,tag,td__8293)});
})());

if(cljs.core.truth_(or__3548__auto____8296))
{return or__3548__auto____8296;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__8297.call(this,h,tag);
case  3 :
return derive__8298.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__8304 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__8305 = (function (h,tag,parent){
var parentMap__8300 = "\uFDD0'parents".call(null,h);
var childsParents__8301 = (cljs.core.truth_(parentMap__8300.call(null,tag))?cljs.core.disj.call(null,parentMap__8300.call(null,tag),parent):cljs.core.set([]));
var newParents__8302 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__8301))?cljs.core.assoc.call(null,parentMap__8300,tag,childsParents__8301):cljs.core.dissoc.call(null,parentMap__8300,tag));
var deriv_seq__8303 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8289_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__8289_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__8289_SHARP_),cljs.core.second.call(null,p1__8289_SHARP_)));
}),cljs.core.seq.call(null,newParents__8302)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__8300.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__8290_SHARP_,p2__8291_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__8290_SHARP_,p2__8291_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__8303));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__8304.call(this,h,tag);
case  3 :
return underive__8305.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__8307 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____8309 = (cljs.core.truth_((function (){var and__3546__auto____8308 = xprefs__8307;

if(cljs.core.truth_(and__3546__auto____8308))
{return xprefs__8307.call(null,y);
} else
{return and__3546__auto____8308;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____8309))
{return or__3548__auto____8309;
} else
{var or__3548__auto____8311 = (function (){var ps__8310 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8310) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__8310),prefer_table)))
{} else
{}
{
var G__8314 = cljs.core.rest.call(null,ps__8310);
ps__8310 = G__8314;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8311))
{return or__3548__auto____8311;
} else
{var or__3548__auto____8313 = (function (){var ps__8312 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__8312) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__8312),y,prefer_table)))
{} else
{}
{
var G__8315 = cljs.core.rest.call(null,ps__8312);
ps__8312 = G__8315;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____8313))
{return or__3548__auto____8313;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____8316 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____8316))
{return or__3548__auto____8316;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__8325 = cljs.core.reduce.call(null,(function (be,p__8317){
var vec__8318__8319 = p__8317;
var k__8320 = cljs.core.nth.call(null,vec__8318__8319,0,null);
var ___8321 = cljs.core.nth.call(null,vec__8318__8319,1,null);
var e__8322 = vec__8318__8319;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__8320)))
{var be2__8324 = (cljs.core.truth_((function (){var or__3548__auto____8323 = (be === null);

if(cljs.core.truth_(or__3548__auto____8323))
{return or__3548__auto____8323;
} else
{return cljs.core.dominates.call(null,k__8320,cljs.core.first.call(null,be),prefer_table);
}
})())?e__8322:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__8324),k__8320,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__8320," and ",cljs.core.first.call(null,be2__8324),", and neither is preferred")));
}
return be2__8324;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__8325))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__8325));
return cljs.core.second.call(null,best_entry__8325);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8326 = mf;

if(cljs.core.truth_(and__3546__auto____8326))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____8326;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____8327 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8327))
{return or__3548__auto____8327;
} else
{var or__3548__auto____8328 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____8328))
{return or__3548__auto____8328;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____8329 = mf;

if(cljs.core.truth_(and__3546__auto____8329))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____8329;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____8330 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8330))
{return or__3548__auto____8330;
} else
{var or__3548__auto____8331 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____8331))
{return or__3548__auto____8331;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8332 = mf;

if(cljs.core.truth_(and__3546__auto____8332))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____8332;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8333 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8333))
{return or__3548__auto____8333;
} else
{var or__3548__auto____8334 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____8334))
{return or__3548__auto____8334;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____8335 = mf;

if(cljs.core.truth_(and__3546__auto____8335))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____8335;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____8336 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8336))
{return or__3548__auto____8336;
} else
{var or__3548__auto____8337 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____8337))
{return or__3548__auto____8337;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____8338 = mf;

if(cljs.core.truth_(and__3546__auto____8338))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____8338;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____8339 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8339))
{return or__3548__auto____8339;
} else
{var or__3548__auto____8340 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____8340))
{return or__3548__auto____8340;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8341 = mf;

if(cljs.core.truth_(and__3546__auto____8341))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____8341;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____8342 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8342))
{return or__3548__auto____8342;
} else
{var or__3548__auto____8343 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____8343))
{return or__3548__auto____8343;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____8344 = mf;

if(cljs.core.truth_(and__3546__auto____8344))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____8344;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____8345 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8345))
{return or__3548__auto____8345;
} else
{var or__3548__auto____8346 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____8346))
{return or__3548__auto____8346;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____8347 = mf;

if(cljs.core.truth_(and__3546__auto____8347))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____8347;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____8348 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____8348))
{return or__3548__auto____8348;
} else
{var or__3548__auto____8349 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____8349))
{return or__3548__auto____8349;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__8350 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__8351 = cljs.core._get_method.call(null,mf,dispatch_val__8350);

if(cljs.core.truth_(target_fn__8351))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__8350)));
}
return cljs.core.apply.call(null,target_fn__8351,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__3208__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__8352 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__8353 = this;
cljs.core.swap_BANG_.call(null,this__8353.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8353.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8353.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__8353.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__8354 = this;
cljs.core.swap_BANG_.call(null,this__8354.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__8354.method_cache,this__8354.method_table,this__8354.cached_hierarchy,this__8354.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__8355 = this;
cljs.core.swap_BANG_.call(null,this__8355.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__8355.method_cache,this__8355.method_table,this__8355.cached_hierarchy,this__8355.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__8356 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__8356.cached_hierarchy),cljs.core.deref.call(null,this__8356.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__8356.method_cache,this__8356.method_table,this__8356.cached_hierarchy,this__8356.hierarchy);
}
var temp__3695__auto____8357 = cljs.core.deref.call(null,this__8356.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____8357))
{var target_fn__8358 = temp__3695__auto____8357;

return target_fn__8358;
} else
{var temp__3695__auto____8359 = cljs.core.find_and_cache_best_method.call(null,this__8356.name,dispatch_val,this__8356.hierarchy,this__8356.method_table,this__8356.prefer_table,this__8356.method_cache,this__8356.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____8359))
{var target_fn__8360 = temp__3695__auto____8359;

return target_fn__8360;
} else
{return cljs.core.deref.call(null,this__8356.method_table).call(null,this__8356.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__8361 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__8361.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__8361.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__8361.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__8361.method_cache,this__8361.method_table,this__8361.cached_hierarchy,this__8361.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__8362 = this;
return cljs.core.deref.call(null,this__8362.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__8363 = this;
return cljs.core.deref.call(null,this__8363.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__8364 = this;
return cljs.core.do_dispatch.call(null,mf,this__8364.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__8365__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__8365 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8365__delegate.call(this, _, args);
};
G__8365.cljs$lang$maxFixedArity = 1;
G__8365.cljs$lang$applyTo = (function (arglist__8366){
var _ = cljs.core.first(arglist__8366);
var args = cljs.core.rest(arglist__8366);
return G__8365__delegate.call(this, _, args);
});
return G__8365;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
