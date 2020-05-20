import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Home from "../components/home/container"
import Employee from "../components/employee/container"
import Career from "../components/career/container"

const routes =[

  {
    component: Home,
    name: "home",
    path: "/"
  },
  {
    component: Employee,
    name: "employee",
    path: "/employee"
  },
  {
    component: Career,
    name: "career",
    path: "/career"
  },
]


export default new VueRouter({
    routes,
})