import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome/Welcome'
import Story from '@/components/Story/Story'
import Song from '@/components/Song/Song'
import Paper from '@/components/Paper/Paper'
import Movie from '@/components/Movie/Movie'
import View from '@/components/View/View'
import Me from '@/components/Me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    }, {
      path: '/story',
      component: Story
    }, {
      path: '/song',
      component: Song
    }, {
      path: '/paper',
      component: Paper
    }, {
      path: '/movie',
      component: Movie
    }, {
      path: '/view',
      component: View
    }, {
      path: '/me',
      component: Me
    }
  ]
})
