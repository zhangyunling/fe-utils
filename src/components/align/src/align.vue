<template>
  <div class="let-align">
    <div class="let-align__inner" :style="style" @click.self="$emit('click')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'letAlign',
    props: {
      horizontal: {
        type: String,
        default: 'center'
      },
      vertical: {
        type: String,
        default: 'middle'
      }
    },
    computed: {
      style () {
        return {
          'text-align': this.horizontal,
          'vertical-align': this.vertical
        }
      }
    }
  }
</script>

<style lang="less">
  .let-align {
    display: table;
    height: 100%;
    width: 100%;

    &__inner {
      display: table-cell;
    }
  }
</style>
