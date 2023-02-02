<template>
  <div class="timeline-container"></div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: (to) => {
    if (to.path === '/') {
      return navigateTo('/articlelist/:recommend')
    }
  }
})
</script>
<style lang="less" scoped></style>
