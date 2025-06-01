<template>
  <div :style="{'--color': categoryData.color}">
    <AppHeader>
      <h1 class="uppercase text-[color:--color]">
        {{ categoryData.title }}
      </h1>
    </AppHeader>
    <main class="container mx-auto mt-10">
      <div class="grid grid-cols-12 mt-10">
        <div class="relative group cursor-pointer" v-for="image in gallery" :key="image" @click="showDialog(image)">
          <NuxtImg :src="image" sizes="100px" class="object-contain" />
          <NuxtImg :src="watermarkSrc" class="absolute inset-0 size-full object-contain" />
          <div class="absolute inset-0 bg-[--color] opacity-0 group-hover:opacity-50" />
        </div>
      </div>

      <div class="flex flex-wrap gap-1 justify-center max-w-[45ch] mt-32">
        <NuxtLink v-for="tag in tags" :key="tag" to="#" class="rounded-full border border-black px-1">
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
            <NuxtImg :src="currentImage" sizes="600px" class="absolute inset-0 size-full object-contain" />
            <NuxtImg :src="watermarkSrc" class="absolute inset-0 size-full object-contain" />
          </div>
          <button class="border border-black rounded-full bg-white px-1" @click="download(currentImage)">Stáhnout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import slugs from '~~/config/slugs.json';
  import tags from '~~/config/tags.json';

  const route = useRoute();

  const categoryData = slugs[route.params.slug];

  const {data: gallery} = useFetch(`/api/images/category/${route.params.slug}/gallery`, {default: () => []});

  const watermarkSrc = computed(() => `/img/watermark/${categoryData.watermark}.png`);

  const currentImage = ref<any>(null);
  const isDialogVisible = ref(false);

  function showDialog(image: any) {
    currentImage.value = image;
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
