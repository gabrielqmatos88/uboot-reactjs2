(this["webpackJsonpuboot-var-parser"]=this["webpackJsonpuboot-var-parser"]||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=a(1),u=a(8),s=a.n(u),m=a(12),i={login:function(){var e=Object(m.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("trying to log in",t,a),e.abrupt("return",new Promise((function(e,n){setTimeout((function(){"matos"===t&&"123"===a?(console.log("logged in"),e({username:"matos",token:"aaa"})):(console.log("not logged in"),n(!1))}),1e3+1e3*Math.random())})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},f=Object(n.createContext)({}),E=function(e){var t=e.children,a=Object(n.useState)({}),r=Object(o.a)(a,2),c=r[0],u=r[1],E=function(){var e=Object(m.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.login(t,a).then((function(e){console.log("promise result",e),u(e)}),(function(){console.log("promise result not logged"),u({})}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return l.a.createElement(f.Provider,{value:{user:c,login:E,logout:function(){u({})}}},t)},p=a(13),b=a(2),d=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h1",null,"Custom tools")))},v=function(e){var t=e.children;return l.a.createElement("div",null,l.a.createElement("h2",null,t),l.a.createElement("hr",null))},g=/\$\{([a-z0-9_-]+)\}/i,h=a(14),N=function(e){var t=e.ipAddress,a=e.onDataChange,r=Object(n.useState)((t||"...").split(".")),c=Object(o.a)(r,2),u=c[0],s=c[1];Object(n.useEffect)((function(){s((t||"...").split("."))}),[t]);var m=function(e,t){var n=Object(h.a)(u);(/^\d{1,3}$/.test(e.target.value)||""===e.target.value)&&(console.log("valid value octet",t+1),n[t]=e.target.value,console.log("ipInfoTmp",n.join(".")),s(n),a&&a(n.join(".")))};return l.a.createElement("div",{className:"ip-input"},l.a.createElement("input",{className:"form-control",type:"text",name:"ip1",value:u[0],maxLength:3,onChange:function(e){m(e,0)}}),l.a.createElement("span",null,"."),l.a.createElement("input",{className:"form-control",type:"text",name:"ip2",value:u[1],maxLength:3,onChange:function(e){m(e,1)}}),l.a.createElement("span",null,"."),l.a.createElement("input",{className:"form-control",type:"text",name:"ip3",value:u[2],maxLength:3,onChange:function(e){m(e,2)}}),l.a.createElement("span",null,"."),l.a.createElement("input",{className:"form-control",type:"text",name:"ip4",value:u[3],maxLength:3,onChange:function(e){m(e,3)}}))},j=function(e){var t=Object(n.useState)(e.value),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){c(e.value)}),[e.value]),!0===e.debug?l.a.createElement("input",Object.assign({},e,{value:r,onChange:function(t){if(e.onChange){for(var a=arguments.length,n=new Array(a>1?a-1:0),l=1;l<a;l++)n[l-1]=arguments[l];e.onChange.apply(e,[t].concat(n))}c(t.target.value)}})):null},O=function(e){var t=e.result,a=e.alertPosition,r=e.debug;a=a||"bottom";var c={},u=Object(n.useState)(""),s=Object(o.a)(u,2),m=s[0],i=s[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),p=E[0],b=E[1];return Object(n.useEffect)((function(){i(t)}),[t]),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},!!p&&"top"===a&&l.a.createElement("div",{className:"alert alert-success mb-2"},p),l.a.createElement("div",{className:"result-container"},l.a.createElement("div",{className:"result"},m),l.a.createElement("input",{className:"hidden-field",ref:function(e){return c=e},type:"text",onChange:function(){},value:m}),l.a.createElement("button",{className:"btn btn-secondary",onClick:function(){c.select(),document.execCommand("copy"),b("Copied!"),setTimeout((function(){b("")}),2e3)}},"Copy")),!!p&&"bottom"===a&&l.a.createElement("div",{className:"alert alert-success mt-2"},p),l.a.createElement(j,{debug:r,type:"text",className:"form-control"})))},C=function(e){var t=e.pages;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"nav nav-pills flex-column sidebar"},t.map((function(e,t){return!1===e.visible?null:l.a.createElement("li",{className:"nav-item",key:t+1},l.a.createElement(p.b,{className:"nav-link",key:t+1,to:e.path},e.label?e.label:e.path))}))))},y=function(e){function t(e,t){return e<<t|e>>>32-t}function a(e,t){var a,n,l,r,c;return l=2147483648&e,r=2147483648&t,c=(1073741823&e)+(1073741823&t),(a=1073741824&e)&(n=1073741824&t)?2147483648^c^l^r:a|n?1073741824&c?3221225472^c^l^r:1073741824^c^l^r:c^l^r}function n(e,n,l,r,c,o,u){return e=a(e,a(a(function(e,t,a){return e&t|~e&a}(n,l,r),c),u)),a(t(e,o),n)}function l(e,n,l,r,c,o,u){return e=a(e,a(a(function(e,t,a){return e&a|t&~a}(n,l,r),c),u)),a(t(e,o),n)}function r(e,n,l,r,c,o,u){return e=a(e,a(a(function(e,t,a){return e^t^a}(n,l,r),c),u)),a(t(e,o),n)}function c(e,n,l,r,c,o,u){return e=a(e,a(a(function(e,t,a){return t^(e|~a)}(n,l,r),c),u)),a(t(e,o),n)}function o(e){var t,a="",n="";for(t=0;t<=3;t++)a+=(n="0"+(e>>>8*t&255).toString(16)).substr(n.length-2,2);return a}var u,s,m,i,f,E,p,b,d,v;for(u=function(e){for(var t,a=e.length,n=a+8,l=16*((n-n%64)/64+1),r=[l-1],c=0,o=0;o<a;)c=o%4*8,r[t=(o-o%4)/4]=r[t]|e.charCodeAt(o)<<c,o++;return c=o%4*8,r[t=(o-o%4)/4]=r[t]|128<<c,r[l-2]=a<<3,r[l-1]=a>>>29,r}(e=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",a=0;a<e.length;a++){var n=e.charCodeAt(a);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}(e)),p=1732584193,b=4023233417,d=2562383102,v=271733878,s=0;s<u.length;s+=16)m=p,i=b,f=d,E=v,p=n(p,b,d,v,u[s+0],7,3614090360),v=n(v,p,b,d,u[s+1],12,3905402710),d=n(d,v,p,b,u[s+2],17,606105819),b=n(b,d,v,p,u[s+3],22,3250441966),p=n(p,b,d,v,u[s+4],7,4118548399),v=n(v,p,b,d,u[s+5],12,1200080426),d=n(d,v,p,b,u[s+6],17,2821735955),b=n(b,d,v,p,u[s+7],22,4249261313),p=n(p,b,d,v,u[s+8],7,1770035416),v=n(v,p,b,d,u[s+9],12,2336552879),d=n(d,v,p,b,u[s+10],17,4294925233),b=n(b,d,v,p,u[s+11],22,2304563134),p=n(p,b,d,v,u[s+12],7,1804603682),v=n(v,p,b,d,u[s+13],12,4254626195),d=n(d,v,p,b,u[s+14],17,2792965006),p=l(p,b=n(b,d,v,p,u[s+15],22,1236535329),d,v,u[s+1],5,4129170786),v=l(v,p,b,d,u[s+6],9,3225465664),d=l(d,v,p,b,u[s+11],14,643717713),b=l(b,d,v,p,u[s+0],20,3921069994),p=l(p,b,d,v,u[s+5],5,3593408605),v=l(v,p,b,d,u[s+10],9,38016083),d=l(d,v,p,b,u[s+15],14,3634488961),b=l(b,d,v,p,u[s+4],20,3889429448),p=l(p,b,d,v,u[s+9],5,568446438),v=l(v,p,b,d,u[s+14],9,3275163606),d=l(d,v,p,b,u[s+3],14,4107603335),b=l(b,d,v,p,u[s+8],20,1163531501),p=l(p,b,d,v,u[s+13],5,2850285829),v=l(v,p,b,d,u[s+2],9,4243563512),d=l(d,v,p,b,u[s+7],14,1735328473),p=r(p,b=l(b,d,v,p,u[s+12],20,2368359562),d,v,u[s+5],4,4294588738),v=r(v,p,b,d,u[s+8],11,2272392833),d=r(d,v,p,b,u[s+11],16,1839030562),b=r(b,d,v,p,u[s+14],23,4259657740),p=r(p,b,d,v,u[s+1],4,2763975236),v=r(v,p,b,d,u[s+4],11,1272893353),d=r(d,v,p,b,u[s+7],16,4139469664),b=r(b,d,v,p,u[s+10],23,3200236656),p=r(p,b,d,v,u[s+13],4,681279174),v=r(v,p,b,d,u[s+0],11,3936430074),d=r(d,v,p,b,u[s+3],16,3572445317),b=r(b,d,v,p,u[s+6],23,76029189),p=r(p,b,d,v,u[s+9],4,3654602809),v=r(v,p,b,d,u[s+12],11,3873151461),d=r(d,v,p,b,u[s+15],16,530742520),p=c(p,b=r(b,d,v,p,u[s+2],23,3299628645),d,v,u[s+0],6,4096336452),v=c(v,p,b,d,u[s+7],10,1126891415),d=c(d,v,p,b,u[s+14],15,2878612391),b=c(b,d,v,p,u[s+5],21,4237533241),p=c(p,b,d,v,u[s+12],6,1700485571),v=c(v,p,b,d,u[s+3],10,2399980690),d=c(d,v,p,b,u[s+10],15,4293915773),b=c(b,d,v,p,u[s+1],21,2240044497),p=c(p,b,d,v,u[s+8],6,1873313359),v=c(v,p,b,d,u[s+15],10,4264355552),d=c(d,v,p,b,u[s+6],15,2734768916),b=c(b,d,v,p,u[s+13],21,1309151649),p=c(p,b,d,v,u[s+4],6,4149444226),v=c(v,p,b,d,u[s+11],10,3174756917),d=c(d,v,p,b,u[s+2],15,718787259),b=c(b,d,v,p,u[s+9],21,3951481745),p=a(p,m),b=a(b,i),d=a(d,f),v=a(v,E);return(o(p)+o(b)+o(d)+o(v)).toLowerCase()},x=a(23),S=[{path:"/",component:function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),u=Object(o.a)(c,2),s=u[0],m=u[1],i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("textarea",{className:"input-area",onChange:function(e){r(e.target.value)},value:a}))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:"table table-striped table-bordered table-cmd"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Variavel"),l.a.createElement("th",null,"Valor")),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},l.a.createElement("input",{className:"form-control",type:"text"})))),l.a.createElement("tbody",null,s.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.val))})))))};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(v,null,"Uboot"),s.length?l.a.createElement(f,null):i(),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"}),l.a.createElement("div",{className:"col-4 text-right"},!s.length&&l.a.createElement("button",{className:"btn btn-primary btn-block btn-parse",onClick:function(){var e={},t=[];a.split("\n").forEach((function(a){var n=a.split("="),l=Object(o.a)(n,2),r=l[0],c=l[1];e[r]={name:r,val:c,origVal:c,containsVars:g.test(c)},t.push(e[r])})),t.forEach((function(t){if(t.containsVars){var a=/\$\{([a-z0-9_-]+)\}/gi.exec(t.val);a.splice(1,a.length).forEach((function(a){e[a]&&(t.val=t.val.replace("${"+a+"}",e[a].val))}))}})),console.log("parsedVars",e),m(t.sort((function(e,t){return t.name-e.name})))}},"Parse"),s.length>0&&l.a.createElement("button",{className:"btn btn-primary btn-block btn-parse",onClick:function(){m([])}},"Back")))))},label:"Uboot",exact:!0},{path:"/dload",component:function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("192.168.0.1"),u=Object(o.a)(c,2),s=u[0],m=u[1],i=Object(n.useState)("192.168.0.10"),f=Object(o.a)(i,2),E=f[0],p=f[1],b=Object(n.useState)("FAST3890V3_SSC_EXT_sw18.76.10.9x-TEST_monolithic.bin"),d=Object(o.a)(b,2),g=d[0],h=d[1];return Object(n.useEffect)((function(){r("dload -a1 ".concat(s,":").concat(g))}),[s,g]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null,"Dload command"),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ip template"),l.a.createElement("select",{style:{float:"left"},value:E,key:E,onChange:function(e){p(e.target.value),e.target.value&&m(e.target.value)}},l.a.createElement("option",{value:""},"None"),["192.168.0.10","192.168.1.10","192.168.2.10","10.10.10.10"].map((function(e){return l.a.createElement("option",{key:e},e)})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ip address:"),l.a.createElement(N,{ipAddress:s,onChange:function(e){m(e)}})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Filename:"),l.a.createElement("input",{placeholder:"filename",onChange:function(e){return function(e,t){t(e.target.value)}(e,h)},className:"form-control",type:"text",value:g}))))),l.a.createElement(O,{result:a}))},label:"Dload",exact:!0},{path:"/md5",component:function(e){e.id;var t=Object(n.useState)(["","admin","expert","internal"]),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),s=Object(o.a)(u,2),m=s[0],i=s[1];return l.a.createElement("div",null,r.map((function(e){return l.a.createElement("b",{key:""===e?"empty":e},""===e?"empty":e," => ",y(e),l.a.createElement("br",null))})),l.a.createElement("input",{type:"text",name:"newSample",onChange:function(e){i(e.target.value)}}),l.a.createElement("button",{onClick:function(){null!==r.find((function(e){return e===m}))&&c([].concat(Object(h.a)(r),[m]))}},"Add"))},label:"MD5",exact:!0},{path:"/change-pass",component:function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("admin"),u=Object(o.a)(c,2),s=u[0],m=u[1],i=Object(n.useState)("md5"),f=Object(o.a)(i,2),E=f[0],p=f[1],b=Object(n.useState)("admin"),d=Object(o.a)(b,2),g=d[0],h=d[1],N=Object(n.useState)(y("admin")),j=Object(o.a)(N,2),C=j[0],S=j[1];Object(n.useEffect)((function(){r("xmo-client -p \"Device/UserAccounts/Users/User[Login='".concat(s,'\']/Password" -s "').concat(C,'"'))}),[s,C]),Object(n.useEffect)((function(){k(E)}),[g]);var w=function(e,t){return e===t?"btn btn-sm btn-primary":"btn btn-sm btn-secondary"},k=function(e){S("sha-512"===e?Object(x.sha512)(g):y(g))};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(v,null,"Change password"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 encrypt-area"},l.a.createElement("button",{className:w("md5",E),onClick:function(){p("md5"),k("md5")}},"MD5"),l.a.createElement("button",{className:w("sha-512",E),onClick:function(){p("sha-512"),k("sha-512")}},"SHA-512"))),l.a.createElement("div",{className:"form-row mb-3 text-left"},l.a.createElement("div",{className:"col-12"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{id:"username",name:"username",type:"text",className:"form-control",value:s,onChange:function(e){m(e.target.value)}}))),l.a.createElement("div",{className:"form-row mb-3 text-left"},l.a.createElement("div",{className:"col-12"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{id:"password",name:"password",type:"text",className:"form-control",value:g,onChange:function(e){h(e.target.value)}}))),l.a.createElement(O,{result:a,debug:"true"})))},label:"Change pass",exact:!0}],w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(p.a,null,l.a.createElement("div",{className:"row"},l.a.createElement(d,null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement(C,{pages:S})),l.a.createElement("div",{className:"col-8"},l.a.createElement(b.c,null,S.map((function(e,t){return l.a.createElement(b.a,Object.assign({},e,{key:t+1}))}))))))))},k=(a(36),function(){var e=Object(n.useContext)(f),t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),s=Object(o.a)(u,2),m=s[0],i=s[1];return l.a.createElement("div",{className:"login-container"},l.a.createElement("div",{className:"login-box"},l.a.createElement("div",{className:"logo"},l.a.createElement("h3",null,"Help tools")),l.a.createElement("div",{className:"input-area"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Login",onChange:function(e){c(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Password",onChange:function(e){i(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{onClick:function(){r&&e.login(r,m)},className:"btn btn-primary btn-block"},"Login")),l.a.createElement("a",{href:"https://gabrielqmatos88.github.io/uboot-reactjs2/forgot-pass",className:"link-forgot-pwd"},"forgot my password"))))});a(37);function A(){var e=Object(n.useContext)(f),t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){c(e.user),console.log("token",r)}),[e.user]),l.a.createElement(E,null,e.user?l.a.createElement(k,null):l.a.createElement(w,null))}var L=document.getElementById("root");c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),L)}},[[24,1,2]]]);
//# sourceMappingURL=main.e95d397f.chunk.js.map