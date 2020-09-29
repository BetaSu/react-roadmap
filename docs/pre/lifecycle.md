在`React`中有两种类型组件可以保存状态：`Class`类型的组件与`Function`类型的组件。我们称他们为`ClassComponent`与`FunctionComponent`。

其中只有`ClassComponent`拥有`生命周期`。`FunctionComponent`则使用一套被称为`Hooks`的类似`生命周期`的机制。

`React`未来的发展趋势是：全面拥抱`Hooks`。

既然`Hooks`这么重要，为什么要先学`生命周期`，不直接学`Hooks`呢？

## Hooks的本质

要弄懂这个原因，需要从`React`源码运行的角度谈谈`Hooks`的本质。

我们用计算机打个比喻：

计算机的底层是`硬件`，在`硬件`之上是操作`硬件`的`操作系统`，再之上是使用`操作系统`的`软件`。

```js
上层 软件
中层 操作系统
底层 硬件
```

如果将`React`比作计算机，那么底层就是`源码的运行机制`，中层是`Hooks`，上层是`生命周期`。

```js
上层 软件       生命周期
中层 操作系统    Hooks
底层 硬件       React源码的运行机制
```

`Hooks`是基于`React`源码运行机制之上的抽象，他更偏向底层，更灵活，相对的学习起来更难。

而`生命周期`作为更高一级的抽象，更符合人脑的认知，更容易理解。

从`Vue`技术栈转过来的前端，可以与`Vue`中的`生命周期`类比，减少学习成本。

即使之前没有框架使用经验，也很容易理解`组件`就像人会生老病死一样，也有自己的`生命周期`。

基于此，我推荐初学者从`生命周期`而不是`Hooks`开始学习。

当掌握`生命周期`后，可以用`生命周期`来类比`Hooks`的运行机制。

:::warning Hooks不是生命周期
我们说可以用`生命周期`来类比`Hooks`的运行机制，但从上面的举例可以看出，`Hooks`更底层。

事实上，很多`React`开发者都是通过以“从`生命周期`来类比`Hooks`”入门`Hooks`。

但是要写出没有bug的`Hooks`最佳实践，还是需要了解`Hooks`背后的运行原理，也就是`源码的运行机制`。
:::

## 从Demo学习生命周期

回到本节的目标 —— 学习`生命周期`。

我们先跟着官网[元素渲染](https://zh-hans.reactjs.org/docs/rendering-elements.html)一节一起实现个计时器Demo。

接下来，跟着[State & 生命周期](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)一节为这个Demo增加生命周期钩子。

通过这个Demo，我们会了解`生命周期`的概念，学会：

- `componentDidMount`生命周期函数
- `componentWillUnmount`生命周期函数

你可以在[这里](https://zh-hans.reactjs.org/docs/react-component.html#the-component-lifecycle)看到`ClassComponent`的全部`生命周期`，等我们需要的时候再来学习他们吧。

至此，你的`React`便入门了，可以上手开发业务了。

## 下一步学什么

在`生命周期`中，有一个最为广泛使用，又最易被误用的方法 —— `componentWillReceiveProps`，以至于有必要单独用一节内容来讲解他。
