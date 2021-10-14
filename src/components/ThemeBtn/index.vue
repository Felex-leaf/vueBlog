<template>
  <div
    v-bind="$attrs"
    @click="setIsDark"
  >
    <vue-svg
      v-if="!isDark"
      icon-class="sun"
      class-name="sun"
    />
    <vue-svg
      v-else
      icon-class="moon"
      class-name="moon swing"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isDark = computed(() => store.state.isDark);
onMounted(() => {
  document.documentElement.className = isDark.value ? 'isDark' : '';
});
const setIsDark = () => {
  store.commit('setIsDark', !isDark.value);
  document.documentElement.className = isDark.value ? 'isDark' : '';
};
</script>

<style>

</style>
