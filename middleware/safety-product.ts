export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/safetyProduct') {
    return abortNavigation() // 阻止路由跳转
  }
})
