<script setup>
import { RouterView } from 'vue-router'
import FactoryDashboard from './components/FactoryDashboard.vue'
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="route.path === '/' ? FactoryDashboard : Component" />
  </RouterView>
</template>

<style scoped>
/* 可选：保留全局样式或清空 */
</style>
