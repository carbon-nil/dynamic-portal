(()=>{var t={806:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,c)}a((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=c(0),s.throw=c(1),s.return=c(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(t,i)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(896),c=i(n(928)),a=n(935),u=n(81),l=n(932);!function(){var t=this;s.promises.readFile(c.default.join(process.cwd(),"config.json"),"utf-8").then((function(t){var e=JSON.parse(t),n=parseInt(e.rootHost.split(/:/,2)[1],10)||80;(0,u.runServer)(n,e)})).catch((function(e){return r(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return(0,a.log)("Error reading config file: ".concat(e.message),"Error"),[4,s.promises.writeFile(c.default.join(process.cwd(),"config.json"),'{"version":"'.concat(process.env.npm_package_version,'","rootHost":"localhost","childHost":[]}'))];case 1:return t.sent(),(0,l.exit)(1),[2]}}))}))}))}()},206:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkPing=function(t){return new Promise((function(e){return o.default.sys.probe(t,(function(t){e(t||!1)}))}))},e.redirectServer=function(t,e,n,r,o){void 0===n&&(n=""),void 0===r&&(r={}),void 0===o&&(o=!1);var c=o?function(t){return Object.keys(t).map((function(e){return"".concat(e,"=").concat(s.default.compress(t[e]))})).join("&")}(r):Object.keys(r).join("&");(0,i.log)("Redirecting to ".concat(e).concat(n.length?"/"+n:"").concat(c.length?"?"+c:""),"Debug"),t.writeHead(302,{Location:"http://".concat(e).concat(n.length?"/"+n:"").concat(c.length?"?"+c:"")}),t.end()},e.parseQuery=function(t){return t.split("&").reduce((function(t,e){var n=e.split("="),r=n[0],o=n[1];return t[r]=s.default.expand(o),t}),{})};var o=r(n(113)),i=n(935),s=r(n(30))},81:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.runServer=function(t,e){i.default.createServer((function(t,n){t.setEncoding("utf-8");var r=(0,u.parseRequest)(t),i=r.url.replace(/^\//,"").split("?",2),f=i[0],p=i[1],h=p?p.split("&").reduce((function(t,e){var n=e.split("="),r=n[0],o=n[1];return t[r]=o,t}),{}):{},d=p?(0,l.parseQuery)(p):{};if((0,a.log)("".concat(r.Host,"/").concat(f," : ").concat(JSON.stringify(h)," ").concat(JSON.stringify(d)),"Debug"),r.Host===e.rootHost){if(""===f)return n.writeHead(303,{"Content-Type":"text/html"}),void n.end('<html><head><meta http-equiv="refresh" content="0;url=/index.html"></head></html>');if("api/redirect"!==f){if(!o.default.existsSync(s.default.join(process.cwd(),"resources",f)))return n.writeHead(404,{"Content-Type":"text/plain"}),void n.end("Not Found");(0,c.getHTML)(s.default.join(process.cwd(),"resources",f)).then((function(t){n.end(t)})).catch((function(t){n.writeHead(500,{"Content-Type":"text/plain"}),n.end("Internal Server Error"),(0,a.log)("Error reading file: ".concat(t.message),"Error")}))}else{n.writeHead(200,{"Content-Type":"text/event-stream",Connection:"keep-alive","Cache-Control":"no-cache"}),n.write("data: connected\n\n");var m=setInterval((function(){null!==d.h&&(0,l.checkPing)(d.h.split(/:/,2)[0]).then((function(t){t?(n.write("data: redirect\n\n"),n.end(),clearInterval(m)):n.write("data: ping\n\n")})).catch((function(t){(0,a.log)("Error pinging host: ".concat(t.message),"Error"),n.writeHead(500,{"Content-Type":"text/plain"}),n.end("Internal Server Error"),clearInterval(m)}))}),5e3)}}else e.childHost.some((function(t){return t===r.Host}))?(0,l.checkPing)(r.Host.split(":",2)[0]).then((function(t){t?(0,l.redirectServer)(n,r.Host,f,h):(0,l.redirectServer)(n,e.rootHost,"fallback.html",Object.assign({h:r.Host,p:f},d),!0)})).catch((function(t){(0,a.log)("Error pinging host: ".concat(t.message),"Error"),n.writeHead(500,{"Content-Type":"text/plain"}),n.end("Internal Server Error")})):(n.writeHead(404,{"Content-Type":"text/plain"}),n.end("Not Found"))})).listen(t),(0,a.log)("Server is running on port ".concat(t))};var o=r(n(896)),i=r(n(611)),s=r(n(928)),c=n(341),a=n(935),u=n(38),l=n(206)},341:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,c)}a((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=c(0),s.throw=c(1),s.return=c(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(t,i)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.getHTML=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,i.promises.readFile(t,"utf-8").then((function(t){return t}))];case 1:return[2,e.sent()]}}))}))};var i=n(896)},935:(t,e)=>{"use strict";function n(t,e){void 0===e&&(e="Info");for(var n=new Date,r=("00"+n.getHours()).slice(-2),o=("00"+n.getMinutes()).slice(-2),i=("00"+n.getSeconds()).slice(-2),s=0,c=t.split("\n");s<c.length;s++){var a=c[s];console.log("[".concat(r,":").concat(o,":").concat(i,"] [").concat(e,"] ").concat(a))}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=n,e.logHTML=function(t){for(var e="".concat(t.method," ").concat(t.url," HTTP/").concat(t.httpVersion,"\n"),r=void 0,o=0,i=t.rawHeaders;o<i.length;o++){var s=i[o];void 0===r?r=s:(e+="".concat(r,": ").concat(s,"\n"),r=void 0)}e+="\n";var c="";t.on("data",(function(t){return c+=t})),t.on("end",(function(){e+=c})),n(e)}},38:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parseRequest=function(t){for(var e={method:t.method||"",url:t.url||"",httpVersion:t.httpVersion||""},n=void 0,r=0,o=t.rawHeaders;r<o.length;r++){var i=o[r];void 0===n?n=i:(e[n]=i,n=void 0)}var s="";return t.on("data",(function(t){return s+=t})),t.on("end",(function(){e.body+=s})),e}},30:(t,e,n)=>{t=n.nmd(t);const r=(()=>{function t(t){const e=function(t){if("string"!=typeof t)return null;const e=[];for(let n=t.length,r=0;r<n;r++){const o=t.charCodeAt(r);if(o>=55296&&o<=56319){if(r+1>=n)return null;e.push(64+(1023&o)<<10|1023&t.charCodeAt(++r))}else e.push(o)}return e}(t);if(null===e)return null;let n="";for(let t=e.length,r=0;r<t;r++){const t=e[r];if(t<=127)n+=String.fromCharCode(t);else if(t<=2047)n+=String.fromCharCode(192|t>>>6,128|191&t);else if(t<=65535)n+=String.fromCharCode(224|t>>>12,128|t>>>6&191,128|191&t);else{if(!(t<=1114111))return null;n+=String.fromCharCode(240|t>>>18,128|t>>>12&191,128|t>>>6&191,128|191&t)}}return n}function e(t){if("string"!=typeof t)return null;let e="";for(let n=0,r=t.length;n<r;n++){const o=t.charCodeAt(n);if(o<=127)e+=String.fromCharCode(o);else if(o>=194&&o<=223){if(n+1>=r)return null;const i=t.charCodeAt(++n);e+=String.fromCharCode((31&o)<<6|63&i)}else if(o>=224&&o<=239){if(n+2>=r)return null;const i=t.charCodeAt(++n),s=t.charCodeAt(++n);e+=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}else{if(!(o>=240&&o<=244))return null;{if(n+3>=r)return null;const i=t.charCodeAt(++n),s=t.charCodeAt(++n),c=t.charCodeAt(++n);e+=String.fromCharCode(55296|((7&o)<<8|(63&i)<<2|s>>>4&3)-64,56320|(15&s)<<6|63&c)}}}return e}const n=[258,258,130,99],r=[256,256,128,97],o=[257,257,129,98],s=1e3,c=(()=>{const t=[];let e=0;for(i=0;i<128;i++)i<32&&9!==i&&10!==i||127===i?t.push(null):t.push(e++);return t})(),a=(()=>{const t=[];for(i=0;i<c.length;i++)null!==c[i]&&t.push(i);return t})(),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",l=(()=>{const t=new Map;for(let e=64,n=0;n<e;n++)t.set(u[n],n);return t})();function f(t){let e=1,n=0;for(;t>=e;)e<<=1,n++;return n}function p(t,e){const n=[];for(let r=0;r<e;r++){n.push(null);let e=r;for(;e>0&&n[e-1].count<t[r];)n[e]=n[e-1],e--;n[e]={count:t[r],symbol:r,left:null,right:null}}for(;n.length>1;){const t={count:n[n.length-2].count+n[n.length-1].count,symbol:-1,left:n[n.length-2],right:n[n.length-1]};n.pop();let e=n.length-1;for(;e>0&&n[e-1].count<t.count;)n[e]=n[e-1],e--;n[e]=t}return n[0]}function h(t,e){const n=[];for(let t=0;t<e;t++)n.push(null);const r={buf:new Uint8Array(e+7>>>3),bitNum:0},o=t=>{if(t.symbol>=0){const e=r.bitNum,o=e+7>>>3,i=new Uint8Array(o);for(let t=0;t<o;t++)i[t]=r.buf[t];n[t.symbol]={code:i,bitNum:e}}else{const e=r.bitNum;r.buf[e>>>3]&=~(1<<7-e%8),r.bitNum++,o(t.left),r.buf[e>>>3]|=1<<7-e%8,o(t.right),r.bitNum--}};return o(t),n}return{compress:function(e,i=!0){let a="",l=0,d=0;const m=i?6:8,g=t=>{const e=[3];let n=t;for(;0!==n;)n--,e.push(n%3),n=Math.floor(n/3);const r=new Uint8Array(2*e.length+6>>>3);let o=0,i=0;for(let t=e.length-1;t>=0;t--)i=(i<<2)+e[t],o+=2,o%8==0&&(r[(o>>>3)-1]=i,i=0);if(o%8!=0){const t=8-o%8;r[o>>>3]=i<<t}return{codeBuf:r,bitCnt:o}},v=(t,e)=>{let n=0,r=0,o=e;for(;o>0;)l=(l<<1)+(t[r]>>7-n&1),++d===m&&(a+=i?u[l]:String.fromCharCode(l),l=0,d=0),8==++n&&(n=0,r++),o--};if("string"!=typeof e)return null;const _=(t=>{const e=[];for(let t=0;t<256;t++)e.push(0);for(let n=t.length,r=0;r<n;r++){if(t.charCodeAt(r)>=256)return 0;e[t.charCodeAt(r)]++}for(let t=128;t<256;t++)if(e[t]>0)return 1;for(let t=c.length,n=0;n<=t;n++)if(null===c[n]&&e[n]>0)return 2;return 3})(e),y=n[_],w=r[_],S=o[_];let x;if(0===_){if(x=t(e),null===x)return null}else if(3===_){const t=c;x="";for(let n=e.length,r=0;r<n;r++)x+=String.fromCharCode(t[e.charCodeAt(r)])}else x=e;let b=[];for(let t=0;t<y;t++)b.push(.25);(t=>{const e=new Uint8Array(1);e[0]=t<<6,v(e,2)})(_);const C=[];for(let t=0;t<256;t++)C.push(null);const E=[];let A,O,T=0,k=0,H=x.length;for(;(k<256||k%8==0)&&(A=p(b,y),O=h(A,y)),!(T>=H);){let t=x.charCodeAt(T),e=0,n=0;if(T>0){let r=C[t];for(;null!==r&&T-r<=2048;){let t=1;for(;T+t-1<x.length&&x[T+t]===x[r+t]&&(t++,!(t>=s)););if(t>e&&(e=t,n=r,e>=s))break;r=E[r]}}e>=3&&(t=w),v(O[t].code,O[t].bitNum);let r=1;if(t===w){const t=g(e-3);v(t.codeBuf,t.bitCnt);const o=T-n-1,i=f(Math.min(T-1,2047)),s=new Uint8Array(2);i<=8?s[0]=o<<8-i:(s[0]=o>>i-8,s[1]=o<<16-i&255),v(s,i),r=e}for(let t=0;t<r;t++)E.push(C[x.charCodeAt(T)]),C[x.charCodeAt(T)]=T,T++;k++,b[t]++}return d>0&&(l=(l<<m-d)+(O[S].code[0]>>d+8-m),a+=i?u[l]:String.fromCharCode(l)),a},expand:function(t,i=!0){let c,u,h;const d=new Uint8Array(t.length),m=i?6:8,g=()=>{const t=h>>m-u-1&1;return++u===m&&(u=0,c++,c<O&&(h=d[c])),t},v=()=>{let t=0,e=0;do{if(c>=d.length)return-1;if(t=g(),c>=d.length)return-1;t=(t<<1)+g(),t<3&&(e=3*e+t+1)}while(t<3);return e};if("string"!=typeof t||0===t.length)return null;for(let e=t.length,n=0;n<e;n++){let e;if(i){if(e=l.get(t[n]),void 0===e)return null}else if(e=t.charCodeAt(n),e>=256)return null;d[n]=e}c=0,u=0,h=d[0];const _=(()=>{let t=g();return t=(t<<1)+g(),t})(),y=n[_],w=r[_],S=o[_];let x=[];for(let t=0;t<y;t++)x.push(.25);let b="",C=p(x,y),E=C,A=0;const O=d.length;let T=0;for(;c<O;)if(E=g()?E.right:E.left,E.symbol>=0){if(E.symbol===S)break;if(E.symbol===w){const t=v();if(t<0)return null;const e=t+3;if(e>s)return null;let n=0;const r=f(Math.min(T-1,2047));for(let t=0;t<r;t++){if(c>=O)return null;n=(n<<1)+g()}if(n>=T)return null;for(let t=0;t<e;t++)b+=b[T-n-1+t];T+=e}else b+=String.fromCharCode(E.symbol),T++;x[E.symbol]++,A++,(A<256||A%8==0)&&(C=p(x,y)),E=C}if(0===_){if(b=e(b),null===b)return null}else if(3===_){t="";for(let e=b.length,n=0;n<e;n++)t+=String.fromCharCode(a[b.charCodeAt(n)]);b=t}return b},encodeUtf8:t,decodeUtf8:e}})();null!=t&&(t.exports=r)},113:(t,e,n)=>{var r={};r.sys=n(9),r.promise=n(973),t.exports=r},55:(t,e,n)=>{"use strict";var r=n(23),o=n(459),i=n(394),s=n(447);function c(){}c.isLinux=function(t){return["aix","android","linux"].indexOf(t)>=0},c.isMacOS=function(t){return["darwin","freebsd"].indexOf(t)>=0},c.isWindow=function(t){return t&&null!==t.match(/^win/)},c.isPlatformSupport=function(t){return this.isWindow(t)||this.isLinux(t)||this.isMacOS(t)},c.getExecutablePath=function(t,e){if(!this.isPlatformSupport(t))throw new Error(r.format("Platform |%s| is not support",t));var n=null;return"aix"===t?n="/usr/sbin/ping":c.isLinux(t)?n=e?"ping6":"ping":c.isWindow(t)?n=process.env.SystemRoot+"/system32/ping.exe":c.isMacOS(t)&&(n=e?"/sbin/ping6":"/sbin/ping"),n},c.createBuilder=function(t){if(!this.isPlatformSupport(t))throw new Error(r.format("Platform |%s| is not support",t));var e=null;return c.isLinux(t)?e=o:c.isWindow(t)?e=s:c.isMacOS(t)&&(e=i),e},t.exports=c},459:(t,e,n)=>{"use strict";var r=n(23),o={},i={numeric:!0,timeout:2,deadline:!1,min_reply:1,v6:!1,sourceAddr:"",packetSize:56,extra:[]};o.getCommandArguments=function(t,e){var n=e||{},o=[];return["numeric","timeout","deadline","min_reply","v6","sourceAddr","extra","packetSize"].forEach((function(t){"boolean"!=typeof n[t]&&(n[t]=n[t]||i[t])})),n.numeric&&o.push("-n"),n.timeout&&(o=o.concat(["-W",r.format("%d",n.timeout)])),n.deadline&&(o=o.concat(["-w",r.format("%d",n.deadline)])),n.min_reply&&(o=o.concat(["-c",r.format("%d",n.min_reply)])),n.sourceAddr&&(o=o.concat(["-I",r.format("%s",n.sourceAddr)])),n.packetSize&&(o=o.concat(["-s",r.format("%d",n.packetSize)])),n.extra&&(o=o.concat(n.extra)),o.push(t),o},o.getSpawnOptions=function(){return{shell:!1,env:Object.assign(process.env,{LANG:"C"})}},t.exports=o},394:(t,e,n)=>{"use strict";var r=n(23),o={},i={numeric:!0,timeout:2,deadline:!1,min_reply:1,v6:!1,sourceAddr:"",packetSize:56,extra:[]};o.getCommandArguments=function(t,e){var n=e||{},o=[];if(["numeric","timeout","deadline","min_reply","v6","sourceAddr","extra","packetSize"].forEach((function(t){"boolean"!=typeof n[t]&&(n[t]=n[t]||i[t])})),n.numeric&&o.push("-n"),n.timeout){if(e.v6)throw new Error("There is no timeout option on ping6");o=o.concat(["-W",r.format("%d",1e3*n.timeout)])}return n.deadline&&(o=o.concat(["-t",r.format("%d",n.deadline)])),n.min_reply&&(o=o.concat(["-c",r.format("%d",n.min_reply)])),n.sourceAddr&&(o=o.concat(["-S",r.format("%s",n.sourceAddr)])),n.packetSize&&(o=o.concat(["-s",r.format("%d",n.packetSize)])),n.extra&&(o=o.concat(n.extra)),o.push(t),o},o.getSpawnOptions=function(){return{}},t.exports=o},447:(t,e,n)=>{"use strict";var r=n(23),o={},i={numeric:!0,timeout:5,min_reply:1,v6:!1,sourceAddr:"",packetSize:32,extra:[]};o.getCommandArguments=function(t,e){var n=e||{},o=[];if(["numeric","timeout","min_reply","v6","sourceAddr","extra","packetSize"].forEach((function(t){"boolean"!=typeof n[t]&&(n[t]=n[t]||i[t])})),o.push(n.v6?"-6":"-4"),n.numeric||o.push("-a"),n.timeout&&(o=o.concat(["-w",r.format("%d",1e3*n.timeout)])),n.deadline)throw new Error("There is no deadline option on windows");return n.min_reply&&(o=o.concat(["-n",r.format("%d",n.min_reply)])),n.sourceAddr&&(o=o.concat(["-S",r.format("%s",n.sourceAddr)])),n.packetSize&&(o=o.concat(["-l",r.format("%d",n.packetSize)])),n.extra&&(o=o.concat(n.extra)),o.push(t),o},o.getSpawnOptions=function(){return{windowsHide:!0}},t.exports=o},424:t=>{"use strict";function e(t,e){this._state=0,this._response={inputHost:t,host:"unknown",alive:!1,output:"unknown",time:"unknown",times:[],min:"unknown",max:"unknown",avg:"unknown",stddev:"unknown",packetLoss:"unknown"},this._times=[],this._lines=[],this._stripRegex=/[ ]*\r?\n?$/g,this._pingConfig=e||{}}e.prototype.STATES={INIT:0,HEADER:1,BODY:2,FOOTER:3,END:4},e.prototype._changeState=function(t){if(Object.keys(this.STATES).map((function(t){return this.STATES[t]}),this).indexOf(t)<0)throw new Error("Unknown state");return this._state=t,this},e.prototype._processHeader=function(t){throw new Error("Subclass should implement this method")},e.prototype._processBody=function(t){throw new Error("Subclass should implement this method")},e.prototype._processFooter=function(t){throw new Error("Subclass should implement this method")},e.prototype.eat=function(t){var e=[this.STATES.INIT,this.STATES.HEADER];this._lines.push(t);var n=t.replace(this._stripRegex,"");if(0===n.length);else if(e.indexOf(this._state)>=0)this._processHeader(n);else if(this._state===this.STATES.BODY)this._processBody(n);else if(this._state===this.STATES.FOOTER)this._processFooter(n);else if(this._state!==this.STATES.END)throw new Error("Unknown state");return this},e.prototype.getResult=function(){var t=Object.assign({},this._response);if(t.output=this._lines.join("\n"),t.alive=this._times.length>0,t.alive&&(this._response.time=this._times[0],t.time=this._response.time,this._response.times=this._times,t.times=this._response.times),"unknown"===t.stddev&&t.alive){var e=this._times.length,n=this._times.reduce((function(e,n){var r=n-t.avg;return e+r*r}),0)/e;t.stddev=Math.round(1e3*Math.sqrt(n))/1e3}return["min","avg","max","stddev","packetLoss"].forEach((function(e){var n=t[e];"number"==typeof n&&(t[e]=n.toFixed(3))})),t},t.exports=e},975:(t,e,n)=>{"use strict";var r=n(23),o=n(55),i=n(599),s=n(786),c=n(395);function a(){}a.createParser=function(t,e,n){var a=n||{};if(!o.isPlatformSupport(e))throw new Error(r.format("Platform |%s| is not support",e));var u=null;return o.isWindow(e)?u=new i(t,a):o.isMacOS(e)?u=new s(t,a):o.isLinux(e)&&(u=new c(t,a)),u},t.exports=a},395:(t,e,n)=>{"use strict";var r=n(23),o=n(424),i=n(786);function s(t,e){o.call(this,t,e)}r.inherits(s,o),s.prototype._processHeader=function(t){var e=t.split(" ");if(-1===e[1].indexOf("("))this._response.host=e[1],this._response.numeric_host=e[2].slice(1,-1);else{var n=e.slice(1,-3).join("").match(/([^\s()]+)/g);this._response.host=n.shift(),this._response.numeric_host=n.pop()}this._changeState(this.STATES.BODY)},s.prototype._processBody=function(t){i.prototype._processBody.call(this,t)},s.prototype._processFooter=function(t){i.prototype._processFooter.call(this,t)},t.exports=s},786:(t,e,n)=>{"use strict";var r=n(23),o=n(424);function i(t,e){o.call(this,t,e)}r.inherits(i,o),i.prototype._processHeader=function(t){var e=t.split(" ");this._response.host=e[1],this._response.numeric_host=e[2].slice(1,-2),this._changeState(this.STATES.BODY)},i.prototype._processBody=function(t){if((t.match(/=/g)||[]).length>=3){var e=/([0-9.]+)[ ]*ms/.exec(t);this._times.push(parseFloat(e[1],10))}t.indexOf("---")>=0&&this._changeState(this.STATES.FOOTER)},i.prototype._processFooter=function(t){var e=t.match(/ ([\d.]+)%/);if(e&&(this._response.packetLoss=parseFloat(e[1],10)),(t.match(/[/]/g)||[]).length>=3){var n=/([0-9.]+)/g,r=n.exec(t),o=n.exec(t),i=n.exec(t),s=n.exec(t);r&&o&&i&&s&&(this._response.min=parseFloat(r[1],10),this._response.avg=parseFloat(o[1],10),this._response.max=parseFloat(i[1],10),this._response.stddev=parseFloat(s[1],10),this._changeState(this.STATES.END)),this._changeState(this.STATES.END)}},t.exports=i},599:(t,e,n)=>{"use strict";var r=n(23),o=n(424);function i(t,e){o.call(this,t,e),this._ipv4Regex=/^([0-9]{1,3}\.){3}[0-9]{1,3}$/}r.inherits(i,o),i.prototype._processHeader=function(t){var e=-1===t.indexOf("["),n=t.split(" ");if(e)this._response.host=n.find((function(t){return this._ipv4Regex.test(t)}),this),this._response.numeric_host=this._response.host;else{var r=n.find((function(t){return-1!==t.indexOf("[")}),this),o=n.indexOf(r),i=/\[(.*)\]/.exec(r);this._response.numeric_host=i?i[1]:"NA",this._response.host=n[o-1]}this._changeState(this.STATES.BODY)},i.prototype._processIPV6Body=function(t){var e=t.split(" "),n=e.filter((function(t){return t.indexOf("=")>=0||t.indexOf("<")>=0}));if((n=n.map((function(t){var n=t,r=e.indexOf(t)+1;return r<e.length&&"ms"===e[r]&&(n+="ms"),n}))).length>=1){var r=n.find((function(t){return t.search(/(ms|мс)/i)>=0})),o=/([0-9.]+)/.exec(r);this._times.push(parseFloat(o[1],10))}},i.prototype._processIPV4Body=function(t){var e=t.split(" ").filter((function(t){return t.indexOf("=")>=0||t.indexOf("<")>=0}));if(e.length>=3){var n=this._pingConfig.packetSize,o=e.find((function(t){var e=r.format("=%d",n);return t.indexOf(e)>=0})),i=e.indexOf(o),s=e[i+1],c=/([0-9.]+)/.exec(s);this._times.push(parseFloat(c[1],10))}},i.prototype._processBody=function(t){":"===t.slice(-1)?this._changeState(this.STATES.FOOTER):this._pingConfig.v6?this._processIPV6Body(t):this._processIPV4Body(t)},i.prototype._processFooter=function(t){var e=t.match(/([\d.]+)%/);if(e&&(this._response.packetLoss=parseFloat(e[1],10)),t.search(/(ms|мсек)/i)>=0){var n=/([0-9.]+)/g,r=n.exec(t),o=n.exec(t),i=n.exec(t);r&&o&&i&&(this._response.min=parseFloat(r[1],10),this._response.max=parseFloat(o[1],10),this._response.avg=parseFloat(i[1],10),this._changeState(this.STATES.END))}},t.exports=i},973:(t,e,n)=>{"use strict";var r=n(23),o=n(278),i=n(317),s=n(857),c=n(55),a=n(975);e.probe=function(t,e){try{var n=function(t,e){var n=e||{};return void 0===n.v6&&(n.v6=o.isIPv6(t)),new Promise((function(e,o){var u=null,l=s.platform();try{var f=c.createBuilder(l),p=c.getExecutablePath(l,n.v6),h=f.getCommandArguments(t,n),d=f.getSpawnOptions();u=i.spawn(p,h,d)}catch(t){return void o(t)}var m=a.createParser(t,l,n);u.once("error",(function(){var t=new Error(r.format("ping.probe: %s. %s","there was an error while executing the ping program. ","Check the path or permissions..."));o(t)}));var g=[];u.stdout.on("data",(function(t){g.push(String(t))})),u.stderr.on("data",(function(t){g.push(String(t))})),u.once("close",(function(){g.join("").split("\n").forEach(m.eat,m);var t=m.getResult();e(t)}))}))}(t,e);return n}catch(t){return Promise.reject(t)}}},9:(t,e,n)=>{"use strict";var r=n(973);e.probe=function(t,e,n){var o=n||{};return r.probe(t,o).then((function(t){e(t.alive,null)})).catch((function(t){e(null,t)}))}},317:t=>{"use strict";t.exports=require("child_process")},896:t=>{"use strict";t.exports=require("fs")},611:t=>{"use strict";t.exports=require("http")},278:t=>{"use strict";t.exports=require("net")},857:t=>{"use strict";t.exports=require("os")},928:t=>{"use strict";t.exports=require("path")},932:t=>{"use strict";t.exports=require("process")},23:t=>{"use strict";t.exports=require("util")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n(806)})();