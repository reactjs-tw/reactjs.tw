webpackJsonp([53338925692345],{145:function(e,t,r){(function(n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=0;return e.replace(/%s/g,function(){var e=t[r++];return void 0===e?"[missing argument]":e})}function o(e){var t=/(https:\/\/fb\.me\/[a-z\-]+)/g,r=e.split(t);return r.map(function(e,t){return t%2===1?n.createElement("a",{key:t,target:"_blank",rel:"noopener",href:e},e):e})}function c(e){var t=e.substring(1);if(!t)return null;for(var r="",n=[],a=t.split("&"),l=0;l<a.length;l++){var o=decodeURIComponent(a[l]);0===o.indexOf("invariant=")?r=o.slice(10):0===o.indexOf("args[")&&n.push(o.slice(o.indexOf("]=")+2))}return{args:n,code:r}}function i(e){var t=e.code,r=e.msg;return t?n.createElement("div",null,n.createElement("p",null,n.createElement("b",null,"The full text of the error you just encountered is:")),n.createElement("code",null,n.createElement("b",null,o(r)))):n.createElement("p",null,"When you encounter an error, you'll receive a link to this page for that specific error and we'll show you the full error text.")}function u(e){var t=null,r="",a=JSON.parse(e.errorCodesString),o=c(e.location.search);return null!=o&&(t=o.code,r=l(a[t],o.args)),n.createElement(i,{code:t,msg:r})}t.__esModule=!0;var s=r(2);a(s);t.default=u,e.exports=t.default}).call(t,r(3))},146:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(145),l=n(a);t.default=l.default,e.exports=t.default},166:function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var a=r(9),l=n(a),o=r(146),c=n(o),i=r(15),u=n(i),s=r(112),d=n(s),f=r(79),m=n(f),h=r(2),g=(n(h),r(80)),p=n(g),v=r(18),k=n(v),E=r(4),y=r(23),_=r(84),w=n(_),x=r(24),b=function(t){var r=t.data,n=t.location;return e.createElement(u.default,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},e.createElement(l.default,null,e.createElement("div",{css:E.sharedStyles.articleLayout.container},e.createElement(u.default,{type:"article",direction:"column",grow:"1",halign:"stretch",css:{minHeight:"calc(100vh - 40px)"}},e.createElement(m.default,{path:r.markdownRemark.fields.path,title:r.markdownRemark.frontmatter.title}),e.createElement(k.default,{title:"React - "+r.markdownRemark.frontmatter.title}),e.createElement("div",{css:E.sharedStyles.articleLayout.content},e.createElement("div",{css:E.sharedStyles.markdown,dangerouslySetInnerHTML:{__html:r.markdownRemark.html}}),e.createElement("div",{css:[E.sharedStyles.markdown,{marginTop:30,"& code":{display:"block",marginTop:30,padding:"1rem",borderRadius:"0.5rem",backgroundColor:(0,d.default)(E.colors.error,.1),color:E.colors.error}}]},e.createElement(c.default,{errorCodesString:r.errorCodesJson.internal.contentDigest,location:n})))),e.createElement("div",{css:E.sharedStyles.articleLayout.sidebar},e.createElement(p.default,{createLink:y.createLinkDocs,defaultActiveSection:(0,w.default)(n.pathname,x.sectionListDocs),location:n,sectionList:x.sectionListDocs,title:r.markdownRemark.frontmatter.title})))))};t.pageQuery="** extracted graphql fragment **";t.default=b}).call(t,r(3))}});
//# sourceMappingURL=component---src-pages-docs-error-decoder-html-js-b633e8df8fc02d049b2a.js.map