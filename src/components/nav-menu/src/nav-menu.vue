<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="首页" class="img" />
      <span class="title">后台管理系统</span>
    </div>
    <div class="menu">
      <el-menu
        class="el-menu-vertical"
        background-color="#001529"
        text-color="#fff"
        :collapse="collapse"
        active-text-color="fff">
        <template v-for="item in menuInfo" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.id + ''">
              <template #title>{{ item.name }}</template>
              <template v-for="subitem in item.children" :key="subitem.id">
                <el-menu-item
                  :index="subitem.id + ''"
                  @click="toRouter(subitem)">
                  <span> {{ subitem.name }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.id + ''">
              <template #title>
                <span>{{ item.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// vuex中使用类型检测
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
// eslint-disable-next-line no-undef
const props = defineProps({ collapse: Boolean });
const menuInfo = computed(() => store.state.loginModule.userMenu);
const toRouter = (item: any) => {
  router.push({
    path: item.url ?? '/not-found',
  });
};
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
