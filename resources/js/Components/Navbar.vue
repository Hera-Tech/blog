<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import Button from '@/Components/CustomButton.vue'
</script>

<template>
  <div class="container mx-auto">
    <nav class="flex items-center p-5 space-x-5">
      <span class="flex-1">
        <img src="/images/logo.png">
      </span>
      <div class="flex space-x-5">
        <Link href="#" class="text-xl text-gray-700">Home</Link>
        <Link href="#" class="text-xl text-gray-700">Tutoriais</Link>
        <Link href="#" class="text-xl text-gray-700">Serviços</Link>
      </div>
      <Button color="primary">Contato</Button>
    </nav>
  </div>
</template>