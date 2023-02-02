<template>
  <div class="article-detail">
    <div class="left-nav">点赞</div>
    <div class="mid-content">内容展示</div>
    <div class="right-card">右侧广告</div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.article-detail {
  display: flex;
  > div {
    background-color: #fff;
  }
  .left-nav {
    width: 60px;
  }
  .mid-content {
    flex: 3;
    margin-left: 30px;
  }
  .right-card {
    flex: 1;
    margin-left: 30px;
  }
}
</style>
