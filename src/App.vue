<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from '@/components/Header/index.vue';

</script>

<template>
  <div class="contanier">
    <Header class="header" />
    <main>
      <router-view />
    </main>
  </div>
</template>
<style scoped lang="less">
.contanier {
  padding-top: 60px;
  background-color: @themeBgColorW;
  .slow()
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>
