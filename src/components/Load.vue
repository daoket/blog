<template>
  <div class="load">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="stylus">
.load{
  height: 100%;
  width: 100%;
  position: fixed;
  left: 200px;
  top: 0;
  background: #fff;
  .spinner {
    width: 60px;
    height: 60px;
    background-color: #67CF22;
    position: absolute;
    left: 40%;
    top: 25%;
   
    margin: 100px auto;
    -webkit-animation: rotateplane 1.2s infinite ease-in-out;
    animation: rotateplane 1.2s infinite ease-in-out;
  }
   
  @-webkit-keyframes rotateplane {
    0% { -webkit-transform: perspective(120px) }
    50% { -webkit-transform: perspective(120px) rotateY(180deg) }
    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
  }
   
  @keyframes rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    } 50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    } 100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  } 
}
</style>
