<template>
  <div class="AppPage">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.AppPage.page-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.AppPage.page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
