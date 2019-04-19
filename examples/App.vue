<template>
  <div id="app">
    <main-header></main-header>
    <router-view v-if="$route.name === 'index'"></router-view>
    <template v-else>
      <div class="container">
        <side-nav class="nav"></side-nav>
        <router-view class="view"></router-view>
      </div>
      <main-footer></main-footer>
    </template>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import mainFooter from './components/footer.vue'
import sideNav from './components/side-nav.vue'

export default {
  name: 'app',
  components: {
    mainHeader,
    sideNav,
    mainFooter
  }
}
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
  .container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.5);

    &:after {
      content:"";
      clear: both;
      display: block;
    }

    .nav {
      float: left;
      width: 267px;
    }

    .view {
      box-sizing: border-box;
      float: left;
      padding: 32px 48px 48px;
      width: calc(~"100% - 270px");
    }
  }
</style>
