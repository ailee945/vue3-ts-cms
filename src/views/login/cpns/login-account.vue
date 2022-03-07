<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
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
import { reactive, ref, defineExpose } from 'vue';

import { ElForm } from 'element-plus';

import { rules } from '../config/account-config';

const account = reactive({
  username: '',
  password: '',
});

const formRef = ref<InstanceType<typeof ElForm> | null>();

const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('进行账号登录');
    }
  });
};
defineExpose({ loginAction });
</script>

<style lang="less" scoped></style>
