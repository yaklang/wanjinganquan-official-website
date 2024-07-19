<script setup>
</script>

<template>
  <a class="zxzx" href="https://feishu-4dogs.feishu.cn/share/base/form/shrcnOEt7X4HQ12OvQOmDCnKocb" target="block">
    <NuxtImg src="/Images/zxzx.png" class="w-[220px]" />
  </a>
</template>

<style lang="scss" scoped>
.zxzx {
  position: fixed;
  right: 0;
  bottom: 33%;
  z-index: 9999;
}

/* 适用于设备宽度小于1220px的样式 */
@media (max-width: 1220px) {
  .zxzx {
    bottom: 10%;
  }
}

/* 适用于设备宽度介于1221px和1920px之间的样式 */
@media (min-width: 1221px) and (max-width: 1920px) {
  .zxzx {
    bottom: 15%;
  }
}

/* 适用于设备宽度大于等于1921px的样式 */
@media (min-width: 1921px) {
  .zxzx {
    bottom: 33%;
  }
}
</style>
