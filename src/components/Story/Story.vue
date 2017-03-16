<template>
  <div class="story">
    <div v-for='item in items' class="item">
      <img src="#"/>
      <div>
        <h4>{{item.title}}</h4>
        <p>我是内容</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'story',
  created () {
    $.ajax({
      type: 'get',
      url: 'https://route.showapi.com/955-1?&showapi_appid=26601&type=dp&showapi_sign=adc05e2062a5402b81c563a3ced09208&page=1',
      async: true,
      success: function (result) {
        this.items = result.showapi_res_body.pagebean.contentlist
        console.log(this.items)
      },
      error: function (err) {
        console.log(err)
      }
    })
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style lang="stylus">
.story{
  width: 100%;
  height: 100%;
  background: #eee;
  padding: 50px;
  .item{
    height: 150px;
    width: 300px;
    border: 1px solid #999;
    display: flex;
    justify-content: flex-start;
    img{
      height: 100%;
      min-width: 100px;
    }
    h4{
      font-size: 23px;
      color: red;
      padding: 5px 0;
    }
  }
}
</style>
