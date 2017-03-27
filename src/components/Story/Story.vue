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
    let [self, page, request, url] = [this, 0, true, 'https://route.showapi.com/955-1?&showapi_appid=26601&type=dp&showapi_sign=adc05e2062a5402b81c563a3ced09208&page=']
    setInterval(function () {
      if (document.body.scrollHeight <= window.innerHeight) {
        requestData(url)
      }
    }, 500)
    window.onscroll = function () {
      var leaveBottom = document.body.scrollHeight - document.body.scrollTop - window.innerHeight
      if (leaveBottom < 2 && request) {
        requestData(url)
      }
    }
    function requestData (url) {
      page++
      $.ajax({
        type: 'get',
        url: url + page,
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
        $(html).appendTo('.main')
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
