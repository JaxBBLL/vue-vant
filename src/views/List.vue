<template>
  <div>
    <ul>
      <li v-for="item in 6" :key="item">{{ item }}</li>
    </ul>
    <router-link to="/">
      <van-button type="primary">to home</van-button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped></style>
