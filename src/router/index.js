import Vue from 'vue'
import Router from 'vue-router'
import { getRoutes } from "@/config/menu"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...getRoutes()
  ]
})
