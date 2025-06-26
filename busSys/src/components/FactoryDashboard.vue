<template>
  <div class="dashboard-bg">
    <div class="dashboard-main">
      <button class="exit-btn" @click="exitDashboard">退出</button>
      <header class="dashboard-header">数字工厂可视化大屏</header>
      <div class="dashboard-flex">
        <!-- 左侧面板 -->
        <aside class="dashboard-side">
          <section class="panel">
            <h3>订单全生命周期管理</h3>
            <div>今日处理订单：5单</div>
            <div>今日交付订单：7单</div>
            <div>按时交付率：<span class="highlight">90%</span></div>
            <!-- 统计图区域 -->
            <div class="chart-container">
              <v-chart :option="orderChartOption" autoresize style="height:180px;width:100%" />
            </div>
          </section>
          <section class="panel">
            <h3>生产设备态势监测</h3>
            <div>矿产设备：5台（维修中：3台）</div>
            <div>原厂设备：70台（在线：60台）</div>
            <div>原厂监测设备：3台（维修时间：20小时/台）</div>
          </section>
          <section class="panel">
            <h3>资金池动态监控</h3>
            <div>可用资金：500万</div>
            <div>当月收入：750万</div>
            <div>当月支出：550万</div>
          </section>
        </aside>
        <!-- 中央工厂可视化区域 -->
        <section class="dashboard-center">
          <svg width="100%" height="100%" viewBox="0 0 500 300" style="max-width:600px;max-height:360px;min-width:320px;min-height:200px;">
            <!-- 简单工厂建筑占位 -->
            <rect x="60" y="120" width="120" height="80" fill="#1e90ff" opacity="0.7"/>
            <rect x="200" y="80" width="80" height="120" fill="#00bfff" opacity="0.7"/>
            <rect x="320" y="100" width="100" height="60" fill="#87cefa" opacity="0.7"/>
            <rect x="350" y="200" width="80" height="40" fill="#4682b4" opacity="0.7"/>
            <!-- 管理按钮 -->
            <g style="cursor:pointer;">
              <rect x="100" y="60" width="80" height="30" rx="8" fill="#0ff" opacity="0.8" @click="goTo('/production')"/>
              <text x="140" y="80" text-anchor="middle" fill="#003366" font-size="16" style="pointer-events:none;">生产管理</text>
              <rect x="60" y="220" width="80" height="30" rx="8" fill="#0ff" opacity="0.8" @click="goTo('/purchase')"/>
              <text x="100" y="240" text-anchor="middle" fill="#003366" font-size="16" style="pointer-events:none;">采购管理</text>
              <rect x="350" y="60" width="80" height="30" rx="8" fill="#0ff" opacity="0.8" @click="goTo('/material')"/>
              <text x="390" y="80" text-anchor="middle" fill="#003366" font-size="16" style="pointer-events:none;">物料管理</text>
              <rect x="420" y="180" width="80" height="30" rx="8" fill="#0ff" opacity="0.8" @click="goTo('/warehouse')"/>
              <text x="460" y="200" text-anchor="middle" fill="#003366" font-size="16" style="pointer-events:none;">仓库管理</text>
              <rect x="220" y="250" width="80" height="30" rx="8" fill="#0ff" opacity="0.8" @click="goTo('/sales')"/>
              <text x="260" y="270" text-anchor="middle" fill="#003366" font-size="16" style="pointer-events:none;">销售管理</text>
            </g>
          </svg>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

const router = useRouter()
const goTo = (path) => {
  router.push(path)
}
const exitDashboard = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/student')
  }
}

use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer
])

const orderChartOption = ref({
  title: {
    text: '订单趋势',
    left: 'center',
    textStyle: { color: '#00bfff', fontSize: 16 }
  },
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: ['9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7'],
    axisLine: { lineStyle: { color: '#00bfff' } },
    axisLabel: { color: '#fff' }
  },
  yAxis: {
    type: 'value',
    axisLine: { lineStyle: { color: '#00bfff' } },
    splitLine: { lineStyle: { color: '#183b5b' } },
    axisLabel: { color: '#fff' }
  },
  series: [
    {
      name: '处理订单',
      type: 'line',
      data: [5, 7, 6, 8, 9, 6, 7],
      smooth: true,
      lineStyle: { color: '#00bfff' },
      itemStyle: { color: '#00bfff' },
      areaStyle: { color: 'rgba(0,191,255,0.2)' }
    }
  ]
})
</script>

<style scoped>
.exit-btn {
  position: absolute;
  top: 2vw;
  right: 3vw;
  z-index: 10;
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6em 1.4em;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
  transition: background 0.2s;
}
.exit-btn:hover {
  background: #d9363e;
}
.dashboard-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a1a2f 60%, #183b5b 100%);
  color: #fff;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  padding: 0;
}
.dashboard-main {
  margin: 0;
  padding: 2vw 2vw;
  box-sizing: border-box;
  position: relative;
}
.dashboard-header {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 2rem 0 1rem 0;
  letter-spacing: 0.2em;
  text-shadow: 0 0 16px #00bfff;
}
.dashboard-flex {
  display: flex;
  gap: 2vw;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}
.dashboard-side {
  flex: 1 1 0;
  min-width: 320px;
}
.panel {
  background: rgba(20, 40, 80, 0.85);
  border-radius: 12px;
  box-shadow: 0 0 12px #1e90ff44;
  padding: 1.2rem 1.5rem;
  margin-bottom: 0.5rem;
}
.panel h3 {
  color: #00bfff;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
}
.highlight {
  color: #ffea00;
  font-weight: bold;
}
.chart-container {
  margin-top: 1rem;
  background: rgba(10, 30, 60, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 8px #00bfff33;
  padding: 0.5rem 0.2rem 0.2rem 0.2rem;
}
.dashboard-center {
  flex: 2 1 0;
  min-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(10, 30, 60, 0.7);
  border-radius: 18px;
  box-shadow: 0 0 32px #00bfff33;
  box-sizing: border-box;
}
.dashboard-center svg {
  width: 100%;
  height: auto;
  display: block;
}
@media (max-width: 1100px) {
  .dashboard-flex {
    flex-direction: column;
    gap: 2vw;
    justify-content: flex-start;
  }
  .dashboard-side, .dashboard-center {
    min-width: 90vw;
    width: 100%;
  }
}
</style> 