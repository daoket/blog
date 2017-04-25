<template>
  <div class="menus toggle">
    <span class="open" @click='showMenu'>
      <div class="line" v-for='i in 3'></div>
    </span>
    <div class="user">
      <a target="_blank" href="https://github.com/daoket"><img src="../assets/menus/user.jpg"/></a>
      <p>东都花神</p>
    </div>
    <ul class="aside">
    	<li v-for='menu in menus'>
    	  <router-link :to='setPath(menu.path)'>
    	    <svg class="icon" aria-hidden="true">
            <use :xlink:href='setXlink(menu.xlink)'></use>
          </svg>
    	    <span>{{menu.text}}</span>
    	  </router-link>
    	</li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'menus',
  data () {
    return {
      menus: [{
        text: '首页',
        path: '/welcome',
        xlink: '#icon-shouye'
      }, {
        text: '故事',
        path: '/story',
        xlink: '#icon-gushi'
      }, {
        text: '音乐',
        path: '/music',
        xlink: '#icon-yinle'
      }, {
        text: '新闻',
        path: '/news',
        xlink: '#icon-xinwen'
      }, {
        text: '电影',
        path: '/movie',
        xlink: '#icon-dianying'
      }, {
        text: '风景',
        path: '/picture',
        xlink: '#icon-fengjing'
      }, {
        text: '关于我',
        path: '/me',
        xlink: '#icon-guanyuwo'
      }]
    }
  },
  methods: {
    setPath (path) {
      return path
    },
    setXlink (xlink) {
      return xlink
    },
    showMenu () {
      $('.menus').toggleClass('toggle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.menus{
  color: #999;
  font-size: 16px;
  width: 200px;
  height: 100%;
  background: #202020;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  transition: all 1s;
  text-align: center;
  .open{
    display: none;
    color: #fff;
    height: 30px;
    width: 30px;
    padding: 10px 0 0 8px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: -39px;
    z-index: 999;
    line-height: 100px;
    cursor: pointer;
    background: rgba(0,0,0,0.2);
    .line{
      height: 1px;
      width: 20px;
      background-color: #fff;
      margin-bottom: 6px;
    }
  }
  .aside .active{
    color: #fff;
    background: #1A1A1A;
  }
  .user{
    height: 230px;
    width: 100%;
    img{
      border-radius: 50%;
      width: 150px;
      height: 150px;
      margin: 30px 20px 10px;
      transition: all 0.5s;
    }
    img:hover{
      transform: rotate(360deg);
    }
  }
  li{
    height: 45px;
    margin: 15px 0;
    a{
      height: 100%;
      display: flex;
      font-size: 20px;
      justify-content: flex-start;
      align-items: center;
      padding-left: 40px;
      span{
        margin:  0 15px;
      }
    }
    a:hover{
      color: #fff;
    }
  }
}

@media only screen and (max-width: 800px) {
  #app{
    padding-left: 0;
    .open{
      display: block;
    }
    .load{
      left: 0;
    }
  }
  .toggle{
    transform: translateX(-100%);
  }
}

.icon {
  /* 通过设置 font-size 来改变图标大小 */
  width: 25px; height: 25px;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: -0.15em;
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
     normalize.css 中也包含这行 */
  overflow: hidden;
}
</style>
