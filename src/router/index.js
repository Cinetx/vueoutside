import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from "../views/StartScreen";
import FormScreen from "../views/FormScreen";


const routes = [
  {
    path: '/',
    name: 'StartApp',
    component: StartScreen
  },
  {
    path: '/app',
    name: 'FormScreen',
    component: FormScreen
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
