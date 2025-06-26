<template>
  <div class="dashboard-bg">
    <header class="dashboard-header">企业运营门户</header>
    <div class="dashboard-main">
      <el-card class="welcome-card">
        <div>欢迎，{{ studentName }}（{{ studentRole }}，第{{ groupNo }}组）</div>
      </el-card>
      <div class="action-row">
        <el-button type="primary" size="large" @click="goToFactory">进入生产可视化大屏</el-button>
      </div>
      <div class="card-row">
        <el-card class="dashboard-card" v-for="item in cards" :key="item.title">
          <div class="card-title">{{ item.title }}</div>
          <div class="card-content">{{ item.content }}</div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getRandomName } from '../utils/random'
const router = useRouter()
const studentName = ref(getRandomName())
const groupNo = ref(Math.floor(Math.random()*8+1))
const roles = ['财务总监', '营销经理', '采购经理', '生产经理', '研发经理', 'ISO专员']
const studentRole = ref(roles[Math.floor(Math.random()*roles.length)])
const cards = [
  { title: '财务部', content: '现金流：' + (Math.random()*100+50).toFixed(2) + ' 万元' },
  { title: '营销部', content: '本季度订单：' + Math.floor(Math.random()*10+5) + ' 单' },
  { title: '采购部', content: '采购订单：' + Math.floor(Math.random()*8+2) + ' 单' },
  { title: '生产部', content: '生产线：' + Math.floor(Math.random()*3+1) + ' 条' },
  { title: '研发部', content: '研发项目：' + Math.floor(Math.random()*4+1) + ' 个' },
  { title: 'ISO认证', content: '认证进度：' + Math.floor(Math.random()*100) + '%' },
]
const goToFactory = () => {
  router.push('/factory')
}
</script>

<style scoped>
.dashboard-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ef 60%, #b3c6e0 100%);
  padding: 0;
}
.dashboard-header {
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  padding: 2rem 0 1rem 0;
  color: #2c3e50;
  letter-spacing: 0.1em;
}
.dashboard-main {
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 2vw 2vw;
  box-sizing: border-box;
}
.welcome-card {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #2c3e50;
}
.action-row {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  justify-content: flex-start;
}
.dashboard-card {
  flex: 1 1 320px;
  min-width: 220px;
  max-width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 12px #b3c6e044;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
  transition: flex-basis 0.3s, min-width 0.3s;
}
.card-title {
  font-weight: bold;
  color: #409eff;
  margin-bottom: 0.7rem;
}
.card-content {
  color: #333;
}
@media (max-width: 900px) {
  .dashboard-main {
    padding: 1rem 0.5rem;
  }
  .card-row {
    gap: 1rem;
  }
  .dashboard-card {
    flex: 1 1 90vw;
    min-width: 90vw;
    max-width: 98vw;
  }
}
</style> 