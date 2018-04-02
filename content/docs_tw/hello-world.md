---
id: hello-world
title: Hello World
permalink: tw/docs/hello-world.html
prev: cdn-links.html
next: introducing-jsx.html
redirect_from:
  - "tw/docs"
  - "tw/docs/index.html"
  - "tw/docs/getting-started.html"
  - "tw/docs/getting-started-ko-KR.html"
  - "tw/docs/getting-started-zh-CN.html"
---

寫個Hello world永遠是學新程式語言或是框架的第一步, 學React也不例外. 這裡有個最小最小的[React Hello World連結](codepen://hello-world)供你參考, 建議用新分頁開啟, 這樣你還可以同時看這份教學文件.

> 使用以上連結並不需要安裝任何東西到你的電腦, 是學習React最快的方式之一. 但如果你喜歡設置完整的開發環境, 請參考[安裝](/docs/try-react.html)章節

最基本的React範例看起來像這樣:

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

這個範例會在你的瀏覽器頁面上顯示"Hello, world!"字串.

當然, 目前為止我們只是提供一點信心給你, 下一個章節我們才會開始正式介紹React的基本觀念.

## 我需要會JavaScript嗎?

要能把React學好, 最基本的JavaScript知識是絕對必要的. 如果你對自己的JavaScript還沒有足夠的信心, 我們建議你看[這個連結](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)複習一下, 要不然接下來會很辛苦喔!

對了, 我們會使用部分的ES6語法, 包括了以下部分: 

* [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)
* [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

附帶一提, 如果你想看看ES6被transpile的結果, 可以試試看[Babel網站](babel://es5-syntax-example).
