在很长一段时间内，生命周期函数`componentWillReceiveProps`是响应`props`变化之后进行更新的唯一方式。由于该方法太过灵活，逐渐被滥用。

并且由于`React`源码架构的调整，在未来的版本（开启`Concurrent Mode`），该方法的触发时机会与现有版本不同，并被逐渐废弃。

所以，有必要在入门时就掌握一些错误使用`componentWillReceiveProps`的场景下的最佳实践。

参考[unsafe_componentwillreceiveprops](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)

同时，你需要理解`派生状态`的意义，参考[你可能不需要使用派生 state
](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

## 下一步学什么

至此，你的`React`便入门了，可以上手开发业务了。

虽然还有很多`特性`没有学习，但是这些`特性`的出现，都是为了解决框架使用中遇到的某些问题。

在下一节，我会介绍这些`特性`是用来应对什么场景的，你可以在业务开发中遇到这些问题后再回过头来学习。