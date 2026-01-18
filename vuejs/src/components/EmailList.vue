<script setup>
import { useEmailStore } from '@/stores/emailStore'
import { onMounted } from 'vue'

const emailStore = useEmailStore()

onMounted(() => {
  emailStore.fetchEmails()
})
</script>

<template>
  <div class="flex flex-col">
    <!-- ALL EMAILS -->
    <div
      v-for="email in emailStore.emails"
      :key="email.id"
      :class="[
        'flex cursor-pointer flex-row items-center border-y border-[#eceff1] py-1 pr-4 pl-2 hover:border hover:border-[#E1E3E1] hover:shadow-sm',
        emailStore.isEmailSelected(email.id) ? 'bg-[#c2dbff]' : 'bg-[#f2f6fc]',
      ]"
    >
      <div class="flex w-60 shrink-0 flex-row items-center">
        <div
          class="flex cursor-pointer items-center rounded-full p-3 transition-colors hover:bg-[#d9dce1]"
        >
          <input
            type="checkbox"
            :id="email.id"
            :checked="emailStore.isEmailSelected(email.id)"
            @change="emailStore.toggleEmailSelection(email.id)"
            class="size-4 cursor-pointer border-[#d5d6d5] accent-[#e8f0fe] focus:ring-[#4a4e4f] focus:ring-offset-0"
          />
        </div>

        <label :for="email.id" class="ml-2 text-sm font-bold text-[#202124]">{{
          email.sender
        }}</label>
      </div>

      <div class="flex-1">
        <div class="flex justify-between">
          <div>
            <h1 class="text-sm font-bold text-[#202124]">
              {{ email.subject }}
              <span class="font-normal">
                - {{ email.snippet || email.body.slice(0, 100) + '...' }}</span
              >
            </h1>
          </div>
          <div>
            <h1 class="text-sm font-bold text-[#202124]">{{ email.time }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
