<template>
  <div class="view">
    <div class="main">
      
    </div>
    <button class="loadMore" @click='loadMore' v-show='show'>{{loadBtn}}</button>
    <Load></Load>
  </div>
</template>

<script>
import $ from 'jquery'
import Load from './Load'
export default {
  name: 'view',
  data () {
    return {
      loadBtn: '加载更多 ...',
      show: false
    }
  },
  created () {
    let page = 1
    let url = 'https://api.unsplash.com/photos?client_id=80f66654628683dc7a20a3f2b44a93f8a9f0afaa41be7c7c392c5648dc6bb035&page='
    setInterval(function () {
      if (document.body.scrollHeight < window.innerHeight) {
        askData(url + page)
      }
    }, 200)
    window.onscroll = function () {
      var leaveBottom = (document.body.scrollHeight - document.body.scrollTop - window.innerHeight)
      if (leaveBottom < 1) {
        page++
        askData(url + page)
      }
    }
    function askData (url) {
      $.ajax({
        type: 'get',
        url: url,
        async: true,
        success: function (res) {
          $('.load').hide()
          loadImg(res)
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
    function loadImg (data) {
      for (let s of data) {
        var html = `<div class="box">
                      <img src="${s.urls.small}"/>
                    </div>`
        $(html).appendTo('.view .main')
      }
      imgPositon()
    }
    function imgPositon () {
      let topArr = []
      let allImg = $('.view .main .box')
      let columns = parseInt(($(window).width() - 200) / 300)
      for (var i = 0; i < allImg.length; i++) {
        if (i < columns) {
          $(allImg[i]).css({
            'top': 0,
            'left': i % columns * 305 + 'px'
          })
          topArr[i] = $(allImg[i]).height()
        } else {
          console.log(topArr)
          let min = Math.min.apply(null, topArr)
          let num = topArr.indexOf(min)
          topArr[num] = topArr[num] + 5
          $(allImg[i]).css({
            'top': topArr[num] + 'px',
            'left': i % columns * 305 + 'px'
          })
          topArr[num] = topArr[num] + $(allImg[i]).height()
        }
      }
    }
    setTimeout(function () {
      this.show = true
    }, 1000)
  },
  methods: {
    loadMore () {
      alert('没有更多了，(；′⌒`)')
    }
  },
  components: {
    Load
  }
}
</script>

<style lang="stylus">
.view{
  text-align: center;
  .main{
    position: relative;
    .box{
      padding: 1px;
      position: absolute;
      display: inline-block;
      img{
        width: 300px;
      }
    }
  }
  .loadMore{
    width: 200px;
    height: 30px;
    font-size: 14px;
    color: #FFFFFF;
    background: #ED4040;
    border: 1px solid #ED4040;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    margin: 40px 0;
  }
}
</style>
