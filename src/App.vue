<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import TabBar from '@/components/TabBar.vue';
</script>

<template>
  <van-config-provider theme="light">
    <NavBar />
    <RouterView v-slot="{ Component }">
      <section class="app-wrapper">
        <component :is="Component" />
      </section>
    </RouterView>
    <TabBar />
  </van-config-provider>
</template>

<style scoped>
</style>
