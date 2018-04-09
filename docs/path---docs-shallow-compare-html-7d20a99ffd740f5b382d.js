webpackJsonp([0xd2aba2371805],{850:function(s,a){s.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p><code class="gatsby-code-text">shallowCompare</code> is a legacy add-on. Use <a href="/docs/react-api.html#reactpurecomponent"><code class="gatsby-code-text">React.PureComponent</code></a> instead.</p>\n</blockquote>\n<p><strong>Importing</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> shallowCompare <span class="token keyword">from</span> <span class="token string">\'react-addons-shallow-compare\'</span><span class="token punctuation">;</span> <span class="token comment">// ES6</span>\n<span class="token keyword">var</span> shallowCompare <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-shallow-compare\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES5 with npm</span></code></pre>\n      </div>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>Before <a href="/docs/react-api.html#reactpurecomponent"><code class="gatsby-code-text">React.PureComponent</code></a> was introduced, <code class="gatsby-code-text">shallowCompare</code> was commonly used to achieve the same functionality as <a href="pure-render-mixin.html"><code class="gatsby-code-text">PureRenderMixin</code></a> while using ES6 classes with React.</p>\n<p>If your React component’s render function is “pure” (in other words, it renders the same result given the same props and state), you can use this helper function for a performance boost in some cases.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SampleComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">shallowCompare</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>className<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">shallowCompare</code> performs a shallow equality check on the current <code class="gatsby-code-text">props</code> and <code class="gatsby-code-text">nextProps</code> objects as well as the current <code class="gatsby-code-text">state</code> and <code class="gatsby-code-text">nextState</code> objects.<br>\nIt does this by iterating on the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal.</p>\n<p><code class="gatsby-code-text">shallowCompare</code> returns <code class="gatsby-code-text">true</code> if the shallow comparison for props or state fails and therefore the component should update.<br>\n<code class="gatsby-code-text">shallowCompare</code> returns <code class="gatsby-code-text">false</code> if the shallow comparison for props and state both pass and therefore the component does not need to update.</p>',frontmatter:{title:"Shallow Compare",next:null,prev:null},fields:{path:"docs/addons-shallow-compare.md",slug:"docs/shallow-compare.html"}}},pathContext:{slug:"docs/shallow-compare.html"}}}});
//# sourceMappingURL=path---docs-shallow-compare-html-7d20a99ffd740f5b382d.js.map