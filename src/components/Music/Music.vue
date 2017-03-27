<template>
  <div class="music">
    <img class="bg" src="./blur.jpg"/>
    <div class="song">
      <div class="list">
        <p class="msg"><span>歌曲</span><span>歌手</span><span>时长</span></p>
        <ul v-for='i in 20'>
          <li class="msg"><span>演员</span><span>薛之谦</span><span>5：12</span></li>
        </ul>
      </div>
      <div class="lyric">
        <img src="./a.jpg" alt="" />
        <p>歌曲名: 演员</p>
        <p>歌手: 薛之谦</p>
        <p>专辑名: 绅士</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'music',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    }
    .list{
      height: 600px;
      width: 800px;
      overflow-y: scroll;
      li{
        margin: 20px;
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
}
</style>
