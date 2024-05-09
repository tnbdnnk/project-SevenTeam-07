import{R as oe,r as M,j as ce}from"./index-dbd1fd28.js";function re(){return re=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},re.apply(this,arguments)}function ye(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Re=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Te=ye(function(e){return Re.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function $e(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function _e(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Me=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_e(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=$e(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),S="-ms-",Y="-moz-",f="-webkit-",be="comm",ae="rule",ie="decl",Ie="@import",ve="@keyframes",Ne="@layer",Fe=Math.abs,Z=String.fromCharCode,Le=Object.assign;function ze(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function xe(e){return e.trim()}function je(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function te(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function j(e,r,t){return e.slice(r,t)}function T(e){return e.length}function se(e){return e.length}function G(e,r){return r.push(e),e}function He(e,r){return e.map(r).join("")}var J=1,F=1,we=0,C=0,v=0,L="";function Q(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:J,column:F,length:s,return:""}}function z(e,r){return Le(Q("",null,null,"",null,null,0),e,{length:-e.length},r)}function We(){return v}function De(){return v=C>0?w(L,--C):0,F--,v===10&&(F=1,J--),v}function E(){return v=C<we?w(L,C++):0,F++,v===10&&(F=1,J++),v}function _(){return w(L,C)}function V(){return C}function D(e,r){return j(L,e,r)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ke(e){return J=F=1,we=T(L=e),C=0,[]}function Se(e){return L="",e}function B(e){return xe(D(C-1,ne(e===91?e+2:e===40?e+1:e)))}function Ue(e){for(;(v=_())&&v<33;)E();return H(e)>2||H(v)>3?"":" "}function qe(e,r){for(;--r&&E()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return D(e,V()+(r<6&&_()==32&&E()==32))}function ne(e){for(;E();)switch(v){case e:return C;case 34:case 39:e!==34&&e!==39&&ne(v);break;case 40:e===41&&ne(e);break;case 92:E();break}return C}function Ge(e,r){for(;E()&&e+v!==47+10;)if(e+v===42+42&&_()===47)break;return"/*"+D(r,C-1)+"*"+Z(e===47?e:E())}function Ve(e){for(;!H(_());)E();return D(e,C)}function Be(e){return Se(X("",null,null,null,[""],e=ke(e),0,[0],e))}function X(e,r,t,n,a,i,s,o,m){for(var x=0,d=0,h=s,R=0,P=0,p=0,c=1,g=1,y=1,b=0,k="",I=a,O=i,A=n,l=k;g;)switch(p=b,b=E()){case 40:if(p!=108&&w(l,h-1)==58){te(l+=u(B(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:l+=B(b);break;case 9:case 10:case 13:case 32:l+=Ue(p);break;case 92:l+=qe(V()-1,7);continue;case 47:switch(_()){case 42:case 47:G(Xe(Ge(E(),V()),r,t),m);break;default:l+="/"}break;case 123*c:o[x++]=T(l)*y;case 125*c:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+d:y==-1&&(l=u(l,/\f/g,"")),P>0&&T(l)-h&&G(P>32?ue(l+";",n,t,h-1):ue(u(l," ","")+";",n,t,h-2),m);break;case 59:l+=";";default:if(G(A=fe(l,r,t,x,d,a,o,k,I=[],O=[],h),i),b===123)if(d===0)X(l,r,A,A,I,i,h,o,O);else switch(R===99&&w(l,3)===110?100:R){case 100:case 108:case 109:case 115:X(e,A,A,n&&G(fe(e,A,A,0,0,a,o,k,a,I=[],h),O),a,O,h,o,n?I:O);break;default:X(l,A,A,A,[""],O,0,o,O)}}x=d=P=0,c=y=1,k=l="",h=s;break;case 58:h=1+T(l),P=p;default:if(c<1){if(b==123)--c;else if(b==125&&c++==0&&De()==125)continue}switch(l+=Z(b),b*c){case 38:y=d>0?1:(l+="\f",-1);break;case 44:o[x++]=(T(l)-1)*y,y=1;break;case 64:_()===45&&(l+=B(E())),R=_(),d=h=T(k=l+=Ve(V())),b++;break;case 45:p===45&&T(l)==2&&(c=0)}}return i}function fe(e,r,t,n,a,i,s,o,m,x,d){for(var h=a-1,R=a===0?i:[""],P=se(R),p=0,c=0,g=0;p<n;++p)for(var y=0,b=j(e,h+1,h=Fe(c=s[p])),k=e;y<P;++y)(k=xe(c>0?R[y]+" "+b:u(b,/&\f/g,R[y])))&&(m[g++]=k);return Q(e,r,t,a===0?ae:o,m,x,d)}function Xe(e,r,t){return Q(e,r,t,be,Z(We()),j(e,2,-2),0)}function ue(e,r,t,n){return Q(e,r,t,ie,j(e,0,n),j(e,n+1,-1),n)}function N(e,r){for(var t="",n=se(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Ye(e,r,t,n){switch(e.type){case Ne:if(e.children.length)break;case Ie:case ie:return e.return=e.return||e.value;case be:return"";case ve:return e.return=e.value+"{"+N(e.children,n)+"}";case ae:e.value=e.props.join(",")}return T(t=N(e.children,n))?e.return=e.value+"{"+t+"}":""}function Ke(e){var r=se(e);return function(t,n,a,i){for(var s="",o=0;o<r;o++)s+=e[o](t,n,a,i)||"";return s}}function Ze(e){return function(r){r.root||(r=r.return)&&e(r)}}var Je=function(r,t,n){for(var a=0,i=0;a=i,i=_(),a===38&&i===12&&(t[n]=1),!H(i);)E();return D(r,C)},Qe=function(r,t){var n=-1,a=44;do switch(H(a)){case 0:a===38&&_()===12&&(t[n]=1),r[n]+=Je(C-1,t,n);break;case 2:r[n]+=B(a);break;case 4:if(a===44){r[++n]=_()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=Z(a)}while(a=E());return r},er=function(r,t){return Se(Qe(ke(r),t))},le=new WeakMap,rr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!le.get(n))&&!a){le.set(r,!0);for(var i=[],s=er(t,i),o=n.props,m=0,x=0;m<s.length;m++)for(var d=0;d<o.length;d++,x++)r.props[x]=i[m]?s[m].replace(/&\f/g,o[d]):o[d]+" "+s[m]}}},tr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ce(e,r){switch(ze(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+Y+e+S+e+e;case 6828:case 4268:return f+e+S+e+e;case 6165:return f+e+S+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return f+e+S+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+S+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+S+u(e,"shrink","negative")+e;case 5292:return f+e+S+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+S+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+Y+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~te(e,"stretch")?Ce(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,T(e)-3-(~te(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(w(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+S+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+S+e+e}return e}var nr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ie:r.return=Ce(r.value,r.length);break;case ve:return N([z(r,{value:u(r.value,"@","@"+f)})],a);case ae:if(r.length)return He(r.props,function(i){switch(je(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return N([z(r,{props:[u(i,/:(read-\w+)/,":"+Y+"$1")]})],a);case"::placeholder":return N([z(r,{props:[u(i,/:(plac\w+)/,":"+f+"input-$1")]}),z(r,{props:[u(i,/:(plac\w+)/,":"+Y+"$1")]}),z(r,{props:[u(i,/:(plac\w+)/,S+"input-$1")]})],a)}return""})}},ar=[nr],ir=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(c){var g=c.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(c),c.setAttribute("data-s",""))})}var a=r.stylisPlugins||ar,i={},s,o=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(c){for(var g=c.getAttribute("data-emotion").split(" "),y=1;y<g.length;y++)i[g[y]]=!0;o.push(c)});var m,x=[rr,tr];{var d,h=[Ye,Ze(function(c){d.insert(c)})],R=Ke(x.concat(a,h)),P=function(g){return N(Be(g),R)};m=function(g,y,b,k){d=b,P(g?g+"{"+y.styles+"}":y.styles),k&&(p.inserted[y.name]=!0)}}var p={key:t,sheet:new Me({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:m};return p.sheet.hydrate(o),p},sr=!0;function or(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Pe=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||sr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},cr=function(r,t,n){Pe(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function fr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var ur={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lr=/[A-Z]|^ms/g,dr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ae=function(r){return r.charCodeAt(1)===45},de=function(r){return r!=null&&typeof r!="boolean"},ee=ye(function(e){return Ae(e)?e:e.replace(lr,"-$&").toLowerCase()}),he=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(dr,function(n,a,i){return $={name:a,styles:i,next:$},a})}return ur[r]!==1&&!Ae(r)&&typeof t=="number"&&t!==0?t+"px":t};function W(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return $={name:t.name,styles:t.styles,next:$},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)$={name:n.name,styles:n.styles,next:$},n=n.next;var a=t.styles+";";return a}return hr(e,r,t)}case"function":{if(e!==void 0){var i=$,s=t(e);return $=i,W(e,r,s)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function hr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=W(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=i+"{"+r[s]+"}":de(s)&&(n+=ee(i)+":"+he(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var o=0;o<s.length;o++)de(s[o])&&(n+=ee(i)+":"+he(i,s[o])+";");else{var m=W(e,r,s);switch(i){case"animation":case"animationName":{n+=ee(i)+":"+m+";";break}default:n+=i+"{"+m+"}"}}}return n}var pe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,$,pr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,i="";$=void 0;var s=r[0];s==null||s.raw===void 0?(a=!1,i+=W(n,t,s)):i+=s[0];for(var o=1;o<r.length;o++)i+=W(n,t,r[o]),a&&(i+=s[o]);pe.lastIndex=0;for(var m="",x;(x=pe.exec(i))!==null;)m+="-"+x[1];var d=fr(i)+m;return{name:d,styles:i,next:$}},mr=function(r){return r()},gr=oe["useInsertionEffect"]?oe["useInsertionEffect"]:!1,yr=gr||mr,Ee=M.createContext(typeof HTMLElement<"u"?ir({key:"css"}):null);Ee.Provider;var br=function(r){return M.forwardRef(function(t,n){var a=M.useContext(Ee);return r(t,a,n)})},vr=M.createContext({}),xr=Te,wr=function(r){return r!=="theme"},me=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?xr:wr},ge=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},kr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Pe(t,n,a),yr(function(){return cr(t,n,a)}),null},Sr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var o=ge(r,t,n),m=o||me(a),x=!m("as");return function(){var d=arguments,h=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&h.push("label:"+i+";"),d[0]==null||d[0].raw===void 0)h.push.apply(h,d);else{h.push(d[0][0]);for(var R=d.length,P=1;P<R;P++)h.push(d[P],d[0][P])}var p=br(function(c,g,y){var b=x&&c.as||a,k="",I=[],O=c;if(c.theme==null){O={};for(var A in c)O[A]=c[A];O.theme=M.useContext(vr)}typeof c.className=="string"?k=or(g.registered,I,c.className):c.className!=null&&(k=c.className+" ");var l=pr(h.concat(I),g.registered,O);k+=g.key+"-"+l.name,s!==void 0&&(k+=" "+s);var Oe=x&&o===void 0?me(b):m,U={};for(var q in c)x&&q==="as"||Oe(q)&&(U[q]=c[q]);return U.className=k,U.ref=y,M.createElement(M.Fragment,null,M.createElement(kr,{cache:g,serialized:l,isStringTag:typeof b=="string"}),M.createElement(b,U))});return p.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=r.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=h,p.__emotion_forwardProp=o,Object.defineProperty(p,"toString",{value:function(){return"."+s}}),p.withComponent=function(c,g){return e(c,re({},t,g,{shouldForwardProp:ge(p,g,!0)})).apply(void 0,h)},p}},Cr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],K=Sr.bind();Cr.forEach(function(e){K[e]=K(e)});const Pr=K.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,Ar=K.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,Or=()=>ce.jsx(Pr,{children:ce.jsx(Ar,{children:"404"})});export{Or as default};
