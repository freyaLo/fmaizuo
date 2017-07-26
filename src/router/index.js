import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/index'

import film from '@/views/filmInfo/film'
import films from '@/views/films/films'
import comingSoon from '@/views/films/coming-soon'
import nowPlaying from '@/views/films/now-playing'
import cinema from '@/views/cinema/cinema'
import mall from '@/views/mall/mall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/film/:id',
      name: 'film',
      component: film
    },
    {
      path: '/films',
      name: 'films',
      component: films,
      children: [
      	{
      		path: '',
      		redirect: 'now-playing',
      		component: nowPlaying
      	},
      	{
      		path: 'now-playing',
      		component: nowPlaying
      	},
      	{
      		path: 'coming-soon',
      		component: comingSoon
      	}
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/mall',
      name: 'mall',
      component: mall
    }
  ]
})
