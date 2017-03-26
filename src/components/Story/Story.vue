<template>
<div class="story">
  <div v-for='d in data' class="item">
    <a :href="setLink(d.link)" target="_blank">
      <img :src="setSrc(d.img)"/>
      <div class="text">
        <h4>{{d.title}}</h4>
        <p>{{d.desc}}</p>
      </div>
    </a>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'story',
  data () {
    return {
      data: []
    }
  },
  created () {
    let [self, page, request, url] = [this, 0, true, 'https://route.showapi.com/955-1?&showapi_appid=26601&type=dp&showapi_sign=adc05e2062a5402b81c563a3ced09208&page=']
    if (document.body.scrollHeight === window.innerHeight) {
      requestData(url)
    }
    window.onscroll = function () {
      var leaveBottom = document.body.scrollHeight - document.body.scrollTop - window.innerHeight
      if (leaveBottom < 300 && request) {
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
        $(html).appendTo('.story')
      }
    }
  },
  methods: {
    setLink (link) {
      return link
    },
    setSrc (src) {
      return src
    }
  }
}
</script>

<style lang="stylus">
.story{
  width: 100%;
  height: 100%;
  .item{
    height: 140px;
    width: 400px;
    padding: 5px;
    border: 1px solid #eee;
    float: left;
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
  img{
    max-width: 140px;
    margin-right: 10px;
  }
}
</style>
