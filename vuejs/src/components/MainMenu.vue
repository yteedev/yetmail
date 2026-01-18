<script setup>
import { useEmailStore } from '@/stores/emailStore'
const emailStore = useEmailStore()

const emit = defineEmits(['compose'])
</script>

<template>
  <div>
    <div class="mt-2 flex flex-col gap-2">
      <button
        @click="emit('compose')"
        class="flex h-14 w-36 cursor-pointer flex-row items-center justify-center gap-4 rounded-2xl bg-[#c2e7ff] hover:drop-shadow-sm"
      >
        <img src="/icons/icons8-pencil-128.png" alt="" class="size-6" />
        <h1 class="text-sm font-medium text-[#001d35]">Compose</h1>
      </button>
      <div class="mt-2">
        <ul>
          <li
            v-for="label in emailStore.labels"
            :key="label.id"
            class="flex cursor-pointer items-center justify-between rounded-r-full py-2 pr-3 pl-6 text-sm font-medium text-[#202124] hover:bg-[#ebedf0]"
          >
            <span
              ><span
                ><img :src="label.icon" :alt="label.name" class="mr-4 inline size-5 object-contain"
              /></span>
              {{ label.name }}</span
            >
            <span class="text-xs text-[#6e7277]">{{ label.count }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
