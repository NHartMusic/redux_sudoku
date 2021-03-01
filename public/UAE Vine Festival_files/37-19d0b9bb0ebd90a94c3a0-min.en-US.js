(window["wpJsonpExtractCss"]=window["wpJsonpExtractCss"]||[]).push([[37],{"./src/main/webapp/universal/src/apps/App/shared/utils/isDisclosed.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var o=a(r("./common/temp/node_modules/@babel/runtime/helpers/typeof.js"));var u=a(r("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var p=function e(t){var r=t.properties,a=void 0===r?{}:r;var n=a.enum,i=a.enumAnnotation;if(!n)return"";var s=n.reduce(function(e,t,r){var a=i[r]||{};e.push("".concat(t," {").concat(a.label||t,"}"));return e},[]);return"{ value, select, ".concat(s.join(" ")," other { } }")};var s=function e(t){var r=t.$conditional,a=t.isDisclosed,n=(0,u.default)(t,["$conditional","isDisclosed"]);if(!a)return t;"object"!==(0,o.default)(a)||a.keepLabel||delete n.properties.label;var i="object"===(0,o.default)(a)?a.detail:void 0;var s=t.properties,l=void 0===s?{}:s;i=i||(l.enumAnnotation&&t.$mapping?{string:p(t),stringContext:{value:n.$mapping}}:{$data:n.$mapping});return{type:"disclosure",properties:c({},"boolean"===typeof a?{}:a,{label:l.label||"",detail:i,children:[n]}),$mapping:t.$mapping,scope:t.scope,$conditional:r}};t.default=s;e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/TweakUiSchemaUtils.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.getTweakCategory=f;t.buildFieldUiSchema=b;t.buildDisclosedTweakUiSchema=v;t.filterByCategory=T;t.buildTweakUiSchema=E;t.buildGroupedUiSchema=N;t.buildCategorizedUiSchema=I;t.createContextField=t.createTweakConditional=t.generateRoute=void 0;var i=a(r("./common/temp/node_modules/@babel/runtime/helpers/toConsumableArray.js"));var l=a(r("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var n=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var c=a(r("./common/temp/node_modules/lodash/compact.js"));var s=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/tweakTypeSchemaMap.js"));var o=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/categoryForTweakType.js"));var u=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/disclosure.js"));function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var O=function e(t){return t.reduce(function(e,t){return"".concat(e,"/").concat(t.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase())},"")};t.generateRoute=O;function f(e){return e.category||o.default[e.type]}var m=function e(t){if(t.showOnlyWhenPresent)return{$conditional:{$if:(0,n.default)({},"#/definitionVisibility/".concat(t.variableName),{eq:false}),$then:{type:"hidden"}}};return{}};t.createTweakConditional=m;var _=function e(t){return{type:"context",properties:{label:t}}};t.createContextField=_;function b(e){var t=f(e);var r=null;r=e.jsfFieldType?s.default[e.jsfFieldType]:s.default[e.type];if(r){var a=e.label||e.title;var n=d({},e,{label:a,$mapping:"#/tweakValues/".concat(e.variableName)});n.$route||(n.$route=O([t,a]));if(!n.$conditional){var i=m(e);Object.assign(n,i)}return r(n)}}function v(e){var t=e.tweakDefinitions;var n="";var i=[];t=Array.isArray(t)?t:Object.values(t);var r=t.reduce(function(e,t){var r=f(t);if(n!==r){if(i.length>0){e.push((0,u.default)({label:n,hideIfEmpty:true,children:i}));i=[]}n=r}var a=b(t);a&&i.push(a);return e},[]);r.push((0,u.default)({label:n,hideIfEmpty:true,children:i}));return r}function T(e,r){return e.filter(function(e){var t=e.category;return r.includes(t)})}function E(e){var t=e.tweakDefinitions,l=e.shouldIncludeCategoryHeaders;var o="";return t.reduce(function(e,t){var r=f(t);if(o!==r){if(l){var a=_(r);e.push(a)}o=r}var n=b(t);if(n){if("segmentedradio"===t.jsfFieldType){var i=t.label||t.title;var s=_(i);e.push(s)}e.push(n)}return e},[])}function N(e){var t=e.groups,s=e.tweaksRenderer;var r=t._;var a=r?s("_",r):[];var n=Object.entries(t).reduce(function(e,t){var r=(0,l.default)(t,2),a=r[0],n=r[1];if("_"===a)return e;var i=_(a);e.push(i);return e.concat(s(a,n))},[]);return[].concat((0,i.default)(a),(0,i.default)(n))}var A={type:"spacer",properties:{gridMultiplier:1}};function I(e){var t=e.categorizedTweaks,r=void 0===t?[]:t,a=e.tweakDefinitions,n=void 0===a?{}:a,l=e.tweaksRenderer;if(!n||0===Object.keys(n).length||!l)return[];var o=d({},n);var i=r.reduce(function(e,t){var r=t.category,a=t.tweakIds;var n=a.reduce(function(e,t){var r=o[t];if(r){e.push(r);delete o[t]}return e},[]);var i=l(r,n);if(i.length>0){var s=_(r);e.push(s);e=e.concat(i);e.push(A)}return e},[]);var s="Misc";var u=l(s,Object.values(o));return(0,c.default)(i.concat(u))}},"./src/main/webapp/universal/src/shared/utils/Tweaks/categoryForTweakType.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var i=a(r("./src/main/webapp/frontend/packages/enums/TweakTypes.js"));var s=r("./src/main/webapp/universal/src/shared/utils/Tweaks/constants/strings.js");var l;var o=(l={},(0,n.default)(l,i.default.COLOR,s.COLORS),(0,n.default)(l,i.default.IMAGE,s.COLORS),(0,n.default)(l,i.default.COLORPALETTE,s.COLORS),(0,n.default)(l,i.default.HUE,s.COLORS),(0,n.default)(l,i.default.FONT,s.TYPOGRAPHY),(0,n.default)(l,i.default.VALUE,s.SIZE_AND_VALUES),(0,n.default)(l,i.default.PADDING,s.SIZE_AND_VALUES),(0,n.default)(l,i.default.MARGIN,s.SIZE_AND_VALUES),(0,n.default)(l,i.default.CHECKBOX,s.OPTIONS),(0,n.default)(l,i.default.DROPDOWN,s.OPTIONS),l);t.default=o;e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/constants/strings.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.OPTIONS=t.SIZE_AND_VALUES=t.TYPOGRAPHY=t.COLORS=t.BACKGROUND_IMAGE_FIX_POSITION_FIXED=t.BACKGROUND_IMAGE_FIX_POSITION_SCROLL=t.BACKGROUND_IMAGE_FIX_POSITION=t.BACKGROUND_IMAGE_REPEAT_VERTICAL=t.BACKGROUND_IMAGE_REPEAT_HORIZONTAL=t.BACKGROUND_IMAGE_REPEAT_NO_REPEAT=t.BACKGROUND_IMAGE_REPEAT=t.BACKGROUND_IMAGE_POSITION_BOTTOM_RIGHT=t.BACKGROUND_IMAGE_POSITION_BOTTOM_CENTER=t.BACKGROUND_IMAGE_POSITION_BOTTOM_LEFT=t.BACKGROUND_IMAGE_POSITION_CENTER_RIGHT=t.BACKGROUND_IMAGE_POSITION_CENTER_CENTER=t.BACKGROUND_IMAGE_POSITION_CENTER_LEFT=t.BACKGROUND_IMAGE_POSITION_TOP_RIGHT=t.BACKGROUND_IMAGE_POSITION_TOP_CENTER=t.BACKGROUND_IMAGE_POSITION_TOP_LEFT=t.BACKGROUND_IMAGE_POSITION=t.BACKGROUND_IMAGE_SIZE_CONTAIN=t.BACKGROUND_IMAGE_SIZE_COVER=t.BACKGROUND_IMAGE_SIZE_AUTO=t.BACKGROUND_IMAGE_SIZE=t.FONT_SIZE=t.FONT_TRANSFORM_CAPITALIZE=t.FONT_TRANSFORM_LOWERCASE=t.FONT_TRANSFORM_UPPERCASE=t.FONT_TRANSFORM_NONE=t.FONT_TEXT_TRANSFORM=t.FONT_DECORATION_UNDER=t.FONT_DECORATION_OVER=t.FONT_DECORATION_LINE=t.FONT_DECORATION_NONE=t.FONT_TEXT_DECORATION=t.FONT_LINE_HEIGHT=t.FONT_LETTER_SPACING=t.FONT_STYLE_ITALIC=t.FONT_STYLE_NORMAL=t.FONT_STYLE=t.FONT_WEIGHT=t.FONT_FAMILY=void 0;var a=r("./src/main/webapp/universal/src/shared/i18n/index.ts");var n=(0,a.t)("Family");t.FONT_FAMILY=n;var i=(0,a.t)("Weight");t.FONT_WEIGHT=i;var s=(0,a.t)("Style");t.FONT_STYLE=s;var l=(0,a.t)("Normal");t.FONT_STYLE_NORMAL=l;var o=(0,a.t)("Italic");t.FONT_STYLE_ITALIC=o;var u=(0,a.t)("Letter Spacing");t.FONT_LETTER_SPACING=u;var c=(0,a.t)("Line Height");t.FONT_LINE_HEIGHT=c;var p=(0,a.t)("Text Decoration");t.FONT_TEXT_DECORATION=p;var d=(0,a.t)("None");t.FONT_DECORATION_NONE=d;var O=(0,a.t)("Line Through");t.FONT_DECORATION_LINE=O;var f=(0,a.t)("Overline");t.FONT_DECORATION_OVER=f;var m=(0,a.t)("Underline");t.FONT_DECORATION_UNDER=m;var _=(0,a.t)("Text Transform");t.FONT_TEXT_TRANSFORM=_;var b=(0,a.t)("None");t.FONT_TRANSFORM_NONE=b;var v=(0,a.t)("Uppercase");t.FONT_TRANSFORM_UPPERCASE=v;var T=(0,a.t)("Lowercase");t.FONT_TRANSFORM_LOWERCASE=T;var E=(0,a.t)("Capitalize");t.FONT_TRANSFORM_CAPITALIZE=E;var N=(0,a.t)("Size");t.FONT_SIZE=N;var A=(0,a.t)("Size");t.BACKGROUND_IMAGE_SIZE=A;var I=(0,a.t)("Auto");t.BACKGROUND_IMAGE_SIZE_AUTO=I;var h=(0,a.t)("Cover");t.BACKGROUND_IMAGE_SIZE_COVER=h;var R=(0,a.t)("Contain");t.BACKGROUND_IMAGE_SIZE_CONTAIN=R;var j=(0,a.t)("Position");t.BACKGROUND_IMAGE_POSITION=j;var g=(0,a.t)("Top left");t.BACKGROUND_IMAGE_POSITION_TOP_LEFT=g;var y=(0,a.t)("Top center");t.BACKGROUND_IMAGE_POSITION_TOP_CENTER=y;var P=(0,a.t)("Top right");t.BACKGROUND_IMAGE_POSITION_TOP_RIGHT=P;var w=(0,a.t)("Center left");t.BACKGROUND_IMAGE_POSITION_CENTER_LEFT=w;var D=(0,a.t)("Center center");t.BACKGROUND_IMAGE_POSITION_CENTER_CENTER=D;var C=(0,a.t)("Center right");t.BACKGROUND_IMAGE_POSITION_CENTER_RIGHT=C;var G=(0,a.t)("Bottom left");t.BACKGROUND_IMAGE_POSITION_BOTTOM_LEFT=G;var S=(0,a.t)("Bottom center");t.BACKGROUND_IMAGE_POSITION_BOTTOM_CENTER=S;var $=(0,a.t)("Bottom right");t.BACKGROUND_IMAGE_POSITION_BOTTOM_RIGHT=$;var M=(0,a.t)("Repeat");t.BACKGROUND_IMAGE_REPEAT=M;var U=(0,a.t)("No repeat");t.BACKGROUND_IMAGE_REPEAT_NO_REPEAT=U;var F=(0,a.t)("Repeat horizontal");t.BACKGROUND_IMAGE_REPEAT_HORIZONTAL=F;var k=(0,a.t)("Repeat vertical");t.BACKGROUND_IMAGE_REPEAT_VERTICAL=k;var L=(0,a.t)("Fix Position");t.BACKGROUND_IMAGE_FIX_POSITION=L;var B=(0,a.t)("Scroll");t.BACKGROUND_IMAGE_FIX_POSITION_SCROLL=B;var x=(0,a.t)("Fixed");t.BACKGROUND_IMAGE_FIX_POSITION_FIXED=x;var K=(0,a.t)("Colors");t.COLORS=K;var H=(0,a.t)("Typography");t.TYPOGRAPHY=H;var Z=(0,a.t)("Size & Values");t.SIZE_AND_VALUES=Z;var V=(0,a.t)("Options");t.OPTIONS=V},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/color.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=n;var d=a(r("./src/main/webapp/universal/src/apps/App/shared/utils/isDisclosed.js"));var O="passthrough";function n(e){var t=e.label,r=e.title,a=e.disableTransparency,n=e.providerType,i=void 0===n?O:n,s=e.paletteMapping,l=void 0===s?[]:s,o=e.$mapping,u=e.$conditional,c=e.$route,p=e.isDisclosed;return(0,d.default)({type:"colorpicker",isDisclosed:void 0!==p?p:{keepLabel:true,detailType:"color",detail:{$data:o}},properties:{label:t,title:r,providerType:i,hasOpacitySlider:!a,showTransparentColor:!a},$mapping:i===O?{color:o,palette:l}:o,$route:c,$conditional:u})}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/disclosure.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=s;var n=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var u=a(r("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var c=r("./src/main/webapp/universal/src/shared/utils/Tweaks/TweakUiSchemaUtils.js");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function d(e){var t=e.find(function(e){return!e.$conditional||!e.$conditional.$then||"hidden"!==e.$conditional.$then.type});if(t)return;var r=e.reduce(function(e,t){e.push(t.$conditional.$if);return e},[]);return r.length&&{$if:{allOf:r},$then:{type:"hidden"}}}function s(e){var t=e.properties,r=e.label,a=e.title,n=e.hideIfEmpty,i=e.children,s=e.$route,l=(0,u.default)(e,["properties","label","title","hideIfEmpty","children","$route"]);var o=n&&d(i);return p({type:"disclosure",properties:p({label:r,title:a,children:i},t||{})},o?{$conditional:o}:{},{$route:s||(0,c.generateRoute)([r])},l)}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/dropdown.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=s;var n=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var p=a(r("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function s(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$conditional,i=e.$route,s=e.isDisclosed,l=e.options,o=e.optionsLabels,u=e.enumAnnotation,c=(0,p.default)(e,["label","title","$mapping","$conditional","$route","isDisclosed","options","optionsLabels","enumAnnotation"]);return d({$mapping:a,$route:i,$conditional:n,properties:{label:t,title:r,enum:l,enumAnnotation:u||o&&o.map(function(e){return{label:e}})||l.map(function(e){return{label:e}})}},c,{type:"dropdownselect"})}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/font.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=n;var c=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var p=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/slider.js"));var d=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/select.js"));var O=r("./src/main/webapp/universal/src/shared/utils/Tweaks/constants/strings.js");var f={min:.1,max:4,step:.1};var m={min:-1,max:1,step:.05};function n(e){var t=e.label,r=e.title,a=e.$conditional,n=e.$mapping,i=e.$route,s=e.isDisclosed,l=e.parentLabel;var o=n.replace("-font-family","");var u=[{type:"fontpicker",properties:{label:t,title:r,labels:{family:O.FONT_FAMILY,weight:O.FONT_WEIGHT,style:O.FONT_STYLE,fontStyles:{normal:O.FONT_STYLE_NORMAL,italic:O.FONT_STYLE_ITALIC}}},$mapping:{familyName:"".concat(o,"-font-family"),weight:"".concat(o,"-font-weight"),style:"".concat(o,"-font-style")},$route:"".concat(i,"/font")},(0,p.default)({label:O.FONT_SIZE,$mapping:"".concat(o,"-font-size"),$route:"".concat(i,"/font-size"),$conditional:{$if:(0,c.default)({},"".concat(o,"-font-size/value"),{exists:false}),$then:{type:"hidden"}},units:{px:{min:6,max:100,step:1},em:{min:.1,max:10,step:.1},"%":{min:1,max:200,step:1},vh:f,vw:f,vmin:f,vmax:f}}),(0,p.default)({label:O.FONT_LINE_HEIGHT,$mapping:"".concat(o,"-line-height"),$route:"".concat(i,"/line-height"),$conditional:{$if:(0,c.default)({},"".concat(o,"/line-height/value"),{exists:false}),$then:{type:"hidden"}},units:{px:{min:6,max:96,step:1},em:{min:.5,max:3,step:.1},"%":{min:1,max:200,step:1},vh:f,vw:f,vmin:f,vmax:f}}),(0,p.default)({label:O.FONT_LETTER_SPACING,$mapping:"".concat(o,"-letter-spacing"),$route:"".concat(i,"/letter-spacing"),$conditional:{$if:(0,c.default)({},"".concat(o,"-letter-spacing/value"),{exists:false}),$then:{type:"hidden"}},units:{px:{min:-20,max:20,step:1},em:{min:-.1,max:.1,step:.01},vh:m,vw:m,vmin:m,vmax:m}}),(0,d.default)({label:O.FONT_TEXT_DECORATION,$mapping:"".concat(o,"-text-decoration"),$route:"".concat(i,"/text-decoration"),$conditional:{$if:(0,c.default)({},"".concat(o,"-text-decoration"),{exists:false}),$then:{type:"hidden"}},options:["none","line-through","overline","underline"],enumAnnotation:[{label:O.FONT_DECORATION_NONE},{label:O.FONT_DECORATION_LINE},{label:O.FONT_DECORATION_OVER},{label:O.FONT_DECORATION_UNDER}]}),(0,d.default)({label:O.FONT_TEXT_TRANSFORM,$mapping:"".concat(o,"-text-transform"),$route:"".concat(i,"/text-transform"),$conditional:{$if:(0,c.default)({},"".concat(o,"-text-transform"),{exists:false}),$then:{type:"hidden"}},options:["none","uppercase","lowercase","capitalize"],enumAnnotation:[{label:O.FONT_TRANSFORM_NONE},{label:O.FONT_TRANSFORM_UPPERCASE},{label:O.FONT_TRANSFORM_LOWERCASE},{label:O.FONT_TRANSFORM_CAPITALIZE}]})];if(!s)return u;return{type:"disclosure",detailType:"string",detail:{$data:"".concat(o,"-font-family")},$route:i,$conditional:a,properties:{label:l,children:u}}}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/image.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=n;var s=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var l=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/select.js"));var o=r("./src/main/webapp/universal/src/shared/utils/Tweaks/constants/strings.js");function n(e){var t=e.label,r=e.title,a=e.$conditional,n=e.$mapping,i=e.$route;return{type:"disclosure",properties:{label:t,title:r,children:[{type:"image",properties:{label:t},$mapping:"".concat(n,"/background-image"),$route:"".concat(i,"/background-image")},(0,l.default)({label:o.BACKGROUND_IMAGE_SIZE,$mapping:"".concat(n,"/background-size"),$route:"".concat(i,"/background-size"),options:["auto","cover","contain"],enumAnnotation:[{label:o.BACKGROUND_IMAGE_SIZE_AUTO},{label:o.BACKGROUND_IMAGE_SIZE_COVER},{label:o.BACKGROUND_IMAGE_SIZE_CONTAIN}]}),(0,l.default)({label:o.BACKGROUND_IMAGE_POSITION,$mapping:"".concat(n,"/background-position"),$route:"".concat(i,"/background-position"),options:["top left","top center","top right","center left","center center","center right","bottom left","bottom center","bottom right"],enumAnnotation:[{label:o.BACKGROUND_IMAGE_POSITION_TOP_LEFT},{label:o.BACKGROUND_IMAGE_POSITION_TOP_CENTER},{label:o.BACKGROUND_IMAGE_POSITION_TOP_RIGHT},{label:o.BACKGROUND_IMAGE_POSITION_CENTER_LEFT},{label:o.BACKGROUND_IMAGE_POSITION_CENTER_CENTER},{label:o.BACKGROUND_IMAGE_POSITION_CENTER_RIGHT},{label:o.BACKGROUND_IMAGE_POSITION_BOTTOM_LEFT},{label:o.BACKGROUND_IMAGE_POSITION_BOTTOM_CENTER},{label:o.BACKGROUND_IMAGE_POSITION_BOTTOM_RIGHT}]}),(0,l.default)({label:o.BACKGROUND_IMAGE_REPEAT,$mapping:"".concat(n,"/background-repeat"),$route:"".concat(i,"/background-repeat"),options:["no-repeat","repeat","repeat-x","repeat-y"],enumAnnotation:[{label:o.BACKGROUND_IMAGE_REPEAT_NO_REPEAT},{label:o.BACKGROUND_IMAGE_REPEAT},{label:o.BACKGROUND_IMAGE_REPEAT_HORIZONTAL},{label:o.BACKGROUND_IMAGE_REPEAT_VERTICAL}]}),(0,l.default)({label:o.BACKGROUND_IMAGE_FIX_POSITION,$mapping:"".concat(n,"/background-attachment"),$route:"".concat(i,"/background-attachment"),options:["scroll","fixed"],enumAnnotation:[{label:o.BACKGROUND_IMAGE_FIX_POSITION_SCROLL},{label:o.BACKGROUND_IMAGE_FIX_POSITION_FIXED}]})]},$conditional:a||{$if:(0,s.default)({},"".concat(n,"/background-image"),{exists:false}),$then:{type:"hidden"}}}}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/segmentedradio.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=n;var p=a(r("./src/main/webapp/universal/src/apps/App/shared/utils/isDisclosed.js"));function n(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$conditional,i=e.$route,s=e.isDisclosed,l=e.options,o=e.optionsLabels,u=e.enumAnnotation;var c=o&&o.map(function(e){return{label:e}})||l.map(function(e){return{label:e}});return(0,p.default)({type:"segmentedradio",$mapping:a,$route:i,$conditional:n,isDisclosed:void 0!==s?s:{keepLabel:true,detailType:"string",detail:{$data:a}},properties:{label:t,title:r,enum:l,enumAnnotation:u||c}})}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/select.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=n;var c=a(r("./src/main/webapp/universal/src/apps/App/shared/utils/isDisclosed.js"));function n(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$conditional,i=e.$route,s=e.isDisclosed,l=e.options,o=e.enumAnnotation,u=e.optionsLabels;return(0,c.default)({type:"select",$mapping:a,$route:i,$conditional:n,isDisclosed:void 0===s||s,properties:{label:t,title:r,enum:l,enumAnnotation:o||u&&u.map(function(e){return{label:e}})||l.map(function(e){return{label:e}})}})}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/slider.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=s;var n=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var f=a(r("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var m=a(r("./src/main/webapp/universal/src/apps/App/shared/utils/isDisclosed.js"));var _=r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/index.js");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function s(e){var t=e.label,r=e.$mapping,a=e.$route,n=e.isDisclosed,i=e.isHoverable,s=e.min,l=e.max,o=e.step,u=e.title,c=e.$conditional,p=(0,f.default)(e,["label","$mapping","$route","isDisclosed","isHoverable","min","max","step","title","$conditional"]);var d=(0,_.hasUnit)(e)?{units:(0,_.getUnits)(e)}:{};var O=(0,_.getUnitString)(e);return(0,m.default)({type:"range",$mapping:r,$route:a,properties:b({label:t,title:u},p.properties?p.properties:{},{min:s,max:l,step:o,clampAtMin:true,clampAtMax:true},d),isDisclosed:void 0!==n?n:{keepLabel:true,detailType:"string",detail:O},isHoverable:i,$conditional:c})}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/stepper.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=s;var n=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var O=a(r("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var f=a(r("./src/main/webapp/universal/src/apps/App/shared/utils/isDisclosed.js"));var m=r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/index.js");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,n.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function s(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$route,i=e.isDisclosed,s=e.min,l=e.max,o=e.step,u=e.$conditional,c=(0,O.default)(e,["label","title","$mapping","$route","isDisclosed","min","max","step","$conditional"]);var p=(0,m.hasUnit)(e)?{units:(0,m.getUnits)(e)}:{};var d=(0,m.getUnitString)(e);return(0,f.default)({type:"stepper",$mapping:a,$route:n,properties:_({label:t,title:r},c.properties?c.properties:{},{min:s,max:l,step:o,clampAtMin:true,clampAtMax:true},p),isDisclosed:void 0!==i?i:{keepLabel:true,detailType:"string",detail:d},$conditional:u})}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/toggle.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=a;function a(e){var t=e.label,r=e.title,a=e.$mapping,n=e.$route,i=e.$conditional;return{type:"boolean",$mapping:a,$route:n,$conditional:i,properties:{label:t,title:r}}}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/getUnitString.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=i;var n=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/hasUnit.js"));function i(e){var t=e.$mapping;return(0,n.default)(e)?{string:"{value}{unit}",stringContext:{value:"".concat(t,"/value"),unit:"".concat(t,"/unit")}}:{string:"{value}",stringContext:{value:t}}}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/getUnits.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=i;var d=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var O=a(r("./common/temp/node_modules/lodash/isNil.js"));var f=r("./src/main/webapp/universal/src/shared/utils/StringUtils.js");var m=r("./src/main/webapp/universal/src/shared/utils/Tweaks/valueParser.js");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,a)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),true).forEach(function(e){(0,d.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function i(e){var t=e.defaultValue,r=e.unit,a=e.units,n=e.min,i=e.max,s=e.step;var l=(0,f.splitUnits)(t),o=l.unit;var u=(0,m.getMinMaxStepDefaults)(e);var c=!(0,O.default)(n)&&!(0,O.default)(i)&&!(0,O.default)(s);var p=c?(0,d.default)({},r||o,{min:n,max:i,step:s}):{};return _({},u,{},p,{},a)}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/hasUnit.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=a;var s=r("./src/main/webapp/universal/src/shared/utils/StringUtils.js");function a(e){var t=e.defaultValue,r=e.units,a=e.unit;var n=(0,s.splitUnits)(t),i=n.unit;return Boolean(r||a||i)}e.exports=t.default},"./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/index.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"getUnits",{enumerable:true,get:function e(){return n.default}});Object.defineProperty(t,"hasUnit",{enumerable:true,get:function e(){return i.default}});Object.defineProperty(t,"getUnitString",{enumerable:true,get:function e(){return s.default}});var n=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/getUnits.js"));var i=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/hasUnit.js"));var s=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/utils/getUnitString.js"))},"./src/main/webapp/universal/src/shared/utils/Tweaks/tweakTypeSchemaMap.js":function(e,t,r){"use strict";var a=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var i=a(r("./src/main/webapp/frontend/packages/enums/TweakTypes.js"));var s=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/constants/TweakTypeNames.js"));var l=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/color.js"));var o=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/image.js"));var u=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/font.js"));var c=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/select.js"));var p=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/slider.js"));var d=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/toggle.js"));var O=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/dropdown.js"));var f=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/segmentedradio.js"));var m=a(r("./src/main/webapp/universal/src/shared/utils/Tweaks/fields/stepper.js"));var _;var b=(_={},(0,n.default)(_,i.default.COLOR,l.default),(0,n.default)(_,i.default.COLORPALETTE,l.default),(0,n.default)(_,i.default.HUE,l.default),(0,n.default)(_,i.default.IMAGE,o.default),(0,n.default)(_,i.default.FONT,u.default),(0,n.default)(_,i.default.VALUE,p.default),(0,n.default)(_,i.default.PADDING,p.default),(0,n.default)(_,i.default.MARGIN,p.default),(0,n.default)(_,i.default.CHECKBOX,d.default),(0,n.default)(_,i.default.DROPDOWN,c.default),(0,n.default)(_,s.default.fontFamily,function(){}),(0,n.default)(_,s.default.fontStyle,O.default),(0,n.default)(_,s.default.fontWeight,O.default),(0,n.default)(_,s.default.value,p.default),(0,n.default)(_,s.default.dropdown,O.default),(0,n.default)(_,s.default.checkbox,d.default),(0,n.default)(_,"segmentedradio",f.default),(0,n.default)(_,"stepper",m.default),(0,n.default)(_,"range",p.default),(0,n.default)(_,"dropdownselect",O.default),(0,n.default)(_,"boolean",d.default),_);t.default=b;e.exports=t.default}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/37-e232c919fffb999c81310-min.en-US.js.map