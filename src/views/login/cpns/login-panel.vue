<template>
  <div class="login-panel">
    <h2 class="title">登录</h2>
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
  </div>
</template>

<script setup lang="ts">
import { User, Iphone } from '@element-plus/icons-vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
}
</style>
