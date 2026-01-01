<script setup>
import Navigation from './pages/Navigation.vue'
</script>

<template>
  <div class="min-h-screen bg-[#f8fafd] px-2">
    <Navigation />
    <div>
      <RouterView />
    </div>
  </div>
</template>
