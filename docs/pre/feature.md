本节会介绍一些`React`特性的应用场景，方便你遇到相应问题时知道从哪下手。

## 表单

在`React`中表单组件分为`受控组件`与`非受控组件`。关于`受控`的概念以及如何选择是否`受控`参照：

- [受控组件](https://zh-hans.reactjs.org/docs/forms.html)

- [非受控组件](https://zh-hans.reactjs.org/docs/uncontrolled-components.html)

## 错误处理

如果你不希望`JS`运行时报错使整个应用崩溃，可以使用`错误边界`处理报错的组件。

参考[错误边界](https://zh-hans.reactjs.org/docs/error-boundaries.html)

## 操作DOM

当需要在`React`中操作`DOM`时，你需要使用`ref`属性，参照[Refs and the DOM](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html)

`ref`的全称是`reference`（引用），在`React`中，其有两层意思：

- 作为一种`数据结构`，即`React.createRef`的返回值，是一个包含`current`属性的普通对象。

```js
{current: any}
```

- 作为`ClassComponent`及`HostComponent`（即原生`DOM`对应的组件类型）的`props`，该`props`的值会在组件`生命周期`的不同阶段被赋予不同的值

在`React`中，不仅是`DOM`，所有希望引用的数据都可以使用`ref`。可能你现在还不理解这句话，没有关系，等到学完`Hooks`后就懂了

## 希望将子组件挂载到父组件以外的其他DOM上

当你实现一个`弹窗`功能时，你希望渲染出的`DOM`挂载在`body`元素上，可以使用`portal`。参考[Portals](https://zh-hans.reactjs.org/docs/portals.html)

## 希望在没有额外父组件的情况下渲染一组组件

参考[Fragments](https://zh-hans.reactjs.org/docs/fragments.html)

比如如下情况，最终会渲染出3个没有父组件的`Child`组件。

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

## 希望探索更灵活的组件复用方式

由于`React`直接用`JS`描述页面，所以很多`JS`的代码复用技巧同样适用于`React`，比如：

- 高级函数 -> 高阶`组件`
- 将数据作为`props` -> 将`组件`作为`props`

参考[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)，[Render Props](https://zh-hans.reactjs.org/docs/render-props.html)

这两种方式虽然复用了`组件`，但也使`组件`结构更复杂。`Hooks`的出现为`React`开发者复用`组件`提供了新的思路，我们后文会讲到。

## 下一步学什么

至此，`入门篇`就结束了，你已经具备了“中级前端工程师”需要掌握的`React`水平。

随着应用逐渐庞大，开发人员增多，会出现更多问题。这些问题如何产生的，又该如何解决，我们会在`进阶篇`学习。