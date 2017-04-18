<template>
  <div class="music">
    <img class="bg" src="./blur.jpg"/>
    <div class="song">
      <div class="list">
        <p class="msg">
          <span class="name">歌曲</span>
          <span class="singer">歌手</span>
          <span class="time">时长</span>
        </p>
        <ul class="main" >
          <li class="msg" v-for='item in items'>
            <span class="name">{{item.songname}}</span>
            <span class="singer">{{item.singername}}</span>
            <span class="time">{{item.seconds | timeTransform}}</span>
            <span class="playBtn" @click='playBtn(item.url)'>
              <span>播放</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="lyric">
        <img :src="songImg" alt="" />
        <p>歌曲名: {{items[0].songname}}</p>
        <p>歌手: {{items[0].singername}}</p>
      </div>
    </div>
    <div class="play">
      <audio :src="songPlay" id="song" controls="" autoplay="autoplay"></audio>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'music',
  data () {
    return {
      items: []
    }
  },
  created () {
    let self = this
    let musicUrl = 'https://route.showapi.com/213-4?topid=5'
    let showapi = '&type=dp&showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86'
    askMusic(musicUrl)
    function askMusic (url) {
      $.ajax({
        type: 'get',
        url: url + showapi,
        async: true,
        success: function (res) {
          let data = res.showapi_res_body.pagebean.songlist
          self.items = data
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
  },
  filters: {
    timeTransform: function (value) {
      var seconds = value % 60 >= 10 ? value % 60 : ('0' + value % 60)
      return parseInt(value / 60) + ':' + seconds
    }
  },
  computed: {
    songImg () {
      return this.items[0].albumpic_big
    },
    songPlay () {
      return this.items[0].url
    }
  },
  methods: {
    playBtn (url) {
      var song = document.getElementById('song')
      song.src = url
    }
  }
}
</script>

<style lang="stylus">
.music{
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  .bg{
    height: 100%;
    width: 100%;
    filter: blur(100px);
    position: absolute;
    left: 0;
    top: 0;
  }
  .song{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 50px;
    z-index: 99;
    display: flex;
    justify-content: space-around;
    .msg{
      color: #FFFFFF;
      margin: 5px;
      display: flex;
      justify-content: space-around;
      .name{
        padding-left: 15px;
      }
    }
    .list{
      height: 450px;
      width: 800px;
      overflow-y: scroll;
      font-size: 14px;
      text-align: left;
      li{
        cursor: pointer;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      li:hover .playBtn{
        display: block;
      }
      .name{
        width: 60%;
      }
      .singer{
        width: 30%;
      }
      .time{
        width: 10%;
      }
      .playBtn{
        height: 40px;
        width: 60px;
        position: absolute;
        left: 45%;
        top: 0;
        z-index: 999;
        overflow: hidden;
        span{
          position: absolute;
          color: #fff;
          font-size: 16px;
          top: 0;
          left: 0;
          display: inline-block;
          height: 40px;
          line-height: 40px;
          text-indent: 15px;
        }
      }
    }
    .lyric{
      width: 500px;
      height: 600px;
      color: #fff;
      /*border: 1px solid #eee;*/
      img{
        height: 200px;
        width: 200px;
      }
      p{
        margin: 15px;
      }
    }
  }
  .play{
    position: absolute;
    bottom: 10%;
    left: 10%;
    z-index: 99;
    audio{
      height: 80px;
      width: 800px;
    }
  }
}
</style>
