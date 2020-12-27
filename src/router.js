import { createRouter, createWebHistory } from 'vue-router'
import ProvideComponent from './components/ProvideComponent.vue'
const routes = [
    {
        path: '/:increment',
        name: 'home',
        component: ProvideComponent,
        props: route => ({ increment: route.params.increment })
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export { router }