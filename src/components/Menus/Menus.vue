<template>
  <div class="menus hide">
    <div class="user">
      <a target="_blank" href="https://github.com/daoket"><img src="./user.jpg"/></a>
      <p>东都花神</p>
    </div>
    <ul class="aside">
    	<li v-for='todo in todos'>
    	  <router-link :to='setPath(todo.path)'>{{todo.text}}</router-link>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menus',
  data () {
    return {
      todos: [{
        text: '首页',
        path: '/welcome'
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.menus{
  color: #999;
  font-size: 16px;
  width: 200px;
  height: 100%;
  background: #202020;
  position: fixed;
  left: 0;
  top: 0;
  overflow: scroll;
  transition: all 1s;
  text-align: center;
  .aside .active{
    color: #fff;
    background: #1A1A1A;
  }
  .user{
    height: 230px;
    width: 100%;
    img{
      border-radius: 50%;
      width: 150px;
      height: 150px;
      margin: 30px 20px 10px;
      transition: all 0.5s;
    }
    img:hover{
      transform: rotate(360deg);
    }
  }
  li{
    height: 45px;
    margin: 15px 0;
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
</style>
