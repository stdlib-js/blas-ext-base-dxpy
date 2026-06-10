"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var p=q(function(C,d){
var v=5;function O(a,r,n,f,e,s,M){var i,u,o,t;if(a<=0)return e;if(i=f,u=M,n===1&&s===1){if(o=a%v,o>0)for(t=0;t<o;t++)e[u]+=r[i],i+=n,u+=s;if(a<v)return e;for(t=o;t<a;t+=v)e[u]+=r[i],e[u+1]+=r[i+1],e[u+2]+=r[i+2],e[u+3]+=r[i+3],e[u+4]+=r[i+4],i+=v,u+=v;return e}for(t=0;t<a;t++)e[u]+=r[i],i+=n,u+=s;return e}d.exports=O
});var x=q(function(D,j){
var m=require('@stdlib/strided-base-stride2offset/dist'),b=p();function g(a,r,n,f,e){return b(a,r,n,m(a,n),f,e,m(a,e))}j.exports=g
});var _=q(function(F,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),k=p();h(l,"ndarray",k);R.exports=l
});var w=require("path").join,y=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=_(),c,E=y(w(__dirname,"./native.js"));z(E)?c=A:c=E;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
