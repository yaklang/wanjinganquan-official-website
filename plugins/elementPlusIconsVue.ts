import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 注册element-plus所有图标
export default defineNuxtPlugin((nuxtApp) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component)
  }
})
