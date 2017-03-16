<template>
  <div class="menus hide">
    <span class="control show" @click='show()'>=</span>
    <span class="control close" @click='close()'>×</span>
    <div class="user">
      <a target="_blank" href="https://github.com/daoket"><img src="./user.jpg"/></a>
      <p>daoket</p>
    </div>
    <ul>
    	<li v-for='todo in todos'>
    	  <router-link :to='setPath(todo.path)'>{{todo.text}}</router-link>
    	</li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'menus',
  data () {
    return {
      todos: [{
        text: '首页',
        path: '/'
      }, {
        text: '故事',
        path: '/story'
      }, {
        text: '音乐',
        path: '/music'
      }, {
        text: '新闻',
        path: '/news'
      }, {
        text: '电影',
        path: '/movie'
      }, {
        text: '风景',
        path: '/view'
      }, {
        text: '关于我',
        path: '/me'
      }]
    }
  },
  methods: {
    setPath (path) {
      return path
    },
    show () {
      $('.show').css('display', 'none')
      $('#app').css('padding-left', '200px')
      $('.menus').css('transform', 'translateX(0)')
    },
    close () {
      $('.show').css('display', 'flex')
      $('#app').css('padding-left', '0')
      $('.menus').css('transform', 'translateX(-100%)')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.menus{
  color: #999;
  font-size: 18px;
  width: 200px;
  height: 100%;
  background: #202020;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 1s;
  text-align: center;
  .control{
    color: #fff;
    height: 50px;
    width: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
  }
  .show{
    display: none;
    right: -50px;
  }
  .close{
    right: 0;
  }
  .user{
    height: 230px;
    width: 100%;
    img{
      border-radius: 50%;
      width: 150px;
      height: 150px;
      margin: 30px 20px 10px;
      transition: all 8s;
    }
    img:hover{
      transform: rotate(360deg);
    }
  }
  li{
    height: 60px;
    margin: 5px;
    a{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a:hover{
      color: #fff;
    }
  }
}
@media only screen and (max-width: 800px) {
  #app{
    padding-left: 0;
  }
	.hide{
	  transform: translateX(-100%);
	  .show{
	    display: flex;
	  }
	}
}
</style>
