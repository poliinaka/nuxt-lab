<template>
  <section class="max-w-6xl mx-auto bg-primary text-white rounded-3xl p-10">

    <h2 class="text-3xl mb-10">
      Преимущества
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
      <template v-for="item in items" :key="item.title">
        <div v-if="item.space" class="flex-1"></div>
        <UCard v-else class="text-white">
          <h3 class="font-semibold mb-2">
            {{ item.title }}
          </h3>
          <p class="text-white">
            {{ item.text }}
          </p>
        </UCard>
      </template>

    </div>

  </section>
</template>

<script setup>
const items = [
  { title: "Узнаваемость", text: "Рост бренда" },
  { space: true },
  { title: "Таргетинг", text: "Точная аудитория" },
  { title: "Интерактив", text: "Вовлечение" },
  { space: true },
  { title: "Аналитика", text: "Прозрачность" }
]
</script>