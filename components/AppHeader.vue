<template>
  <header class="sticky top-0 z-10 bg-white text-xl">
    <div class="flex items-center justify-between px-4 h-10 uppercase">
      <div class="flex gap-4">
        <NuxtLink to="/">Fotobanka<sup class="text-xs">TM</sup></NuxtLink>
        <slot />
      </div>
      <NuxtLink to="/info">Info</NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>
