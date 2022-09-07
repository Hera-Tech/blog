<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import Navbar from '@/Components/Navbar.vue'
import Button from '@/Components/CustomButton.vue'
</script>

<template>
  <Head title="Tutoriais" />

  <Navbar />

  <section class="bg-gray-50 rounded-br-full">
    <div class="container mx-auto">
      <div class="px-5 py-10">
        <div class="flex flex-col py-40">
          <span class="text-6xl text-blue-500 font-bold mb-4">Meus Tutoriais</span> 
          <div class="flex flex-col mb-10">
            <span class="text-2xl text-gray-700">Disponibilizo uma série de tutoriais totalmente gratuitos para você adquirir novas habilidades.</span>
            <span class="text-2xl text-gray-700">Assim, você ficará cada vez mais preparado para construir seu próprio negócio :)</span>
          </div>
          <div class="flex w-120 items-center p-2 space-x-2 bg-white rounded-full shadow-lg">
            <input class="flex-1 ml-4" placeholder="Se inscreva para acompanhar os novos conteúdos" />
            <Button color="primary">Inscreva-se</Button>
          </div>
        </div>
        <div class="flex items-center space-x-5">
          <span class="text-lg text-gray-700">Minhas redes sociais</span>
          <div class="flex space-x-4">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
            <i class="fa-brands fa-github fa-2xl"></i>
            <i class="fa-brands fa-twitter fa-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container mx-auto">
      <div class="space-x-6">
        <div class="flex flex-col p-10 space-y-10">
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-50">
    <div class="container mx-auto">
      <div class="flex flex-col items-center p-10 space-y-12">
        <div class="flex space-x-5">
          <span class="text-lg font-bold text-gray-700">Home</span>
          <span class="text-lg font-bold text-gray-700">Tutoriais</span>
          <span class="text-lg font-bold text-gray-700">Serviços</span>
          <span class="text-lg font-bold text-gray-700">Contato</span>
        </div>
        <div class="flex space-x-4">
          <i class="fa-brands fa-linkedin fa-2xl"></i>
          <i class="fa-brands fa-github fa-2xl"></i>
          <i class="fa-brands fa-twitter fa-2xl"></i>
        </div>
        <span class="text-sm font-regular text-gray-700">Todos os direitos reservados <span class="text-base font-bold">Tafarel Yan © 2022</span></span>
      </div>
    </div>
  </section>
</template>