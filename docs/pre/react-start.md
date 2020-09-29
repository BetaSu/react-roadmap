首先，创建我们的第一个`React`应用。

这里推荐官网[Create React App](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app)，只需要三行代码，创建我们第一个`React`应用。

```sh
npx create-react-app my-app
cd my-app
npm start
```

## 通过Demo入门React

学习是一个需要不断输入、输出的过程。很多同学入门会直接看`React`文档。

但是，仅仅看文档只有输入没有输出，并不高效。

所以，我推荐跟着[官网入门Demo](https://zh-hans.reactjs.org/tutorial/tutorial.html)边敲代码边学习。

这篇文章会一步步带你开发一个井字棋`React`应用。在此过程中，你会学习到如下知识：

- `React`中`组件`的概念

- 如何在`组件`间传递数据

- `组件`如何拥有自己的`状态`

- 开发者工具(React DevTools)的使用

- `箭头函数`等`JS`语言特性，如果不懂，可以翻阅[必要的JS知识](./js-for-react.html#常用的js语言特性)

- `状态`提升

- 不可变性对于`React`的意义，这对我们后期学习`Redux`很重要

- 初探Diff算法中的`key`属性

::: warning 这个Demo并不简单
虽然是入门Demo，但这个Demo并不简单。甚至复杂度超过了很多日常业务中的小需求。所以，请给自己一些耐心，一切都是值得的。
:::

## 下一步学什么

总结一下本节我们对`React`的`单向数据流`有了基本的认识。在`单向数据流`中：

- `状态`从`父组件`向`子组件`传递通过`props`

- `组件`自身的`状态`通过`state`保存

- `子组件`通过`事件回调`通知`父组件`状态改变

当我们了解了数据的流向，我们还需要了解承载数据的容器 —— `组件`的生命周期。