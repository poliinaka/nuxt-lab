<template>
  <section id="contact" class="bg-black text-white rounded-t-3xl py-20 mt-24">
    
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl mb-8">Контакты</h2>

      <div class="flex flex-col gap-4 max-w-sm">
        <UButton color="primary" block @click="openTelegram">
          Telegram
        </UButton>
      </div>
    </div>

  </section>
</template>

<script setup>
const openTelegram = () => {
  window.open("https://t.me/kissland_dance", "_blank")
}
</script>