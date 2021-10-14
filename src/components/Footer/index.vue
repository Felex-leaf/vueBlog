<template>
  <div
    class="footer"
    v-bind="$attrs"
  >
    <div class="typeArea">
      <el-row>
        <el-col
          :span="12"
          class="footerLeft"
        >
          Designed by Jerry
        </el-col>
        <el-col
          :span="12"
          class="footerRight"
        >
          <div>
            <div class="footerTitle">
              项目依赖
            </div>
            <a
              class="footerDec"
              href="https://v3.cn.vuejs.org/"
              target="_blank"
              rel="noreferrer"
            >
              vue3
            </a>
            <a
              class="footerDec"
              href="https://www.tslang.cn/"
              target="_blank"
              rel="noreferrer"
            >
              typescript
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">
.footer {
    color: #fff;
    margin-top: 40px !important;
    background-color: @themeBgColor;
    transition: background-color 0.3s linear;
    padding: 40px 0;
}

.footerLeft {
    display: flex;
    align-items: center;
}

.footerRight {
    display: flex;
    justify-content: flex-end;
    padding-right: 100px;
}

.footerTitle {
    margin-bottom: 10px;
    font-style: 24px;
}

.footerDec {
    color: #eee;
    display: block;
}

</style>
