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
const active_index = ref(0)

// 导航栏收缩
onMounted(() => {
  window.addEventListener('scroll', (e) => {
    const header: HTMLElement | null = document.querySelector('.header')
    const navList: HTMLElement | null = document.querySelector('.view-nav')
    if (!header || !navList) return
    if (window.pageYOffset > 300) {
      header.style.transform = 'translate3d(0,-100%,0)'
      navList.style.top = '0px'
    } else {
      header.style.transform = 'none'
      navList.style.top = '60px'
    }
  })
})
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
