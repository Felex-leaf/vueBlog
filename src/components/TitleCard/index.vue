<template>
  <div
    class="warp"
    v-bind="$attrs"
  >
    <div class="title">
      <slot name="title" />
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="less">
.warp {
  height: 230px;
  transition: transform 0.5s ease-out 0s;
  background: url('./bg.png') center/cover no-repeat;
  width: 22%;
  border-radius: 5px;
  border: 0;
  box-shadow: 0px 10px 50px 10px #003d8012;
  transition: all 0.5s ease-out 0s;
  overflow: hidden;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    transform: translateY(-14px);
    box-shadow: 0px 10px 10px 10px #624be014;
  };
  .title {
    padding: 16px 0;
  }
  .body {
    flex: 1;
  }
}

</style>
