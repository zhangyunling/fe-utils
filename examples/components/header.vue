<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <div class="nav-left">
          <router-link :to="{name: 'index'}"><img src="../assets/img/logo.png" width="50"></router-link>
      </div>
      <div class="nav-right">
        <ul class="navbar">
          <li><router-link :to="{name: 'guide'}">指南</router-link></li>
          <li><router-link :to="{name: 'start'}">组件</router-link></li>
          <li><router-link :to="{name: 'resource'}">资源</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="less" type="text/less">
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;

      .navbar {
        display: inline-block;
        margin: 0;
        list-style-type: none;
        height: 80px;
        line-height: 80px;

        li {
          position: relative;
          display: inline-block;
          margin: 0 24px;
          cursor: pointer;

          a {
            display: inline-block;
            color: #3F536E;

            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 2px;
              background-color: #4766FF;
              transition: transform 0.5s;
              transform: scale3d(0,1,1);
            }
            &.router-link-active {
              color: #4766FF;

              &::after {
                transform: scale3d(1 ,1 ,1);
                display: inline-block;
              }
            }

            &:not(:active):hover {
              color: #4766ff;
              &::after{
                transform: scale3d(1, 1, 1);
              }
            }
          }

        }
      }
    }
  }
</style>
