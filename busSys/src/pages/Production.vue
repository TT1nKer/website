<template>
  <div class="dashboard-bg">
    <div class="dashboard-main">
      <el-card class="prod-header-card">
        <h2>生产管理</h2>
        <div>当前生产线：3 条 | 今日产量：1200 件 | 设备运行率：95%</div>
      </el-card>
      <el-card class="prod-section-card">
        <div class="section-title">生产任务列表</div>
        <el-table :data="tasks" style="width: 100%">
          <el-table-column prop="id" label="任务编号" width="120" />
          <el-table-column prop="product" label="产品" />
          <el-table-column prop="quantity" label="数量" width="100" />
          <el-table-column prop="status" label="状态" width="120" />
          <el-table-column prop="deadline" label="截止日期" width="140" />
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup>
const tasks = [
  { id: 'P20230901', product: '智能手表', quantity: 500, status: '进行中', deadline: '2024-06-20' },
  { id: 'P20230902', product: '蓝牙耳机', quantity: 300, status: '待启动', deadline: '2024-06-22' },
  { id: 'P20230903', product: '智能音箱', quantity: 400, status: '已完成', deadline: '2024-06-18' },
]
</script>

<style scoped>
.dashboard-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a1a2f 60%, #183b5b 100%);
  color: #fff;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  padding: 0;
}
.dashboard-main {
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 2vw 2vw;
  box-sizing: border-box;
}
.prod-header-card {
  margin-bottom: 2vw;
  font-size: 1.2rem;
  color: #2c3e50;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 12px #b3c6e044;
}
.prod-header-card h2 {
  margin-bottom: 0.5em;
  color: #409eff;
}
.prod-section-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 12px #b3c6e044;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
}
.section-title {
  font-weight: bold;
  color: #409eff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
</style> 