---
id: rendering-elements
title: 顯示React Elements
permalink: tw/docs/rendering-elements.html
redirect_from: "tw/docs/displaying-data.html"
prev: introducing-jsx.html
next: components-and-props.html
---

Elements是React應用的最小單位, 表示了你想要顯示在螢幕上的東西：

```js
const element = <h1>Hello, world</h1>;
```

與瀏覽器的DOM elements不同之處在於, React elements只是一般的JavaScript objects, 創建的成本很低. 而React DOM則會負責將React elements更新到實際的DOM上面. 你可以想像成, React DOM會把React elements**轉換**成DOM elements並且顯示出來.

>**請注意**
>
> Reacet `elements` vs `components`是非常容易混淆的觀念, 不過你可以先這樣想: **Elements是由components組成的**, 至於詳細的介紹, 就等到[接下來](/docs/components-and-props.html)再說了. 

## 將React element顯示到瀏覽器上 

典型的React應用都會有一段下面這樣的HTML:

```html
<div id="root"></div>
```

我們會把上面這個div稱作React **root** DOM node(以下簡稱root DOM node), 他表示"所有在此之下的部分, 都是由React DOM來管理的". 也就是說, 我們應該避免直接操作任何root DOM node之下的部分. 

Root DOM node並不一定要是唯一的, 但是他們彼此之間應**獨立運作**. 除此之外, 只要基於"root DOM node以及所以其之下的部分應該由React來管理"的原則, 技術上你也可以混用React與其他的JavaScript框架!

透過React DOM以及root DOM node, 我們就可以把React element顯示在螢幕上了!

`embed:rendering-elements/render-an-element.js`

[](codepen://rendering-elements/render-an-element)

>**(譯註) 複習一下**
>
> 1. React elements並不是DOM elements, 他只是一個JavaScript object, 表示你想要顯示的UI
> 2. React DOM負責把React elements轉為DOM elements, 並實際顯示到螢幕上
> 3. 我們需要選定一個實際的DOM node, 並把他的控制權交給React DOM, 這樣的一個DOM node稱作root DOM node 

## 更新React elements

React elements是[不可變的](https://en.wikipedia.org/wiki/Immutable_object), 意思是當你創建了一個React element, 你就不能夠改變他的內容, 甚至包含了他的children部分. 

因為React elements不可變, 所以要更新UI只能夠透過:

1. 再次創建新的React element
2. 將這個新創建的React element交由`ReactDOM.render`重新顯示在螢幕上

舉例來說, 如果我們想寫一個時鐘的程式, 並且我們希望他一秒更新一次, 那我們就需要每秒都創建一個新的React element, 並且呼叫`ReactDOM.render`把這個更新後的時鐘顯示出來: 

`embed:rendering-elements/update-rendered-element.js`

[](codepen://rendering-elements/update-rendered-element)

>**備註**
>
> 實務上, 大部分的React應用都只會呼叫`ReactDOM.render`一次. 我們[接下來](/docs/state-and-lifecycle.html)會介紹其他的方法來更新UI. 這些都是React的核心觀念, 千萬不可以跳過!
>

## React DOM會避免無謂的更新!

React DOM會比較目前等待更新的React elements和`前一版`的React elements的不同之處, 並且只更新必要的部分到實際的Browser DOM上面!

這裡有個實驗可以證明這件事, 讓我們使用瀏覽器的除錯工具來觀察剛剛的時鐘程式:

![DOM inspector showing granular updates](../images/docs/granular-dom-updates.gif)

從上圖我們可以看到, 雖然我們每秒都創建了新的React elements, 但僅僅只有**時間相關的字串**被更新了! 

這就是React的威力! 我們不需要在意**如何改變UI(HOW)**, 只需要在意**UI最終變成怎樣(WHAT)**就可以了, 有經驗的開發者會立刻感受到這樣的思維可以幫我們大幅縮短開發的時間, 並減少出錯的機會.

