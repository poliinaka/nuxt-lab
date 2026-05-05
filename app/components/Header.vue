<template>
  <header class="fixed top-0 w-full bg-white shadow z-50">
    <div class="max-w-6xl mx-auto flex justify-between items-center h-20 px-6">
      <NuxtLink to="/" class="font-bold text-lg text-black">
        медиаконтекст
      </NuxtLink>

      <div class="flex items-center gap-6">
        <a href="#features" class="text-black font-medium hover:text-primary">Преимущества</a>
        <a href="#price" class="text-black font-medium hover:text-primary">Цены</a>
        <a href="#contact" class="text-black font-medium hover:text-primary">Контакты</a>
        

        <div class="relative">
          <div
            class="absolute -top-4 -right-3 w-7 h-7 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center"
          >
            {{ requestsCount }}
          </div>

          <UButton color="primary" @click="$emit('open')">
            Оставить заявку
          </UButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const requestsCount = ref(0)

const loadCount = async () => {
  const result = await $fetch<{ count: number }>('/api/requests/count')
  requestsCount.value = result.count
}

onMounted(() => {
  loadCount()

  const protocol = location.protocol === 'https:' ? 'wss' : 'ws'
  const ws = new WebSocket(`${protocol}://${location.host}/ws`)

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data)

    if (data.type === 'requests-count') {
      requestsCount.value = data.count
    }
  }
})
</script>