<template>
  <AppHeader />
  <main>
    <div class="isolate relative">
      <Swiper
          :modules="[Autoplay]"
          :slides-per-view="1"
          loop
          autoplay
      >
        <SwiperSlide v-for="image in homepageImages" :key="image">
          <div class="relative w-full h-[calc(100dvh-40px)]">
            <NuxtImg :src="image" sizes="1400" class="absolute block size-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
      <NuxtImg src="/img/watermark/WATERMARK 2.png" class="absolute top-0 z-10 block size-full object-cover" />
    </div>
    <div class="container mx-auto space-y-10 mt-10">
      <CategorySection v-for="category in categories" :key="category.slug" :category />
    </div>
  </main>
</template>

<script setup lang="ts">
  import 'swiper/css';
  import 'swiper/css/autoplay';

  import {Swiper, SwiperSlide} from 'swiper/vue';
  import {Autoplay} from 'swiper/modules';
  import slugConfig from '~/config/categories.json';

  const categories = Object.entries(slugConfig).map(([slug, data]) => ({slug, data}));
  const {data: homepageImages} = await useFetch('/api/images/homepage');
</script>
