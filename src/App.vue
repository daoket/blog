<template>
  <div id="app">
    <blog-menu></blog-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Menus from '@/components/Menus'
export default {
  name: 'app',
  components: {
    'blog-menu': Menus
  }
}
</script>

<style lang="stylus">
html, body, #app{
  height: 100%;
  margin: 0;
  padding: 0;
}
#app{
  display: flex;
  padding-left: 200px;
  transition: all 1s;
}
</style>
