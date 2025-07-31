<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// const rootRouteList: string[] = [];

/**
 * Get page title
 * Located in src/locales/json
 */
const title = computed(() => {
  return route.meta?.title;
});

const isShow = computed(() => {
  return route.meta?.navBar;
});

const showLeftArrow = computed(() => {
  return route.meta?.navBack;
});

function onBack() {
  if (window.history.state.back) {
    history.back();
  }
  else {
    router.replace('/');
  }
}
</script>

<template>
  <VanNavBar
    v-if="isShow"
    :title="title"
    :fixed="true"
    :left-arrow="showLeftArrow"
    placeholder clickable
    @click-left="onBack"
  />
</template>
