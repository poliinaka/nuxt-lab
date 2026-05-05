<template>
  <div class="min-h-screen bg-white text-black p-8 space-y-10">
    <div>
      <h1 class="text-3xl font-bold mb-4 text-black">Админка</h1>
      <NuxtLink to="/" class="text-violet-700 font-medium">
        ← На главную
      </NuxtLink>
    </div>

    <section class="bg-gray-50 border border-gray-200 rounded-2xl p-6">
      <h2 class="text-xl font-semibold mb-4 text-black">Добавить тариф</h2>

      <div class="grid gap-3 max-w-xl">
        <UInput v-model="tariffForm.title" placeholder="Название тарифа" />
        <UInput v-model="tariffForm.price" placeholder="Цена" type="number" />
        <UTextarea v-model="tariffForm.description" placeholder="Описание" />

        <UButton :loading="tariffLoading" @click="createTariff">
          Добавить тариф
        </UButton>
      </div>
    </section>

    <section class="bg-white">
      <h2 class="text-xl font-semibold mb-4 text-black">Тарифы</h2>

      <div class="grid md:grid-cols-3 gap-4">
        <div
          v-for="tariff in tariffs"
          :key="tariff.id"
          class="border border-gray-200 rounded-xl p-4 bg-white text-black shadow-sm"
        >
          <h3 class="font-bold text-lg text-black">{{ tariff.title }}</h3>
          <p class="text-2xl font-bold my-2 text-black">{{ tariff.price }} ₽</p>
          <p class="text-gray-700">{{ tariff.description }}</p>

          <UButton
            color="red"
            variant="soft"
            class="mt-4"
            @click="deleteTariff(tariff.id)"
          >
            Удалить
          </UButton>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <h2 class="text-xl font-semibold mb-4 text-black">Заявки</h2>

      <div v-if="loading" class="text-black">Загрузка...</div>

      <div v-else class="space-y-4">
        <div
          v-for="item in requests"
          :key="item.id"
          class="border border-gray-200 p-4 rounded-xl flex justify-between items-start bg-white text-black shadow-sm"
        >
          <div>
            <p class="text-black"><b>Имя:</b> {{ item.name }}</p>
            <p class="text-black"><b>Телефон:</b> {{ item.phone }}</p>
            <p class="text-black"><b>Email:</b> {{ item.email }}</p>
            <p class="text-black"><b>Сообщение:</b> {{ item.message }}</p>
            <p class="text-gray-600 text-sm">
              {{ new Date(item.createdAt).toLocaleString() }}
            </p>
          </div>

          <UButton color="red" @click="deleteRequest(item.id)">
            Удалить
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { tariffSchema } from '#shared/schemas/tariff'

const requests = ref<any[]>([])
const tariffs = ref<any[]>([])
const loading = ref(true)
const tariffLoading = ref(false)

const tariffForm = reactive({
  title: '',
  price: '',
  description: ''
})

const loadRequests = async () => {
  requests.value = await $fetch('/api/requests')
}

const loadTariffs = async () => {
  tariffs.value = await $fetch('/api/tariffs')
}

const load = async () => {
  loading.value = true
  await Promise.all([
    loadRequests(),
    loadTariffs()
  ])
  loading.value = false
}

const createTariff = async () => {
  const result = tariffSchema.safeParse({
    title: tariffForm.title,
    price: Number(tariffForm.price),
    description: tariffForm.description
  })

  if (!result.success) {
    alert(result.error.issues[0]?.message || 'Ошибка валидации')
    return
  }

  try {
    tariffLoading.value = true

    await $fetch('/api/tariffs', {
      method: 'POST',
      body: result.data
    })

    tariffForm.title = ''
    tariffForm.price = ''
    tariffForm.description = ''

    await loadTariffs()
  } finally {
    tariffLoading.value = false
  }
}

const deleteRequest = async (id: number) => {
  await $fetch(`/api/requests/${id}`, {
    method: 'DELETE'
  })

  await loadRequests()
}

const deleteTariff = async (id: number) => {
  await $fetch(`/api/tariffs/${id}`, {
    method: 'DELETE'
  })

  await loadTariffs()
}

onMounted(load)
</script>