import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'

const Login = (resolve) => {
  import('components/login').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
