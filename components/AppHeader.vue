<template>
  <header class="sticky top-0 z-10 bg-white text-xl">
    <div class="container mx-auto flex items-center justify-between h-10 uppercase">
      <div class="flex gap-4">
        <NuxtLink to="/">Fotobanka<sup>TM</sup></NuxtLink>
        <slot />
      </div>
      <NuxtLink to="/info">Info</NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>
