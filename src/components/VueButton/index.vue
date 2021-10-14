<template>
  <div
    ref="button"
    :class="svgClass"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  computed, defineProps, onMounted, ref,
} from 'vue';

const button = ref<HTMLDivElement | null>(null);

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: '',
  },
});
const svgClass = computed(() => {
  if (props.className) {
    return `button ${props.className}`;
  }
  return 'button';
});

onMounted(() => {
  const buttonDom = button.value;
  if (buttonDom && props.theme) buttonDom.style.setProperty('--theme-color--', props.theme);
});
</script>

<style lang="less" scoped>
.button {
  --theme-color--: #fff;
  position: relative;
  display: inline-block;
  padding: 10px 40px;
  width: auto;
  color: var(--theme-color--);
  font-size: 18px;
  border: 1px solid var(--theme-color--);
  transition: border-color 0.6s ease-out 0s;
  cursor: pointer;
  &:hover {
    border: 1px solid transparent;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    transition: border-color 0s ease-out 0s, width 0.4s ease-out 0s, height 0.2s ease-out 0.4s,
        box-shadow 0.6s ease-out 0s;
  }
  &:hover::before {
    border-top: 1px solid var(--theme-color--);
    border-right: 1px solid var(--theme-color--);
    box-shadow: 1px -1px 5px -1px var(--theme-color--);
}
  &:hover::after {
    border-bottom: 1px solid var(--theme-color--);
    border-left: 1px solid var(--theme-color--);
    box-shadow: -1px 1px 5px -1px var(--theme-color--);
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 0%;
    width: 0%;
    transition: border-color 0s ease-in 0.4s, width 0.2s ease-in 0.2s, height 0.2s ease-in,
        box-shadow 0.6s ease-out 0s;
  }
  &::before {
    top: 0;
    left: 0;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
  }
}

</style>
