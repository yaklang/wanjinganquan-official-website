<script setup>
</script>

<template>
  <div class="wjaq-container mx-auto h-[86px] flex justify-between items-center">
    <div class="header-left mt-[10px]">
      <NuxtLink to="/">
        <img src="@/assets/Images/logo.png" class="w-[125px]" />
      </NuxtLink>
    </div>
    <div class="header-right flex h-[100%] leading-[86px]">
      <div class="ml-[100px] text-[18px]">
        <NuxtLink to="/">首页</NuxtLink>
      </div>
      <div class="dropdown relative ml-[100px] text-[18px]">
        <NuxtLink to="/safetyProduct">安全产品</NuxtLink>
        <ul
          class="dropdown-content absolute w-[100px] h-[0px] overflow-hidden bg-[#fff] left-[-10px] top-[55px] px-[13px] text-center text-[15px] rounded-[3px]">
          <li class="cursor-pointer mt-[15px]">
            <NuxtLink to="/safetyProduct/constructionScheme">CDSL-YAK</NuxtLink>
          </li>
          <li class="my-[10px] cursor-pointer">
            <NuxtLink to="/safetyProduct/xiaozhi">小智</NuxtLink>
          </li>
          <li class="cursor-pointer">
            <a href="https://www.yaklang.com/" target="_blank">Yakit</a>
          </li>
        </ul>
      </div>
      <div class="ml-[100px] text-[18px]">
        <NuxtLink to="/securityService">安全服务</NuxtLink>
      </div>
      <div class="ml-[100px] text-[18px]">
        <NuxtLink to="/openSourceCommunity">开源社区</NuxtLink>
      </div>
      <div class="ml-[100px] text-[18px]">
        <NuxtLink to="/aboutUs">关于我们</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  .dropdown-content {
    line-height: normal;
    z-index: 99999;
    box-shadow: 1px 1px 3px 0px rgba(164, 207, 244, 0.10), 5px 4px 6px 0px rgba(164, 207, 244, 0.09), 10px 9px 8px 0px rgba(164, 207, 244, 0.05), 19px 16px 10px 0px rgba(164, 207, 244, 0.01), 29px 25px 11px 0px rgba(164, 207, 244, 0.00);
    transition: height 0.3s;

    li {
      list-style: none;

      &:hover a {
        font-weight: 600;
      }
    }
  }

  &:hover {
    .dropdown-content {
      height: 110px;
    }
  }

}
</style>
