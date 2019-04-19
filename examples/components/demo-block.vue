<template>
  <div class="demo-block">
    <div class="renderer-wrapper">
      <slot name="renderer"></slot>
    </div>

    <let-collapse-transition>
      <div class="source-wrapper" v-show="isExpand">
        <slot name="source"></slot>
      </div>
    </let-collapse-transition>

    <div class="expander" @click="isExpand = !isExpand">
      {{isExpand ? '隐藏代码' : '显示代码'}}
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import Vue from 'vue'
  export default {
    data() {
      return {
        isExpand: false
      };
    },
  };
</script>

<style lang="less" type="text/less">
  .demo-block {
    border: 1px solid #e2ecf4;
    border-radius: 4px 4px 0 0;
    background-color: #fff;
    margin-top: 16px;

    .renderer-wrapper {
      // overflow: hidden;
      padding: 20px;

      &:after{
        clear: both;
        content: '';
        display: block;
      }

      p {
        color: #3f536e;
        font-size: 14px;
        line-height: 2;
      }
    }

    .source-wrapper {
      pre {
        margin: 0;
      }
      // background-color: #F7F7F7;
      // overflow: hidden;
      // padding: 20px;

      // code {
      //   padding: 0;
      //   font-size: 1em;
      //   border: none;
      //   border-radius: 0;
      //   background-color: transparent;
      // }
    }

    .expander {
      border-top: 1px solid #eaeefb;
      color: #9096A3;
      cursor: pointer;
      font-size: 12px;
      line-height: 37px;
      text-align: center;

      &:hover{
        color: #454E66;
      }
    }

    // .let-button {
    //   margin-bottom: 10px;
    // }
    // .let-select, .let-input {
    //   width: 256px;
    // }
    // .let-input-number.let-input-number_small {
    //   .let-input {
    //     width: auto;
    //   }
    // }
  }
  // .demo-container {
  //   transition: max-height .3s ease;
  //   overflow: hidden;
  // }

  // .docs-demo {
  //   width: 100%;
  //   height: auto;
  //   box-sizing: border-box;
  //   font-size: 14px;
  //   background-color: #F7F7F7;
  //   border: 1px solid #e2ecf4;
  //   border-top: none;
  //   pre code {
  //     font-family: Consolas,Menlo,Courier,monospace;
  //     line-height: 22px;
  //     border: none;
  //   }
  // }

  // .docs-demo__code,
  // .highlight-wrapper,
  // .docs-demo__meta {
  //   padding: 0 20px;
  //   overflow-y: auto;
  // }

  // .docs-demo__code {
  //   border-bottom: 1px solid #eee;
  // }
  // .docs-demo.docs-demo--expand .docs-demo__meta {
  //   border-bottom: 1px dashed #e9e9e9;
  // }

  // .docs-demo.docs-demo--expand .docs-demo__triangle {
  //   transform: rotate(180deg);
  // }

  // .highlight-wrapper {
  //   display: none;

  //   p,
  //   pre {
  //     margin: 0;
  //   }

  //   .hljs {
  //     padding: 0;
  //   }
  // }

  // .docs-demo.docs-demo--expand .highlight-wrapper {
  //   display: block;
  // }

  // .docs-demo__code__mobi {
  //   height: 620px;
  //   margin: 20px 0;
  // }

  // .docs-demo__code__mobi__header {
  //   border-radius: 4px 4px 0 0;
  //   background: -webkit-linear-gradient(rgba(55,55,55,.98),#545456);
  //   background: linear-gradient(rgba(55,55,55,.98),#545456);
  //   text-align: center;
  //   padding: 8px;

  //   img {
  //     width: 100%;
  //   }

  //   .url-box {
  //     height: 28px;
  //     line-height: 28px;
  //     color: #fff;
  //     padding: 0 3px;
  //     background-color: #a2a2a2;
  //     margin: 10px auto 0;
  //     border-radius: 4px;
  //     white-space: nowrap;
  //     overflow-x: auto;
  //   }
  // }

  // .docs-demo__code__mobi__content {
  //   iframe {
  //     width: 100%;
  //     border: 0;
  //     height: 548px;
  //   }
  // }
</style>
