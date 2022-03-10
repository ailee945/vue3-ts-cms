<template>
  <div class="not-found">
    <h1>页面不存在</h1>
    <el-button type="primary" @click="backTo">返回上一页</el-button>
  </div>
</template>

<script setup lang="ts">
const backTo = () => {
  window.history.back();
};
</script>

<style scoped>
.not-found {
  text-align: center;
}
</style>
