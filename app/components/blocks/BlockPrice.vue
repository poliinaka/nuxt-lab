<template>
  <section id="price" class="max-w-6xl mx-auto px-6 py-20 text-black">
    <h2 class="text-3xl font-bold mb-8 text-black">Тарифы</h2>

    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="tariff in tariffs"
        :key="tariff.id"
        class="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white text-black"
      >
        <h3 class="text-xl font-bold text-black">{{ tariff.title }}</h3>
        <p class="text-3xl font-bold my-4 text-black">{{ tariff.price }} ₽</p>
        <p class="text-gray-700 mb-6">{{ tariff.description }}</p>

        <UButton color="primary" @click="$emit('open')">
          Оставить заявку
        </UButton>
      </div>
    </div>

    <p v-if="!tariffs.length" class="text-gray-700">
      Тарифы пока не добавлены
    </p>
  </section>
</template>

<script setup lang="ts">
defineEmits(['open'])

const tariffs = ref<any[]>([])

onMounted(async () => {
  tariffs.value = await $fetch('/api/tariffs')
})
</script>