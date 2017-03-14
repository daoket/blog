<template>
  <div class="news">
    <div class="nav">
      <ul>
      	<li v-for='it in item' @click='clickLi'>{{it.title}}</li>
      </ul>
    </div>
    <div class="main">
      <h2>习近平五下上海团五谈创新</h2>
      <p>2017/3/14 上午8:58:06</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'news',
  data () {
    return {
      item: [{
        title: '推荐'
      }, {
        title: '要闻'
      }, {
        title: '财经'
      }, {
        title: '科技'
      }]
    }
  },
  methods: {
    clickLi (e) {
      $(e.target).addClass('active').siblings().removeClass('active')
    }
  }
}
</script>

<style lang="stylus">
.news{
  padding-top: 60px;
  display: flex;
  justify-content: flex-start;
  .nav{
    height: 80%;
    width: 150px;
    text-align: center;
    border-right: 5px solid #B44847;
    li{
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 20px;
    }
    .active{
      color: #fff;
      background: #ED4040;
      border-radius: 4px;
      margin: 0 20px;
    }
  }
  .main{
    padding: 12px;
  }
}
</style>
