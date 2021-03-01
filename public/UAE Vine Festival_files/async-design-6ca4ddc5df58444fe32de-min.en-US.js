(window["wpJsonpExtractCss"]=window["wpJsonpExtractCss"]||[]).push([["async-design"],{"./src/main/webapp/universal/src/apps/App/components/LearnMoreCard/index.js":function(e,t,s){"use strict";var n=s("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var a=s("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var p=a(s("./common/temp/node_modules/@babel/runtime/helpers/slicedToArray.js"));var m=n(s("./common/temp/node_modules/react/index.js"));var i=a(s("./common/temp/node_modules/prop-types/index.js"));var f=s("./src/main/webapp/universal/src/shared/i18n/react.ts");var g=s("./common/temp/node_modules/@sqs/rosetta-icons/build/lib/index.js");var v=s("./common/temp/node_modules/@sqs/rosetta-primitives/build/lib/index.js");var b=s("./common/temp/node_modules/@sqs/rosetta-elements/build/lib/index.js");var h=s("./common/temp/node_modules/@sqs/rosetta-tokens/build/lib/index.js");var w=a(s("./src/main/webapp/universal/src/apps/App/shared/components/IconButton.jsx"));var S=a(s("./src/main/webapp/universal/src/apps/App/shared/stores/AuthenticatedAccountStore.js"));var k=a(s("./src/main/webapp/universal/src/apps/App/shared/actions/AuthenticatedAccountActions.js"));var y=s("./src/main/webapp/universal/src/apps/App/utils/mobileWebFlags.js");var r=function e(t){var s=t.tutorialIdentifier,n=t.headingText,a=t.bodyText,i=t.kbLink;var r=(0,m.useState)(!S.default.isTutorialCompleted(s)),l=(0,p.default)(r,2),o=l[0],d=l[1];if(!o||(0,y.isMobileContentEditingEnabled)())return null;var u=function e(){window.open(i,"_blank")};var c=function e(){k.default.markTutorialCompleted(s);d(false)};return m.default.createElement(b.Card,{mt:0},m.default.createElement(b.Card.Body,{css:{paddingTop:h.space[5],paddingBottom:i?h.space[4]:h.space[5],paddingLeft:h.space[6],paddingRight:h.space[6]}},m.default.createElement(v.Flex,{justifyContent:"space-between",alignItems:"center",height:h.lineHeights[2]},m.default.createElement(v.Flex,{flexGrow:2},m.default.createElement(v.Text.Subtitle,{m:0},n)),m.default.createElement(v.Flex,{width:36},m.default.createElement(w.default,{onClick:c,p:0},m.default.createElement(g.CrossSmall,null)))),m.default.createElement(v.Text.Body,{m:0,mt:2,css:{color:"#7b7b7b",lineHeight:"20px"}},a),i&&m.default.createElement(v.Button,{mt:h.space[4],size:1,width:"100%",onClick:u},m.default.createElement(f.T,{project:"apps.App"},"Read the guide"))))};r.propTypes={tutorialIdentifier:i.default.string.isRequired,headingText:i.default.string.isRequired,bodyText:i.default.string.isRequired,kbLink:i.default.string};var l=r;t.default=l;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/Design/index.jsx":function(e,t,s){"use strict";var n=s("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var a=s("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=a(s("./common/temp/node_modules/@babel/runtime/helpers/classCallCheck.js"));var r=a(s("./common/temp/node_modules/@babel/runtime/helpers/createClass.js"));var l=a(s("./common/temp/node_modules/@babel/runtime/helpers/inherits.js"));var o=a(s("./common/temp/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var d=a(s("./common/temp/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var u=s("./src/main/webapp/universal/src/shared/i18n/index.ts");var c=s("./src/main/webapp/universal/src/shared/i18n/react.ts");var p=a(s("./common/temp/node_modules/react/index.js"));var m=a(s("./src/main/webapp/universal/src/apps/App/shared/stores/TemplateStore.js"));var f=a(s("./src/main/webapp/universal/src/apps/App/shared/components/Panel/index.jsx"));var g=a(s("./src/main/webapp/universal/src/apps/App/shared/components/navigation/NavMenu.jsx"));var v=n(s("./src/main/webapp/universal/src/apps/App/screens/Design/links.js"));var b=s("./src/main/webapp/universal/src/shared/utils/SqsVersion.js");var h=s("./src/main/webapp/frontend/packages/universal-flags/lib/index.js");var w=a(s("./src/main/webapp/frontend/packages/enums/Flag.js"));var S=a(s("./src/main/webapp/universal/src/shared/utils/CMSV7Events.js"));var k=a(s("./src/main/webapp/universal/src/shared/utils/TemplateVersionUtils.js"));var y=a(s("./src/main/webapp/universal/src/apps/App/components/SevenOneUserSurvey/flux/actions.js"));var j=a(s("./src/main/webapp/universal/src/apps/App/components/LearnMoreCard/index.js"));var x=s("./common/temp/node_modules/@sqs/rosetta-primitives/build/lib/index.js");var E=s("./common/temp/node_modules/@sqs/rosetta-icons/build/lib/index.js");var _=s("./common/temp/node_modules/@sqs/rosetta-tokens/build/lib/index.js");function T(a){var i=C();return function e(){var t=(0,d.default)(a),s;if(i){var n=(0,d.default)(this).constructor;s=Reflect.construct(t,arguments,n)}else s=t.apply(this,arguments);return(0,o.default)(this,s)}}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}var A="tutorial-introducing-site-styles";var F=function(e){(0,l.default)(s,e);var t=T(s);function s(){(0,i.default)(this,s);return t.apply(this,arguments)}(0,r.default)(s,[{key:"componentDidMount",value:function e(){y.default.userViewsDesignPanel()}},{key:"render",value:function e(){if((0,b.isV8)())return p.default.createElement(f.default,null,p.default.createElement(f.default.Header,{title:(0,u.t)("Design")}),p.default.createElement(g.default,{groups:v.eightLinks}));var t=m.default.getState(),s=t.featureFlags;var n=s&&(s.mobileStyles||s.promotedBlocks);var a=(0,v.default)({supportsTemplateSettings:n,showSiteHeaderFooter:h.legacyV6Flags.isFeatureEnabled(w.default.SITE_HEADER_FOOTER),showThemesBeta:k.default.isSevenOne(),showNewStackedIndexBeta:k.default.isSevenOne()});return p.default.createElement(f.default,null,p.default.createElement(f.default.Header,{title:(0,u.t)("Design")}),k.default.isSevenOne()&&h.legacyV6Flags.isFeatureEnabled(w.default.SEVEN_ONE_CONTEXTUAL_STYLE_EDITING_V1)&&p.default.createElement(x.Box,{mt:_.space[3],mx:-1},p.default.createElement(j.default,{tutorialIdentifier:A,headingText:(0,u.t)("Introducing Site Styles"),bodyText:p.default.createElement(p.default.Fragment,null,p.default.createElement(c.T,{project:"apps.App"},"Now you can customize fonts, colors, and more without leaving Edit mode. Just look for the Site Styles icon"),p.default.createElement(E.Style,{color:"gray.400",css:{verticalAlign:"middle",width:_.sizes.sizes["125"],height:_.sizes.sizes["125"],marginLeft:_.space[1]}}),p.default.createElement("span",null,"."))})),p.default.createElement(g.default,{groups:a,onClickForTracking:function e(t){S.default.designMenuItemClick(t.split("/design/")[1])}}))}}]);return s}(p.default.Component);var q=F;t.default=q;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/Design/links.js":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=t.eightLinks=void 0;var n=s("./src/main/webapp/universal/src/shared/i18n/index.ts"),r=n.t;var l=function e(){return[{key:"1",items:[{title:r("Site Styles"),to:"/design/site-styles",detail:"New"},{title:r("Fonts"),to:"/design/fonts"},{title:r("Colors"),to:"/design/colors"},{title:r("Animations"),to:"/design/animations"},{title:r("Spacing"),to:"/design/site-spacing"}]},{key:"2",items:[{title:r("Buttons"),to:"/design/buttons"},{title:r("Product Items"),to:"/design/product-items"},{title:r("Image Blocks"),to:"/design/image-blocks"}].filter(function(e){return null!==e})},{key:"3",items:[{title:r("Browser Icon"),to:"/design/browser-icon"},{title:r("Lock Screen"),to:"/design/lock-screen"},{title:r("Checkout Page"),to:"/design/checkout"},{title:r("404 Page"),to:"/design/404"},{title:r("Access Denied Screen"),to:"/design/access-denied-screen"},{title:r("Social Sharing"),to:"/design/social-sharing"}]},{key:"4",items:[{title:r("Custom CSS"),to:"/design/custom-css"}]}]};var a=[{key:"links-v8",items:[{title:r("Browser Icon"),to:"/design/browser-icon"},{title:r("Social Sharing"),to:"/design/social-sharing"}]}];t.eightLinks=a;var i=function e(t){var s=t.supportsTemplateSettings,n=t.showSiteHeaderFooter,a=t.showThemesBeta,i=t.showNewStackedIndexBeta;if(a||n)return l();return[{key:"1",items:[a?{title:r("Colors"),to:"/design/colors"}:null,n?{title:r("Favicon & Social Logo"),to:"/design/logo-title"}:{title:r("Logo & Title"),to:"/design/logo-title"},i?null:{title:r("Template"),to:"/design/template"},n?{title:r("Header"),to:"/design/site-header"}:null,{title:r(n?"Styles":"Site Styles"),to:"/design/styles"}].filter(function(e){return e})},{key:"2",items:[{title:r("Lock Screen"),to:"/design/lock-screen"},{title:r("Checkout Page"),to:"/design/checkout"},{title:r("Not Found / 404 Page"),to:"/design/404"},{title:r("Access Denied Screen"),to:"/design/access-denied-screen"}]},{key:"3",items:[{title:r("Squarespace Badge"),to:"/design/squarespace-badge"},{title:r("Custom CSS"),to:"/design/custom-css"},s?a?null:{title:r("Template Settings"),to:"/design/template-settings"}:null].filter(Boolean)}]};t.default=i}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/async-design-5031204dc7e65e230c21e-min.en-US.js.map