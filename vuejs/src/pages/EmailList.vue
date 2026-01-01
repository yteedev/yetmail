<script setup>
import { onMounted, ref } from 'vue'

const emails = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:3000/messages')
  emails.value = await res.json()
})
</script>

<template>
  <div>
    <div
      v-for="email in emails"
      :key="email.id"
      class="flex cursor-pointer flex-row items-center border-y border-[#eceff1] py-2 pr-4 pl-2 hover:border hover:border-[#E1E3E1] hover:shadow-sm"
    >
      <div class="flex w-60 shrink-0 flex-row items-center">
        <div
          class="flex cursor-pointer items-center rounded-full p-3 transition-colors hover:bg-[#d9dce1]"
        >
          <input type="checkbox" :id="email.id" class="size-4 cursor-pointer" />
        </div>

        <label :for="email.id" class="ml-2 text-sm font-bold text-[#202124]">{{
          email.sender
        }}</label>
      </div>

      <div class="flex-1">
        <div class="flex justify-between">
          <div>
            <h1 class="text-sm font-bold text-[#202124]">
              {{ email.title }}
              <span class="font-normal text-ellipsis"> - {{ email.message_sneak }}</span>
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
