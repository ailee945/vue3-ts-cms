<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import { rules } from '../config/account-config';

const account = reactive({
  username: '',
  password: '',
});
</script>

<style lang="less" scoped></style>
