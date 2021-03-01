(window["wpJsonpExtractCss"]=window["wpJsonpExtractCss"]||[]).push([[39],{"./src/main/webapp/universal/src/apps/App/shared/components/SectionPreview/SectionPreview.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var i=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var Q=i(r("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var Z=i(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var $=i(r("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var ee=i(r("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var te=i(r("./common/temp/node_modules/lodash/noop.js"));var re=i(r("./common/temp/node_modules/lodash/omit.js"));var ne=i(r("./common/temp/node_modules/lodash/get.js"));var ie=n(r("./common/temp/node_modules/react/index.js"));var o=i(r("./common/temp/node_modules/prop-types/index.js"));var oe=i(r("./common/temp/node_modules/classnames/index.js"));var ae=r("./common/temp/node_modules/@sqs/section-renderer/lib/index.js");var se=i(r("./src/main/webapp/frontend/packages/enums/Flag.js"));var le=r("./src/main/webapp/frontend/packages/universal-flags/lib/index.js");var ue=i(r("./src/main/webapp/universal/src/apps/App/shared/constants/Devices.js"));var de=i(r("./src/main/webapp/universal/src/apps/App/shared/constants/DefaultSectionEnvironmentContext.js"));var ce=i(r("./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useViewportConfig.js"));var pe=r("./src/main/webapp/universal/src/apps/App/shared/utils/SectionServiceAPI.js");var me=r("./src/main/webapp/universal/src/apps/Frame/src/shared/dataBridge.js");var fe=i(r("./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useFrameAPI.js"));var ve=i(r("./src/main/webapp/universal/src/apps/App/shared/components/SectionPreview/SectionPreview.less"));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));r.push.apply(r,n)}return r}function we(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),true).forEach(function(e){(0,Z.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var s=function e(t){var r=t.className,n=t.deviceView,i=void 0===n?ue.default.DESKTOP:n,o=t.dimensions,a=t.frameBodyStyle,s=void 0===a?{overflow:"hidden"}:a,l=t.getIframeScale,u=t.isDevicePreview,d=void 0===u||u,c=t.isRenderBlocked,p=void 0!==c&&c,m=t.matchContainerHeight,f=void 0!==m&&m,v=t.onAfterInitialRender,w=void 0===v?te.default:v,h=t.sectionsWrapperRef,g=t.showCanonicalNameOnHover,b=void 0===g?le.legacyV6Flags.isFeatureEnabled(se.default.V8_VARIANT_DESIGNER):g,_=t.showCutOffIndicators,S=void 0!==_&&_,y=t.useWebsiteBackgroundColor,j=void 0===y||y,P=(0,ee.default)(t,["className","deviceView","dimensions","frameBodyStyle","getIframeScale","isDevicePreview","isRenderBlocked","matchContainerHeight","onAfterInitialRender","sectionsWrapperRef","showCanonicalNameOnHover","showCutOffIndicators","useWebsiteBackgroundColor"]);var A=(0,fe.default)();var E=(0,ie.useRef)();var x=(0,ie.useRef)();var C=(0,ce.default)(d,i,o),D=C.viewportPercentageStylesOverride,O=C.iframeWidth,k=C.maxToleratedSectionHeight;var I=(0,ie.useState)({isInitialScaleApplied:false,iframeHeight:k}),T=(0,$.default)(I,2),B=T[0],R=B.isInitialScaleApplied,W=B.iframeHeight,H=T[1];function F(e){R||w(e);var t=f?E.current.offsetHeight/e.iframeScale:k;H({isInitialScaleApplied:true,iframeHeight:t})}function N(t){x.current=t;Object.keys(s).forEach(function(e){t.contentWindow.document.body.style[e]=s[e]});(0,me.initializePreviewFrame)(t);var e="sections-preview-frame-".concat(i.toLowerCase());t.setAttribute("id",e);t.setAttribute("data-test",e)}function L(e){var t=e.sectionId;var r=x.current.contentWindow;A.initializeUiState(t,r)}var V=(0,ie.useMemo)(function(){return we({},P.sectionResources,{viewportPercentageStylesOverride:D})},[P.sectionResources,D]);function q(){var e=V.rootSectionId,t=V.sectionContexts,r=V.sectionDefinitions;var n=t[e].definitionId;var i=r[n].canonicalName;return i}function z(e,t,r){return we({},de.default,{},(0,re.default)(e,["selectedSectionId"]),{sectionDefinitionDisplayName:r.displayName})}var M=V.colorThemes,U=V.defaultWebsiteTheme,K=V.palette;var J=M[U];var Y=(0,ne.default)(J,"mappings.background.paletteColor","white");var G=(0,ne.default)(K,Y,"#ffffff");var X=j?G:"transparent";return ie.default.createElement("div",{className:(0,oe.default)(ve.default.container,(0,Z.default)({},ve.default.visible,R),r),style:{backgroundColor:X},ref:E,title:b&&R?q():void 0},ie.default.createElement(ae.SectionPreview,(0,Q.default)({},P,{sectionResources:V,canvasUrl:pe.CANVAS_URL,className:(0,oe.default)((0,Z.default)({},ve.default.heightTransition,!f)),iframeHeight:W,iframeWidth:O,getIframeScale:l,initializeFrame:N,isRenderBlocked:p,onAfterSectionInitialized:L,onScaleChange:F,sectionsWrapperRef:h,getSectionEnvironmentContext:z})))};s.propTypes={canvasUrl:o.default.string,className:o.default.string,deviceView:o.default.string,getIframeScale:o.default.func,isDevicePreview:o.default.bool,isRenderBlocked:o.default.bool,matchContainerHeight:o.default.bool,onAfterInitialRender:o.default.func,showCanonicalNameOnHover:o.default.bool,showCutOffIndicators:o.default.bool,sectionsWrapperRef:o.default.object,useWebsiteBackgroundColor:o.default.bool};var l=s;t.default=l;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/components/SectionPreview/SectionPreview.less":function(e,t,r){e.exports={container:"SectionPreview-container-3SCwi",visible:"SectionPreview-visible-3K0Io",heightTransition:"SectionPreview-heightTransition-zaXc1",fadeOut:"SectionPreview-fadeOut-2OS6U",top:"SectionPreview-top-2y5nJ",bottom:"SectionPreview-bottom-1oqyY",left:"SectionPreview-left-3wYyq",right:"SectionPreview-right-1Htco"}},"./src/main/webapp/universal/src/apps/App/shared/constants/DefaultSectionEnvironmentContext.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n={deviceView:"DESKTOP",editingState:"NONE",routeHistory:[],displayMode:"default",isConfig:false,previewSize:{width:0,height:0},isSelected:false,isArchetypeSelected:false,sectionDefinitionDisplayName:""};t.default=n;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/constants/Devices.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=t.isValidDevice=t.getNextDevice=void 0;var i=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/enum.js"));var o="PHONE";var a="TABLET";var s="DESKTOP";var l=[s,o,a];var u=new Set(l);var d=function e(t){return l[(l.indexOf(t)+1)%l.length]};t.getNextDevice=d;var c=function e(t){return u.has(t)};t.isValidDevice=c;var p=(0,i.default)(o,a,s);t.default=p},"./src/main/webapp/universal/src/apps/App/shared/utils/enum.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=a;var i=n(r("./common/temp/node_modules/lodash/keyBy.js"));var o=n(r("./common/temp/node_modules/prop-types/index.js"));function a(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=(0,i.default)(r);Object.defineProperties(n,{includes:{value:function e(t){return r.includes(t)}},propType:{value:o.default.oneOf(r)}});return Object.freeze(n)}e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useDebounce.ts":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=i;var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var s=r("./common/temp/node_modules/react/index.js");var l=100;function i(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;var e=(0,s.useState)(t),n=(0,a.default)(e,2),i=n[0],o=n[1];(0,s.useEffect)(function(){var e=setTimeout(function(){o(t)},r);return function(){clearTimeout(e)}},[t,r]);return i}e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useDebouncedWindowSize.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=a;var i=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useWindowSize.js"));var o=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useDebounce.ts"));function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debounceDelay,r=e.win;return(0,o.default)((0,i.default)(r),t)}e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useEventListener.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=i;var c=n(r("./common/temp/node_modules/@babel/runtime/helpers/toConsumableArray.js"));var p=n(r("./common/temp/node_modules/lodash/isUndefined.js"));var m=r("./common/temp/node_modules/react/index.js");function i(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.deps,i=void 0===n?[]:n,o=r.element,a=void 0===o?document.body:o,s=r.useCapture,l=r.passive;var u=(0,m.useRef)();(0,m.useEffect)(function(){u.current=e},[e]);var d;if(!(0,p.default)(s)){d=d||{};d.capture=s}if(!(0,p.default)(l)){d=d||{};d.passive=l}(0,m.useEffect)(function(){if(!a)return;var e=function e(t){return u.current(t)};setTimeout(function(){return a.addEventListener(t,e,d)});return function(){a.removeEventListener(t,e,d)}},[t,a].concat((0,c.default)(i)))}e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useViewportConfig.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=s;var i=n(r("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));var l=r("./common/temp/node_modules/react/index.js");var o=n(r("./src/main/webapp/universal/src/apps/App/shared/constants/Devices.js"));var u=r("./src/main/webapp/universal/src/apps/Frame/src/shared/dataBridge.js");var d=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useDebouncedWindowSize.js"));var a;var c=(a={},(0,i.default)(a,o.default.DESKTOP,2),(0,i.default)(a,o.default.TABLET,1.5),(0,i.default)(a,o.default.PHONE,1.25),a);function s(e,t,r){var n;var i;if(r){n=r.width;i=r.height}else{var o=(0,u.getInsideFrameEl)();var a=o?o.contentWindow:window;var s=(0,d.default)({win:a});i=s.innerHeight;n=s.innerWidth}return(0,l.useMemo)(function(){return{iframeWidth:n,maxToleratedSectionHeight:i*c[t],viewportPercentageStylesOverride:{vh:i,vw:n}}},[t,i,n])}e.exports=t.default},"./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useWindowSize.js":function(e,t,r){"use strict";var n=r("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=i;var a=n(r("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var s=r("./common/temp/node_modules/react/index.js");var l=n(r("./src/main/webapp/universal/src/apps/App/shared/utils/hooks/useEventListener.js"));function u(e){return{innerHeight:e.innerHeight,innerWidth:e.innerWidth,outerHeight:e.outerHeight,outerWidth:e.outerWidth}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;var t=(0,s.useState)(u(e)),r=(0,a.default)(t,2),n=r[0],i=r[1];function o(){i(u(e))}(0,l.default)("resize",o,{element:e});return n}e.exports=t.default},"./src/main/webapp/universal/src/apps/Frame/src/shared/dataBridge.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getEvents=s;t.getExternalDataBoundary=l;t.getStore=u;t.getImageEditorBridge=d;t.getInsideFrameEl=c;t.getInsideSectionControllerPortal=p;t.getInsideSectionLifecycle=m;t.getOutsideSectionControllerPortal=f;t.getTypekitCredentials=v;t.setEvents=w;t.setExternalDataBoundary=h;t.setStore=g;t.setImageEditorBridge=b;t.setInsideFrameEl=_;t.setInsideSectionControllerPortal=S;t.setInsideSectionControllerTypekitCredentials=y;t.setInsideSectionLifecycle=j;t.setOutsideSectionControllerPortal=P;t.setSectionDevToolsApi=A;t.setTypekitCredentials=E;t.initializePreviewFrame=x;t.getInitialValuesForUiState=C;t.resetDataBridge=D;var n=r("./common/temp/node_modules/@sqs/section-renderer/lib/index.js");var i=n.portalUtils.getPortalForWindow;var o=null;var a=null;function s(){var e=window.top.__frame.events;if(!e)throw new Error("Attempting to use a non-existent event emitter");return e}function l(){var e=window.top.__frame.externalDataBoundary;if(!e)throw new Error("Attempting to use a non-existent ExternalDataBoundary");return e}function u(){var e=window.top.__frame.store;if(!e)throw new Error("Attempting to use a non-existent redux store");return e}function d(){var e=window.top.__frame.imageEditorBridge;if(!e)throw new Error("Attempting to use a non-existent imageEditorBridge");return e}function c(){var e=window.top.__frame.insideFrameEl;if(!e)throw new Error("Attempting to use a non-existent inside frame element");return e}function p(){var e=window.top.__frame.insideSectionControllerPortal;if(!e)throw new Error("Attempting to use a non-existent section controller portal inside the frame");return e}function m(){var e=window.top.__frame.insideSectionLifecycle;if(!e)throw new Error("Attempting to use a non-existent section renderer inside the frame");return e}function f(){var e=window.top.__frame.outsideSectionControllerPortal;if(!e)throw new Error("Attempting to use a non-existent section controller portal outside of the frame");return e}function v(){if(window.top.__frame.typekitCredentials)return Promise.resolve(window.top.__frame.typekitCredentials);o=o||new Promise(function(e){a=e});return o}function w(e){if(window.top.__frame.events)throw new Error("Attempting to overwrite an existing event emitter");window.top.__frame.events=e}function h(e){if(window.top.__frame.externalDataBoundary)throw new Error("Attempting to overwrite existing ExternalDataBoundary");window.top.__frame.externalDataBoundary=e}function g(e){if(window.top.__frame.store)throw new Error("Attempting to overwrite an existing redux store");window.top.__frame.store=e}function b(e){window.top.__frame.imageEditorBridge||(window.top.__frame.imageEditorBridge=e)}function _(e){if(window.top.__frame.insideFrameEl)throw new Error("Attempting to overwrite an existing inside frame element");window.top.__frame.insideFrameEl=e}function S(e){if(window.top.__frame.insideSectionControllerPortal)throw new Error("Attempting to overwrite an existing inside section controller portal");window.top.__frame.insideSectionControllerPortal=e}function y(){var e=p();var t=window.top.__frame.typekitCredentials;t&&e.setTypekitCredentials(t)}function j(e){if(window.top.__frame.insideSectionLifecycle)throw new Error("Attempting to overwrite an existing inside section lifecycle");window.top.__frame.insideSectionLifecycle=e}function P(e){if(window.top.__frame.outsideSectionControllerPortal)throw new Error("Attempting to overwrite an existing outside section controller portal");window.top.__frame.outsideSectionControllerPortal=e}function A(e){if(window.top.__frame.sectionDevToolsApi)throw new Error("Attempting to overwrite an existing instance of sectionDevToolsApi");window.top.__frame.sectionDevToolsApi=e}function E(e){var t=window.top.__frame.insideSectionControllerPortal;t&&t.setTypekitCredentials(e);window.top.__frame.typekitCredentials=e;if(a){a(e);o=null;a=null}}function x(t){v().then(function(e){i(t.contentWindow).setTypekitCredentials(e)})}function C(e,t){var r=i(t);var n=r.getEngineForSectionId(e);return n.getInitialValuesForUiState(e)}function D(){o=null;a=null;window.top.__frame={events:null,externalDataBoundary:null,store:null,imageEditorBridge:null,insideFrameEl:null,insideSectionControllerPortal:null,insideSectionLifecycle:null,outsideSectionControllerPortal:null,sectionDevToolsApi:null,typekitCredentials:null}}}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/39-a43e8da0a66b86ff825d2-min.en-US.js.map