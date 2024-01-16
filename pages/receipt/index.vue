<template>
  <div v-if="receipt" class="w-full h-full">
    <iframe
      src="/receipt.pdf"
      class="w-full h-full"
      loading="lazy"
      title="PDF-file"
    ></iframe>
  </div>

  <div v-else class="w-full h-full flex justify-center items-center">
    <span class="text-xl font-semibold">No receipt found.</span>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: receipt } = await useFetch(`/api/receipts/hash/${route.query.v}`);
</script>
