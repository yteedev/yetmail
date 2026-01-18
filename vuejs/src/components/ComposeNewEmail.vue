<script setup>
import { ref } from 'vue'
const isFocused = ref(false)
</script>

<template>
  <div class="flex h-full w-md flex-col bg-white text-sm shadow-lg shadow-black/40">
    <div class="flex justify-between rounded-t-lg bg-[#f2f6fc] px-4 py-3">
      <h1 class="font-medium text-[#041e49]">New Message</h1>
      <div class="flex gap-2">
        <img
          class="size-3.5 cursor-pointer hover:bg-[#d9dce1]"
          src="/icons/icons8-minimize-96.png"
          alt=""
        />
        <img
          class="size-3.5 cursor-pointer hover:bg-[#d9dce1]"
          src="/icons/icons8-maximize-96.png"
          alt=""
        />
        <img
          class="size-3.5 cursor-pointer hover:bg-[#d9dce1]"
          src="/icons/icons8-close-96.png"
          alt=""
        />
      </div>
    </div>

    <div class="px-4">
      <!-- RECIPIENT -->
      <div class="flex items-center border-b-2 border-[#eceff1] py-3">
        <label for="recipient" class="text-medium mr-2 text-[#747775]">{{
          isFocused ? 'To' : 'Recipient'
        }}</label>
        <input
          type="email"
          name=""
          row="6"
          @focus="isFocused = true"
          @blur="isFocused = false"
          id=""
          class="flex-1 leading-6 focus:outline-none"
        />
      </div>

      <!-- SUBJECT -->
      <div class="border-b-2 border-[#eceff1] py-3">
        <input
          placeholder="Subject"
          type="email"
          name=""
          row="6"
          id=""
          class="w-full leading-6 placeholder:font-medium focus:outline-none"
        />
      </div>
    </div>
    <!-- EMAIL -->
    <div class="flex w-full flex-1 flex-col px-4 py-2">
      <div class="w-full flex-1">
        <textarea
          name="email"
          id=""
          cols="30"
          rows="10"
          class="h-full w-full resize-none focus:outline-none"
        ></textarea>
      </div>
      <div class="flex gap-0.5">
        <button
          class="cursor-pointer rounded-l-full bg-[#0b57d0] px-3 py-2 text-white hover:bg-[#4879dc]"
        >
          Send
        </button>
        <div
          class="flex cursor-pointer items-center justify-center rounded-r-full bg-[#0b57d0] px-2 py-2 hover:bg-[#4879dc]"
        >
          <img src="/icons/icons8-sort-down-100.png" alt="" class="size-4" />
        </div>
      </div>
    </div>
  </div>
</template>
