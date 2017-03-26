<template>
  <div class="movie">
    <div class="main">
      
    </div>
    <button class="loadMore" v-show='fasle'>{{loadBtn}}</button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'movie',
  data () {
    return {
      loadBtn: '加载更多 。。。'
    }
  },
  created () {
    let url = 'https://api.douban.com/v2/movie/top250'
    askData(url)
    function askData (url) {
      $.ajax({
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'callback',
        url: url,
        async: true,
        success: function (res) {
          loadMovie(res.subjects)
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
    function loadMovie (data) {
      for (let s of data) {
        var html = `<div class="item">
                <h2 class='title'>${s.title}</h2>
                <img src="${s.images.large}"/>
                <div class='msg'>
                  <p>排名：</p>
                  <p>评分：${s.rating.average}</p>
                  <p>导演：${s.directors[0].name}</p>
                  <p>主演：${s.casts[0].name}</p>
                  <p>原名：${s.original_title}</p>
                  <p>看过人数：${s.collect_count}</p>
                  <p>年代：${s.year}</p>
                </div>
              </div>`
        $(html).appendTo('.main')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.movie{
  .item{
    height: 444px;
    width: 300px;
    display: inline-block;
    margin: 10px 5px 5px 10px;
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
}
</style>
