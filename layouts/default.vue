<template>
  <div class="default" :style="{ height: '100%' }">
    <MegavectorHeader></MegavectorHeader>
    <slot />
    <MegavectorFooter></MegavectorFooter>
  </div>
</template>