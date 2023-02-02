<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <img class="logo-img" src="/icons/logo-pc.svg" alt="" />
      </a>
      <nav class="nav">
        <ul class="nav-list">
          <li v-for="(tab, index) in headers" :key="index">
            <NuxtLink
              :class="{
                'route-active': activeIndex === index ? true : false
              }"
              class="nav-item"
              :to="tab.link"
              >{{ tab.title }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { HeaderBar } from '@/types/nav'
const props = defineProps({
  headers: {
    type: Array as PropType<HeaderBar[]>,
    required: true
  },
  activeIndex: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
  z-index: 999;
  transition: all 0.5s;
}

.container {
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 1440px;
}

.logo {
  display: inline-block;
  margin-left: 24px;
  margin-right: 12px;
  height: 22px;
  width: auto;
  text-decoration: none;
  cursor: pointer;
  color: #909090;

  .logo-img {
    display: block;
    width: 107px;
    height: 22px;
  }
}

.nav {
  height: 100%;
  flex: 1 0 auto;
  line-height: normal;

  .nav-list {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      list-style: none;

      .nav-item {
        box-sizing: border-box;
        display: inline-block;
        height: 60px;
        margin: 0 12px;
        line-height: 60px;
        color: #515767;
        font-size: 14px;
        text-decoration: none;

        &:hover {
          border-bottom: 2px solid #1e80ff;
        }
      }

      .route-active {
        color: #1e80ff;

        &:hover {
          color: #515767;
          border-bottom: 2px solid #1e80ff;
        }
      }
    }
  }
}
</style>
