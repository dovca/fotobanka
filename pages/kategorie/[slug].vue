<template>
  <div :style="{'--theme-color': categoryData.themeColor, '--text-color': categoryData.textColor}">
    <AppHeader>
      <h1 class="uppercase text-[color:--theme-color]">
        {{ categoryData.title }}
      </h1>
    </AppHeader>
    <main class="container mx-auto my-10">
      <div class="grid grid-cols-6 mt-10">
        <div class="relative group cursor-pointer" v-for="(image, index) in gallery" :key="image" @click="showDialog(index)">
          <NuxtImg :src="image" sizes="300px" class="object-contain w-full" />
          <div class="absolute inset-0 bg-[color:--theme-color] opacity-0 group-hover:opacity-50" />
        </div>
      </div>

      <div class="flex flex-wrap gap-1 max-w-[45ch] mt-32 text-[color:--text-color]">
        <NuxtLink v-for="tag in categoryData.tags" :key="tag" to="#" class="rounded-full bg-[color:--theme-color] px-2">
          {{ tag }}
        </NuxtLink>
      </div>
    </main>
    <div v-if="isDialogVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <button class="absolute top-8 right-8 text-white" @click="isDialogVisible = false">
        <Icon name="ri:close-large-fill" class="text-4xl" />
      </button>
      <div class="container mx-auto flex justify-center h-dvh py-16">
        <div class="flex flex-col items-center gap-8 w-full">
          <div class="relative grow w-full">
            <NuxtImg :src="cycleList.state.value" sizes="600px" class="absolute inset-0 size-full object-contain" />
            <NuxtImg :src="watermarkSrc" class="absolute inset-0 size-full object-contain" />
          </div>
          <button class="border border-black rounded-full bg-white px-2" @click="download(cycleList.state.value)">Stáhnout</button>
        </div>
      </div>
      <button class="absolute top-1/2 left-8 -translate-y-1/2 text-white" @click="cycleList.prev()">
        <Icon name="ri:arrow-left-s-line" class="text-4xl" />
      </button>
      <button class="absolute top-1/2 right-8 -translate-y-1/2 text-white" @click="cycleList.next()">
        <Icon name="ri:arrow-right-s-line" class="text-4xl" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import categories from '~/config/categories.json';
  import {useCycleList} from '@vueuse/core';
  import {useRouteParams} from '@vueuse/router';

  const slug = useRouteParams<keyof typeof categories>('slug')

  const isDialogVisible = ref(false);

  const categoryData = categories[slug.value];

  const {data: gallery} = useFetch(`/api/images/category/${slug.value}/gallery`, {default: () => []});

  const watermarkSrc = computed(() => `/img/watermark/${categoryData.watermark}.png`);

  const cycleList = useCycleList(gallery);

  function showDialog(index: number) {
    cycleList.go(index);
    isDialogVisible.value = true;
  }

  function download(image: any) {
    const link = document.createElement('a');
    link.href = image;
    link.download = image.split('/').pop() || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>
