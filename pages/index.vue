<template>
  <div class="max-w-lg mx-auto pb-8">
    <div class="py-8">
      <img src="~/assets/img/logo.svg" alt="Logo" class="mx-auto" />
    </div>

    <div class="flex flex-col gap-8 justify-center px-4">
      <ReceiptCard v-for="receipt in receipts" :receipt="receipt" />

      <!-- <span v-if="!receipts.length" class="text-gray-400 text-center">
        No data to be displayed
      </span> -->
    </div>
  </div>
</template>

<script setup>
const { data: receipts } = await useFetch("/api/receipts");
</script>
