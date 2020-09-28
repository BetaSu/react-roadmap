你去参观一幅名画

<img width="400px" :src="$withBase('/img/girl.jpeg')" alt="girl">

当你参观完回家后，家人问你：“参观了什么画？”

你可以说，这是个少女，她有：

- 淡恬从容、欲言又止的神态
- 含蓄又惆怅的回眸
- 圆润洁白的珍珠耳环
- 黄、蓝色头巾

也可以说：“我去参观了约翰内斯·维米尔的《戴珍珠耳环的少女》”。

这两个回答只是用不同抽象层次描述同一个事物。


## JS与React

我们可以直接用`JS`操作`DOM`，为什么还需要`React`呢？

这两种方式最终都会使浏览器渲染出画面，是用不同抽象层次的`API`实现一样的效果。

他们各自有什么优缺点？

“用`JS`操作`DOM`”就像用四句话描述画作，需要用更多的语句描述，但是更灵活。

比如，我们将描述中“这是个少女”变为“这是个少女猫”，那我们可以描述下面这幅画：

<img width="400px" :src="$withBase('/img/cat.jpeg')" alt="cat">

而使用`React`就像直呼画名，更高效，能让人一下就明白这是什么画。

但显然没有“用`JS`操作`DOM`”灵活——很难用一幅画来描述另一幅不存在的画。

## 如何学习React

网上有很多形如“Typescript+Redux+ReactRouter实现xxx”的`React`教程。对于初学者，用这样的教程入门就像：直接让画画新手魔改名画。

<img width="400px" :src="$withBase('/img/hulu.jpeg')" alt="girl">

为了实现由浅入深，本书的学习路径遵循：

> 能不学，就不学。必须学，等用到了再学

