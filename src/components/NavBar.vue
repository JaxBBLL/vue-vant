<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const title = computed(() => {
  return route.meta?.title as string;
});

const isShow = computed(() => {
  return !!route.meta?.navBar;
});

const showLeftArrow = computed(() => {
  return !!route.meta?.navBack;
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
