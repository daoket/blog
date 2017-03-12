import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome/Welcome'
import Story from '@/components/Story/Story'
import Music from '@/components/Music/Music'
import News from '@/components/News/News'
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
      path: '/music',
      component: Music
    }, {
      path: '/news',
      component: News
    }, {
      path: '/movie',
      component: Movie
    }, {
      path: '/view',
      component: View
    }, {
      path: '/me',
      component: Me
    }, {
      path: '/*',
      component: Welcome
    }
  ]
})
