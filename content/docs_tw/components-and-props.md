---
id: components-and-props
title: Components and Props
permalink: tw/docs/components-and-props.html
redirect_from:
  - "tw/docs/reusable-components.html"
  - "tw/docs/reusable-components-zh-CN.html"
  - "tw/docs/transferring-props.html"
  - "tw/docs/transferring-props-it-IT.html"
  - "tw/docs/transferring-props-ja-JP.html"
  - "tw/docs/transferring-props-ko-KR.html"
  - "tw/docs/transferring-props-zh-CN.html"
  - "tw/tips/props-in-getInitialState-as-anti-pattern.html"
  - "tw/tips/communicate-between-components.html"
prev: rendering-elements.html
next: state-and-lifecycle.html
---

Components讓你將UI切成一個一個獨立的模組, 讓你可以重複使用, 把一個複雜的應用切成一個個的Component讓我們可以降低開發的複雜度. 

你可以把Component想像成JavaScript的function, 談到function我們一定會定義輸入和輸出, 對React component來說:

* 輸入是JavaScript object, 稱作**props**
* 回傳值是前面討論過的**React elements**

## Functional & Class Components

React Component最簡單的形式是一個JavaScript function:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

上面的這個function的輸入是一個稱作props的JavaScript object, 而回傳值則是React element, 因此他合乎React component的定義. 像這個的function我們會把它稱為**functional** component.

除了functional component, 我們也可以定義**class** component (關於Class, [這裏](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)有更多資訊), 如下:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

這兩個不同版本的Component, 對React來說並沒有差別.

Class component有一些額外的功能, 這些我們會再在[其他章節](/docs/state-and-lifecycle.html)討論, 在此之前, 我們先使用funtional component.

## Rendering a Component

先前我們只會使用JSX來表示一個DOM元件, 像這樣:

```js
const element = <div />;
```

但實際上, JSX也可以用來表示我們自訂的元件, 也就是React components:

```js
const element = <Welcome name="Sara" />;
```

當React看到React element使用了一個自訂的React component時, React會將JSX的attributes表示為一個JavaScript object, 我們把這個object稱為"props"

> (譯注) 以Welcome這個例子來說, props就是`{ name: "Sara" }`


讓我們看一個完整的例子:

```js{1,5}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[](codepen://components-and-props/rendering-a-component).

細看一下上面的程式碼:

1. 我們呼叫`ReactDOM.render()`, 並傳入`<Welcome name="Sara">`
2. React呼叫`Welcome` component (現在他是一個function) 並傳入`{name: 'Sara'}`當作props參數.
3. 我們所寫的`Welcome` component回傳`<h1>Hello, Sara</h1>`
4. React DOM嘗試將`<h1>Hello, Sara</h1>`轉換為實際的DOM element, 並顯示出來

>**備註:** 
>
>當我們撰寫自己的React component時, 名稱要用大寫開頭! 這是因為當React看到小寫開頭的component時, 會被當作是一個DOM element tag來處理.
>
>更多有關這個細節的資訊請看[這裡](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)

## 將Component當成零件來組合

Components可以包含其他的Components. 在React應用中, 最重要的抽象化工具就是Component, 從按鈕, 表單, 對話盒...幾乎所有的東西都可以是一個Copmonent.

舉例來說, 我們可以創建一個`App` component, 並讓這個`App` component使用我們先前撰寫的`Welcome` component: 

```js{8-10}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

[](codepen://components-and-props/composing-components).

一般來說, 新的React應用通常僅包含一個最上層的`App` component. 然而, 如果你正嘗試將React整合到一個既存的應用中, 你也可以嘗試從一些比較底層且比較單純的component開始(比如`Button`), 之後再一路往上.

> 譯註: 這裏原文有提到`View hierarchy`, 指的是UI的呈現類似於一個樹狀結構, 比如HTML也是其中一個例子.

## 將components切成更小的components

盡可能地將components切成更小的components.

舉例來說, 看看以下的`Comment`component:

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[](codepen://components-and-props/extracting-components).

這個component用來描述社群網站上的一則回應, 他的prop包含了

* `author`(一個object)
* `text`(一個string)
* 一個`date`(一個date物件), 

這個component並不容易修改也不容易維護, 因為它包含了兩種不同的資訊, 其一是關於用來描述該回應的使用者, 另外則是用來描述該回應本身. 讓我們把這個component切成更小的單位:

首先是`Avatar`:

> 譯註: 這邊`Avatar`有點`大頭相`的意思, 用來描述我們在社群網站上的登入圖像

```js{3-6}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

`Avatar`可以獨立於`Comment`使用, 因此我們進一步選擇本來叫做`author`的prop改名為`user`, 更貼近這個component想表達的意義. 

當你在替props命名的時候, 盡可能站在該component自己的角度, 而非使用這個component的角度.

此時原來的`Comment`已經可以被簡化一部分:

```js{5}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

接著, 我們將使用者的帳號名稱與`Avatar`包成一個新的`UserInfo` component:

```js{3-8}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

此時, `Comment`變得更單純了:

```js{4}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[](codepen://components-and-props/extracting-components-continued).

雖然將component切小這件事看起來很枯燥, 但是一但你開始重複使用這些`小`component的時候, 你絕對可以感受到它的價值!

有兩個小原則值得和大家分享:

1. 基本的UI元件, 像是`Button`, `Panel`, `Avatar`, 都應該component化
2. 或是, 當數個語意相關的UI元件一同出現時, 也是component化的好選擇, 比如`App`, `FeedStory`, `Comment`.

## Props是唯讀的

無論你使用[class 或是 function](#functional-and-class-components) component, 所有component都不應該修改被傳入的props. 也就是說, 對於component來說, props是`唯讀`的.

為了多說明`唯讀`的觀念, 請看下面這個function:

```js
function sum(a, b) {
  return a + b;
}
```

上述function稱為["pure function"](https://en.wikipedia.org/wiki/Pure_function), 因為他們:

* 不會修改傳入的參數
* 當傳入的參數相同時, 永遠回傳相同的結果

反之, 以下的function就不算是pure function, 因為他修改了傳入的參數:

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React幾乎沒有任何嚴格的規定, 唯獨除了這條:

**所有React component對於傳入的props而言都應該表現得像個pure function一樣**

然而我們也知道, 一個應用所呈現出來的UI絕對是動態的, 那麼React要如何處理這個部分呢? 請看下回[分解](/docs/state-and-lifecycle.html).

