<script setup>
import { useEmailStore } from '@/stores/emailStore'
const emailStore = useEmailStore()
</script>

<template>
  <div class="flex w-full flex-row items-center gap-30 py-2">
    <!-- CONTAINER 1 -->
    <div class="flex flex-row items-center justify-center">
      <!-- MAIN MENU -->
      <div class="shrink-0 cursor-pointer rounded-full p-3 transition-colors hover:bg-[#eaebee]">
        <img src="/icons/icons8-menu-96.png" alt="Filter" class="size-6" />
      </div>

      <!-- LOGO -->
      <span class="flex flex-row items-center gap-2">
        <img
          class="ml-1 size-8.5"
          src="https://img.icons8.com/color/48/gmail-new.png"
          alt="gmail-new"
        />

        <h1 class="mt-1 text-2xl text-[#4c4f4e]">Ymail</h1>
      </span>
    </div>

    <!-- CONTAINER 2 -->
    <div class="flex w-full flex-row items-center justify-between">
      <!-- CONTAINER 2.1  -->
      <div>
        <!-- SEARCH BAR -->
        <div class="relative flex flex-row items-center gap-2">
          <div
            class="absolute left-4 cursor-pointer rounded-full p-2 transition-colors hover:bg-[#dce1e9]"
          >
            <img src="/icons/search-icon.png" alt="Filter" class="size-6" />
          </div>

          <input
            v-model="emailStore.emailSearch"
            type="text"
            placeholder="Search mail"
            class="rounded-3xl bg-[#e9eef6] py-3.5 pl-16 placeholder:text-[#6e6e6f] focus:rounded-3xl focus:bg-white focus:shadow-sm focus:outline-none md:w-95 lg:w-180"
          />

          <div
            class="absolute right-4 cursor-pointer rounded-full p-2 transition-colors hover:bg-[#dce1e9]"
          >
            <img src="/icons/icons8-tune-24.png" alt="Filter" class="size-6" />
          </div>
        </div>
      </div>

      <!-- CONTAINER 2.2  -->
      <div>
        <div class="mr-2 flex flex-row gap-2">
          <div
            class="shrink-0 cursor-pointer rounded-full p-2 transition-colors hover:bg-[#e3e5e7]"
          >
            <img src="/icons/icons8-help-96.png" alt="" class="size-6" />
          </div>
          <div
            class="shrink-0 cursor-pointer rounded-full p-2 transition-colors hover:bg-[#e3e5e7]"
          >
            <img src="/icons/icons8-settings-96.png" alt="" class="size-6" />
          </div>
          <div
            class="shrink-0 cursor-pointer rounded-full p-2 transition-colors hover:bg-[#e3e5e7]"
          >
            <img src="/icons/icons8-apps-96.png" alt="" class="size-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
