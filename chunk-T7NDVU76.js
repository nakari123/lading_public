var v=Object.create;var m=Object.defineProperty,w=Object.defineProperties,x=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,A=Reflect.get;var n=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a);var r=(a,b,c)=>b in a?m(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,D=(a,b)=>{for(var c in b||={})o.call(b,c)&&r(a,c,b[c]);if(l)for(var c of l(b))t.call(b,c)&&r(a,c,b[c]);return a},E=(a,b)=>w(a,y(b));var F=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(b,c)=>(typeof require<"u"?require:b)[c]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var G=(a,b)=>{var c={};for(var d in a)o.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&l)for(var d of l(a))b.indexOf(d)<0&&t.call(a,d)&&(c[d]=a[d]);return c};var H=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),I=(a,b)=>{for(var c in b)m(a,c,{get:b[c],enumerable:!0})},B=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let f of z(b))!o.call(a,f)&&f!==c&&m(a,f,{get:()=>b[f],enumerable:!(d=x(b,f))||d.enumerable});return a};var J=(a,b,c)=>(c=a!=null?v(s(a)):{},B(b||!a||!a.__esModule?m(c,"default",{value:a,enumerable:!0}):c,a));var K=(a,b,c)=>A(s(a),c,b);var L=(a,b,c)=>new Promise((d,f)=>{var h=e=>{try{g(c.next(e))}catch(i){f(i)}},j=e=>{try{g(c.throw(e))}catch(i){f(i)}},g=e=>e.done?d(e.value):Promise.resolve(e.value).then(h,j);g((c=c.apply(a,b)).next())}),C=function(a,b){this[0]=a,this[1]=b},M=(a,b,c)=>{var d=(j,g,e,i)=>{try{var p=c[j](g),q=(g=p.value)instanceof C,u=p.done;Promise.resolve(q?g[0]:g).then(k=>q?d(j==="return"?j:"next",g[1]?{done:k.done,value:k.value}:k,e,i):e({value:k,done:u})).catch(k=>d("throw",k,e,i))}catch(k){i(k)}},f=j=>h[j]=g=>new Promise((e,i)=>d(j,g,e,i)),h={};return c=c.apply(a,b),h[n("asyncIterator")]=()=>h,f("next"),f("throw"),f("return"),h};var N=(a,b,c)=>(b=a[n("asyncIterator")])?b.call(a):(a=a[n("iterator")](),b={},c=(d,f)=>(f=a[d])&&(b[d]=h=>new Promise((j,g,e)=>(h=f.call(a,h),e=h.done,Promise.resolve(h.value).then(i=>j({value:i,done:e}),g)))),c("next"),c("return"),b);export{D as a,E as b,F as c,G as d,H as e,I as f,J as g,K as h,L as i,C as j,M as k,N as l};
