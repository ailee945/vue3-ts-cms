<template>
  <div class="login-account">
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="account.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="store.state.msg"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const account = reactive({
  username: '',
  password: '',
});
</script>

<style lang="less" scoped></style>
