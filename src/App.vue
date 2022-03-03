<template>
  <div id="app">
    <router-link to="/login">login</router-link> |
    <router-link to="/main">main</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less"></style>
