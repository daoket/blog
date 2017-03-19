<template>
  <div class="news">
    <div class="nav">
      <ul>
      	<li v-for='it in item' @click='selectNews'>{{it.title}}</li>
      </ul>
    </div>
    <div class="main">
      
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'news',
  created () {

  },
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
      news: []
    }
  },
  methods: {
    selectNews () {
      let [page, self, url] = [0, this, 'https://route.showapi.com/109-35?&needContent=0&needHtml=1&showapi_appid=26601&showapi_sign=adc05e2062a5402b81c563a3ced09208&channelId=5572a108b3cdc86cf39001cd&page=']
      askData()
      function askData () {
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
            <img src="${data[i].imageurls.src}"/>
            <p><span class="see">${data[i].source}</span><span class="time">${data[i].pubDate}</span></p>
            <h3>${data[i].title}</h3>
            <p class="info">${data[i].html}</p>
          </div>`
          $(html).appendTo('.main')
        }
      }
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
    width: 200px;
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
    .item{
      width: 300px;
      border: 1px solid #eee;
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
