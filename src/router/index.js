import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome'
import Story from '@/components/Story'
import Music from '@/components/Music'
import News from '@/components/News'
import Movie from '@/components/Movie'
import Picture from '@/components/Picture'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Welcome
    }, {
      path: '/welcome',
      component: Welcome
    }, {
      path: '/story',
      component: Story
    }, {
      path: '/music',
      component: Music
    }, {
      path: '/news',
      component: News
    }, {
      path: '/movie',
      component: Movie
    }, {
      path: '/picture',
      component: Picture
    }, {
      path: '/me',
      component: Me
    }, {
      path: '/*',
      component: Welcome
    }
  ]
})
