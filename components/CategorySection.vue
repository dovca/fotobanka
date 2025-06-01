<template>
  <div class="grid grid-cols-2 h-[calc(100dvh-40px)]">
    <div class="relative h-full">
      <NuxtImg :src="`/img/${category.slug}/main.jpg`" sizes="600px" class="absolute size-full object-cover object-top"/>
      <NuxtLink
          :to="{name: 'kategorie-slug', params: {slug: category.slug}}"
          class="absolute inset-0 inline-flex items-center justify-center text-7xl uppercase overflow-hidden [-webkit-text-stroke:1px_black]"
          :style="{color: category.data.themeColor}"
      >
        {{ category.data.title }}
      </NuxtLink>
    </div>
    <div class="relative size-full">
      <NuxtImg :src="currentImageSrc" sizes="600px" class="absolute size-full object-contain"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {useCycleList, useIntervalFn} from '@vueuse/core';

  type Props = {
    category: any;
  };

  const props = defineProps<Props>();

  const {data: animationImages} = await useFetch(`/api/images/category/${props.category.slug}/animation`, {default: () => []});

  const cycle = useCycleList(animationImages);

  useIntervalFn(cycle.next, 1000);

  const imageCounter = ref(0);

  const currentImageSrc = computed(() => animationImages.value[cycle.index.value]);
</script>
