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
            <NuxtImg :src="image" class="absolute block size-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
      <span class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block uppercase text-[length:6rem] 2xl:text-[length:10rem] opacity-30">Fotobanka<sup class="text-[length:0.6em]">TM</sup></span>
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
