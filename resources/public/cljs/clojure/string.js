goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__8499 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__8500 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__8499.call(this,separator);
case  2 :
return join__8500.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__8508 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__8509 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__8502 = s;
var limit__8503 = limit;
var parts__8504 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__8503,1)))
{return cljs.core.conj.call(null,parts__8504,s__8502);
} else
{var temp__3695__auto____8505 = cljs.core.re_find.call(null,re,s__8502);

if(cljs.core.truth_(temp__3695__auto____8505))
{var m__8506 = temp__3695__auto____8505;

var index__8507 = s__8502.indexOf(m__8506);

{
var G__8511 = s__8502.substring((index__8507 + cljs.core.count.call(null,m__8506)));
var G__8512 = (limit__8503 - 1);
var G__8513 = cljs.core.conj.call(null,parts__8504,s__8502.substring(0,index__8507));
s__8502 = G__8511;
limit__8503 = G__8512;
parts__8504 = G__8513;
continue;
}
} else
{return cljs.core.conj.call(null,parts__8504,s__8502);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__8508.call(this,s,re);
case  3 :
return split__8509.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__8514 = s.length;

while(true){
if(cljs.core.truth_((index__8514 === 0)))
{return "";
} else
{var ch__8515 = cljs.core.get.call(null,s,(index__8514 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____8516 = cljs.core._EQ_.call(null,ch__8515,"\n");

if(cljs.core.truth_(or__3548__auto____8516))
{return or__3548__auto____8516;
} else
{return cljs.core._EQ_.call(null,ch__8515,"\r");
}
})()))
{{
var G__8517 = (index__8514 - 1);
index__8514 = G__8517;
continue;
}
} else
{return s.substring(0,index__8514);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__8518 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____8519 = cljs.core.not.call(null,s__8518);

if(cljs.core.truth_(or__3548__auto____8519))
{return or__3548__auto____8519;
} else
{var or__3548__auto____8520 = cljs.core._EQ_.call(null,"",s__8518);

if(cljs.core.truth_(or__3548__auto____8520))
{return or__3548__auto____8520;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__8518);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__8521 = (new goog.string.StringBuffer());
var length__8522 = s.length;

var index__8523 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__8522,index__8523)))
{return buffer__8521.toString();
} else
{var ch__8524 = s.charAt(index__8523);

var temp__3695__auto____8525 = cljs.core.get.call(null,cmap,ch__8524);

if(cljs.core.truth_(temp__3695__auto____8525))
{var replacement__8526 = temp__3695__auto____8525;

buffer__8521.append(cljs.core.str.call(null,replacement__8526));
} else
{buffer__8521.append(ch__8524);
}
{
var G__8527 = (index__8523 + 1);
index__8523 = G__8527;
continue;
}
}
break;
}
});
