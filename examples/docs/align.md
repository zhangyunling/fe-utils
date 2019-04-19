<style lang="less">
  .demo-align .let-align{
    float:left;
    width:16%;
    min-width:120px;
    height:100px;
    border-radius:5px;
    background:#F5F6FA;
    margin:1%;
    padding:1%;

    &:after{
      content:'';
      display:block;
      clear:both;
    }
  }
</style>
# Align 对齐方式
----
### 基础用法
Align 组件默认提供上下，左右布局方式，由 horizontal，vertical 属性来定义，代表不同对齐方式。
::: demo
```html
<div class="demo-align">
  <let-align>默认对齐</let-align>
  <let-align horizontal="left">左边对齐</let-align>
  <let-align horizontal="right">右边对齐</let-align>
  <let-align vertical="top">顶部对齐</let-align>
  <let-align vertical="bottom">底部对齐</let-align>
</div>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| horizontal | 原生属性，左右对其方式 | string | left, center, right | center |
| vertical |   原生属性，上下对其方式  | string | top, middle, bottom | middle |

### Align Events
| 参数 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click |  按钮点击时触发 | (event: Event) |
