<template>
  <div v-if="receipt" class="h-full">
    <embed v-if="isMobile" src="/receipt.pdf#navpanes=0" width="100%" />
    <embed v-else src="/receipt.pdf#navpanes=0" width="100%" height="100%" />
  </div>

  <div v-else class="w-full h-full flex justify-center items-center">
    <span class="text-xl font-semibold">No receipt found.</span>
  </div>
</template>

<script setup lang="ts">
const { isMobile } = useDevice();
const route = useRoute();
const { data: receipt } = await useFetch(`/api/receipts/hash/${route.query.v}`);
</script>
