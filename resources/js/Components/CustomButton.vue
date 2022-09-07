<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: String,
})

const color = computed(() => {
  return {
    primary: 'bg-blue-500',
    secondary: 'bg-indigo-400',
  }[props.color]
})
</script>

<template>
  <div 
    class="flex items-center justify-center px-6 py-3 rounded-full text-white text-lg"
    :class="`${color}`"
  >
    <slot />
  </div>
</template>