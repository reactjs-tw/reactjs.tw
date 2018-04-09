webpackJsonp([0x74640fe6498e],{649:function(e,t){e.exports={data:{markdownRemark:{html:'<p>React reconciliation process appears to be very well suited to implement a text editor with a live preview as people at Khan Academy show us.</p>\n<h2 id="khan-academy"><a href="#khan-academy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khan Academy</h2>\n<p><a href="http://bjk5.com/">Ben Kamens</a> explains how <a href="http://sophiebits.com/">Sophie Alpert</a> and <a href="http://joelburget.com/">Joel Burget</a> are promoting React inside of <a href="https://www.khanacademy.org/">Khan Academy</a>. They now have three projects in the works using React.</p>\n<blockquote>\n<p>Recently two Khan Academy devs dropped into our team chat and said they were gonna use React to write a new feature. They even hinted that we may want to adopt it product-wide.</p>\n<p>“The library is only a week old. It’s a brand new way of thinking about things. We’re the first to use it outside of Facebook. Heck, even the React devs were surprised to hear we’re using this in production!!!”</p>\n<p><a href="http://bjk5.com/post/53742233351/getting-your-team-to-adopt-new-technology">Read the full post…</a></p>\n</blockquote>\n<p>The best part is the demo of how React reconciliation process makes live editing more user-friendly.</p>\n<blockquote>\n<p>Our renderer, post-React, is on the left. A typical math editor’s preview is on the right.</p>\n</blockquote>\n<p><a href="http://bjk5.com/post/53742233351/getting-your-team-to-adopt-new-technology"><img src="/monkeys-59f1cd505fd0b91572fffed4d86685bb.gif"></a></p>\n<h2 id="react-snippets"><a href="#react-snippets" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Snippets</h2>\n<p>Over the past several weeks, members of our team, <a href="http://www.petehunt.net/">Pete Hunt</a> and <a href="http://zpao.com/">Paul O’Shannessy</a>, answered many questions that were asked in the <a href="https://groups.google.com/forum/#!forum/reactjs">React group</a>. They give a good overview of how to integrate React with other libraries and APIs through the use of <a href="/docs/reusable-components.html">Mixins</a> and <a href="/docs/working-with-the-browser.html">Lifecycle Methods</a>.</p>\n<blockquote>\n<p><a href="https://groups.google.com/forum/#!topic/reactjs/l6PnP8qbofk">Listening Scroll Event</a></p>\n<ul>\n<li><a href="http://jsfiddle.net/aabeL/1/">JSFiddle</a>: Basically I’ve given you two mixins. The first lets you react to global scroll events. The second is, IMO, much more useful: it gives you scroll start and scroll end events, which you can use with setState() to create components that react based on whether the user is scrolling or not.</li>\n</ul>\n<p><a href="https://groups.google.com/forum/#!topic/reactjs/RVAY_eQmdpo">Fade-in Transition</a></p>\n<ul>\n<li><a href="http://jsfiddle.net/ufe8k/1/">JSFiddle</a>: Creating a new <code class="gatsby-code-text">&lt;FadeInWhenAdded&gt;</code> component and using jQuery <code class="gatsby-code-text">.fadeIn()</code> function on the DOM node.</li>\n<li><a href="http://jsfiddle.net/R8f5L/5/">JSFiddle</a>: Using CSS transition instead.</li>\n</ul>\n<p><a href="https://groups.google.com/forum/#!topic/reactjs/pyUZBRWcHB4">Socket.IO Integration</a></p>\n<ul>\n<li><a href="https://gist.github.com/zpao/5686416">Gist</a>: The big thing to notice is that my component is pretty dumb (it doesn’t have to be but that’s how I chose to model it). All it does is render itself based on the props that are passed in. renderOrUpdate is where the “magic” happens.</li>\n<li><a href="https://gist.github.com/petehunt/5687230">Gist</a>: This example is doing everything — including the IO — inside of a single React component.</li>\n<li><a href="https://gist.github.com/petehunt/5687276">Gist</a>: One pattern that we use at Instagram a lot is to employ separation of concerns and consolidate I/O and state into components higher in the hierarchy to keep the rest of the components mostly stateless and purely display.</li>\n</ul>\n<p><a href="https://groups.google.com/forum/#!topic/reactjs/mHfBGI3Qwz4">Sortable jQuery Plugin Integration</a></p>\n<ul>\n<li><a href="http://jsfiddle.net/LQxy7/">JSFiddle</a>: Your React component simply render empty divs, and then in componentDidMount() you call React.renderComponent() on each of those divs to set up a new root React tree. Be sure to explicitly unmountAndReleaseReactRootNode() for each component in componentWillUnmount().</li>\n</ul>\n</blockquote>\n<h2 id="introduction-to-react-screencast"><a href="#introduction-to-react-screencast" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction to React Screencast</h2>\n<p><a href="http://www.petehunt.net/">Pete Hunt</a> recorded himself implementing a simple <code class="gatsby-code-text">&lt;Blink&gt;</code> tag in React.</p>\n<figure><iframe src="https://player.vimeo.com/video/67248575" width="100%" height="340" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></figure>\n<h2 id="snake-in-react"><a href="#snake-in-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Snake in React</h2>\n<p><a href="http://tomocchino.com/">Tom Occhino</a> implemented Snake in 150 lines with React.</p>\n<blockquote>\n<p><a href="https://github.com/tomocchino/react-snake/blob/master/src/snake.js">Check the source on GitHub</a></p>\n<figure><a href="https://tomocchino.github.io/react-snake/">\n  <a class="gatsby-resp-image-link" href="/static/snake-f7ff77c7e9a43b2553ab601a0df23d61-1b95a.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 300px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 105.33333333333334%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADj0lEQVQ4y4WU229UVRTGT3qZQY0NQaad25lz9rm3nV7OFIYCM72nFm8xIcHwoKJ0sD75YMKTvPgv+Ix9qGh8kQ5CmYKNWFSgojExCJjWiQkJ6F+g6Tn5XOvMGRzKVCb5Zd/W/s631157JOkJv427v8YWFhbe+2Kx/HqlcnHvk+KlXC53Sgjxia7rpzVNm69DY24/Nk1zob+/v9zT0/M593lOozVd0eaVnDG/82R2XhfB3jOO45ySXNe9RZthGEZTeI0+CNqAR+I0Wus2IE/aMPTanG3bt1nwO1VVecM/xOb/oYsGeKxqm0ZKcP9vmmPB71nweujAYxdbERqtiVqb0lUkt2IErSfrggVvPCoo/hOow19WaG5AMXDmqf1YihZwLnoQXwZtAWXqL0eK3kcdeXRbWwQb3TSiEhbNH+3qxVudfXijM4s3iWPUfy3eiw93Dnmr7aPosZo6DJ2Fl1CHbhYJUyDO0DHj4ZE7zAymU453KVJsLshuTj8zjMutBZyX8rjQwEViiWk7gAoJVCIFXCButI55y9sJcr6+bSniwY6XsT4wi+pACdXBGn9Q/647i3f1Ybza6QTHfTHZjZO73O0d8tEO7lZRmngJP6yt4avlSzhfPofy2UWsLFXw59oveOXIYTyb6kLa1PCcobCodzky8rhgcCmUuy5VRu/QIN6Zm0PpxAnMlmZxrHQc7x+fw82jH2B6zwHEFRkF2cbX7SP4uWXcq0S3cch9g+tPoaTHEwHpRBKxZAJDu2WsUA73pDTE6GKmUjZ+bBnDIXI4nLHgPFaH9WIOn5owdCiESiTpePtUchQdRZ42x+ioUykHV8hhRhNeqmlhhyVTr8c+RUcuY2AoY1LfwEzSwdU2FjQfCvLYUfVg77aCXDomtVwaa61j+KZtBKvEtdZRXKHWJfHOh4IjXPSeaBTUannz+JkZoUP6aiDCr2OQBIZlE/vIGTvmmAQV9STlsKlgWlPp4XMeVKQJDmbRlfZi4KKLxuyachXUKQtyHK+tbhUcdN1rednAeNrZHE3b/hhRlG2fgn0KDsZUa35aFz59MET4u0zFL8iWTzn0baFvhoLXpaw7cPOzHftxT5rCHWkCv0mTxATWqWXejvUFRztEFzITwv1xmivRGufVUmv/AZZl/STl8nvPftpRuP9X2wsb65GZ6u8N8PhO9Pnq7Sbcik4HMVefnqz2Ws6GaVkP+rLZxX8B60d3WrBJHM4AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="snake" title="" src="/static/snake-f7ff77c7e9a43b2553ab601a0df23d61-1b95a.png" srcset="/static/snake-f7ff77c7e9a43b2553ab601a0df23d61-ddd27.png 210w,\n/static/snake-f7ff77c7e9a43b2553ab601a0df23d61-1b95a.png 300w" sizes="(max-width: 300px) 100vw, 300px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n</blockquote>',excerpt:"React reconciliation process appears to be very well suited to implement a text editor with a live preview as people at Khan Academy show us. Khan Academy Ben Kamens  explains how  Sophie Alpert  and  Joel Burget  are promoting React inside of  Khan Academy . They now have three projects in the works using React. Recently two Khan Academy devs dropped into our team chat and said they were gonna use React to write a new feature. They even hinted that we may want to adopt it product-wide. “The…",frontmatter:{title:"Community Round-up #4",next:null,prev:null,author:[{frontmatter:{name:"Vjeux",url:"https://twitter.com/vjeux"}}]},fields:{date:"July 02, 2013",path:"blog/2013-07-03-community-roundup-4.md",slug:"/blog/2013/07/03/community-roundup-4.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2013/07/03/community-roundup-4.html"}}}});
//# sourceMappingURL=path---blog-2013-07-03-community-roundup-4-html-e32c5a4b2f8df9559481.js.map