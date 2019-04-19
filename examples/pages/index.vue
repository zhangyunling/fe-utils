<template>
  <div class="home">
    <img height="200" src="../assets/img/logo.png">
    <h3>一款轻量级、模块化的前端 UI 组件库</h3>
    <div class="about">
      <router-link :to="{name: 'guide'}">开始使用</router-link>
      <a target="_blank" class="github" href="https://github.com/yued-fe/let-ui">GitHub</a>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        height: document.documentElement.clientHeight
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .home {
    padding: 100px 0;
    text-align: center;

  h3 {
    color: #8994C6;
    font-size: 32px;
    margin-bottom: 40px;
    margin-top: 40px;
  }

  a {
    color: #fff;
    background-image: linear-gradient(90deg, #00AEFF 0%, #3369E7 100%);
    box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);
    display: inline-block;
    width: 190px;
    height: 56px;
    margin: 0 35px;
    font-size: 18px;
    line-height: 56px;
    border-radius: 28px;
    transition: all .3s;
    cursor: pointer;
  }

  .github {
    color: #316DE9;
    border: 1px solid #2F6EE9;
    background: #fff;
    box-shadow: none;
  }
}
</style>
