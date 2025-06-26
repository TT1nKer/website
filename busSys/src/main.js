import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueECharts from 'vue-echarts'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const routes = [
  { path: '/login', name: '登录', component: () => import('./pages/Login.vue') },
  { path: '/', redirect: '/login' },
  { path: '/teacher', name: '教师仪表盘', component: () => import('./pages/TeacherDashboard.vue') },
  { path: '/student', name: '学生仪表盘', component: () => import('./pages/StudentDashboard.vue') },
  { path: '/production', name: '生产管理', component: () => import('./pages/Production.vue') },
  { path: '/factory', name: '工厂大屏', component: () => import('./components/FactoryDashboard.vue') },
  { path: '/purchase', name: '采购管理', component: () => import('./pages/Purchase.vue') },
  { path: '/material', name: '物料管理', component: () => import('./pages/Material.vue') },
  { path: '/warehouse', name: '仓库管理', component: () => import('./pages/Warehouse.vue') },
  { path: '/sales', name: '销售管理', component: () => import('./pages/Sales.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.component('v-chart', VueECharts)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
