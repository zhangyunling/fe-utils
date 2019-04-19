import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index'
import Resource from '../pages/resource'
import navs from '../nav.config.json'

Vue.use(Router)

const routes = [
  { name: 'index', path: '/', component: Index },
  { name: 'resource', path: '/resource', component: Resource }
]

function addNav (nav) {
  if (nav.pages) {
    nav.pages.forEach(({ name, path }) => {
      routes.push({
        name,
        path,
        component: r => require.ensure([], () => r(require(`../docs/${name}.md`)), 'docs')
      })
    })
  } else if (nav.groups) {
    nav.groups.forEach(addNav)
  }
}

navs.forEach(addNav)

export default new Router({
  routes: routes
})
