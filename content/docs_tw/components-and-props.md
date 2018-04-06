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

## Extracting Components

Don't be afraid to split components into smaller components.

For example, consider this `Comment` component:

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

It accepts `author` (an object), `text` (a string), and `date` (a date) as props, and describes a comment on a social media website.

This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let's extract a few components from it.

First, we will extract `Avatar`:

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

The `Avatar` doesn't need to know that it is being rendered inside a `Comment`. This is why we have given its prop a more generic name: `user` rather than `author`.

We recommend naming props from the component's own point of view rather than the context in which it is being used.

We can now simplify `Comment` a tiny bit:

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

Next, we will extract a `UserInfo` component that renders an `Avatar` next to the user's name:

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

This lets us simplify `Comment` even further:

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

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (`Button`, `Panel`, `Avatar`), or is complex enough on its own (`App`, `FeedStory`, `Comment`), it is a good candidate to be a reusable component.

## Props are Read-Only

Whether you declare a component [as a function or a class](#functional-and-class-components), it must never modify its own props. Consider this `sum` function:

```js
function sum(a, b) {
  return a + b;
}
```

Such functions are called ["pure"](https://en.wikipedia.org/wiki/Pure_function) because they do not attempt to change their inputs, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

Of course, application UIs are dynamic and change over time. In the [next section](/docs/state-and-lifecycle.html), we will introduce a new concept of "state". State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.
