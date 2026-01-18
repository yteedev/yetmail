<script setup>
import { ref, watch } from 'vue'
import { useEmailStore } from '@/stores/emailStore'

const emailStore = useEmailStore()

const checkAllRef = ref(null)

const handleRefresh = async () => {
  await emailStore.refreshEmails()
}

const handleCheckAllChange = () => {
  // Clear indeterminate state before toggling
  if (checkAllRef.value) {
    checkAllRef.value.indeterminate = false
  }
  emailStore.toggleAllEmail()
}

watch(
  () => emailStore.someSelected,
  (newValue) => {
    if (checkAllRef.value) {
      checkAllRef.value.indeterminate = newValue
    }
  }
)
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 flex w-full gap-4 px-2 py-4">
      <!-- SELECT ALL -->
      <div
        class="flex cursor-pointer items-center rounded-lg px-3 py-3 transition-colors hover:bg-[#e3e5e7]"
      >
        <input
          ref="checkAllRef"
          type="checkbox"
          :checked="emailStore.allSelected"
          @change="handleCheckAllChange"
          name=""
          id="checkAll"
          class="size-4 cursor-pointer border-[#d5d6d5] accent-[#e8f0fe] focus:ring-[#4a4e4f] focus:ring-offset-0"
        />
      </div>
      <!-- REFRESH -->
      <button
        @click="handleRefresh"
        class="shrink-0 cursor-pointer rounded-full p-3 transition-colors hover:bg-[#e3e5e7]"
      >
        <img src="/icons/icons8-refresh-96.png" alt="" class="size-4" />
      </button>
      <!-- MARK ALL AS READ -->
      <button class="shrink-0 cursor-pointer rounded-full p-3 transition-colors hover:bg-[#e3e5e7]">
        <img src="/icons/icons8-vertical-menu-96.png" alt="" class="size-4" />
      </button>
    </div>
  </div>
</template>
