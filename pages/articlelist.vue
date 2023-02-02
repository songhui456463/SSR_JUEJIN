<template>
  <div class="timeline-container">
    <!-- 左边 -->
    <div class="entry-list-left">
      <div class="timeline-index-view">
        <!-- <h2>这是首页内容</h2> -->
        <Navigation />
        <nuxt-page class="child" />
      </div>
    </div>
    <!-- 右边 -->
    <aside class="aside-right">456</aside>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.timeline-index-view {
  margin-top: 62px;
}

.aside-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
  z-index: 1;
  background-color: #fff;
}

.timeline-container {
  position: relative;
  margin-top: 0;
  background-color: #f4f5f5;
}

.entry-list-left {
  width: 700px;
  background-color: #fff;
}
</style>
