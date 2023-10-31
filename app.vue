<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

// 动画效果初始化
onMounted(() => {
  AOS.init({
    duration: 600, // 动画持续时间
  })
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
