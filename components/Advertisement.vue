<template>
  <div class="banner" v-show="isAdVisible">
    <!--    <NuxtLink>
      <img class="banner-image" src="/icons/advertisement.awebp" alt="" />
    </NuxtLink> -->
    <div class="close" @click="handlerShowAd"></div>
  </div>
</template>

<script setup lang="ts">
const isAdVisible = ref(true)

// 显示和隐藏广告
const handlerShowAd = () => {
  isAdVisible.value = !isAdVisible.value
}
</script>

<style scoped lang="scss">
.banner {
  height: 200px;
  position: relative;
  cursor: pointer;

  &:hover .close {
    display: block;
  }
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}

.banner-image {
  width: 100%;
  height: 100%;
}

.close {
  position: absolute;
  display: none;
  top: 5px;
  right: 5px;
  width: 18px;
  height: 18px;
  text-align: center;

  &:hover::before,
  &:hover::after {
    background-color: #1d0101;
  }
}

.close::before {
  position: absolute;
  content: '';
  left: 50%;
  top: 0;
  transform: translateX(-50%) rotate(45deg);
  width: 5px;
  height: 18px;
  background: #808080;
}

.close::after {
  content: '';
  position: absolute;
  top: 0;
  right: 50%;
  width: 5px;
  height: 18px;
  background: #808080;
  transform: translateX(50%) rotate(-45deg);
}
</style>
