<template>
  <div class="movie">
    <h2 class="top">{{title}}</h2>
    <div class="main">
      <div class="item" v-for='(m, index) in movieData'>
        <a :href="movieSrc(m.alt)">
          <h2 class='title'>{{m.title}}</h2>
          <img :src="movieImg(m.images.large)"/>
          <div class='msg'>
            <p>排名：{{index + 1}}</p>
            <p>评分：{{m.rating.average}}</p>
            <p>导演：{{m.directors[0].name}}</p>
            <p>主演：{{m.casts[0].name}}</p>
            <p>原名：{{m.original_title}}</p>
            <p>看过人数：{{m.collect_count}}</p>
            <p>年代：{{m.year}}</p>
          </div>
        </a>
      </div>
    </div>
    <button class="loadMore" v-show='btnStatus'>{{loadBtn}}</button>
    <Load></Load>
  </div>
</template>

<script>
import $ from 'jquery'
import Load from './Load'
export default {
  name: 'movie',
  data () {
    return {
      title: '豆瓣电影TOP250',
      loadBtn: '加载更多 。。。',
      btnStatus: false,
      movieData: []
    }
  },
  created () {
    let count = 0
    let self = this
    let movieUrl = 'https://api.douban.com/v2/movie/top250?start='
    askData(movieUrl + count)
    window.onscroll = function () {
      let leaveBottom = document.body.scrollHeight - (document.body.scrollTop + window.innerHeight)
      console.log(leaveBottom)
      if (leaveBottom < 1) {
        count += 20
        askData(movieUrl + count)
      }
    }
    function askData (url) {
      $.ajax({
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'callback',
        url: url,
        async: true,
        success: function (res) {
          $('.load').hide()
          self.movieData = self.movieData.concat(res.subjects)
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
  },
  methods: {
    movieSrc (src) {
      return src
    },
    movieImg (url) {
      return url
    }
  },
  components: {
    Load
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.movie{
  width: 100%;
  .top{
    height: 60px;
    width: 100%;
    display: inline-block;
    color: #3377AA;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background-color: #F0F3F5;
  }
  .main{
    text-align: center;
    .item{
      height: 444px;
      width: 300px;
      display: inline-block;
      margin: 10px 5px 5px 10px;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      .title{
        height: 40px;
        width: 100%;
        color: #fff;
        font-size: 18px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.5);
      }
      img{
        height: 100%;
        width: 100%;
      }
      .msg{
        width: 100%;
        height: 200px;
        color: #fff;
        background: rgba(0,0,0,0.5);
        position: absolute;
        bottom: 0;    
        left: 0;
        text-align: left;
        transition: all 1s;
        transform: translateY(90px);
        p{
          padding: 5px 12px;
        }
      }
      .loadMore{
        height: 30px;
        width: 200px;
        background-color: #ED4040;
        border: 1px solid #ED4040;
        border-radius: 4px;
      }
    }
    .item:hover{
      .msg{
        transform: translateY(0);
      }
    }
  }
}
</style>
