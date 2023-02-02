<template>
  <nav class="view-nav">
    <div class="nav-list left">
      <a
        v-for="(tag, tagindex) in tags"
        :key="tagindex"
        :to="tag.link"
        class="nav-item"
        @mouseenter.stop="($event) => showCategoryPopover($event)"
        @mouseleave.stop="($event) => hideCategoryPopover($event)"
      >
        <div class="category-popover-box">
          <div class="category-popover">
            <NuxtLink
              v-for="(tagitem, tagitemindex) in tag.tagitems"
              :key="tagitemindex"
              :to="`${tag.link}/${tagitem.title}`"
              >{{ tagitem.title }}</NuxtLink
            >
          </div>
          <!-- 第一个tagitem的title -->
          <span>{{ tag.tagitems[0].title }}</span>
        </div>
      </a>
    </div>
  </nav>
</template>
<script setup lang="ts">
export interface TagItem {
  title: string
}
export interface Tag {
  tagitems: TagItem[]
  link: string
}

const tags: Tag[] = [
  {
    tagitems: [
      {
        title: '后端'
      },
      {
        title: '掘金日新计划'
      },
      {
        title: 'Java'
      },
      {
        title: 'Go'
      },
      {
        title: '掘金金石计划'
      },
      {
        title: '架构'
      }
    ],
    link: '/articlelist/backend'
  },
  {
    tagitems: [
      {
        title: '前端'
      },
      {
        title: '掘金日新计划'
      },
      {
        title: 'Java'
      },
      {
        title: 'Go'
      },
      {
        title: '掘金金石计划'
      },
      {
        title: '架构'
      }
    ],
    link: '/articlelist/front'
  }
]

// 显示弹框
const showCategoryPopover = (e: MouseEvent) => {
  // 获取操作元素
  const target: HTMLElement | null = e.target as HTMLElement
  if (!target) return
  const categoryPopover: HTMLElement = target.querySelector(
    '.category-popover'
  ) as HTMLElement
  categoryPopover.style.display = 'block'
}

// 隐藏弹框
const hideCategoryPopover = (e: MouseEvent) => {
  // 获取操作元素
  const target: HTMLElement | null = e.target as HTMLElement
  if (!target) return
  const categoryPopover: HTMLElement = target.querySelector(
    '.category-popover'
  ) as HTMLElement
  categoryPopover.style.display = 'none'
}
</script>
<style lang="scss" scoped>
.category-popover {
  display: none;
  position: absolute;
  left: 0;
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
