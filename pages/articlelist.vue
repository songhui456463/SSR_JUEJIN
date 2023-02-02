<template>
  <div class="timeline-index-view">
    <!-- 大标签 -->
    <Navigation :tags="tags" :activeNav="activeNav" />
    <div class="timeline-container">
      <!-- 子标签 -->
      <TagItems :tag="tags[activeNav]" :activeTag="activeTag" />
      <div class="content-container">
        <!-- 左边 -->
        <div class="article-list-view">
          <nuxt-page />
        </div>
        <!-- 右边 -->
        <aside class="aside-right">456</aside>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { tags } from '@/mocks/top'
const route = useRoute()
const params = ref(route.params)
const activeNav = ref(0)
const activeTag = ref(0)
// 获取当前激活大标签的索引
onBeforeRouteUpdate((to) => {
  params.value = to.params
  const category = params.value.category as string
  tags.forEach((val, idx, array) => {
    activeNav.value = val.link === category ? idx : 0
  })

  if ('tagtitle' in params.value) {
    activeTag.value = tags[activeNav.value].tagitems.findIndex(
      (item) => item.title === params.value.tagtitle
    )
    console.log(activeTag.value)
  }
})
</script>
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

.content-container {
  position: relative;
}

.article-list-view {
  width: 700px;
  background-color: #fff;
}
</style>
