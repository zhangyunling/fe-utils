<template>
  <div class="side-nav">
    <div v-for="nav in data" class="group-container">
      <p class="side-nav__title">{{nav.desc}}</p>
      <template v-if="nav.pages">
        <router-link
          v-for="d in nav.pages"
          :key="d.name"
          class="side-nav__link"
          :class="d.name === $route.name ? 'active' : ''"
          :to="{ name: d.name }"
        >{{d.desc}}</router-link>
      </template>
      <template v-else-if="nav.groups" v-for="n in nav.groups">
        <p class="side-nav__subtitle">{{n.desc}}</p>
        <router-link
          v-for="d in n.pages"
          :key="d.name"
          class="side-nav__link side-nav__component"
          :class="d.name === $route.name ? 'active' : ''"
          :to="{ name: d.name }"
        >{{d.desc}}</router-link>
      </template>
    </div>
  </div>
</template>

<script>
  import navConf from '../nav.config.json'
  export default {
    data () {
      return {
        data: navConf
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .side-nav {
    border-right: 1px solid #ececec;
    padding: 32px 0;
    line-height: 1.8;

    .group-container {
      margin-bottom: 32px;
    }

    &__title {
      color: #8DABC4;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      padding: 0 24px 8px;
      text-transform: uppercase;
    }

    &__subtitle {
      color: #2C405A;
      font-size: 14px;
      font-weight: bold;
      position: relative;
      padding: 6px 0 6px 24px;
    }

    &__link {
      color: #3F536E;
      display: block;
      font-size: 14px;
      line-height: 1.5;
      padding: 8px 24px;
      cursor: pointer;

      &:hover {
        color: #3F5AE0;
      }

      .active {
        color: #3F5AE0;
        border-right: 2px solid #3F5AE0;
      }
    }

    &__component {
      color: #616367;
      padding: 6px 24px;
      font-size: 14px;
    }
  }
</style>
