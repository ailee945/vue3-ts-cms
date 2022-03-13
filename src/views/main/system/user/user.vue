<template>
  <div class="role">
    <VFrom v-bind="searchFormConfig"></VFrom>
  </div>
</template>

<script setup lang="ts">
import VFrom from '@/base-ui/form';
import { searchFormConfig } from './config/serach.config';
</script>

<style scoped></style>
