import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MusicPage from '@/components/MusicPage'
import VideoPage from '@/components/VideoPage'
import PersonalPage from '@/components/PersonalPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }, {
      path: '/MusicPage',
      name: 'MusicPage',
      component: MusicPage
    }, {
      path: '/VideoPage',
      name: 'VideoPage',
      component: VideoPage
    }, {
      path: '/PersonalPage',
      name: 'PersonalPage',
      component: PersonalPage
    }, {
      path: '/',
      redirect: '/Index'
    }
  ]
})
