import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Output from '@/components/Output'
import Contact from '@/components/Contact' // 1. import

Vue.use(Router)

export default new Router({
  routes: [
    // 2.output
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skills',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/outputs',
      name: 'Output',
      component: Output
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
