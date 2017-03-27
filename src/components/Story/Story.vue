<template>
<div class="story">
  <div class="main">
  
  </div>
  <Load></Load>
</div>
</template>

<script>
import $ from 'jquery'
import Load from '../Load/Load'
export default {
  name: 'story',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    let type = 'dp'
    let storyUrl = 'https://route.showapi.com/955-1'
    let showapi = '&showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86'
    let [self, page, request] = [this, 0, true]
    setInterval(function () {
      if (document.body.scrollHeight <= window.innerHeight) {
        requestData(storyUrl)
      }
    }, 500)
    window.onscroll = function () {
      var leaveBottom = document.body.scrollHeight - document.body.scrollTop - window.innerHeight
      if (leaveBottom < 2 && request) {
        requestData(storyUrl)
      }
    }
    function requestData (url) {
      page++
      $.ajax({
        type: 'get',
        url: url + '?page=' + page + '&type=' + type + showapi,
        async: true,
        success: function (res) {
          self.data = res.showapi_res_body.pagebean.contentlist
          if (self.data.length === 0) {
            request = false
            return false
          }
          loadStory(self.data)
          $('.load').hide()
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
    function loadStory (data) {
      for (let i in data) {
        let html = `<div class="item">
              <a target="_blank" href='${data[i].link}'>
                <img src="${data[i].img}"/>
                <div class="text">
                  <h4>${data[i].title}</h4>
                  <p>${data[i].desc}</p>
                </div>
              </a>
             </div>`
        $(html).appendTo('.story .main')
      }
    }
  },
  components: {
    Load
  }
}
</script>

<style lang="stylus">
.story{
  width: 100%;
  height: 100%;
  .main{
    text-align: center;
    .item{
      height: 140px;
      width: 400px;
      border: 1px solid #eee;
      display: inline-block;
      margin: 10px;
      a{
        display: flex;
        justify-content: flex-start;
        h4{
          color: red;
          font-size: 20px;
          margin: 10px 0;
        }
        p{
          line-height: 1.2;
          overflow: hidden;
          display: -webkit-box;
          word-break: break-all;
          -webkit-line-clamp: 5;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
      }
      a:hover{
        text-decoration: underline;
      }
    }
  }
  img{
    max-width: 140px;
    margin-right: 10px;
  }
}
</style>
