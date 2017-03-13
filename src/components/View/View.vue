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
  .box{
    margin-left: 2px;
    margin-top: 2px;
    float: left;
    img{
      width: 300px;
    }
  }
}
</style>
