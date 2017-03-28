<template>
  <div class="music">
    <img class="bg" src="./blur.jpg"/>
    <div class="song">
      <div class="list">
        <p class="msg"><span class="name">歌曲</span><span class="singer">歌手</span><span class="time">时长</span></p>
        <ul class="main" >
          <li class="msg" v-for='item in items'>
            <span class="name">{{item.songname}}</span>
            <span class="singer">{{item.singername}}</span>
            <span class="time">{{item.seconds}}</span>
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
      <audio :src="songPlay" controls="controls" autoplay="autoplay"></audio>
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
  computed: {
    songImg () {
      return this.items[0].albumpic_big
    },
    songPlay () {
      return this.items[0].url
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
      color: #D9D8D8;
      margin: 5px;
      display: flex;
      justify-content: space-around;
      .name{
        padding-left: 15px;
      }
    }
    .list{
      height: 600px;
      width: 800px;
      overflow-y: scroll;
      font-size: 14px;
      text-align: left;
      li{
        margin: 20px;
        cursor: pointer;
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
    audio{
      height: 80px;
      width: 800px;
    }
  }
}
</style>
