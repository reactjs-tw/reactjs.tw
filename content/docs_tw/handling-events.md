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

當你以 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 撰寫 React 元件時，我們通常以 class method 的形式撰寫事件的處理函式。For example, this `Toggle` component renders a button that lets the user toggle between "ON" and "OFF" states:

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

[Try it on CodePen.](http://codepen.io/gaearon/pen/xEmzGg?editors=0010)

You have to be careful about the meaning of `this` in JSX callbacks. In JavaScript, class methods are not [bound](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) by default. If you forget to bind `this.handleClick` and pass it to `onClick`, `this` will be `undefined` when the function is actually called.

This is not React-specific behavior; it is a part of [how functions work in JavaScript](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/). Generally, if you refer to a method without `()` after it, such as `onClick={this.handleClick}`, you should bind that method.

If calling `bind` annoys you, there are two ways you can get around this. If you are using the experimental [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/), you can use class fields to correctly bind callbacks:

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

This syntax is enabled by default in [Create React App](https://github.com/facebookincubator/create-react-app).

If you aren't using class fields syntax, you can use an [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) in the callback:

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

The problem with this syntax is that a different callback is created each time the `LoggingButton` renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

## Passing Arguments to Event Handlers

Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if `id` is the row ID, either of the following would work:

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

The above two lines are equivalent, and use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) respectively.

In both cases, the `e` argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with `bind` any further arguments are automatically forwarded.
