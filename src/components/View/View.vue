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
import Load from '../Load/Load'
export default {
  name: 'view',
  data () {
    return {
      loadBtn: '加载更多 ...',
      show: false
    }
  },
  created () {
    let [page, flag] = [0, true]
    var url = 'https://api.unsplash.com/photos?client_id=80f66654628683dc7a20a3f2b44a93f8a9f0afaa41be7c7c392c5648dc6bb035&page='
    if (flag) {
      askData(url)
    }
    function askData (url) {
      page++
      $.ajax({
        type: 'get',
        url: url + page,
        async: true,
        success: function (res) {
          $('.load').hide()
          if (res.length === 0) {
            flag = false
          }
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
        $(html).appendTo('.main')
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
  .box{
    padding: 1px;
    display: inline-block;
    img{
      width: 300px;
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
