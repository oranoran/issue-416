/*! For license information please see 16.ef06de11398b909bbe50.js.LICENSE.txt */
(self.webpackChunkpayload_starter_typescript=self.webpackChunkpayload_starter_typescript||[]).push([[16],{29016:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var a=n(67294),r=n(40460),i=n(28325),o=(n(35433),n(39980),n(48170)),s=n(90546),l=n(953),u=n(90666),c=n(77070),d=n(35193);n(27413);const g=(0,s.Z)((e=>{const{path:t,name:n,required:s,validate:g=d.code,admin:{readOnly:p,style:h,width:f,language:m,description:y,condition:v}={},label:b,minLength:k,maxLength:_}=e,[x]=(0,a.useState)((()=>i.languages[m]?e=>(0,i.highlight)(e,i.languages[m]):e=>e)),w=t||n,F=(0,a.useCallback)((e=>g(e,{minLength:k,maxLength:_,required:s})),[g,_,k,s]),{value:S,showError:E,setValue:C,errorMessage:A}=(0,o.Z)({path:w,validate:F,enableDebouncedValue:!0,condition:v}),P=["field-type","code",E&&"error",p&&"read-only"].filter(Boolean).join(" ");return a.createElement("div",{className:P,style:{...h,width:f}},a.createElement(u.Z,{showError:E,message:A}),a.createElement(l.Z,{htmlFor:w,label:b,required:s}),a.createElement(r.Z,{value:S||"",onValueChange:p?()=>null:C,highlight:x,padding:25,style:{backgroundColor:"#333333",color:"white",fontFamily:'"Consolas", "Monaco", monospace',fontSize:12,pointerEvents:p?"none":"auto"}}),a.createElement(c.Z,{value:S,description:y}))}))},35433:()=>{Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},28325:(e,t,n)=>{var a=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i;switch(n=n||{},r.util.type(t)){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var o in a={},n[i]=a,t)t.hasOwnProperty(o)&&(a[o]=e(t[o],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(a=[],n[i]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var u=a[e];return a[e]=o,r.languages.DFS(r.languages,(function(t,n){n===u&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,a,i){i=i||{};var o=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var l=t[s],u=r.util.type(l);"Object"!==u||i[o(l)]?"Array"!==u||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,o=0;i=a.elements[o++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,n,a){var i=r.util.getLanguage(t),o=r.languages[i];r.util.setLanguage(t,i);var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&r.util.setLanguage(s,i);var l={element:t,language:i,grammar:o,code:t.textContent};function u(e){l.highlightedCode=e,r.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,r.hooks.run("after-highlight",l),r.hooks.run("complete",l),a&&a.call(l.element)}if(r.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return r.hooks.run("complete",l),void(a&&a.call(l.element));if(r.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var c=new Worker(r.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(r.highlight(l.code,l.grammar,l.language));else u(r.util.encode(l.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",a),a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),i.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new l;return u(r,r.head,e),s(e,r,t,r.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:i};function i(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function o(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var i=r[1].length;r.index+=i,r[0]=r[0].slice(i)}return r}function s(e,t,n,a,l,d){for(var g in n)if(n.hasOwnProperty(g)&&n[g]){var p=n[g];p=Array.isArray(p)?p:[p];for(var h=0;h<p.length;++h){if(d&&d.cause==g+","+h)return;var f=p[h],m=f.inside,y=!!f.lookbehind,v=!!f.greedy,b=f.alias;if(v&&!f.pattern.global){var k=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,k+"g")}for(var _=f.pattern||f,x=a.next,w=l;x!==t.tail&&!(d&&w>=d.reach);w+=x.value.length,x=x.next){var F=x.value;if(t.length>e.length)return;if(!(F instanceof i)){var S,E=1;if(v){if(!(S=o(_,w,e,y))||S.index>=e.length)break;var C=S.index,A=S.index+S[0].length,P=w;for(P+=x.value.length;C>=P;)P+=(x=x.next).value.length;if(w=P-=x.value.length,x.value instanceof i)continue;for(var $=x;$!==t.tail&&(P<A||"string"==typeof $.value);$=$.next)E++,P+=$.value.length;E--,F=e.slice(w,P),S.index-=w}else if(!(S=o(_,0,F,y)))continue;C=S.index;var L=S[0],j=F.slice(0,C),O=F.slice(C+L.length),K=w+F.length;d&&K>d.reach&&(d.reach=K);var z=x.prev;if(j&&(z=u(t,z,j),w+=j.length),c(t,z,E),x=u(t,z,new i(g,m?r.tokenize(L,m):L,b,L)),O&&u(t,x,O),E>1){var I={cause:g+","+h,reach:K};s(e,t,n,x.prev,w,I),d&&I.reach>d.reach&&(d.reach=I.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function c(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=r,i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),r.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,o=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),o&&e.close()}),!1),r):r;var d=r.util.currentScript();function g(){r.manual||r.highlightAll()}if(d&&(r.filename=d.src,d.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var p=document.readyState;"loading"===p||"interactive"===p&&d&&d.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==n.g&&(n.g.Prism=a)},39980:()=>{Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript},40460:(e,t,n)=>{"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(67294));function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=90,u=219,c=222,d=192,g=100,p=3e3,h="navigator"in n.g&&/Win/i.test(navigator.platform),f="navigator"in n.g&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),m="npm__react-simple-code-editor__textarea",y=function(e){function t(){var e,n,r;o(this,t);for(var i=arguments.length,m=Array(i),y=0;y<i;y++)m[y]=arguments[y];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(m))),r.state={capture:!0},r._recordCurrentState=function(){var e=r._input;if(e){var t=e.value,n=e.selectionStart,a=e.selectionEnd;r._recordChange({value:t,selectionStart:n,selectionEnd:a})}},r._getLines=function(e,t){return e.substring(0,t).split("\n")},r._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r._history,i=n.stack,o=n.offset;if(i.length&&o>-1){r._history.stack=i.slice(0,o+1);var s=r._history.stack.length;if(s>g){var l=s-g;r._history.stack=i.slice(l,s),r._history.offset=Math.max(r._history.offset-l,0)}}var u=Date.now();if(t){var c=r._history.stack[r._history.offset];if(c&&u-c.timestamp<p){var d=/[^a-z0-9]([a-z0-9]+)$/i,h=r._getLines(c.value,c.selectionStart).pop().match(d),f=r._getLines(e.value,e.selectionStart).pop().match(d);if(h&&f&&f[1].startsWith(h[1]))return void(r._history.stack[r._history.offset]=a({},e,{timestamp:u}))}}r._history.stack.push(a({},e,{timestamp:u})),r._history.offset++},r._updateInput=function(e){var t=r._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,r.props.onValueChange(e.value))},r._applyEdits=function(e){var t=r._input,n=r._history.stack[r._history.offset];n&&t&&(r._history.stack[r._history.offset]=a({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),r._recordChange(e),r._updateInput(e)},r._undoEdit=function(){var e=r._history,t=e.stack,n=e.offset,a=t[n-1];a&&(r._updateInput(a),r._history.offset=Math.max(n-1,0))},r._redoEdit=function(){var e=r._history,t=e.stack,n=e.offset,a=t[n+1];a&&(r._updateInput(a),r._history.offset=Math.min(n+1,t.length-1))},r._handleKeyDown=function(e){var t=r.props,n=t.tabSize,a=t.insertSpaces,i=t.ignoreTabKey,o=t.onKeyDown;if(!o||(o(e),!e.defaultPrevented)){27===e.keyCode&&e.target.blur();var s=e.target,g=s.value,p=s.selectionStart,m=s.selectionEnd,y=(a?" ":"\t").repeat(n);if(9===e.keyCode&&!i&&r.state.capture)if(e.preventDefault(),e.shiftKey){var v=r._getLines(g,p),b=v.length-1,k=r._getLines(g,m).length-1,_=g.split("\n").map((function(e,t){return t>=b&&t<=k&&e.startsWith(y)?e.substring(y.length):e})).join("\n");if(g!==_){var x=v[b];r._applyEdits({value:_,selectionStart:x.startsWith(y)?p-y.length:p,selectionEnd:m-(g.length-_.length)})}}else if(p!==m){var w=r._getLines(g,p),F=w.length-1,S=r._getLines(g,m).length-1,E=w[F];r._applyEdits({value:g.split("\n").map((function(e,t){return t>=F&&t<=S?y+e:e})).join("\n"),selectionStart:/\S/.test(E)?p+y.length:p,selectionEnd:m+y.length*(S-F+1)})}else{var C=p+y.length;r._applyEdits({value:g.substring(0,p)+y+g.substring(m),selectionStart:C,selectionEnd:C})}else if(8===e.keyCode){var A=p!==m;if(g.substring(0,p).endsWith(y)&&!A){e.preventDefault();var P=p-y.length;r._applyEdits({value:g.substring(0,p-y.length)+g.substring(m),selectionStart:P,selectionEnd:P})}}else if(13===e.keyCode){if(p===m){var $=r._getLines(g,p).pop().match(/^\s+/);if($&&$[0]){e.preventDefault();var L="\n"+$[0],j=p+L.length;r._applyEdits({value:g.substring(0,p)+L+g.substring(m),selectionStart:j,selectionEnd:j})}}}else if(57===e.keyCode||e.keyCode===u||e.keyCode===c||e.keyCode===d){var O=void 0;57===e.keyCode&&e.shiftKey?O=["(",")"]:e.keyCode===u?O=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===c?O=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==d||e.shiftKey||(O=["`","`"]),p!==m&&O&&(e.preventDefault(),r._applyEdits({value:g.substring(0,p)+O[0]+g.substring(p,m)+O[1]+g.substring(m),selectionStart:p,selectionEnd:m+2}))}else!(f?e.metaKey&&e.keyCode===l:e.ctrlKey&&e.keyCode===l)||e.shiftKey||e.altKey?(f?e.metaKey&&e.keyCode===l&&e.shiftKey:h?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===l&&e.shiftKey)&&!e.altKey?(e.preventDefault(),r._redoEdit()):77!==e.keyCode||!e.ctrlKey||f&&!e.shiftKey||(e.preventDefault(),r.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),r._undoEdit())}},r._handleChange=function(e){var t=e.target,n=t.value,a=t.selectionStart,i=t.selectionEnd;r._recordChange({value:n,selectionStart:a,selectionEnd:i},!0),r.props.onValueChange(n)},r._history={stack:[],offset:-1},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,r=t.style,o=t.padding,s=t.highlight,l=t.textareaId,u=t.textareaClassName,c=t.autoFocus,d=t.disabled,g=t.form,p=t.maxLength,h=t.minLength,f=t.name,y=t.placeholder,b=t.readOnly,k=t.required,_=t.onClick,x=t.onFocus,w=t.onBlur,F=t.onKeyUp,S=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),E=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),C={paddingTop:o,paddingRight:o,paddingBottom:o,paddingLeft:o},A=s(n);return i.createElement("div",a({},E,{style:a({},v.container,r)}),i.createElement("textarea",{ref:function(t){return e._input=t},style:a({},v.editor,v.textarea,C),className:m+(u?" "+u:""),id:l,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:_,onKeyUp:F,onFocus:x,onBlur:w,disabled:d,form:g,maxLength:p,minLength:h,name:f,placeholder:y,readOnly:b,required:k,autoFocus:c,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),i.createElement("pre",a({className:S,"aria-hidden":"true",style:a({},v.editor,v.highlight,C)},"string"==typeof A?{dangerouslySetInnerHTML:{__html:A+"<br />"}}:{children:A})),i.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"}}))}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}}]),t}(i.Component);y.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t.Z=y;var v={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}}}]);