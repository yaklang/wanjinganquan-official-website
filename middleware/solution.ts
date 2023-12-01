export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/solution") {
    if (from.path !== "/solution") {
      return navigateTo(from.path)
    } else {
      return navigateTo("/")
    }
  }
})
