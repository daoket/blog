<template>
  <div id="app">
    <Menus></Menus>
    <span class="open" @click='showMenu'>></span>
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
      height: 100px;
      width: 40px;
      cursor: pointer;
      position: fixed;
      top: 45%;
      z-index: 999;
      left: 200px;
      text-align: center;
      line-height: 100px;
      cursor: pointer;
      background: rgba(0,0,0,0.2);
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
