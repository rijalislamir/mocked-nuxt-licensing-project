<template>
  <div class="max-w-lg mx-auto">
    <div class="py-8">
      <img src="~/assets/img/logo.svg" alt="Logo" class="mx-auto" />
    </div>

    <div class="flex flex-col gap-8 justify-center px-4">
      <ReceiptCard v-for="receipt in receipts" :receipt="receipt" />
    </div>
  </div>
</template>

<script setup>
const { data: receipts } = await useFetch("/api/receipts");
</script>
