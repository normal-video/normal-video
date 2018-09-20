import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/components/Index')
const MusicPage = () => import('@/components/MusicPage')
const VideoPage = () => import('@/components/VideoPage')
const PersonalPage = () => import('@/components/PersonalPage')

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
