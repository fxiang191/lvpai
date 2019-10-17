import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import one from './components/01.vue'
import two from './components/02.vue'
import three from './components/03.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/three',component:three},
    {path:'/two',component:two},
    {path:'/one',component:one},
    {path:'/index',component:index},
  ]
})
