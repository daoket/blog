<template>
  <div id="app">
    <Menus></Menus>
    <span class="open" @click='showMenu'>
      <div class="line" v-for='i in 3'></div>
    </span>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import $ from 'jquery'
import Menus from '@/components/Menus/Menus'
export default {
  name: 'app',
  methods: {
    showMenu () {
      $('.show').css('display', 'none')
      $('#app').css('padding-left', '200px')
      $('.menus').css('transform', 'translateX(0)')
    }
  },
  components: {
    Menus
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
  .open{
      display: none;
      color: #fff;
      height: 30px;
      width: 30px;
      padding: 10px;
      cursor: pointer;
      position: fixed;
      top: 0;
      z-index: 999;
      left: 200px;
      line-height: 100px;
      cursor: pointer;
      background: rgba(0,0,0,0.2);
      .line{
        height: 1px;
        width: 30px;
        background-color: #fff;
        margin-bottom: 10px;
      }
    }
    .toggle{
      
    }
}
@media only screen and (max-width: 800px) {
  #app{
    padding-left: 0;
    .open{
      display: block;
      left: 0;
    }
    .load{
      left: 0;
    }
  }
  .hide{
    transform: translateX(-100%);
    .show{
      display: flex;
    }
  }
}
</style>
