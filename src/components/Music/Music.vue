<template>
  <div class="music">
    <div class="song">
      <p class="msg"><span>歌曲</span><span>歌手</span><span>时长</span></p>
      <ul>
      	<li class="msg"><span>演员</span><span>薛之谦</span><span>5：12</span></li>
      </ul>
    </div>
    <img src="./blur.jpg"/>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.music{
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  img{
    height: 100%;
    width: 100%;
    filter: blur(100px);
    position: absolute;
    left: 0;
    top: 0;
  }
  .song{
    height: 500px;
    width: 800px;
    position: absolute;
    left: 50px;
    top: 100px;
    z-index: 99;
    /*border: 1px solid red;*/
    .msg{
      color: #D9D8D8;
      margin: 5px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
