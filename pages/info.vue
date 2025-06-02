<template>
  <AppHeader />
  <div class="relative">
    <div class="absolute inset-0 opacity-50 bg-cover" style="background-image: url('/img/watermark/WATERMARK 1.png');" />
    <main class="relative container mx-auto py-10 h-[calc(100dvh-40px)] flex flex-col">
      <p class="max-w-[80ch] uppercase leading-tight">
        VÍTEJTE V NAŠÍ FOTOBANCE! JSME TEREZA A MAGDALÉNA (PROTO FOTOBANKA™), MLADÉ A NADĚJNÉ GRAFICKÉ DESIGNÉRKY
        S TOUHOU OBOHATIT SVĚT NOVÝMI STOCKOVÝMI FOTOGRAFIEMI GRAFICKÝCH DESIGNÉRŮ A JEJICH KOMUNITY. PŘINÁŠÍME VÁM
        EXKLUZIVNÍ STOCKOVÉ FOTOGRAFIE, KTERÉ SE SKVĚLE HODÍ DO PREZENTACÍ, ČASOPISŮ, NA INSTAGRAM. AKTUÁLNĚ MÁME
        V NABÍDCE 3 KOLEKCE:
        <br/>
        <NuxtLink to="/kategorie/korporat" :style="{color: categories.korporat.themeColor}">
          {{ categories.korporat.title }}
        </NuxtLink>,
        <NuxtLink to="/kategorie/designer" :style="{color: categories.designer.themeColor}">
          {{ categories.designer.title }}
        </NuxtLink>
        a
        <NuxtLink to="/kategorie/vernisaz" :style="{color: categories.vernisaz.themeColor}">
          {{ categories.vernisaz.title }}
        </NuxtLink>.
      </p>
      <p class="mt-8 uppercase leading-tight">
        TĚŠTE SE JIŽ BRZY NA DALŠÍ NOVINKY ;-)
      </p>
      <p class="mt-auto opacity-30 uppercase">
        LS 2025 – UMPRUM – GDNM
        <br>
        foto &copy; Jan Merc
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
  import categories from '~/config/categories.json';
</script>
