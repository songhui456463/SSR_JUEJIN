<template>
  <nav class="view-nav">
    <div class="nav-list left">
      <NuxtLink
        v-for="(tag, tagindex) in tags"
        :key="tagindex"
        :to="`/articlelist/${tag.link}`"
        class="nav-item"
        :class="{
          'activate-navitem': activeNav === tagindex
        }"
        @mouseenter.stop="($event) => showCategoryPopover($event, tagindex)"
        @mouseleave.stop="($event) => hideCategoryPopover($event, tagindex)"
      >
        <div class="category-popover-box">
          <div class="category-popover" v-if="showPopoverEle[tagindex]">
            <NuxtLink
              v-for="(tagitem, tagitemindex) in tag.tagitems"
              :key="tagitemindex"
              @click="($event) => hideCategoryPopover($event, tagindex)"
              :to="`/articlelist/${tag.link}/${tagitem.title}`"
              >{{ tagitem.title }}</NuxtLink
            >
          </div>
          <!-- 第一个tagitem的title -->
          <span>{{ tag.tagitems[0].title }}</span>
        </div>
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { Tag } from '@/types/nav'
const props = defineProps({
  tags: {
    type: Array as PropType<Tag[]>,
    required: true
  },
  activeNav: {
    type: Number,
    required: true
  }
})

// 每个大标签的弹出框对应一个响应式数据去显示和隐藏
const showPopoverEle = ref(new Array(props.tags.length).fill(false))

/**
 * 显示弹框
 * @param e
 * @param tagindex 激活tag的索引
 */
const showCategoryPopover = (e: MouseEvent, tagindex: number) => {
  showPopoverEle.value[tagindex] = true
}

// 隐藏弹框
const hideCategoryPopover = (e: MouseEvent, tagindex: number) => {
  showPopoverEle.value[tagindex] = false
}
</script>
<style lang="scss" scoped>
.activate-navitem {
  color: #007fff !important;
}

.category-popover {
  position: absolute;
  left: -12px;
  width: 250px;
  top: 46px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

  a {
    float: left;
    text-decoration: none;
    margin: 4px 10px;
    color: #71777c;
    font-size: 12px;
    border-radius: 5px;
    padding: 4px 4px;
    background-color: #f2f2f2;

    &:hover {
      color: #007fff;
    }
  }
}

.view-nav {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 46px;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  background-color: #fff;
  transition: all 0.5s;
  transform: translateZ(0);

  .nav-list {
    position: relative;
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;

    .nav-item {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      text-decoration: none;
      color: #71777c;
      font-size: 14px;
      margin: 0 12px;
      flex-shrink: 0;

      &:hover {
        color: #007fff;
      }
    }
  }
}
</style>
