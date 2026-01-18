<script setup>
import MainMenu from '@/components/MainMenu.vue'
import SelectAllEmail from '@/components/SelectAllEmail.vue'
import Searchbar from '@/components/Searchbar.vue'
import Logo from '@/components/Logo.vue'
import EmailList from '@/components/EmailList.vue'
import ComposeNewEmail from '@/components/ComposeNewEmail.vue'
import { ref } from 'vue'

const composeEmail = ref(false)
</script>

<template>
  <div class="relative h-screen w-full pr-10">
    <div class="flex flex-row gap-4 py-2">
      <!-- LOGO AND MAIN MENU -->
      <div class="flex w-60 flex-col">
        <Logo />
        <MainMenu @compose="composeEmail = !composeEmail" />
      </div>
      <!-- SEARCHBAR AND EMAIL LIST -->
      <div class="flex h-screen flex-1 flex-col">
        <Searchbar />
        <div class="mt-2 flex flex-col rounded-3xl bg-white">
          <SelectAllEmail />
          <EmailList />
        </div>
      </div>
    </div>
    <div v-if="composeEmail" class="fixed right-13 bottom-0 z-100 h-[80vh] max-h-129">
      <ComposeNewEmail />
    </div>
  </div>
</template>
