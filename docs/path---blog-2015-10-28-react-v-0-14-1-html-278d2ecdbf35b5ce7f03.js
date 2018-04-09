webpackJsonp([62325052636195],{730:function(e,t){e.exports={data:{markdownRemark:{html:'<p>After a couple weeks of having more people use v0.14, we’re ready to ship a patch release addressing a few issues. Thanks to everybody who has reported issues and written patches!</p>\n<p>The release is now available for download:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.14.1.js">https://fb.me/react-0.14.1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.14.1.min.js">https://fb.me/react-0.14.1.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.14.1.js">https://fb.me/react-with-addons-0.14.1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.14.1.min.js">https://fb.me/react-with-addons-0.14.1.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://fb.me/react-dom-0.14.1.js">https://fb.me/react-dom-0.14.1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-dom-0.14.1.min.js">https://fb.me/react-dom-0.14.1.min.js</a>  </li>\n</ul>\n<p>We’ve also published version <code class="gatsby-code-text">0.14.1</code> of the <code class="gatsby-code-text">react</code>, <code class="gatsby-code-text">react-dom</code>, and addons packages on npm and the <code class="gatsby-code-text">react</code> package on bower.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>Fixed bug where events wouldn’t fire in old browsers when using React in development mode</li>\n<li>Fixed bug preventing use of <code class="gatsby-code-text">dangerouslySetInnerHTML</code> with Closure Compiler Advanced mode</li>\n<li>Added support for <code class="gatsby-code-text">srcLang</code>, <code class="gatsby-code-text">default</code>, and <code class="gatsby-code-text">kind</code> attributes for <code class="gatsby-code-text">&lt;track&gt;</code> elements</li>\n<li>Added support for <code class="gatsby-code-text">color</code> attribute</li>\n<li>Ensured legacy <code class="gatsby-code-text">.props</code> access on DOM nodes is updated on re-renders</li>\n</ul>\n<h3 id="react-testutils-add-on"><a href="#react-testutils-add-on" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React TestUtils Add-on</h3>\n<ul>\n<li>Fixed <code class="gatsby-code-text">scryRenderedDOMComponentsWithClass</code> so it works with SVG</li>\n</ul>\n<h3 id="react-csstransitiongroup-add-on"><a href="#react-csstransitiongroup-add-on" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React CSSTransitionGroup Add-on</h3>\n<ul>\n<li>Fix bug preventing <code class="gatsby-code-text">0</code> to be used as a timeout value</li>\n</ul>\n<h3 id="react-on-bower"><a href="#react-on-bower" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React on Bower</h3>\n<ul>\n<li>Added <code class="gatsby-code-text">react-dom.js</code> to <code class="gatsby-code-text">main</code> to improve compatibility with tooling</li>\n</ul>',excerpt:"After a couple weeks of having more people use v0.14, we’re ready to ship a patch release addressing a few issues. Thanks to everybody who has reported issues and written patches! The release is now available for download: React Dev build with warnings:  https://fb.me/react-0.14.1.js Minified build for production:  https://fb.me/react-0.14.1.min.js    React with Add-Ons Dev build with warnings:  https://fb.me/react-with-addons-0.14.1.js Minified build for production:  https://fb.me/react-with…",frontmatter:{title:"React v0.14.1",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"October 27, 2015",path:"blog/2015-10-28-react-v0.14.1.md",slug:"/blog/2015/10/28/react-v0.14.1.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2015/10/28/react-v0.14.1.html"}}}});
//# sourceMappingURL=path---blog-2015-10-28-react-v-0-14-1-html-278d2ecdbf35b5ce7f03.js.map