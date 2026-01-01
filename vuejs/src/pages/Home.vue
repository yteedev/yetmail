<script setup>
import EmailList from './EmailList.vue'
import MainMenu from './MainMenu.vue'
</script>

<template>
  <div class="flex h-screen w-full">
    <div class="w-60 shrink-0">
      <MainMenu />
    </div>

    <div class="flex-1 rounded-3xl bg-white">
      <EmailList />
    </div>
  </div>
</template>
