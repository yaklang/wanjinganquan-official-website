export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/safetyProduct") {
    if (from.path !== "/safetyProduct") {
      return navigateTo(from.path)
    } else {
      return navigateTo("/")
    }
  }
})
