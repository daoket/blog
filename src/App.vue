<template>
  <div id="app">
    <Menus></Menus>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Menus from '@/components/Menus/Menus'
export default {
  name: 'app',
  components: {
    Menus
  }
}
</script>

<style>
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
