"use strict";function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}!function(u){var s={};function b(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,b),e.l=!0,e.exports}b.m=u,b.c=s,b.d=function(u,s,t){b.o(u,s)||Object.defineProperty(u,s,{enumerable:!0,get:t})},b.r=function(u){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},b.t=function(u,s){if(1&s&&(u=b(u)),8&s)return u;if(4&s&&"object"==_typeof(u)&&u&&u.__esModule)return u;var t=Object.create(null);if(b.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:u}),2&s&&"string"!=typeof u)for(var e in u){b.d(t,e,function(s){return u[s]}.bind(null,e))}return t},b.n=function(u){var s=u&&u.__esModule?function(){return u.default}:function(){return u};return b.d(s,"a",s),s},b.o=function(u,s){return Object.prototype.hasOwnProperty.call(u,s)},b.p="",b(b.s=0)}([function(u,s,b){u.exports=b(1)},function(u,s){yodasws.on("site-loaded",function(){function u(u){var s=u.currentTarget;do{s=s.nextElementSibling}while(s&&"ul"!==s.nodeName.toLowerCase());var b=s&&s.hasAttribute("hidden"),t=u.currentTarget.closest("ul, nav");t instanceof Element&&t.querySelectorAll("ul:not([hidden])").forEach(function(u){u.setAttribute("hidden","")}),s instanceof Element&&b&&s.removeAttribute("hidden")}document.querySelectorAll("body > nav a:not([href])").forEach(function(s){s.addEventListener("click",u)}),new MutationObserver(function(u){switch(console.log("mutationsList:",u),u[0].oldValue){case"home":{var _u=document.querySelectorAll("body > nav ul");_u.forEach(function(u){u.style.transition="none",u.setAttribute("hidden","")}),setTimeout(function(){_u.forEach(function(u){u.style.transition=""})},0);break}case null:document.querySelectorAll("body > nav ul").forEach(function(u){u.setAttribute("hidden","")});}}).observe(document.body,{attributeFilter:["y-section"],attributeOldValue:!0,attributes:!0});var s=document.querySelector("body > nav[hidden]");s instanceof Element&&s.removeAttribute("hidden")}),yodasws.on("page-loaded",function(u){document.querySelectorAll("body > nav ul:not([hidden])").forEach(function(u){u.setAttribute("hidden","")}),document.body.setAttribute("y-section",u.detail.page);var s=document.querySelector("[autofocus]");s instanceof Element&&s.focus()});var b={a:"\uD808\uDC38 U+12038, A\u0160",aa:"\uD808\uDEF0 U+122F0, TAB, A\u0160 / A\u0160, <kbd>t</kbd>",aaa:"\uD808\uDC3C U+1203C, A\u0160 / A\u0160 / A\u0160, E\u0160<sub>16</sub>",ad:"\uD808\uDE26 U+12226, MA\u0160","adzg'd":"\uD808\uDE39 U+12239, MU\u0160<sub>3</sub>, INANA, INANNA, INNIN",aamd:"\uD808\uDCB7 U+120B7, GA<sub>2</sub>, BA<sub>4</sub>, \u011CA<sub>2</sub>, \u011CE<sub>26</sub>, MA<sub>3</sub>, PISA\u011C",aamdzdg:"\uD808\uDC49 U+12049, BI, BE<sub>2</sub>",aamdzmdgud:"\uD808\uDEC6 U+122C6, \u0160IM",aammd:"\uD808\uDCF7 U+120F7, GAN<sub>2</sub>",aamud:"\uD808\uDF51 U+12351, U\u0160, NITA, US<sub>2</sub>",aamzddg:"\uD808\uDC49 U+12049, BI, BE<sub>2</sub>",aaudav:"\uD808\uDC44 U+12044, BAL",adaa:"\uD808\uDE20 U+12220, MA, PE\u0160<sub>3</sub>",adad:"\uD808\uDDB8 U+121B8, LAGAB, GUR<sub>4</sub>, NIGIN<sub>2</sub>, NI\u011CIN<sub>2</sub>, RIN, TUKUR","adad'":"\uD808\uDEDB U+122DB, SI, SIG<sub>9</sub>",adadxa:"\uD808\uDC89 U+12089, DUR<sub>2</sub>, DURUN","adadxa'":"\uD808\uDDAA U+121AA, KU, DAB<sub>5</sub>, DURU<sub>2</sub>, \u0160E<sub>10</sub>, \u0160ED<sub>6</sub>, TUKUL, TU\u0160",adadxau:"\uD808\uDDC0 U+121C0, LAGAB x BAD, GIGIR",adadxt:"\uD808\uDE47 U+12247, NAM<sub>2</sub>",adadxu:"\uD808\uDDE5 U+121E5, LAGAB x U, BU<sub>4</sub>, GIGIR<sub>2</sub>, PU<sub>2</sub>, TUL<sub>2</sub>",adud:"\uD808\uDD37 U+12137, \u1E2AU, MU\u0160EN, U<sub>11</sub>",ama:"\uD808\uDEE5 U+122E5, SUD<sub>2</sub>, \u0160ITA<sub>3</sub>",ammd:"\uD808\uDE63 U+12263, NUN, SIL<sub>2</sub>, ZI","amm.u.d.":"\uD808\uDE45 U+12245, NAM NUTILLU",amud:"\uD808\uDE91 U+12291, RI, DAL, RE, TAL",amzgav:"\uD808\uDC54 U+12054, BUR<sub>2</sub>, SUN<sub>5</sub>","amzg.zg":"\uD808\uDC74 U+12074, DIM",au:"\uD808\uDC41 U+12041, BAD, BA<sub>9</sub>, BE","au'":"\uD808\uDF57 U+12357, U\u01602",auaad:"\uD808\uDC7A U+1207A, DU, RE6, GUB, \u0160A4",auav:"\uD808\uDDB0 U+121B0, KUL",audau:"\uD808\uDEFE U+122FE, TI",az:"\uD808\uDF00 U+12300, TIL","azdu.":"\uD808\uDD90 U+12190, KAD<sub>2</sub>",azg:"\uD808\uDD2C U+1212C, \u1E2AAL","azmm.":"\uD808\uDEC2 U+122C2, \u0160E\u0160LAM",d:"\uD808\uDC79 U+12079, DI\u0160","da.":"\uD808\uDC47 U+12047, BAR",da:"\uD808\uDE28 U+12228, ME, BA<sub>13</sub>, I\u0160IB, MEN<sub>2</sub>","da'":"\uD808\uDDF2 U+121F2, LAL, LA<sub>2</sub>",daad:"\uD808\uDDB8 U+121B8, LAGAB, GUR<sub>4</sub>, NIGIN<sub>2</sub>, NI\u011CIN<sub>2</sub>, RIN, TUKUR, <kbd>adad</kbd>",dammad:"\uD808\uDD41 U+12141, IB, ARKAB<sub>X</sub>",dauuu:"\uD808\uDF8C U+1238C, ME\u0160",dd:"\uD808\uDE2B U+1222B, MIN, <kbd>m</kbd>",ddd:"\uD808\uDC00 U+12000, A, AYA<sub>2</sub>, DURU<sub>5</sub>, E<sub>4</sub>, EA",datad:"\uD808\uDE47 U+12247, NAM<sub>2</sub>, <kbd>adadxt</kbd>","ddd'g":"\uD808\uDCFB U+120FB, GAR, \u011CAR, NINDA, NI<sub>3</sub>, NIG<sub>2</sub>, NI\u011C<sub>2</sub>",ddudu:"\uD808\uDD29 U+12129, \u1E2AA, KU6",dgaz:"\uD808\uDEA9 U+122A9, SAL, GAL<sub>4</sub>, MI<sub>2</sub>, MUNUS, RAK",dtd:"\uD808\uDDB8 U+121B8, LAGAB, GUR<sub>4</sub>, NIGIN<sub>2</sub>, NI\u011CIN<sub>2</sub>, RIN, TUKUR, <kbd>adad</kbd>",du:"\uD808\uDED9 U+122D9, \u0160U<sub>2</sub>, \u0160U\u0160<sub>2</sub>",dzg:"\uD808\uDD95 U+12195, KAK, DA<sub>3</sub>, DU<sub>3</sub>, GAG",dzgd:"\uD808\uDED6 U+122D6, \u0160ITA",dzagadadxa:"\uD808\uDF90 U+12390, NIN<sub>9</sub>, SAL KU",dzagadadxau:"\uD808\uDC6E U+1206E, DAM",dzagadadxt:"\uD808\uDF8F U+1238F, NIN, E5, ERE\u0160, SAL TUG<sub>2</sub>","dzagdaaa.d":"\uD808\uDF90 U+12390, NIN<sub>9</sub>, SAL KU",dzagdatad:"\uD808\uDF8F U+1238F, NIN, E5, ERE\u0160, SAL TUG<sub>2</sub>","dzagdaaa.du":"\uD808\uDC6E U+1206E, DAM",g:"\uD808\uDF7B U+1237B, GE<sub>22</sub>",gazd:"\uD808\uDC2D U+1202D, AN, AM<sub>6</sub>, AN, DI\u011CIR, IL<sub>3</sub>, NAGGA<sub>X</sub>",gzad:"\uD808\uDC40 U+12040, BA",gzazg:"\uD808\uDC2A U+1202A, aleph, A\u1E2A",gzd:"\uD808\uDC36 U+12036, ARKAB, NIG<sub>2</sub>.IB, ARGAB, ARKAB<sub>2</sub>","gzd'":"\uD808\uDCF0 U+120F0, GAD",gzdtd:"\uD808\uDE94 U+12294, SAG NUTILLU","gzd.d":"\uD808\uDDEC U+121EC, LAGAR","gzd.dtd":"\uD808\uDE95 U+12295, SAG, DUL<sub>7</sub>, SA<sub>12</sub>, SA\u011C, \u0160AK",gzdzg:"\uD808\uDF12 U+12312, UB",gzzg:"\uD808\uDD2D U+1212D, \u1E2AI, DUB<sub>3</sub>, DUG<sub>3</sub>, \u0160AR<sub>2</sub>","gzzg'":"\uD808\uDF13 U+12313, UD, A<sub>12</sub>, A\u1E2A<sub>3</sub>, BABBAR, \u1E2AAD<sub>2</sub>, \u1E2AUD<sub>2</sub>, PIRI\u011C<sub>2</sub>, U<sub>4</sub>, UT","g'ztzg'":"\uD808\uDC72 U+12072, DI, SA<sub>2</sub>","g'zzg'":"\uD808\uDEDD U+122DD, SIG, SIK",gzzgxa:"\uD808\uDC2A U+1202A, aleph, A\u1E2A",m:"\uD808\uDE2B U+1222B, MIN",mm:"\uD808\uDF5D\tU+1235D\tZA, LIMMU<sub>5</sub>, NIGIDALIMMU",mdzg:"\uD808\uDF34 U+12334, UR<sub>4</sub>","mtmta.zg'":"\uD808\uDC56 U+12056, DAG, PAR<sub>3</sub>",mzg:"\uD808\uDF07 U+12307, TUK, DU<sub>12</sub>, TUG, TUKU",mzgav:"\uD808\uDD16 U+12116, GU",t:"\uD808\uDEF0 U+122F0, TAB, A\u0160 / A\u0160",ta:"\uD808\uDC3C U+1203C, A\u0160 / A\u0160 / A\u0160, E\u0160<sub>16</sub>",tat:"\uD808\uDD3F U+1213F, I",tatddd:"\uD808\uDD40 U+12140, I A, IA",tava:"\uD808\uDE52 U+12252, NINDA<sub>2</sub>",td:"\uD808\uDD11 U+12111, GI\u0160, GE\u0160, \u011CI\u0160, IZ","td.":"\uD808\uDE7A U+1227A, PA, \u011CIDRU, SAG<sub>3</sub>, SIG<sub>3</sub>, UGULA","td.d":"\uD808\uDD25 U+12125, GUR",tdzg:"\uD808\uDD1E U+1211E, GUD, GU<sub>4</sub>, E\u0160TUB",tdzgu:"\uD808\uDCF4 U+120F4, GALAM, SUKUD",tdzgtd:"\uD808\uDD10 U+12110, GISAL",tgzd:"\uD808\uDC0A U+1200A, AB, ABA, ABBA, AP, E\u0160<sub>3</sub>, IRI<sub>12</sub>, IS<sub>3</sub>",tgzdd:"\uD808\uDDAF U+121AF, KU<sub>7</sub>",tm:"\uD808\uDD25 U+12125, GUR",tma:"\uD808\uDE25 U+12225, MAR, GI\u0160 ME",tmm:"\uD808\uDF11 U+12311, U2, KU\u0160<sub>3</sub>",tt:"\uD808\uDDF9 U+121F9, LIMMU<sub>2</sub>",ttaa:"\uD808\uDEB8 U+122B8, \u0160AB<sub>6</sub>",ttaaaaad:"\uD808\uDE90 U+12290, RAB","tat.aaaad":"\uD808\uDE90 U+12290, RAB",ttd:"\uD808\uDDA6 U+121A6, KISAL","ttd.":"\uD808\uDC3E U+1203E, A\u0160<sub>2</sub>","ttda.":"\uD808\uDED7 U+122D7, \u0160U",ttda:"\uD808\uDCF2 U+120F2, GAL","ttdadzzzgm.d.":"\uD808\uDE17 U+12217, LUGAL",ttddudu:"\uD808\uDD2B U+1212B, \u1E2AA gun\xFB, GIR, PE","ttdzg'":"\uD808\uDC53 U+12053, BUR, NIG<sub>2</sub> gun\xFB",ttuzg:"\uD808\uDCFC U+120FC, GAR<sub>3</sub>, QAR","ttu.da":"\uD808\uDD4A U+1214A, IGI gun\xFB, AGAR<sub>4</sub>, IMMA<sub>3</sub>, SE<sub>12</sub>, SIG<sub>7</sub>, \u0160EX, UGARX, UGUR<sub>2</sub>",tumd:"\uD808\uDEEC U+122EC, TA*",tvaa:"\uD808\uDE52 U+12252, NINDA<sub>2</sub>",u:"\uD808\uDF0B U+1230B, U",uu:"\uD808\uDF99 U+12399, U U, MIN<sub>3</sub>","uu.":"\uD809\uDC71 U+12471, vertical colon, <kbd>v</kbd>",uuu:"\uD808\uDF0D U+1230D, U U U, ES<sub>2</sub>, E\u0160",uaadzg:"\uD808\uDF0C U+1230C, U GUD, DU<sub>7</sub>, UL",uda:"\uD808\uDD46 U+12146, IGI, LIM, \u0160I","udddg'":"\uD808\uDE7B U+1227B, PAD, \u0160UK, U GAR",utdzg:"\uD808\uDF0C U+1230C, U GUD, DU<sub>7</sub>, UL",utadadxu:"\uD808\uDD22 U+12122, GUL, SI<sub>23</sub>, SUN<sub>2</sub>",utttt:"\uD808\uDE2A U+1222A, MI, GE<sub>6</sub>, GI<sub>6</sub>, GIGGI, \u011CI<sub>6</sub>","u'ttttda":"\uD808\uDC1D U+1201D, AK, AG",uttttgzdzggzdzg:"\uD808\uDF7C U+1237C, GIG, GI<sub>17</sub>, MI NUNUZ, SIM<sub>X</sub>","uu'uu'":"\uD808\uDF10 U+12310, MA\u0160GI, BARGI",uzg:"\uD808\uDC16 U+12016, AB<sub>2</sub>, LID",uzgu:"\uD808\uDDA8 U+121A8, KISIM<sub>5</sub>",uzgud:"\uD808\uDE4F U+1224F, NIM, NUM",v:"\uD809\uDC71 U+12471, vertical colon","vaa.uu.":"\uD808\uDC2B U+1202B, AMAR, ZUR","vv'":"\uD808\uDF10 U+12310, MA\u0160GI, BARGI",vda:"\uD808\uDE7F U+1227F, PI, TAL<sub>2</sub>, WA, WE, WI",vzg:"\uD808\uDC77 U+12077, DIN",z:"\uD808\uDC39 U+12039, A\u0160 ZIDA ten\xFB, DI\u0160 ten\xFB, GE<sub>23</sub>",zz:"\uD808\uDCF5 U+120F5, GAM, GUR<sub>2</sub>, GURUM",zaaud:"\uD808\uDC7A U+1207A, DU, DE<sub>6</sub>, GUB, \u011CEN, GIN, RA<sub>2</sub>, RE<sub>6</sub>, \u0160A<sub>4</sub>, TUM<sub>2</sub>",zd:"\uD808\uDDFA U+121FA, LI\u0160, DILIM<sub>2</sub>",zdg:"\uD808\uDD95 U+12195, KAK, DA<sub>3</sub>, DU<sub>3</sub>, GAG",zdgd:"\uD808\uDED6 U+122D6, \u0160ITA",zzd:"\uD808\uDEFB U+122FB, TAR, HA\u0160, KU<sub>5</sub>, KUD, SILA",zg:"\uD808\uDE7D U+1227D, PAP, PAB, KUR<sub>2</sub>",zgd:"\uD808\uDEE1 U+122E1, SILA<sub>3</sub>, QA, SAL<sub>4</sub>","zgm.":"\uD808\uDE4C U+1224C, NI, BE<sub>3</sub>, DIG, I<sub>3</sub>, IA<sub>3</sub>, LE<sub>2</sub>, LI<sub>2</sub>, LID<sub>2</sub>, NE<sub>2</sub>, SU\u0160<sub>2</sub>, ZAL, ZAR<sub>2</sub>","zgm.d.":"\uD808\uDD55 U+12155, IR, ER, GAG gun\xFB","zgm.gzzg'":"\uD808\uDF8E U+1238E, NA<sub>4</sub>, NI UD",zgzg:"\uD808\uDE7C U+1227C, PAN","zg'zga":"\uD808\uDC4D U+1204D, BU, BUR<sub>12</sub>, DUR<sub>7</sub>, GID<sub>2</sub>, KIM<sub>3</sub>, PU, SIR<sub>2</sub>, SU<sub>13</sub>, SUD<sub>4</sub>, TUR<sub>8</sub>",zmg:"\uD808\uDE4C U+1224C, NI, BE<sub>3</sub>, DIG, I<sub>3</sub>, IA<sub>3</sub>, LE<sub>2</sub>, LI<sub>2</sub>, LID<sub>2</sub>, NE<sub>2</sub>, SU\u0160<sub>2</sub>, ZAL, ZAR<sub>2</sub>",zuaad:"\uD808\uDC7A U+1207A, DU, RE<sub>6</sub>, GUB, \u0160A<sub>4</sub>",zzz:"\uD808\uDDB3 U+121B3, KUR, GIN<sub>3</sub>",zzzz:"\uD808\uDF97 U+12397, TI<sub>2</sub>"},t={1:"\uD808\uDC38",2:"\uD808\uDEF0",3:"\uD809\uDC3B",4:"\uD809\uDC02",5:"\uD809\uDC03",6:"\uD809\uDC40",7:"\uD809\uDC41",8:"\uD809\uDC45",9:"\uD809\uDC47",10:"\uD808\uDF0B",20:"\uD808\uDF0B\u200D\uD808\uDF0B",30:"\uD808\uDF0D",40:"\uD809\uDC0F",50:"\uD809\uDC10",60:"\uD809\uDC15",120:"\uD809\uDC16",180:"\uD809\uDC17",240:"\uD809\uDC18",300:"\uD809\uDC19",360:"\uD809\uDC1A",420:"\uD809\uDC1B",480:"\uD809\uDC1C",540:"\uD809\uDC1D",600:"\uD809\uDC1E",1200:"\uD809\uDC1F",1800:"\uD809\uDC20",2400:"\uD809\uDC21",3e3:"\uD809\uDC22",3600:"\uD808\uDD2D",7200:"\uD809\uDC23",10800:"\uD809\uDC25",14400:"\uD809\uDC26",18e3:"\uD809\uDC27",21600:"\uD809\uDC28",25200:"\uD809\uDC29",28800:"\uD809\uDC2A",32400:"\uD809\uDC2B",36e3:"\uD809\uDC2C",72e3:"\uD809\uDC2D",108e3:"\uD809\uDC2F",144e3:"\uD809\uDC30",18e4:"\uD809\uDC31",216e3:"\uD809\uDC32",432e3:"\uD809\uDC33"};yodasws.page("home").setRoute({template:"pages/home.html",route:"/"}).on("load",function(){var u={number:document.getElementById("cuneiform-number-out"),strokes:document.getElementById("cuneiform-strokes-out")},s={strokes:document.getElementById("cuneiform-strokes")};s.strokes.addEventListener("input",function(s){var t=[];if(""===s.target.value)return void(u.strokes.innerHTML=["<kbd>a</kbd> "+b.a,"<kbd>t</kbd> "+b.t,"<kbd>d</kbd> "+b.d,"<kbd>m</kbd> "+b.m,"<kbd>g</kbd> "+b.g,"<kbd>z</kbd> "+b.z,"<kbd>u</kbd> "+b.u,"<kbd>v</kbd> "+b.v].map(function(u){return u+"<br>"}).join(""));var e=s.target.value.toLowerCase();Object.entries(b).forEach(function(_ref){var _ref2=_slicedToArray(_ref,2),u=_ref2[0],s=_ref2[1];0===u.indexOf(e)&&t.push("".concat(s,"<br><kbd>").concat(u,"</kbd>"))}),Object.entries(b).forEach(function(_ref3){var _ref4=_slicedToArray(_ref3,2),u=_ref4[0],s=_ref4[1];u.indexOf(e)>0&&t.push("".concat(s,"<br><kbd>").concat(u,"</kbd>"))}),u.strokes.innerHTML=t.map(function(u){return"<li>".concat(u,"</li>")}).join("")}),s.strokes.dispatchEvent(new Event("input")),document.getElementById("cuneiform-number").addEventListener("input",function(s){var b="";if(""===s.target.value)return void(u.number.innerHTML="");var e=Number.parseFloat(s.target.value);s.target.hasAttribute("max")&&e>Number.parseInt(s.target.getAttribute("max"))&&(e=Number.parseInt(s.target.getAttribute("max")),s.target.value=e),s.target.hasAttribute("min")&&e<Number.parseInt(s.target.getAttribute("min"))&&(e=Number.parseInt(s.target.getAttribute("min")),s.target.value=e),Object.entries(t).sort(function(u,s){return s[0]-u[0]}).forEach(function(_ref5){var _ref6=_slicedToArray(_ref5,2),u=_ref6[0],s=_ref6[1];e>=u&&(b+="<abbr title=\"".concat(u.replace(/(\d)(\d\d\d)+$/g,"$1,$2"),"\">").concat(s,"</abbr>"),e-=u)}),u.number.innerHTML=b})}),yodasws.page("enuma-elish").setRoute({template:"enuma-elish.html",canonicalRoute:"/enuma-elish",route:/^\/enuma-elish\/?$/}),yodasws.page("etcsl").setRoute({template:"etcsl/$1.html",route:/^\/etcsl\/([^\/]*)$/}),yodasws.page("cdli").setRoute({template:"cdli/$1.html",route:/^\/cdli\/([^\/]*)$/})}]);