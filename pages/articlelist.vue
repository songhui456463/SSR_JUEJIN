<template>
  <div class="timeline-index-view">
    <!-- 大标签 -->
    <Navigation />

    <div class="timeline-container">
      <!-- 小标签 -->
      <nav>
        <ul class="tag-list">
          <li class="tag-item">
            <NuxtLink to="/articlelist/backend">后端</NuxtLink>
          </li>
          <li class="tag-item">
            <NuxtLink to="/articlelist/backend">Java</NuxtLink>
          </li>
          <li class="tag-item">
            <NuxtLink to="/articlelist/backend">Go</NuxtLink>
          </li>
          <li class="tag-item">
            <NuxtLink to="/articlelist/backend">架构</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="content-container">
        <!-- 左边 -->
        <div class="article-list-view">
          <nuxt-page class="child" />
        </div>
        <!-- 右边 -->
        <aside class="aside-right">456</aside>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }

  .tag-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    background-color: #fff;
    border-radius: 12px;
    font-size: 14px;
    color: #8a9aa9;
    padding: 0 10px;
    margin-right: 12px;
    margin-bottom: 12px;

    a {
      text-decoration: none;
      color: #909090;

      &:hover {
        color: #007fff;
      }
    }
  }
}

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

.content-container {
  position: relative;
}

.article-list-view {
  width: 700px;
  background-color: #fff;
}
</style>
