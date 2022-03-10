<template>
  <div class="nav-header">
    <div @click="changeFold">
      <el-icon v-if="isFold"><arrow-right-bold /></el-icon>
      <el-icon v-else><arrow-left-bold /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineEmits } from 'vue';

import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';

const emits = defineEmits(['foldState']);
const isFold = ref(false);
const changeFold = () => {
  isFold.value = !isFold.value;
  emits('foldState', isFold.value);
};
</script>

<style lang="less" scoped></style>
