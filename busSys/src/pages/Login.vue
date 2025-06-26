<template>
  <div class="portal-bg">
    <el-button class="teacher-btn" type="primary" @click="goTeacher">教师入口</el-button>
    <div class="portal-card">
      <img src="https://img1.imgtp.com/2023/06/25/0QwQwQwQwQ.png" alt="logo" class="logo" />
      <div class="portal-title">沙盘系统登陆</div>
      <div class="portal-row">
        <span class="portal-label">企业</span>
        <div class="company-list">
          <el-button v-for="c in companies" :key="c" :type="company===c?'success':'default'" class="company-btn" @click="company=c">{{c}}</el-button>
        </div>
      </div>
      <div class="portal-row">
        <span class="portal-label">角色</span>
        <div class="role-list">
          <el-card v-for="role in roles" :key="role.key" :class="['role-card', roleSel===role.key?'active':'']" @click="roleSel=role.key">
            <div class="role-icon"><el-icon><UserFilled /></el-icon></div>
            <div class="role-cn">{{role.cn}}</div>
            <div class="role-en">{{role.en}}</div>
          </el-card>
        </div>
      </div>
      <div class="portal-row">
        <span class="portal-label">密码</span>
        <el-input v-model="password" type="password" class="pw-input" placeholder="请输入密码" />
      </div>
      <div class="btn-row">
        <el-button type="success" @click="login" class="main-btn">登录</el-button>
        <el-button @click="reset" class="main-btn">退出</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { UserFilled } from '@element-plus/icons-vue'

const router = useRouter()
const companies = ['A','B','C','D','E','F']
const company = ref('A')
const roles = [
  { key: 'ceo', cn: '执行总监', en: 'CEO' },
  { key: 'cfo', cn: '财务总监', en: 'CFO' },
  { key: 'cso', cn: '营销总监', en: 'CSO' },
  { key: 'coo', cn: '生产总监', en: 'COO' },
  { key: 'cpo', cn: '采购总监', en: 'CPO' },
]
const roleSel = ref('ceo')
const password = ref('')
const goTeacher = () => router.push('/teacher')
const login = () => {
  if (!company.value || !roleSel.value || !password.value) {
    ElMessage.error('请选择企业、角色并输入密码')
    return
  }
  router.push('/student')
}
const reset = () => {
  company.value = 'A'
  roleSel.value = 'ceo'
  password.value = ''
}
</script>

<style scoped>
.portal-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f4e0 60%, #b3e0c6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.teacher-btn {
  position: absolute;
  top: 2vw;
  right: 3vw;
  z-index: 10;
}
.portal-card {
  background: #4ec08d;
  border-radius: 18px;
  box-shadow: 0 0 32px #0002;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  min-width: 480px;
  max-width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  width: 90px;
  margin-bottom: 1.2rem;
}
.portal-title {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
  text-shadow: 0 0 8px #fff8;
}
.portal-row {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  width: 100%;
}
.portal-label {
  color: #fff;
  font-size: 1.2rem;
  width: 3.5em;
  text-align: right;
  margin-right: 1.2em;
  font-weight: bold;
}
.company-list {
  display: flex;
  gap: 1.2em;
}
.company-btn {
  width: 48px;
  height: 48px;
  font-size: 1.6rem;
  border-radius: 10px;
  font-weight: bold;
}
.role-list {
  display: flex;
  gap: 1.2em;
}
.role-card {
  width: 90px;
  height: 120px;
  background: #6ed3a6;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 2px 8px #0001;
  border: 2px solid transparent;
  transition: border 0.2s, background 0.2s;
}
.role-card.active, .role-card:hover {
  border: 2px solid #fff;
  background: #3bbd7d;
}
.role-icon {
  font-size: 2.2em;
  margin-bottom: 0.3em;
}
.role-cn {
  font-size: 1.1em;
}
.role-en {
  font-size: 0.95em;
  opacity: 0.85;
}
.pw-input {
  width: 220px;
  border-radius: 8px;
}
.btn-row {
  display: flex;
  gap: 2em;
  justify-content: center;
  margin-top: 2rem;
}
.main-btn {
  min-width: 100px;
  font-size: 1.1em;
  border-radius: 8px;
}
</style> 