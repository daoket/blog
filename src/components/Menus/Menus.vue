<template>
  <div class="menus">
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
  text-align: center;
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
</style>
