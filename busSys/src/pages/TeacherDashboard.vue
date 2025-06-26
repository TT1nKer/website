<template>
  <div class="dashboard-bg">
    <header class="dashboard-header">教师管理门户</header>
    <div class="dashboard-main">
      <el-card class="welcome-card">
        <div>欢迎您，{{ teacherName }}（教师）</div>
      </el-card>
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
import { getRandomName } from '../utils/random'
const teacherName = ref(getRandomName())
const cards = [
  { title: '广告审批', content: '待审批广告：' + Math.floor(Math.random()*5+1) + ' 条' },
  { title: '投资管理', content: '本季度投资项目：' + Math.floor(Math.random()*3+1) + ' 个' },
  { title: '小组表现监控', content: '小组总数：' + Math.floor(Math.random()*5+3) + ' 个' },
  { title: '系统公告', content: '最新公告：暂无' },
]
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