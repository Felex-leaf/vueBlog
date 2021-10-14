<template>
  <header class="header">
    <div class="typeArea">
      <h1
        class="logo scaleAnm"
        @click="jump({path: 'home'})"
      >
        Felex
      </h1>
      <div class="linkWrap">
        <router-link
          v-for="item in links"
          :key="item.path"
          :to="item.path"
        >
          {{ item.name }}
        </router-link>
      </div>
      <theme-btn class="sun" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import ThemeBtn from '@/components/ThemeBtn/index.vue';
import { routes } from '../../router/index';
import { jump } from '../../utils';

const links = reactive<RouteRecordRaw[]>(routes).filter((item) => !item.meta || !item.meta.hidden);
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: @themeBgColor;
  color: #fff;
  .slow();
  a {
    height: 60px;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    color: hsla(0,0%,100%,.65);
    .slow();
    &:hover {
      background-color: @themeBgColorH;
      color: #fff;
    }
  }
}
.typeArea {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  margin: 0;
  height: 60px;
  line-height: 60px;
  color: #fff;
  cursor: pointer;
  &:hover {
    animation: anmScale 2s ease-out infinite;
  }
}
.linkWrap {
  height: 100%;
  width: 60%;
}
.router-link-exact-active {
  position: relative;
  color: #fff!important;
}
.router-link-exact-active::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 2px;
  width: 50px;
  background-color: #fff;
}
.sun {
  position: absolute;
  right: 20px;
  font-size: 50px;
  color: #000;
  &:deep(.moon) {
      font-size: 40px;
    }
  .center();

}
</style>
