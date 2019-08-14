import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index';
import PageDetail from '@/components/pages/PageDetail';
import Front from '@/components/pages/Front';
import Mood from '@/components/pages/Mood';
import Works from '@/components/pages/Works'
import FullStack from '@/components/pages/FullStack';
import BrokenWords from '@/components/pages/BrokenWords';
import AboutBlog from '@/components/pages/AboutBlog'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/pageDetail/:id',
      name: 'pageDetail',
      component: PageDetail
    },
    {
      path: '/front/:type',
      name: 'front',
      component: Front
    },
    {
      path: '/mood',
      name: 'mood',
      component: Mood
    },
    {
      path: '/works/:type',
      name: 'works',
      component: Works
    },
    {
      path: '/fullStack/:type',
      name: 'fullStack',
      component: FullStack
    },
    {
      path: '/brokenWords',
      name: 'brokenWords',
      component: BrokenWords
    },
    {
      path: '/aboutBlog',
      name: 'aboutBlog',
      component: AboutBlog
    }
  ],
  mode:'history',
  base:'/zmengBlog/'
})
