<template>
  <!-- 小标签 -->
  <nav>
    <ul class="tag-list">
      <li
        v-for="(tagItem, tagItemIndex) in tag.tagitems"
        :key="tagItemIndex"
        class="tag-item"
        :class="{
          'active-tag': tagItemIndex === activeTag
        }"
      >
        <NuxtLink :to="`/articlelist/${tag.link}/${tagItem.title}`">{{
          tagItem.title
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { Tag } from '@/types/nav'

const props = defineProps({
  tag: {
    type: Object as PropType<Tag>,
    required: true
  },
  activeTag: {
    type: Number,
    required: true
  }
})
</script>
<style scoped lang="scss">
.active-tag {
  background-color: #007fff !important;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 5%);

  a {
    color: #fff !important;
    &:hover {
      color: #fff !important;
    }
  }
}

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
</style>
