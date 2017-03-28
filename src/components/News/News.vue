<template>
  <div class="news">
    <div class="main"></div>
    <button class="more" @click='loadMore' v-show='false'>加载更多</button>
    <Load></Load>
  </div>
</template>

<script>
import $ from 'jquery'
import Load from '../Load/Load'
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
      }],
      news: [],
      url: 'https://route.showapi.com/109-35?&needContent=0&needHtml=1&showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86&channelId=5572a108b3cdc86cf39001cd&page='
    }
  },
  created () {
    let [page, self] = [0, this]
    askData(this.url)
    function askData (url) {
      page++
      $.ajax({
        type: 'get',
        url: url + page,
        async: true,
        success: function (res) {
          self.news = res.showapi_res_body.pagebean.contentlist
          if (self.news.length === 0) {
            return false
          }
          $('.load').hide()
          loadNews(self.news)
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
    function loadNews (data) {
      for (let i in data) {
        let html = `<div class="item">
          <p><span class="see">${data[i].source}</span><span class="time">${data[i].pubDate}</span></p>
          <h3>${data[i].title}</h3>
          <p class="info">${data[i].html}</p>
        </div>`
        $(html).appendTo('.news .main')
      }
    }
  },
  methods: {
    loadMore () {
      let [page, self] = [1, this]
      askData(this.url)
      function askData (url) {
        page++
        $.ajax({
          type: 'get',
          url: url + page,
          async: true,
          success: function (res) {
            self.news = res.showapi_res_body.pagebean.contentlist
            if (self.news.length === 0) {
              return false
            }
            loadNews(self.news)
          },
          error: function (err) {
            console.log(err)
          }
        })
      }
      function loadNews (data) {
        for (let i in data) {
          let html = `<div class="item">
            <p><span class="see">${data[i].source}</span><span class="time">${data[i].pubDate}</span></p>
            <h3>${data[i].title}</h3>
            <p class="info">${data[i].html}</p>
          </div>`
          $(html).appendTo('.main')
        }
      }
    }
  },
  components: {
    Load
  }
}
</script>

<style lang="stylus">
.news{
  .main{
     .item{
      margin: 10px;
      border-bottom: 1px solid red;
      img{
        height: 150px;
      }
      .see{
        font-size: 16px;
        color: green;
        margin-right: 10px;
      }
      h3{
        color: green;
        font-size: 20px;
        margin: 10px;
      }
      p{
        line-height: 1.4;
        margin: 10px;
      }
    }
  }
}
</style>
