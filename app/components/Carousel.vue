  

  <script setup lang="ts">
const items = [
  '/carousel-1.jpg',
  '/carousel-2.jpg',
  '/carousel-3.jpg',
  '/carousel-4.jpg',
  '/carousel-5.jpg',
  '/carousel-6.jpg',
  '/carousel-7.jpg',
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    arrows
    :autoplay="{ delay: 2000 }"
    wheel-gestures
    :prev="{ variant: 'solid' }"
    :next="{ variant: 'solid' }"
    :items="items"
    :ui="{
      item: 'basis-1/3 ps-0',
      prev: 'sm:start-8',
      next: 'sm:end-8',
      container: 'ms-0'
    }"
  >
    <img :src="item" width="320" height="320">
  </UCarousel>
</template>



  <!-- <script setup lang="ts">
const items = [
  '/carousel-1.jpg',
  '/carousel-2.jpg',
  '/carousel-3.jpg'
]
</script>

<template>
  <UCarousel v-slot="{ item }" arrows :items="items" class="w-full max-w-xs mx-auto">
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </UCarousel>
</template>
 -->
