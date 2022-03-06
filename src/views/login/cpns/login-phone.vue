<template>
  <div class="login-account">
    <el-form :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import { rules } from '../config/phone-config';

const phone = reactive({
  number: '',
  code: '',
});
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .code-btn {
    margin-left: 8px;
  }
}
</style>
