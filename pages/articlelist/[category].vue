<template>
  <div>这是{{ route.params }}</div>
</template>
<script lang="ts" setup>
const route = useRoute()
const params = ref(route.params)
onBeforeRouteUpdate((to) => {
  params.value = to.params
})
</script>
