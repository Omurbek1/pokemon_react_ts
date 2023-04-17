"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[305],{17264:function(e,n,s){s.d(n,{T:function(){return m}});var o=s(74165),a=s(15861),i=s(69829),t=s(67799),c=s(29573),r=s(14509),l=s(16448),m=(0,i.hg)("pokemon/addPkemon",function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n,s){var a,i,m,d,p,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.getState,i=s.dispatch,e.prev=1,m=a(),d=m.app.userInfo,p=m.pokemon.userPokemons,null!==d&&void 0!==d&&d.email){e.next=5;break}return e.abrupt("return",i((0,l.fz)("Please login in order to add pokemon to your collection.")));case 5:if(-1!==p.findIndex((function(e){return e.name===n.name}))){e.next=16;break}return u=[],n.stats?u=n.types:n.types.forEach((function(e){return u.push(Object.keys(e).toString())})),e.next=11,(0,t.ET)(c.qF,{pokemon:{id:n.id,name:n.name,types:u},email:d.email});case 11:return e.next=13,i((0,r.v)());case 13:i((0,l.fz)("".concat(n.name," added to your collection."))),e.next=17;break;case 16:i((0,l.fz)("".concat(n.name," already part of your collection.")));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log({err:e.t0});case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(n,s){return e.apply(this,arguments)}}())},37305:function(e,n,s){s.r(n),s.d(n,{default:function(){return p}});s(72791);var o=s(35328),a=s(56355),i=s(57689),t=s(42178),c=s(64740),r=s(17264),l=s(91216),m=s(80184);var d=function(e){var n=e.pokemon,s=void 0===n?void 0:n,o=e.isEmpty,d=void 0!==o&&o,p=(0,i.s0)(),u=(0,c.T)(),v=function(e,n){var s=[],o=new Set;return e.forEach((function(e){e[Object.keys(e)[0]][n].forEach((function(e){o.has(e)||(s.push({name:e,image:l.U5[e].image}),o.add(e))}))})),s};return(0,m.jsxs)("div",{className:"compare-container",children:[d&&(0,m.jsxs)("div",{className:"empty",children:[(0,m.jsx)("button",{onClick:function(){return p("/search")},children:(0,m.jsx)(a.wEH,{})}),(0,m.jsx)("h3",{children:"Add Pokemon for Comparison"})]}),s&&(0,m.jsxs)("div",{className:"compare-element",children:[(0,m.jsxs)("div",{className:"compare-info",children:[(0,m.jsxs)("div",{className:"compare-details",children:[(0,m.jsx)("h3",{children:null===s||void 0===s?void 0:s.name}),(0,m.jsx)("img",{src:null===s||void 0===s?void 0:s.image,alt:"pokemon",className:"compare-image"})]}),(0,m.jsxs)("div",{className:"pokemon-types-container",children:[(0,m.jsxs)("div",{className:"pokemon-types",children:[(0,m.jsx)("h4",{className:"pokemon-type-title",children:"Type"}),(0,m.jsx)("div",{className:"pokemon-type-icons",children:null===s||void 0===s?void 0:s.types.map((function(e){var n=Object.keys(e);return(0,m.jsx)("div",{className:"pokemon-type",children:(0,m.jsx)("img",{src:e[n[0]].image,alt:"pokemon type",className:"pokemon-type-image",loading:"lazy"})})}))})]}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"pokemon-types",children:[(0,m.jsx)("h4",{className:"pokemon-type-title",children:"Strength"}),(0,m.jsx)("div",{className:"pokemon-type-icons",children:v(null===s||void 0===s?void 0:s.types,"strength").map((function(e){return(0,m.jsx)("div",{className:"pokemon-type",children:(0,m.jsx)("img",{src:e.image,alt:"",className:"pokemon-type-image"})})}))})]}),(0,m.jsxs)("div",{className:"pokemon-types",children:[(0,m.jsx)("h4",{className:"pokemon-type-title",children:"Weakness"}),(0,m.jsx)("div",{className:"pokemon-type-icons",children:v(null===s||void 0===s?void 0:s.types,"weakness").map((function(e){return(0,m.jsx)("div",{className:"pokemon-type",children:(0,m.jsx)("img",{src:e.image,alt:"",className:"pokemon-type-image"})})}))})]}),(0,m.jsxs)("div",{className:"pokemon-types",children:[(0,m.jsx)("h4",{className:"pokemon-type-title",children:"Resistance"}),(0,m.jsx)("div",{className:"pokemon-type-icons",children:v(null===s||void 0===s?void 0:s.types,"resistance").map((function(e){return(0,m.jsx)("div",{className:"pokemon-type",children:(0,m.jsx)("img",{src:e.image,alt:"",className:"pokemon-type-image"})})}))})]}),(0,m.jsxs)("div",{className:"pokemon-types",children:[(0,m.jsx)("h4",{className:"pokemon-type-title",children:"Vulnerable"}),(0,m.jsx)("div",{className:"pokemon-type-icons",children:v(null===s||void 0===s?void 0:s.types,"vulnerable").map((function(e){return(0,m.jsx)("div",{className:"pokemon-type",children:(0,m.jsx)("img",{src:e.image,alt:"",className:"pokemon-type-image"})})}))})]})]})]})]}),(0,m.jsxs)("div",{className:"compare-action-buttons",children:[(0,m.jsx)("button",{className:"compare-btn",onClick:function(){u((0,r.T)(s))},children:"Add"}),(0,m.jsx)("button",{className:"compare-btn",onClick:function(){return p("/pokemon/".concat(null===s||void 0===s?void 0:s.id))},children:"View"}),(0,m.jsx)("button",{className:"compare-btn",onClick:function(){return u((0,t.q7)({id:null===s||void 0===s?void 0:s.id}))},children:"Remove"})]})]},null===s||void 0===s?void 0:s.id)]})};var p=(0,o.Z)((function(){var e=(0,c.C)((function(e){return e.pokemon})).compareQueue;return(0,m.jsxs)("div",{className:"compare",children:[(0,m.jsx)(d,{pokemon:e[0],isEmpty:e.length<1}),(0,m.jsx)(d,{pokemon:e[1],isEmpty:e.length<2})]})}))},35328:function(e,n,s){s(72791);var o=s(80184);n.Z=function(e){return function(){return(0,o.jsx)("div",{className:"content",children:(0,o.jsx)(e,{})})}}}}]);
//# sourceMappingURL=305.f8ea200c.chunk.js.map