<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const active = ref(0);
const route = useRoute();

const show = computed(() => {
  return !route.meta.navBack;
});
</script>

<template>
  <van-tabbar v-if="show" v-model="active" route placeholder>
    <van-tabbar-item replace to="/">
      首页
      <template #icon>
        <div class="i-carbon:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/about">
      关于
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
