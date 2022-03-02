<template>
  <div>
    <h2>main</h2>
    <h2>{{ store.state.msg }}</h2>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

<style scoped></style>
