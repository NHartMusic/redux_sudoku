(window["wpJsonpExtractCss"]=window["wpJsonpExtractCss"]||[]).push([[4],{"./common/temp/node_modules/@sqs/core-components/primitives/CircularProgressIndicator.js":function(e,t,r){"use strict";r.r(t);var n=r("./common/temp/node_modules/@sqs/core-components/build/lib/primitives/CircularProgressIndicator/index.js");r.d(t,"default",function(){return n["a"]})},"./common/temp/node_modules/lodash/_baseNth.js":function(e,t,r){var n=r("./common/temp/node_modules/lodash/_isIndex.js");function o(e,t){var r=e.length;if(!r)return;t+=t<0?r:0;return n(t,r)?e[t]:void 0}e.exports=o},"./common/temp/node_modules/lodash/nth.js":function(e,t,r){var n=r("./common/temp/node_modules/lodash/_baseNth.js"),o=r("./common/temp/node_modules/lodash/toInteger.js");function a(e,t){return e&&e.length?n(e,o(t)):void 0}e.exports=a},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/JSFNavModal.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var o=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var j=o(r("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var y=o(r("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var a=o(r("./common/temp/node_modules/@babel/runtime/helpers/typeof.js"));var s=o(r("./common/temp/node_modules/@babel/runtime/helpers/classCallCheck.js"));var l=o(r("./common/temp/node_modules/@babel/runtime/helpers/createClass.js"));var u=o(r("./common/temp/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var i=o(r("./common/temp/node_modules/@babel/runtime/helpers/inherits.js"));var d=o(r("./common/temp/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var c=o(r("./common/temp/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var m=o(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var p=o(r("./common/temp/node_modules/lodash/last.js"));var C=o(r("./common/temp/node_modules/lodash/omit.js"));var _=o(r("./common/temp/node_modules/lodash/get.js"));var E=n(r("./common/temp/node_modules/react/index.js"));var f=o(r("./common/temp/node_modules/prop-types/index.js"));var w=r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/externals.js");var v=r("./common/temp/node_modules/@sqs/rosetta-elements/build/lib/index.js");var x=r("./common/temp/node_modules/@sqs/rosetta-compositions/build/lib/index.js");var O=r("./common/temp/node_modules/@sqs/rosetta-primitives/build/lib/index.js");var P=n(r("./common/temp/node_modules/@sqs/core-components/navigation/NavMenu.js"));var R=n(r("./common/temp/node_modules/@sqs/jsf-fields/lib/es/main.js"));var B=o(r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/PatchedDateTimeField.js"));var S=o(r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/JSFNavModal.less"));var D=o(r("./common/temp/node_modules/@sqs/core-components/primitives/CircularProgressIndicator.js"));function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),true).forEach(function(e){(0,m.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function b(o){var a=g();return function e(){var t=(0,c.default)(o),r;if(a){var n=(0,c.default)(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);return(0,d.default)(this,r)}}function g(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}var F=x.NavDialog.Sidebar,I=x.NavDialog.Body;var A=I.Header;var q=["nestedCategories"];var T=function e(t){return q.includes(t)};var k=function(e){(0,i.default)(g,e);var t=b(g);function g(e){var l;(0,s.default)(this,g);l=t.call(this,e);(0,m.default)((0,u.default)(l),"state",{$selectedNavCategory:null,currentRoute:null,jsfIsAtRootPanel:true});(0,m.default)((0,u.default)(l),"handleJsfRef",function(e){var t=e.instance,r=e.router;l.router=r;var n=l.state.$selectedNavCategory;t!==l.prevJsfInstance&&n&&r.navigate(n,{isRootPanel:true,animated:false});l.prevJsfInstance=t});(0,m.default)((0,u.default)(l),"handleSelectCategory",function(e){l.setState({$selectedNavCategory:e});var t={isRootPanel:true,animated:false};"string"===typeof e?l.router.navigate(e,t):null===e&&l.router.replace([],t)});(0,m.default)((0,u.default)(l),"handleAfterNavigate",function(e){var t=l.props.handleAfterNavigate;var r=(0,p.default)(e.history);t&&"function"===typeof t&&t(e);l.setState({jsfIsAtRootPanel:!(r&&!r.root)});(null===r||void 0===r?void 0:r.route)!==l.state.currentRoute&&l.setState({currentRoute:(null===r||void 0===r?void 0:r.route)||null})});(0,m.default)((0,u.default)(l),"getCloseButtonLabel",function(){var e=l.props.isDirty;if(!e)return(0,w.t)("Close");return(0,w.t)("Cancel")});(0,m.default)((0,u.default)(l),"renderButton",function(e,t){var r=t.ComponentPropertyResolver;if(!e)return null;if("function"===typeof e)return e();if(E.default.isValidElement(e))return e;if("object"===(0,a.default)(e))return E.default.createElement(O.Box,{px:3},E.default.createElement(r,{component:{properties:e}},function(e){return E.default.createElement(O.Button.Tertiary,e,e.label)}));return null});(0,m.default)((0,u.default)(l),"renderHeader",function(e){return E.default.createElement(A,null,E.default.createElement(A.Left,null,l.renderLeftButtons(e)),E.default.createElement(A.Center,null,E.default.createElement(A.Title,null,e.children)),E.default.createElement(A.Right,null,l.renderRightButtons(N({},e,{route:l.state.currentRoute}))))});(0,m.default)((0,u.default)(l),"renderComposition",function(e){var t=e.header,r=e.componentList,n=e.context.router,o=e.title;var a=(0,p.default)(n.history)||{title:o,root:true};var s=a.root||0===n.history.length;setTimeout(function(){l.state.isRootPanel!==!!s&&l.setState({isRootPanel:s})},0);return E.default.createElement(E.Fragment,null,t,E.default.createElement(v.Modal.TouchScroll,{key:o},E.default.createElement(I.Content,{key:o},s&&!T(l.state.$selectedNavCategory)&&E.default.createElement(I.Content.Title,null,o),r)))});l.prevJsfInstance=null;return l}(0,l.default)(g,[{key:"componentDidMount",value:function e(){var t=this.props.initialRoute;t&&this.handleSelectCategory(t)}},{key:"renderLeftButtons",value:function e(t){var r=this;var n=t.router;var o=n.history;var a=(0,p.default)(o);if(n.buttons.left.length)return n.buttons.left.map(function(e){return r.renderButton(e,t)});if(!a||a.root)return null;return E.default.createElement(O.Box,{px:2},E.default.createElement(v.BackButton,{"data-test":"back-button",label:(0,p.default)(o).backTitle,onClick:function e(){return n.pop()}}))}},{key:"renderRightButtons",value:function e(t){var r=this;var n=this.props.getRightButton;if("function"===typeof n)return this.renderButton(n(t),t);return t.router.buttons.right.map(function(e){return r.renderButton(e,t)})}},{key:"render",value:function e(){var t=this.props,r=t.navCategories,n=t.title,o=t.customFields,a=t.getLeftButton,s=t.schema,l=t.uiSchema,u=t.itemDefaults,i=t.value,d=t.configurations,c=(0,y.default)(t,["navCategories","title","customFields","getLeftButton","schema","uiSchema","itemDefaults","value","configurations"]);var m=this.state,p=m.$selectedNavCategory,f=m.jsfIsAtRootPanel;var v=(0,_.default)(r.find(function(e){var t=e.$route;return t===p}),"displayName");var h="function"===typeof a?a():null;var b=p;"nestedcategoryeditor"===p&&(b="nestedCategories");return E.default.createElement(x.NavDialog,{displayResponsiveBackButton:f,page:p,className:S.default.dialog},E.default.createElement(F,null,E.default.createElement(F.Header,null,E.default.createElement(F.Header.Left,null,h&&E.default.createElement(O.Button.Tertiary,(0,j.default)({mr:4},h,{"data-test":"nav-modal-left-button"}),h.label),E.default.createElement(O.Button.Tertiary,{onClick:this.props.onRequestClose,"data-test":"nav-modal-close-button"},this.getCloseButtonLabel()))),E.default.createElement(F.Content,null,E.default.createElement(P.default,{value:b,onChange:this.handleSelectCategory,htmlAttributes:{"data-test":"nav-modal-tabs"}},E.default.createElement(P.NavText,{variant:"title"},n),E.default.createElement(P.NavGroup,null,r.map(function(e,t){var r=e.$route,n=e.displayName;return E.default.createElement(P.NavItem,{key:t,value:r,className:S.default.navItem},E.default.createElement(P.NavText,{variant:"subtitle"},n))}))))),E.default.createElement(I,{className:S.default.body},E.default.createElement(w.Jsf,(0,j.default)({},(0,C.default)(c,Object.keys(g.propTypes)),{configurations:d||{default:{schema:s,uiSchema:l,value:i,itemDefaults:u}},title:v,components:N({},R,{datetime:B.default,nullablerichtext:w.NullableRichTextField},o),getInnerRefs:this.handleJsfRef,renderComposition:this.renderComposition,renderHeader:this.renderHeader,renderLoading:function e(){return E.default.createElement("div",{className:S.default.loadingContainer},E.default.createElement(D.default,null))},onAfterNavigate:this.handleAfterNavigate}))))}}]);return g}(E.Component);(0,m.default)(k,"propTypes",{isOpen:f.default.bool,onRequestClose:f.default.func.isRequired,navCategories:f.default.array.isRequired,customFields:f.default.object,getRightButton:f.default.func,title:f.default.string.isRequired});var M=k;t.default=M;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/JSFNavModal.less":function(e,t,r){e.exports={navItem:"JSFNavModal-navItem-1a4qG",dialog:"JSFNavModal-dialog-1dvQz",loadingContainer:"JSFNavModal-loadingContainer-ZkmKG",formContainer:"JSFNavModal-formContainer-36phW"}},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ModalButton.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=n(r("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var a=n(r("./common/temp/node_modules/react/index.js"));var s=n(r("./common/temp/node_modules/prop-types/index.js"));var l=r("./common/temp/node_modules/@sqs/rosetta-primitives/build/lib/index.js");var u=r("./common/temp/node_modules/@sqs/rosetta-elements/build/lib/index.js");var i="tertiary";var d=function e(t){return a.default.createElement(a.default.Fragment,null,a.default.createElement(l.Box,{mx:2,px:2,py:1},a.default.createElement(l.Button,(0,o.default)({},t,{size:"small",variant:t.variant||i}))),t.divider&&a.default.createElement(l.Box,{mx:2,px:2},a.default.createElement(u.Divider,null)))};d.propTypes={divider:s.default.bool};d.defaultProps={divider:true};var c=d;t.default=c;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/CategoryComponents.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.CategoryInput=t.Category=void 0;var l=n(r("./common/temp/node_modules/react/index.js"));var u=r("./common/temp/node_modules/@sqs/core-components/build/lib/index.js");var i=r("./common/temp/node_modules/@sqs/rosetta-primitives/build/lib/index.js");var d=n(r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/CategoryComponents.less"));var o=function e(t){var r=t.tag,n=t.onClick,o=t.focused,a=t.disabled,s=t.tagIndex;return l.default.createElement(l.default.Fragment,null,l.default.createElement(u.Check,{key:"".concat(r.text,"-").concat(s),className:d.default.category,label:r.text,onClick:n,value:o,isDisabled:a,underlined:false}),l.default.createElement(i.Box,{borderBottom:"1px solid",borderColor:"gray.800",width:"100%",className:d.default.categoryUnderline}))};t.Category=o;var a=function e(t){var r=t.clearTagsFocus,n=t.handleTagInput,o=t.inputText,a=t.placeholder,s=t.setInputRef;return l.default.createElement(u.Input,{className:d.default.tagInput,onChange:n,inputRef:function e(t){return s(t)},onClick:r,placeholder:a,value:o})};t.CategoryInput=a},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/CategoryComponents.less":function(e,t,r){e.exports={category:"CategoryComponents-category-ifIBi",categoryUnderline:"CategoryComponents-categoryUnderline-1_Hwa",tagInput:"CategoryComponents-tagInput-1OfuT"}},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/CodeField.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var l=n(r("./common/temp/node_modules/react/index.js"));var u=r("./common/temp/node_modules/@sqs/core-components/build/lib/index.js");var i=n(r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/CodeField.less"));var o=function e(t){var r=t.onChange,n=t.options,o=t.placeholder,a=t.value;var s=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(t.userInputValue)};return l.default.createElement(u.Code,{className:i.default.codeFieldWrapper,onChange:s,options:n,placeholder:o,value:{userInputValue:a,mode:"htmlmixed"}})};t.default=o;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/CodeField.less":function(e,t,r){e.exports={codeFieldWrapper:"CodeField-codeFieldWrapper-1oxcz"}},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/PatchedDateTimeField.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=n(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var s=n(r("./common/temp/node_modules/react/index.js"));var l=n(r("./common/temp/node_modules/moment-timezone/index.js"));var u=n(r("./common/temp/node_modules/@sqs/core-components/fields/DateTimeField.js"));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),true).forEach(function(e){(0,o.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var c=function e(t,r){var n=r?l.default.utc(t).tz(r):(0,l.default)(t);return n.format("YYYY-MM-DD")};var m={fromMonth:"1970-01"};var p=function e(t){var r;if(!(null!==(r=t.disable)&&void 0!==r&&r.before))return s.default.createElement(u.default,(0,a.default)({},t,m));var n=t.disable,o=t.onChange;return s.default.createElement(u.default,(0,a.default)({},t,m,{disable:d({},n,{before:c(n.before,t.timeZone)}),onChange:function e(t){o(Math.max(t,n.before))}}))};var f=p;t.default=f;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/customFields/SlugField.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var l=n(r("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var u=n(r("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var i=n(r("./common/temp/node_modules/react/index.js"));var d=r("./common/temp/node_modules/@sqs/core-components/build/lib/index.js");var c=n(r("./common/temp/node_modules/@sqs/core-components/controllers/FilteredInput.js"));var m=r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/externals.js");var o=function e(t){var r=t.onChange,n=t.value,o=void 0===n?"":n,a=(0,u.default)(t,["onChange","value"]);var s=function e(t){return(0,m.applyFilter)(t,m.TextFilterNames.URL_SLUG_WITH_SLASH)};return i.default.createElement(c.default,{filter:s,onChange:r},function(e){var t=e.inputRef,r=e.onChange;return i.default.createElement(d.StringField,(0,l.default)({},a,{value:o,inputRef:t,onChange:r}))})};t.default=o;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/context/EditorContext.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.EditorProvider=t.default=void 0;var u=n(r("./common/temp/node_modules/react/index.js"));var o=n(r("./common/temp/node_modules/memoize-one/dist/memoize-one.esm.js"));var i=u.default.createContext("content-browser-editor");var a=i;t.default=a;var d=(0,o.default)(function(e,t,r,n,o){return{isOpen:e,initialRoute:t,onErrorsChange:r,isDirty:n,isNewItem:o}});var s=function e(t){var r=t.children,n=t.isOpen,o=t.initialRoute,a=t.onErrorsChange,s=t.isDirty,l=t.isNewItem;return u.default.createElement(i.Provider,{value:d(n,o,a,s,l)},r)};t.EditorProvider=s},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/hoc/withEditor.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var o=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=o(r("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var l=o(r("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var u=o(r("./common/temp/node_modules/@babel/runtime/helpers/classCallCheck.js"));var i=o(r("./common/temp/node_modules/@babel/runtime/helpers/createClass.js"));var d=o(r("./common/temp/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var c=o(r("./common/temp/node_modules/@babel/runtime/helpers/inherits.js"));var m=o(r("./common/temp/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var p=o(r("./common/temp/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var f=o(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var v=o(r("./common/temp/node_modules/lodash/isArray.js"));var h=o(r("./common/temp/node_modules/lodash/set.js"));var b=o(r("./common/temp/node_modules/lodash/mapValues.js"));var g=o(r("./common/temp/node_modules/lodash/get.js"));var j=n(r("./common/temp/node_modules/react/index.js"));var y=r("./common/temp/node_modules/@sqs/jsf-utils/lib/es/main.js");var a=o(r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/context/EditorContext.js"));var C=r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/externals.js");function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),true).forEach(function(e){(0,f.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function w(o){var a=x();return function e(){var t=(0,p.default)(o),r;if(a){var n=(0,p.default)(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);return(0,m.default)(this,r)}}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}function O(r){var e=function(e){(0,c.default)(a,e);var o=w(a);function a(){var n;(0,u.default)(this,a);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n=o.call.apply(o,[this].concat(t));(0,f.default)((0,d.default)(n),"state",{errors:{},hideErrors:true});(0,f.default)((0,d.default)(n),"handleSaveRejected",function(e){var t=e.errors||e.details;var r=(0,b.default)(t,function(e){return(0,v.default)(e)?{message:e.join(", ")}:{message:e}});n.setState({errors:r,hideErrors:false})});(0,f.default)((0,d.default)(n),"handleError",function(e){var t=n.context.onErrorsChange;"function"===typeof t&&t({errors:e})});(0,f.default)((0,d.default)(n),"handleChange",function(e){var t=e.changes;var r=n.state.errors;var o=E({},r);Object.entries(t).forEach(function(e){var t=(0,l.default)(e,2),r=t[0],n=t[1].diff;Object.keys(n).forEach(function(e){var t="".concat(r,".").concat(y.jsonPointerUtils.jsonPointerToObjectPath(e));(0,g.default)(o,t)&&(0,h.default)(o,t,{})})});n.setState({errors:o});n.props.onFormChange(e)});(0,f.default)((0,d.default)(n),"shouldHideErrors",function(){var e=n.state.hideErrors;if(!e)return false;return n.props.hideErrors});return n}(0,i.default)(a,[{key:"render",value:function e(){var t=this.state.errors;return j.default.createElement(r,(0,s.default)({},this.props,this.context,{errors:t,hideErrors:this.shouldHideErrors(),onChange:this.handleChange,onError:this.handleError,onSaveRejected:this.handleSaveRejected}))}}]);return a}(j.Component);(0,f.default)(e,"contextType",a.default);(0,f.default)(e,"defaultProps",{hideErrors:true});(0,f.default)(e,"displayName","withEditor(".concat((0,C.getDisplayName)(r),")"));return(0,C.withRouter)(e)}var P=O;t.default=P;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/utils/registryStringUtils.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.getDeleteConfirmationStrings=t.getString=t.getStringsForEntity=void 0;var o=n(r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/registry/index.js"));var a=r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/Keys.js");var s=r("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/MessagingStringTypes.js");var l=function e(t){return o.default.get(a.STRINGS,t)(t.collection||t.contentItem)};t.getStringsForEntity=l;var u=function e(t,r){return l(t)[r]};t.getString=u;var i=function e(t){var r=l(t);return{title:r[s.DELETE_TITLE],message:r[s.DELETE_MESSAGE]}};t.getDeleteConfirmationStrings=i}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/4-d250f31a3929506c7e661-min.en-US.js.map