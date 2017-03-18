<template>
  <div class="view">
    <div class="box" v-for='i in 20'>
      <img src="./a.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
.view{
  text-align: center;
  .box{
    margin-left: 2px;
    margin-top: 2px;
    display: inline-block;
    img{
      width: 300px;
      margin: 10px;
    }
  }
}
</style>
