<template>
  <UModal v-model:open="isOpen" size="lg">
    <template #content>
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold">Оставить заявку</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              @click="isOpen = false"
            />
          </div>
        </template>

        <div class="flex flex-col gap-4 py-4">
          <UInput v-model="form.name" placeholder="Имя" size="lg" />
          <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>

          <UInput v-model="form.phone" placeholder="Телефон" size="lg" />
          <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>

          <UInput v-model="form.email" placeholder="Email" size="lg" />
          <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>

          <UTextarea v-model="form.message" placeholder="Сообщение" :rows="4" />
          <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
        </div>

        <template #footer>
          <UButton
            color="primary"
            block
            size="lg"
            :loading="loading"
            @click="submit"
          >
            Отправить
          </UButton>
        </template>
      </UCard>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { requestSchema } from '#shared/schemas/request'
const isOpen = defineModel<boolean>()

const loading = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const resetErrors = () => {
  errors.name = ''
  errors.phone = ''
  errors.email = ''
  errors.message = ''
}

const resetForm = () => {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.message = ''
}

const submit = async () => {
  resetErrors()

  const result = requestSchema.safeParse(form)

  if (!result.success) {
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof typeof errors
      errors[field] = issue.message
    }

    return
  }

  try {
    loading.value = true

    await $fetch('/api/requests', {
      method: 'POST',
      body: result.data
    })

    alert('Заявка успешно отправлена')
    resetForm()
    isOpen.value = false
  } catch (error: any) {
    alert(error?.statusMessage || 'Ошибка при отправке заявки')
  } finally {
    loading.value = false
  }
}
</script>