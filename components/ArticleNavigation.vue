<template>
  <div class="sidebar-catalog-box">
    <nav class="sidebar-catalog-content">
      <div class="catalog-title">目录</div>
      <div class="catalog-body">
        <ul class="catalog-list" ref="catalogNavRef"></ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const catalogNavRef = ref<HTMLElement>()

onMounted(() => {
  const articleEle = document.querySelector('.ck-content')
  if (!articleEle) return

  const titles = articleEle.querySelectorAll('h1')

  // 存在标题
  if (titles.length > 0) {
    titles.forEach((item, i) => {
      const li = document.createElement('li')
      const div = document.createElement('div')
      const a = document.createElement('a')

      a.innerHTML = item.innerHTML
      a.className = 'catalog-aTag'
      a.href = `#heading-${i}`
      a.title = item.innerHTML

      div.appendChild(a)
      div.className = 'a-container'

      li.className = 'item'
      li.appendChild(div)

      catalogNavRef.value?.appendChild(li)

      item.setAttribute('id', `heading-${i}`)
    })
  }
})
</script>

<style lang="scss">
.catalog-aTag {
  color: inherit;
  display: inline-block;
  padding: 8px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.a-container {
  margin: 0;
  padding: 0 0 0 11px;
}

.item {
  font-size: 14px;
  font-weight: 400;
  color: #000;
  width: 100%;
  cursor: pointer;

  &:hover .catalog-aTag {
    background-color: rgb(144, 144, 144, 0.05);
  }
}

.catalog-list {
  padding: 0 0 12px;
  line-height: 22px;
}
.catalog-body {
  max-height: 612px;
  margin: 8px 4px 0 0;
  overflow: auto;
}

.catalog-title {
  font-weight: 500;
  padding: 16px 0;
  margin: 0 20px;
  color: #1d2129;
  border-bottom: 1px solid #e4e6eb;
  font-size: 16px;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.sidebar-catalog-box {
  margin-bottom: 20px;
  max-height: 675px;
}

.sidebar-catalog-content {
  height: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 0;
}
</style>
