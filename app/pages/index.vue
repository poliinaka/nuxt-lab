<template>
  <div>
    <Header @open="open = true" />

    <main class="mt-24 space-y-24">
      <BlockHero @open="open = true" />
      <Carousel />
      <BlockFeatures />
      <BlockBenefits />
      <BlockPrice @open="open = true" />
      <BlockContact />
    </main>

    <!-- Модалка глобально -->
    <ModalForm v-model="open" />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue"
import BlockHero from "~/components/blocks/BlockHero.vue"
import BlockFeatures from "~/components/blocks/BlockFeatures.vue"
import BlockBenefits from "~/components/blocks/BlockBenefits.vue"
import BlockPrice from "~/components/blocks/BlockPrice.vue"
import BlockContact from "~/components/blocks/BlockContact.vue"
import Carousel from "~/components/Carousel.vue"
import ModalForm from "~/components/ModalForm.vue"

const open = ref(false)
</script>