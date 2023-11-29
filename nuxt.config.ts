// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // head
    head: {
      title: "wanjinganquan",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { name: "keywords", content: "安全能力融合、CDSL-YAK、小智、Yakit、千机（ChatCS）" },
        {
          hid: "description",
          name: "description",
          content:
            "致力于为企业提供专业的网络安全基础设施与用户共建安全，为企业带来专业、可控、放心的安全产品及服务。2019年发布了基于“AI+知识图谱”的智能渗透测试机器人，将人工智能首次融入网络安全，2021年发布了国产化“图灵完备”的CDSL-YAK(YAK)语言，以全新的方式重新定义了安全能力融合，从底层安全基座出发构建企业安全体系。",
        },
      ],
    },
  },
  css: ["@/assets/scss/normalize.scss"],
  typescript: {
    strict: true,
    shim: false,
  },
  // build modules
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@element-plus/nuxt",
    "@nuxt/image",
  ],
  image: {
    quality: 80,
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // unocss
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/index.scss" as *;', // 将 @/assets/scss/index.scss 文件中定义的所有变量、混合（mixin）、函数等导入到每个 SCSS 文件中
        },
      },
    },
  },
  elementPlus: {
    importStyle: "scss",
  },
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ["last 5 version", ">1%", "ie >=8"],
      },
    },
  },
});
