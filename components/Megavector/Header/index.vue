<script setup>
</script>

<template>
  <div class="header fixed top-[0px] left-[0px] right-[0px] bg-[#fff] h-[86px]">
    <div class="wjaq-container mx-auto bg-[#fff] flex justify-between items-center">
      <div class="header-left mt-[10px]">
        <NuxtLink to="/">
          <NuxtImg src="/Images/logo.png" class="w-[125px]" />
        </NuxtLink>
      </div>
      <div class="header-right flex h-[100%] leading-[86px]">
        <div class="ml-[90px] text-[18px]">
          <NuxtLink to="/">首页</NuxtLink>
        </div>
        <div class="dropdown relative ml-[90px] text-[18px]">
          <NuxtLink to="/safetyProduct">产品</NuxtLink>
          <ul
            class="dropdown-content safetyProduct-dropdown-content absolute left-[0px] w-[340px] h-[0px] overflow-hidden bg-[#fff] left-[0px] top-[55px] px-[13px] text-[14px] rounded-[3px]">
            <li class="cursor-pointer">
              <NuxtLink to="/safetyProduct/xiaozhi">小智：智能渗透测试平台</NuxtLink>
            </li>
            <li class="my-[10px] cursor-pointer">
              <a href="https://www.yaklang.com/" target="_blank">Yakit：交互式应用安全测试平台</a>
            </li>
            <li class="cursor-pointer">
              <NuxtLink to="/safetyProduct/qjLargeModel">千机（ChatCS）：知识增强网络安全大模型应用</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown relative ml-[90px] text-[18px]">
          <NuxtLink to="/solution">解决方案</NuxtLink>
          <ul
            class="dropdown-content solution-dropdown-content absolute w-[260px] h-[0px] overflow-hidden bg-[#fff] left-[0px] top-[55px] px-[13px] text-[14px] rounded-[3px]">
            <li class="cursor-pointer mt-[15px]">
              <NuxtLink to="/solution/constructionScheme">CDSL-YAK：企业安全建设解决方案</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="ml-[90px] text-[18px]">
          <NuxtLink to="/securityService">安全服务</NuxtLink>
        </div>
        <div class="ml-[90px] text-[18px]">
          <NuxtLink to="/openSourceCommunity">开源社区</NuxtLink>
        </div>
        <div class="ml-[90px] text-[18px]">
          <NuxtLink to="/aboutUs">关于我们</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  z-index: 99999;
}

.dropdown {
  .dropdown-content {
    line-height: normal;
    z-index: 99999;
    box-shadow: 1px 1px 3px 0px rgba(164, 207, 244, 0.10), 5px 4px 6px 0px rgba(164, 207, 244, 0.09), 10px 9px 8px 0px rgba(164, 207, 244, 0.05), 19px 16px 10px 0px rgba(164, 207, 244, 0.01), 29px 25px 11px 0px rgba(164, 207, 244, 0.00);
    transition: height 0.3s;

    li {
      list-style: none;

      &:hover a {
        color: #000;
      }
    }
  }

  &:hover {
    .safetyProduct-dropdown-content {
      height: 90px;
    }

    .solution-dropdown-content {
      height: 50px;
    }
  }

}
</style>
