<script setup>
</script>

<template>
  <Title>开源社区</Title>
  <div class="openSourceCommunity relative bg-[#F4FAFF]">
    <div
      class="openSourceCommunity-cont h-[100%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover bg-center w-[1105px] h-[814px]">
      <a href="https://chat.yaklang.com" target="_blank"><span
          class="absolute bottom-[50px] left-[50%] ml-[-81px] inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center">
          点击进入
        </span></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.openSourceCommunity {
  height: calc(100% - 105px);
  min-height: 814px;

  .openSourceCommunity-cont {
    background-image: url("/Images/openSourceCommunity-bg.jpg");
    background-size: 150%;
  }
}
</style>
