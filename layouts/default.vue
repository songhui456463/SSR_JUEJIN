<template>
  <div class="juejin">
    <div class="view-container">
      <div class="header-box">
        <Top :headers="headers" :active-index="active_index" />
      </div>
      <div class="main-container">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { headers } from '@/mocks/top'
import useTop from '@/hooks/useTop'
const active_index = ref(0)

useTop()
</script>

<style lang="scss" scoped>
.juejin {
  background-color: #f4f5f5;
}

.view-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  height: 2000px;
}

.header-box {
  position: relative;
  height: 60px;
}
</style>
