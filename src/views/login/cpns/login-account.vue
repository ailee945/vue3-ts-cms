<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

import { ElForm } from 'element-plus';

import { rules } from '../config/account-config';
import localCache from '@/utils/cache';

const store = useStore();

const account = reactive({
  username: localCache.getCache('username') ?? '',
  password: localCache.getCache('password') ?? '',
});

const formRef = ref<InstanceType<typeof ElForm> | null>(null);

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 记住密码
      if (isKeepPassword) {
        // 本地缓存
        localCache.setCache('username', account.username);
        localCache.setCache('password', account.password);
      } else {
        // 删除密码
        localCache.deleteCache('username');
        localCache.deleteCache('password');
      }

      // 开始进行登录验证
      store.dispatch('loginModule/accountLoginAction', { ...account });
    }
  });
};
// eslint-disable-next-line no-undef
defineExpose({ loginAction });
</script>

<style lang="less" scoped></style>
