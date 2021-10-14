<template>
  <h2
    class="title"
    :data-content="desc"
  >
    <span class="titleLeft">{{ titleArr[0] }}</span>
    <span class="titleRight">{{ titleArr[1] }}</span>
  </h2>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
  desc: {
    type: String,
    default: 'Desc',
  },
});

const titleArr = computed(() => props.title.split('__/__'));
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: @themeColor;
  position: relative;
  margin-bottom: 80px;
  font-size: 36px;
  height: 120px;
  &::after {
    content: attr(data-content);
    position: absolute;
    color: rgba(105, 140, 214, 0.1);
    font-size: 40px;
    top: -20px;
    text-shadow: 0px 1px 4px rgba(105, 140, 214, 0.1);
  }
}
.titleLeft {
  color: @themeColor;
}
.titleRight {
  color: rgb(71, 120, 224);
}
</style>
