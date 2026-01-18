<script setup>
import { ref, watch } from 'vue'
import EmailList from './EmailList.vue'
import MainMenu from './MainMenu.vue'
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
  <div class="mr-20 flex h-screen w-full gap-4 overflow-hidden">
    <!-- EMAIL LIST -->
    <div class="relative flex flex-col rounded-3xl bg-white">
      <!-- FIXED REFRESH/SELECT ALL EMAILS CONTAINER -->

      <div class="sticky top-0 z-50 flex w-full gap-4 rounded-3xl bg-white px-2 py-4">
        <!-- SELECT ALL -->
        <div
          class="flex cursor-pointer items-center rounded-lg px-2 py-3 transition-colors hover:bg-[#e3e5e7]"
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
          class="shrink-0 cursor-pointer rounded-full p-2 transition-colors hover:bg-[#e3e5e7]"
        >
          <img src="/icons/icons8-refresh-96.png" alt="" class="size-4" />
        </button>
        <!-- MARK ALL AS READ -->
        <button
          class="shrink-0 cursor-pointer rounded-full p-2 transition-colors hover:bg-[#e3e5e7]"
        >
          <img src="/icons/icons8-vertical-menu-96.png" alt="" class="size-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 12px; /* Width of vertical scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1; /* Track color */
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888; /* Scrollbar color */
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555; /* Scrollbar hover color */
}
</style>

<!-- ALL EMAILS -->
<!-- <div class="custom-scrollbar mb-10 flex-1 overflow-y-auto">
        <EmailList />
      </div> -->
