<template>
  <section id="features" class="max-w-6xl mx-auto px-6">
    
    <h2 class="text-3xl mb-10">
      <span class="text-primary">Особенности</span> OLV
    </h2>

    <div class="grid md:grid-cols-3 gap-6">
      <UCard v-for="n in 3" :key="n">
        <template #header>
          <UBadge color="primary">{{ '0' + n }}</UBadge>
        </template>

        <p class="text-gray-400 mt-4">
          Аналитика, таргетинг и эффективность рекламы
        </p>
      </UCard>
    </div>

  </section>
</template>