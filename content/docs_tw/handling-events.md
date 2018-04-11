---
id: handling-events
title: 事件處理
permalink: tw/docs/handling-events.html
prev: state-and-lifecycle.html
next: conditional-rendering.html
redirect_from:
  - "tw/docs/events-ko-KR.html"
---

React 和 DOM 的事件處理邏輯大致雷同，只有少數幾處不太一樣:

* React 事件採取駝峰式命名(camelCase)，一般 DOM 事件則以小寫命名。
* JSX 中以 javascript function 作為事件處理函式，DOM 則是以字串格式表示。

以下是一段範例：

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

其等價的 React 語式是：

```js{1}
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

此外，在 default behavior 的處理上也有所不同。在既有的 DOM 中，你可以回傳 `false` 來阻止事件的 default behavior 被執行。但在 React 中，你必須明確的呼叫 `preventDefault` 方能達到一樣的結果。下面這個例子中，如果你想阻止 link 的 default behavior - 開啟新頁，你可以這樣編寫：

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

但在 React 中，你必須寫成：

```js{2-5,8}
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

上面範例裡的 `e` 是 React 根據 [W3C 規範](https://www.w3.org/TR/DOM-Level-3-Events/) 而模擬的事件，因此你不用擔心不同瀏覽器間的事件有所不同。更多細節請參考 [`SyntheticEvent`](/docs/events.html)。

當你以 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 撰寫 React 元件時，我們通常以 class method 的形式撰寫事件的處理函式。舉一個名為 `Toggle` 的元件為例，它是一個具有 `ON` / `OFF` 兩個狀態的按鈕：


```js{6,7,10-14,18}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

[跳轉至 CodePen 測試](http://codepen.io/gaearon/pen/xEmzGg?editors=0010)

在這裡你必須特別小心在 JSX 中 `this` 的使用。在 JavaScript 中， class method 預設是沒有做 this binding 的 (請參考[這篇文章](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind))。倘若你忘記替 `this.handleClick` 做正確的 this binding 就在 `onClick` 中使用，`this` 事實上可能會是 `undefined`。

這並非 React 才獨有的問題，更多細節請參閱 [how functions work in JavaScript](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)。一般來說，如果你想使用 `onClick={this.handleClick}` 這種寫法，你應該自己做好 this binding。

如果你覺得在 class 中都時時注意 this binding 的問題是很麻煩的事，這裡有兩種建議的寫法。其一是遵照 [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/)，而這個特性已經被 [Create React App](https://github.com/facebookincubator/create-react-app) 預設支援：

```js{2-6}
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

其二是使用 javascript 中的 [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)：

```js{7-9}
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```

但這種寫法的缺點是它會在 `LoggingButton` 每次 render 都產生新的 callback。假使你將這個 callback 傳遞給子元件，這將造成子元件出現許多無意義的渲染。針對這個缺點，我們建議在 `constructor` 就做好這個 callback 或者乾脆採取第一種 class fields syntax 的方法。

## 事件處理響應函式的參數傳遞

我們常常會想要在多個地方共用同一個事件響應函式。舉例來說，在迴圈中傳遞 row id 是很常見的情況：

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述兩個寫法是等價的，並分別用了 [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 及 [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)。

在這兩個寫法中，`e` 參數指的是 React 中的事件，他是跟在 ID 之後的第二參數。當我們使用 array function 時，必須明確寫出其傳遞。但第二種 `bind` 的寫法它會自動被傳遞。
