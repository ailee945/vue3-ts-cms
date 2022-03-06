<template>
  <div class="login-panel">
    <h2 class="title">登录后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><user /></el-icon>账户登录
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="password-control">
      <el-checkbox>记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <el-button
      type="primary"
      class="login-btn"
      v-model="isKeepingPassword"
      @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { User, Iphone } from '@element-plus/icons-vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';
// 默认记住密码
const isKeepingPassword = ref(true);
// 处理登录操作
function handleLoginClick() {
  console.log('立即登录');
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .password-control {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
  .login-btn {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
