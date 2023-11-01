<script setup>
</script>

<template>
  <div class="wjaq-container mx-auto h-[86px] flex justify-between items-center">
    <div class="header-left mt-[10px]">
      <NuxtLink to="/">
        <img src="@/assets/Images/logo.png" class="w-[125px]" />
      </NuxtLink>
    </div>
    <div class="header-right flex">
      <div class="ml-[120px] text-[18px]" v-for="(item, index) in [
        { text: '安全产品', to: '/' },
        { text: '安全服务', to: '/securityService' },
        { text: '开源社区', to: '/openSourceCommunity' },
        { text: '关于我们', to: '/aboutUs' }]" :key="index">
        <NuxtLink :to="item.to">{{ item.text }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
