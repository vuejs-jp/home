<script setup lang="ts">
import { NuxtRouteAnnouncer, NuxtPage, NuxtLayout } from "#components";
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
