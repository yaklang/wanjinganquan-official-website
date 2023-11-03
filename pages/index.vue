<script setup>
import wanjingBanner from "@/assets/Images/wanjing-banner.png"
import solutionBanner from "@/assets/Images/solution-banner.png"
import yakitBanner from "@/assets/Images/yakit-banner.png"
import xiaozhiBanner from "@/assets/Images/xiaozhi-banner.png"
import CSTC from "@/assets/Images/CSTC.png"
import zgxxaqcpzx from "@/assets/Images/zgxxaqcpzx.png"
import CCID from "@/assets/Images/CCID.png"
import zggcwlyjy from "@/assets/Images/zggcwlyjy.png"
import zgmyhkj from "@/assets/Images/zgmyhkj.png"
import zgjsyh from "@/assets/Images/zgjsyh.png"
import zgyh from "@/assets/Images/zgyh.png"
import jx from "@/assets/Images/jx.png"
import xyyh from "@/assets/Images/xyyh.png"
import zgpa from "@/assets/Images/zgpa.png"
import taikang from "@/assets/Images/taikang.png"
import zgjrrzzx from "@/assets/Images/zgjrrzzx.png"
import zghnjtyxgs from "@/assets/Images/zghnjtyxgs.png"
import gjdw from "@/assets/Images/gjdw.png"
import zgzmnyjtyxgs from "@/assets/Images/zgzmnyjtyxgs.png"
import zgsy from "@/assets/Images/zgsy.png"
import zgnfdw from "@/assets/Images/zgnfdw.png"
import zglt from "@/assets/Images/zglt.png"
import zgyd from "@/assets/Images/zgyd.png"
import zgdx from "@/assets/Images/zgdx.png"
import zggsyh from "@/assets/Images/zggsyh.png"
import jtyh from "@/assets/Images/jtyh.png"
import zsyh from "@/assets/Images/zsyh.png"
import zggdyh from "@/assets/Images/zggdyh.png"
import zgnyyh from "@/assets/Images/zgnyyh.png"
import zgwk from "@/assets/Images/zgwk.png"
import zgrmyh from "@/assets/Images/zgrmyh.png"
import zgmsyh from "@/assets/Images/zgmsyh.png"
import zgyhzj from "@/assets/Images/zgyhzj.png"
import hxyh from "@/assets/Images/hxyh.png"
import zh from "@/assets/Images/zh.png"
import zgh from "@/assets/Images/zgh.png"
import zgsh from "@/assets/Images/zgsh.png"
import chinawk from "@/assets/Images/chinawk.png"
import lnjt from "@/assets/Images/lnjt.png"
import dzkjdx from "@/assets/Images/dzkjdx.png"
import zzdx from "@/assets/Images/zzdx.png"
import bjqhcgxy from "@/assets/Images/bjqhcgxy.png"
import bjdt from "@/assets/Images/bjdt.png"
import qnlx from "@/assets/Images/qnlx.png"
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination])

// 头部轮播数据
const bannerTopList = [
  { type: "banner_2", title: "重新定义", name: "安全能力融合", info: "立足于攻防一线，为企业带来全新的安全体系建设思路。", bgUrl: wanjingBanner, titleWidth: "w-[512px]" },
  { type: "banner_1", to: "/safetyProduct/constructionScheme", name: "CDSL-YAK", title: "行业解决方案", info: "以YAK语言为核心，聚焦网络安全底层，致力于安全融合，助力企业网络安全体系建设。", bgUrl: solutionBanner, titleWidth: "w-[512px]" },
  { type: "banner_1", to: "/safetyProduct/xiaozhi", name: "小智", title: "新一代自动化渗透测试平台", info: "国内率先实现“AI+网络安全检测”的智能渗透测试平台，能够实现自动化完成从信息收集、漏洞验证、漏洞利用、输出报告的渗透测试全过程。", bgUrl: xiaozhiBanner, titleWidth: "w-[640px]" },
  { type: "banner_1", link: "https://www.yaklang.com/", name: "Yakit", title: "交互式应用安全测试平台", info: "YAK编写的gRPC服务器，并基于服务器构建客户端，通过GUI操控引擎能力，集成Yaklang的所有能力。", bgUrl: yakitBanner, titleWidth: "w-[550px]" },
]

// 底部轮播数据
const bannerBottomList = [
  { imgUrl: CSTC },
  { imgUrl: zgxxaqcpzx },
  { imgUrl: CCID },
  { imgUrl: zggcwlyjy },
  { imgUrl: zgmyhkj },
  { imgUrl: zgjsyh },
  { imgUrl: zgyh },
  { imgUrl: jx },
  { imgUrl: xyyh },
  { imgUrl: zgpa },
  { imgUrl: taikang },
  { imgUrl: zgjrrzzx },
  { imgUrl: zghnjtyxgs },
  { imgUrl: gjdw },
  { imgUrl: zgzmnyjtyxgs },
  { imgUrl: zgsy },
  { imgUrl: zgnfdw },
  { imgUrl: zglt },
  { imgUrl: zgyd },
  { imgUrl: zgdx },
  { imgUrl: zggsyh },
  { imgUrl: jtyh },
  { imgUrl: zsyh },
  { imgUrl: zggdyh },
  { imgUrl: zgnyyh },
  { imgUrl: zgwk },
  { imgUrl: zgrmyh },
  { imgUrl: zgmsyh },
  { imgUrl: zgyhzj },
  { imgUrl: hxyh },
  { imgUrl: zh },
  { imgUrl: zgh },
  { imgUrl: zgsh },
  { imgUrl: chinawk },
  { imgUrl: lnjt },
  { imgUrl: dzkjdx },
  { imgUrl: zzdx },
  { imgUrl: bjqhcgxy },
  { imgUrl: bjdt },
  { imgUrl: qnlx }
]
const newBannerBottomList = computed(() => {
  let pages = []
  bannerBottomList.forEach((item, index) => {
    let idx = Math.floor(index / 8)
    if (!pages[idx]) pages[idx] = []
    pages[idx].push(item)
  })
  return pages
})

</script>

<template>
  <Title>首页</Title>
  <!-- 头部轮播 -->
  <div class="h-[560px] bg-[#F4FAFF]">
    <swiper class="h-[100%]" :speed="1500" loop :autoplay="{ disableOnInteraction: false }"
      :pagination="{ el: '.swiper-pagination', clickable: true }">
      <swiper-slide v-for="(item, index) in bannerTopList" :key="index">
        <div v-if="item.type === 'banner_1'" class="h-[100%] bg-no-repeat bg-positon-center"
          :style="{ backgroundImage: `url(${item.bgUrl})`, backgroundPosition: '45% center', backgroundSize: 'contain' }">
          <div class="wjaq-container h-[100%] mx-auto flex items-center">
            <div class='text-center'>
              <div class="text-left text-[45px] font-bold-600">
                <span class="color-[#0070FF]">{{ item.name }}</span>{{ item.title }}
              </div>
              <div :class="['text-left', 'text-[18px]', 'mt-[10px]', 'leading-[30px]', item.titleWidth]">{{ item.info }}
              </div>
              <NuxtLink v-if=item.to :to="item.to"><span
                  class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                  了解详情
                </span></NuxtLink>
              <a v-else :href="item.link" target="_blank"><span
                  class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                  了解详情
                </span></a>
            </div>
          </div>
        </div>
        <div v-if="item.type === 'banner_2'" class="h-[100%] bg-no-repeat overflow-hidden"
          :style="{ backgroundImage: `url(${item.bgUrl})`, backgroundPosition: 'bottom', backgroundSize: 'contain' }">
          <div class="wjaq-container h-[100%] mx-auto flex mt-[100px]">
            <div>
              <div class="text-left text-[53px] font-bold-600">
                {{ item.title }}<span class="color-[#0070FF]">{{ item.name }}</span>
              </div>
              <div class="text-[24px] leading-[30px]">{{ item.info }}</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>

  <!-- 万径树 -->
  <div class="h-[1400px] tree-wrap bg-center bg-contain bg-no-repeat">
    <div class="wjaq-container relative mx-auto h-[100%]">
      <!-- 小智-智能渗透测试机器人 -->
      <div data-aos="fade-down" class="xiaozhi-tree-item absolute left-[49%] top-[20%]">
        <div
          class="absolute top-[-35px] left-[-225px] text-center bg-[#fff] px-[25px] py-[15px] border-[2px] border-solid rounded-[5px]">
          <div class="color-[#0070FF] text-[16px] mb-[5px] font-bold-600">小智-智能渗透测试机器人</div>
          <div class="text-[12px] font-bold-600">新一代自动化渗透测试平台</div>
        </div>
        <svg class="w-[111px] h-[94px]" viewBox="0 0 111 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="89.78" cy="73.13" r="20.5" fill="url(#paint0_radial_447_1624)" fill-opacity="0.3" />
          <circle cx="89.78" cy="73.13" r="13.6667" fill="url(#paint1_radial_447_1624)" fill-opacity="0.27" />
          <circle cx="89.78" cy="73.13" r="9.87037" fill="url(#paint2_radial_447_1624)" fill-opacity="0.48" />
          <circle cx="89.78" cy="73.13" r="4.55556" fill="#016EF9" />
          <path d="M1 1H17.05L89.1201 73.07" stroke="black" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M89.79 75.65C91.1763 75.65 92.3 74.5262 92.3 73.14C92.3 71.7538 91.1763 70.63 89.79 70.63C88.4038 70.63 87.28 71.7538 87.28 73.14C87.28 74.5262 88.4038 75.65 89.79 75.65Z"
            fill="black" />
          <defs>
            <radialGradient id="paint0_radial_447_1624" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(89.78 73.13) rotate(90) scale(20.5)">
              <stop offset="0.869792" stop-color="#5199FF" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_447_1624" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(89.78 73.13) rotate(90) scale(13.6667)">
              <stop offset="0.869792" stop-color="#217CFD" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_447_1624" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(89.78 73.13) rotate(90) scale(9.87037)">
              <stop offset="0.807292" stop-color="#0070FF" />
              <stop offset="1" stop-color="#4999FF" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <!-- Yakit -->
      <div data-aos="fade-up" class="absolute top-[45%] left-[19%]">
        <div
          class="absolute top-[-45px] left-[-225px] bg-[#fff] px-[25px] py-[15px] border-[2px] border-solid rounded-[5px] max-w-[235px]">
          <div class="color-[#0070FF] text-[16px] text-center mb-[5px] font-bold-600">Yakit</div>
          <div class="text-[12px] font-bold-600">国产化交互式应用安全测试平台/集成化安全能力平台</div>
        </div>
        <svg class="w-[111px] h-[94px]" viewBox="0 0 111 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="89.78" cy="73.13" r="20.5" fill="url(#paint0_radial_447_1624)" fill-opacity="0.3" />
          <circle cx="89.78" cy="73.13" r="13.6667" fill="url(#paint1_radial_447_1624)" fill-opacity="0.27" />
          <circle cx="89.78" cy="73.13" r="9.87037" fill="url(#paint2_radial_447_1624)" fill-opacity="0.48" />
          <circle cx="89.78" cy="73.13" r="4.55556" fill="#016EF9" />
          <path d="M1 1H17.05L89.1201 73.07" stroke="black" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M89.79 75.65C91.1763 75.65 92.3 74.5262 92.3 73.14C92.3 71.7538 91.1763 70.63 89.79 70.63C88.4038 70.63 87.28 71.7538 87.28 73.14C87.28 74.5262 88.4038 75.65 89.79 75.65Z"
            fill="black" />
          <defs>
            <radialGradient id="paint0_radial_447_1624" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(89.78 73.13) rotate(90) scale(20.5)">
              <stop offset="0.869792" stop-color="#5199FF" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_447_1624" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(89.78 73.13) rotate(90) scale(13.6667)">
              <stop offset="0.869792" stop-color="#217CFD" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_447_1624" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(89.78 73.13) rotate(90) scale(9.87037)">
              <stop offset="0.807292" stop-color="#0070FF" />
              <stop offset="1" stop-color="#4999FF" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <!-- CDSL-YAK企业安全 -->
      <div data-aos="fade-up" class="absolute right-[20%] top-[55%]">
        <div
          class="absolute top-[-60px] right-[-268px] bg-[#fff] px-[25px] py-[15px] border-[2px] border-solid rounded-[5px] max-w-[280px]">
          <div class="color-[#0070FF] text-[16px] text-center font-bold-600 w-[146px] mx-auto mb-[5px]">CDSL-YAK企业安全建设解决方案
          </div>
          <div class="text-[12px] font-bold-600">基于网络安全领域编程语言CDSL-YAK，为客户带来全新的安全体系建设思路。</div>
        </div>
        <svg class="w-[111px] h-[94px]" viewBox="0 0 111 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20.5" cy="20.5" r="20.5" transform="matrix(-1 0 0 1 41 52.63)" fill="url(#paint0_radial_447_1616)"
            fill-opacity="0.3" />
          <circle cx="13.6667" cy="13.6667" r="13.6667" transform="matrix(-1 0 0 1 34.1666 59.4634)"
            fill="url(#paint1_radial_447_1616)" fill-opacity="0.27" />
          <circle cx="9.87037" cy="9.87037" r="9.87037" transform="matrix(-1 0 0 1 30.3704 63.2596)"
            fill="url(#paint2_radial_447_1616)" fill-opacity="0.48" />
          <circle cx="4.55556" cy="4.55556" r="4.55556" transform="matrix(-1 0 0 1 25.0555 68.5745)" fill="#016EF9" />
          <path d="M109.28 1H93.23L21.16 73.07" stroke="black" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M20.49 75.65C19.1038 75.65 17.98 74.5262 17.98 73.14C17.98 71.7538 19.1038 70.63 20.49 70.63C21.8762 70.63 23 71.7538 23 73.14C23 74.5262 21.8762 75.65 20.49 75.65Z"
            fill="black" />
          <defs>
            <radialGradient id="paint0_radial_447_1616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(20.5 20.5) rotate(90) scale(20.5)">
              <stop offset="0.869792" stop-color="#5199FF" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial_447_1616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(13.6667 13.6667) rotate(90) scale(13.6667)">
              <stop offset="0.869792" stop-color="#217CFD" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial_447_1616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(9.87037 9.87037) rotate(90) scale(9.87037)">
              <stop offset="0.807292" stop-color="#0070FF" />
              <stop offset="1" stop-color="#4999FF" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <!-- 安全培训服务 -->
      <div data-aos="zoom-in"
        class="absolute right-[50%] top-[35%] py-[10px] px-[18px] color-[#fff] flex justify-between items-center bg-[#006FFF] rounded-[5px]">
        <div class="w-[36px] h-[23px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="23" viewBox="0 0 36 23" fill="none">
            <path
              d="M35.21 7.38999L27.05 10.44V8.37998C27.05 7.44998 23.51 6.69999 19.15 6.69999C14.79 6.69999 11.25 7.44998 11.25 8.37998V10.75L2.34996 7.42997L2.27001 7.39997C2.17001 7.35997 2.17001 7.21997 2.27001 7.17997L18.62 1.06999C18.7 1.03999 18.77 1.03999 18.85 1.06999L35.2 7.17997C35.32 7.19997 35.32 7.34999 35.21 7.38999Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M19.15 21.69C23.5131 21.69 27.05 20.9378 27.05 20.01C27.05 19.0821 23.5131 18.33 19.15 18.33C14.787 18.33 11.25 19.0821 11.25 20.01C11.25 20.9378 14.787 21.69 19.15 21.69Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M27.06 8.36993V17.7C27.06 16.77 23.52 16.0199 19.16 16.0199C14.8 16.0199 11.26 16.77 11.26 17.7V8.36993C11.26 7.43993 14.8 6.68994 19.16 6.68994C23.52 6.68994 27.06 7.43993 27.06 8.36993Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M27.06 17.7V20C27.06 19.07 23.52 18.32 19.16 18.32C14.8 18.32 11.26 19.07 11.26 20V17.7C11.26 16.77 14.8 16.02 19.16 16.02C23.52 16.02 27.06 16.78 27.06 17.7Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M2.34998 11.6799C1.64998 11.6799 1.08002 12.25 1.08002 12.95V18.9599C1.08002 19.1099 1.64998 19.2299 2.34998 19.2299C3.04998 19.2299 3.62 19.1099 3.62 18.9599V12.95C3.62 12.25 3.04998 11.6799 2.34998 11.6799Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M2.34998 11.33V7.27997" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="ml-[6px]">
          <div class="font-bold-600 text-[14px] mb-[2px]">安全培训服务</div>
          <div class="text-[12px] w-[185px]">行业定制化培训、产品培训、管理培训、技术培训。</div>
        </div>
      </div>
      <!-- 代码审计 -->
      <div data-aos="zoom-in"
        class="absolute left-[49%] top-[45%] py-[10px] px-[18px] color-[#fff] flex justify-between items-center bg-[#006FFF] rounded-[5px]">
        <div class="w-[31px] h-[25px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" viewBox="0 0 31 25" fill="none">
            <path
              d="M4.09998 1.25C5.62998 1.25 6.87 2.48999 6.87 4.01999H1.33002C1.33002 2.48999 2.56998 1.25 4.09998 1.25ZM4.09998 1.25H20.84"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M23.58 21.38V19.85" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M9.60999 24.15C9.53999 24.15 9.46997 24.15 9.40997 24.14C7.96997 24.03 6.84998 22.84 6.84998 21.38L6.87 4.01999C6.87 2.47999 5.62998 1.25 4.09998 1.25H20.84C22.37 1.25 23.61 2.48999 23.61 4.01999L23.6 10.04"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M9.20001 24.15C10.73 24.15 11.97 22.91 11.97 21.38H28.64C28.64 22.91 27.4 24.15 25.87 24.15H9.20001Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M9.64001 6.34998H20.83" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M9.64001 9.92004H20.83" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M9.64001 13.48H17.09" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M9.64001 16.96H17.09" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M30.15 15.3901L29.13 15.07C29.14 14.77 29.11 14.48 29.05 14.18L30 13.68C30.11 13.62 30.15 13.49 30.09 13.37L29.29 11.83C29.23 11.72 29.09 11.6801 28.98 11.7301L28.03 12.2301C27.83 12.0101 27.59 11.82 27.35 11.66L27.67 10.6401C27.71 10.5201 27.64 10.39 27.52 10.35L25.86 9.84004C25.74 9.80004 25.61 9.87003 25.57 9.99003L25.25 11.01C24.95 11.01 24.66 11.03 24.36 11.09L23.86 10.1401C23.81 10.0401 23.7 10 23.6 10.03C23.59 10.03 23.57 10.03 23.55 10.04L22.01 10.85C21.9 10.91 21.86 11.04 21.91 11.16L22.41 12.11C22.19 12.32 22 12.55 21.84 12.79L20.82 12.47C20.7 12.43 20.57 12.5 20.53 12.62L20.02 14.28C19.98 14.4 20.05 14.53 20.17 14.57L21.19 14.8901C21.19 15.1901 21.21 15.48 21.27 15.78L20.32 16.28C20.21 16.34 20.17 16.48 20.23 16.59L21.04 18.13C21.1 18.24 21.23 18.2901 21.35 18.2301L22.3 17.7301C22.51 17.9501 22.74 18.14 22.98 18.3L22.66 19.32C22.62 19.44 22.69 19.57 22.81 19.61L23.58 19.85L24.47 20.13C24.59 20.17 24.72 20.1001 24.76 19.9801L25.08 18.96C25.38 18.97 25.67 18.94 25.97 18.88L26.47 19.83C26.53 19.94 26.67 19.98 26.78 19.93L28.32 19.12C28.43 19.06 28.48 18.92 28.42 18.81L27.92 17.86C28.14 17.65 28.33 17.4201 28.49 17.1701L29.51 17.49C29.63 17.53 29.76 17.46 29.8 17.34L30.32 15.68C30.34 15.56 30.27 15.4301 30.15 15.3901ZM25.99 16.57C25.12 17.02 24.05 16.7 23.59 15.83C23.59 15.83 23.59 15.83 23.59 15.82C23.3 15.28 23.33 14.65 23.6 14.15C23.76 13.84 24.01 13.58 24.34 13.41C25.21 12.95 26.29 13.28 26.75 14.16C27.19 15.03 26.86 16.11 25.99 16.57Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M25.99 16.57C25.12 17.02 24.0501 16.7 23.5901 15.83C23.5901 15.83 23.5901 15.83 23.5901 15.82C23.3001 15.28 23.33 14.65 23.6 14.15C23.76 13.84 24.0101 13.58 24.3401 13.41C25.2101 12.95 26.29 13.28 26.75 14.16C27.19 15.03 26.86 16.11 25.99 16.57Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="ml-[6px]">
          <div class="font-bold-600 text-[14px] mb-[2px] font-bold-700">代码审计</div>
          <div class="text-[12px] w-[200px]">分析系统的完整源代码，挖掘代码在架构和编码上的安全缺陷，解决系统安全隐患。</div>
        </div>
      </div>
      <!-- 渗透测试 -->
      <div data-aos="zoom-in"
        class="absolute right-[50%] top-[55%] py-[10px] px-[18px] color-[#fff] flex justify-between items-center bg-[#006FFF] rounded-[5px]">
        <div class="w-[37px] h-[25px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="25" viewBox="0 0 37 25" fill="none">
            <path
              d="M25.02 0.969971V3.26996C23.28 4.00996 22.04 5.72996 22.01 7.73996C22.04 9.74996 23.27 11.46 25.02 12.21V12.68C23.43 12.87 21.99 13.53 20.83 14.52C19.75 15.44 18.91 16.63 18.43 17.99H1.22998C1.01998 17.99 0.849976 17.8199 0.849976 17.5999V0.969971C0.849976 0.759971 1.01998 0.579956 1.22998 0.579956H24.65C24.85 0.579956 25.02 0.749971 25.02 0.969971Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M25.02 0.970024V3.27001C23.28 4.01001 22.04 5.73001 22.01 7.74001C22.04 9.75001 23.27 11.46 25.02 12.21V12.68C23.43 12.87 21.99 13.53 20.83 14.52H0.849976V0.980034C0.849976 0.770034 1.01998 0.590019 1.22998 0.590019H24.65C24.85 0.580019 25.02 0.750024 25.02 0.970024Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M15.34 17.99H10.53V22.09H15.34V17.99Z" stroke="#FBFBFB" stroke-miterlimit="10"
              stroke-linejoin="round" />
            <path d="M8.10999 22.09H17.87" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M31.79 8.59003C31.5 10.41 30.24 11.9 28.53 12.48C28.38 12.53 28.23 12.58 28.06 12.61H28.05C28 12.6 27.93 12.6 27.88 12.6H26C25.95 12.6 25.89 12.6 25.83 12.61H25.82C25.66 12.57 25.51 12.53 25.35 12.48C25.23 12.44 25.11 12.4 25.01 12.35C23.24 11.6 22 9.83999 22 7.79999V7.71997C22.03 9.72997 23.26 11.44 25.01 12.19C25.27 12.3 25.54 12.39 25.83 12.45C26.19 12.53 26.56 12.58 26.94 12.58C27.32 12.58 27.69 12.54 28.05 12.45C28.3 12.39 28.55 12.32 28.78 12.22C28.83 12.2 28.9 12.17 28.94 12.15C29.29 12 29.62 11.81 29.91 11.58C30.01 11.51 30.1 11.43 30.19 11.35C30.25 11.3 30.31 11.25 30.37 11.19C30.38 11.18 30.39 11.17 30.4 11.15C30.44 11.12 30.46 11.1 30.49 11.07C30.84 10.71 31.13 10.3 31.35 9.84998C31.38 9.79998 31.4 9.73999 31.43 9.67999C31.44 9.65999 31.45 9.64 31.46 9.62C31.5 9.54 31.53 9.45 31.56 9.37C31.67 9.12 31.74 8.86003 31.79 8.59003Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M31.81 8.5C31.8 8.53 31.8 8.56002 31.79 8.58002C31.8 8.52002 31.82 8.46002 31.83 8.40002C31.82 8.43002 31.81 8.46 31.81 8.5Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M31.88 7.72998V7.81C31.88 7.83 31.88 7.85 31.87 7.88C31.88 7.83 31.88 7.77998 31.88 7.72998Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M35.93 24.33H17.97V24.4899H35.93V24.33Z" stroke="#FBFBFB" stroke-miterlimit="10"
              stroke-linejoin="round" />
            <path
              d="M31.88 7.72998C31.88 7.77998 31.88 7.83 31.87 7.88C31.87 7.9 31.87 7.93002 31.86 7.96002C31.86 7.98002 31.85 8.00003 31.85 8.03003C31.85 8.09003 31.84 8.15997 31.84 8.21997C31.83 8.31997 31.82 8.41001 31.8 8.51001L31.78 8.59998C31.73 8.86998 31.66 9.13 31.56 9.38C31.53 9.46 31.49 9.55 31.46 9.63C31.45 9.65 31.44 9.67 31.43 9.69C31.41 9.75 31.38 9.79999 31.35 9.85999C31.13 10.31 30.84 10.71 30.49 11.08C30.46 11.11 30.44 11.13 30.4 11.16C30.39 11.18 30.38 11.18 30.37 11.2C30.32 11.25 30.26 11.31 30.19 11.36C30.1 11.44 30.01 11.52 29.91 11.59C29.61 11.82 29.29 12.01 28.94 12.16C28.89 12.18 28.83 12.21 28.78 12.23C28.54 12.33 28.3 12.4 28.05 12.46C27.69 12.54 27.32 12.59 26.94 12.59C26.56 12.59 26.19 12.55 25.83 12.46C25.55 12.4 25.27 12.31 25.01 12.2C23.27 11.46 22.03 9.73998 22 7.72998C22.03 5.71998 23.26 4.01001 25.01 3.26001C25.6 3.01001 26.25 2.87 26.93 2.87C29.65 2.88 31.84 5.03998 31.88 7.72998Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M31.88 7.64999V7.72995C31.84 5.03995 29.65 2.87997 26.95 2.87997C26.27 2.87997 25.62 3.01996 25.03 3.26996C23.29 4.00996 22.05 5.72996 22.02 7.73996V7.65994C22.02 5.61994 23.26 3.86995 25.03 3.10995C25.62 2.85995 26.27 2.71997 26.95 2.71997C29.67 2.71997 31.88 4.92999 31.88 7.64999Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M35.93 20.65V24.32H17.97V20.65C17.97 19.71 18.13 18.82 18.43 17.98C18.91 16.62 19.75 15.43 20.83 14.51C21.99 13.52 23.44 12.86 25.02 12.67C25.29 12.64 25.56 12.62 25.83 12.62H25.84C25.89 12.61 25.95 12.61 26.01 12.61H27.89C27.94 12.61 28.01 12.61 28.06 12.62H28.07C32.41 12.71 35.93 16.29 35.93 20.65Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
            <path
              d="M35.93 20.4999V20.6599C35.93 16.2999 32.41 12.7099 28.06 12.6199H28.05C28 12.6099 27.93 12.6099 27.88 12.6099H26C25.95 12.6099 25.89 12.6099 25.83 12.6199H25.82C25.55 12.6199 25.28 12.6399 25.01 12.6699C23.42 12.8599 21.98 13.5199 20.82 14.5099C19.74 15.4299 18.9 16.6199 18.42 17.9799C18.16 18.7099 18 19.4899 17.97 20.2999C17.99 19.4899 18.13 18.7099 18.37 17.9799C18.82 16.6299 19.61 15.4399 20.65 14.5099C21.84 13.4399 23.36 12.7199 25.03 12.5099C25.15 12.4999 25.26 12.4899 25.37 12.4799C25.53 12.4599 25.68 12.46 25.84 12.46C26.2 12.54 26.57 12.59 26.95 12.59C27.33 12.59 27.7 12.55 28.06 12.46C28.22 12.46 28.37 12.4699 28.53 12.4799C32.66 12.8099 35.93 16.2899 35.93 20.4999Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="ml-[6px]">
          <div class="font-bold-600 text-[14px] mb-[2px]">渗透测试</div>
          <div class="text-[12px] w-[210px]">从攻击者视角模拟最真实的攻击，帮助企业发现系统安全漏洞并协助修复。</div>
        </div>
      </div>
      <!-- 应急响应 -->
      <div data-aos="zoom-in"
        class="absolute left-[49%] top-[65%] py-[10px] px-[18px] color-[#fff] flex justify-between items-center bg-[#006FFF] rounded-[5px]">
        <div class="w-[25px] h-[31px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="31" viewBox="0 0 25 31" fill="none">
            <path
              d="M21.61 30.2499H3.05994V18.2C3.05994 13.08 7.20996 8.92993 12.33 8.92993C17.45 8.92993 21.6 13.08 21.6 18.2V30.2499H21.61Z"
              stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M16.0399 19.67H13.32V14.81C13.32 14.15 12.46 13.89 12.1 14.45L8.06996 20.62C7.77996 21.06 8.10002 21.65 8.63002 21.65H11.35V26.51C11.35 27.17 12.21 27.43 12.57 26.87L16.6 20.7C16.88 20.26 16.5699 19.67 16.0399 19.67Z"
              fill="#FBFBFB" />
            <path d="M12.33 4.21997V1.12" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M5.80994 6.09003L3.60999 3.89001" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M21.0599 3.89001L18.86 6.09003" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M1 30.25H23.6699" stroke="#FBFBFB" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <div class="ml-[6px]">
          <div class="font-bold-600 text-[14px] mb-[2px]">应急响应</div>
          <div class="text-[12px] w-[180px]">7x24小时在线服务，快速响应。</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 底部轮播 -->
  <div class="bottom-swiper-wrap relative overflow-hidden h-[500px] bg-[#1E83FF]">
    <div class="bottom-left-bg absolute left-[0] top-[0]">
      <img src="@/assets/Images/bottom-banner-left-bg.png" alt="" class="h-[500px]">
    </div>
    <div class="bottom-right-bg absolute right-[0] top-[0]">
      <img src="@/assets/Images/bottom-banner-right-bg.png" alt="" class="h-[500px]">
    </div>
    <div class="wjaq-container mx-auto h-[100%] font-bold overflow-hidden bg-[#1E83FF]">
      <div class="text-[40px] text-center text-[#fff] my-[70px]">他们也选择万径</div>
      <swiper class="h-[160px]" :speed="1500" loop :autoplay="{ disableOnInteraction: false }" :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }">
        <swiper-slide v-for='(item, i) in newBannerBottomList' :key='i'>
          <el-row :gutter="0" justify="space-evenly" class="h-[100%] items-center bottom-swiper-row px-[120px]">
            <el-col :span="6" v-for="(page, j) in item" :key="j"
              class="h-[66px] w-[230px] flex items-center justify-center overflow-hidden rounded-[5px] px-[9px]">
              <img :src="page.imgUrl" class="h-[100%]">
            </el-col>
          </el-row>
        </swiper-slide>
        <div class="swiper-button-prev flex bg-[#1E83FF]" slot="button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="48" viewBox="0 0 21 48" fill="none">
            <path d="M19.014 45.4263L2 24.2131L19.014 2.99993" stroke="white" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <div class="swiper-button-next flex bg-[#1E83FF]" slot="button-next">
          <svg width="21" height="48" viewBox="0 0 21 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Rectangle 323" d="M1.98603 2.99993L19 24.2131L1.98603 45.4263" stroke="white" stroke-width="4"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tree-wrap {
  background-image: url("@/assets/Images/wanjin_tree.gif");
}

.bottom-swiper-wrap {

  .swiper-button-next,
  .swiper-button-prev {
    width: 68px !important;
    height: 100% !important;
  }

  .swiper-button-prev {
    justify-content: flex-start;
    top: 25px;
    left: 0;
  }

  .swiper-button-next {
    justify-content: flex-end;
    top: 25px;
    right: 0;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }
}

@media (max-width: 1366px) {
  .bottom-swiper-row {
    padding: 0 65px;
  }

  .xiaozhi-tree-item {
    top: 27%;
  }
}
</style>
