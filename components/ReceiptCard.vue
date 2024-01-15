<template>
  <div
    class="flex flex-col gap-2 border border-blue-400 rounded-xl p-3 shadow-[0_4px_6px_#94a3b8]"
  >
    <div class="flex justify-between text-gray-600 text-sm">
      <span>{{ receipt.merchantId }}</span>
      <span>{{ moment(receipt.createdAt).format("DD/MM/YYYY HH:mm") }}</span>
    </div>
    <div class="flex justify-between text-xl">
      <span>{{ receipt.storeName }}</span>
      <span class="font-bold">${{ receipt.amount }}</span>
    </div>
    <button class="ml-auto text-white bg-blue-600 py-1 px-6 rounded-lg text-sm">
      Print
    </button>
  </div>
</template>

<script setup>
import moment from "moment";
const props = defineProps(["receipt"]);

const { receipt } = props;
</script>
