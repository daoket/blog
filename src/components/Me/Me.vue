<template>
  <div class="me">
    <a class="resume" href="https://daoket.github.io/resume/index.html" target="_blank">{{resume}}</a>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      resume: '我的简历'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.me{
  height: 100%;
  width: 100%;
  display: flex;
  background: url(https://daoket.github.io/resume/images/blog/me_bg.jpg) no-repeat;
  background-size: 100%;
  justify-content: center;
  align-items: center;
  .resume{
    height: 40px;
    width: 100px;
    font-size: 25px;
    color: #FFFFFF;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    border-bottom: 1px solid #eee;
    transition: all 1s;
  }
  .resume:hover{
    color: green;
    border-color: green;
    transform: scale(1.5);
  }
}
</style>
