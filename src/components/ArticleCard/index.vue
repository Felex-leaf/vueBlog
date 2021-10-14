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
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="less">
.warp {
  transition: transform 0.5s ease-out 0s;
  background-color: rgba(238, 238, 238, 0.5);
  width: 22%;
  border-radius: 5px;
  transition: all 0.5s ease-out 0s;
  overflow: hidden;
  padding: 0 16px;
  width: 100%;
  cursor: pointer;
  color: @themeColorA;
  box-sizing: border-box;
  &:hover {
    background-color: rgba(250, 250, 250, 0.5);
    box-shadow: 0px 5px 10px 10px #624be014;
  };
  .title {
    padding: 16px 0;
    color: @themeColor;
  }
  .body {
    flex: 1;
    padding-bottom: 16px;
  }
  .footer {
    padding-bottom: 16px;
  }
}

</style>
