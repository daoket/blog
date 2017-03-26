<template>
  <div class="welcome">
    <div class="dialog">
      <img src="./girl.jpg"/>
      <h1>{{title}}</h1>
      <p>{{msg1}}</p>
      <p>{{msg2}}</p>
      <p>{{msg3}}</p>
    </div>
    <Load></Load>
  </div>
</template>

<script>
import Load from '../Load/Load'
export default {
  name: 'welcome',
  data () {
    return {
      title: '叩首为梦 码梦为生',
      msg1: '从明天起, 做一个幸福的人, 喂马, 劈柴, 周游世界 ',
      msg2: '一个人有两个我，一个在黑暗中醒着，一个在光明中睡着。',
      msg3: '若我会见到你，事隔经年。我如何向你招呼，以眼泪，以沉默。'
    }
  },
  created () {
    window.onload = function () {
      document.querySelector('.load').style.display = 'none'
    }
  },
  components: {
    Load
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.welcome{
  height: 100%;
  width: 100%;
  background: url(./welcome.jpg) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .dialog{
    width: 550px;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    padding-bottom: 30px;
    opacity: 0.8;
    animation: shake 0.3s 1 linear;
    @keyframes shake{
      0%{transform: translateX(0px);}
      25%{transform: translateX(20px);}
      50%{transform: translateX(0px);}
      75%{transform: translateX(-20px);}
      100%{transform: translateX(0px);}
    }
    img{
      width: 100%;
    }
    h1{
      font-size: 30px;
      margin: 20px 0;
      font-weight: bold;
    }
    p{
      padding: 8px 12px;
      font-size: 18px;
    }
  }
}
@media only screen and (max-width: 800px) {
	.welcome .dialog{
	  width: 80%;
	  p{
	    font-size: 13px;
	  }
	}
}
</style>
