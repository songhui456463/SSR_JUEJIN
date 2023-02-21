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
        <aside class="aside-right">
          <div class="sider-block banner-block">
            <Advertisement />
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { tags } from '@/mocks/top'
const route = useRoute()
const params = ref(route.params)
// 一级动态参数对应激活的标签
const activeNav = ref(0)
// 二级动态参数对应激活的标签
const activeTag = ref(0)
// 获取当前激活大标签的索引
onBeforeRouteUpdate((to) => {
  params.value = to.params
  // 获取路由的一级动态参数
  const category = params.value.category as string
  tags.forEach((val, idx, array) => {
    activeNav.value = val.link === category ? idx : 0
  })

  // 获取路由的二级动态参数
  if ('tagtitle' in params.value) {
    activeTag.value = tags[activeNav.value].tagitems.findIndex(
      (item) => item.title === params.value.tagtitle
    )
  }
})
</script>
<style lang="scss" scoped>
.sider-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  color: #333;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.29;
  border-radius: 5px;
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
