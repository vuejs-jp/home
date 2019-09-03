<template>
  <div class="AppPage">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.AppPage.page-leave-active {
  transition: opacity 0.1s, transform 0.1s;
}

.AppPage.page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
