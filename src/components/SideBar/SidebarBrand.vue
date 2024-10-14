<script setup lang="ts">
import LegendLogo from "@/components/svgs/LegendLogo.vue";
</script>

<template>
  <router-link to="#" class="flex flex-col items-center gap-2 font-bold">
    <LegendLogo />
    <span class="label-text">Customer Support</span>
  </router-link>
</template>

<style scoped>
.label-text {
  @apply font-normal text-[15px] capitalize text-[#666666];
}
</style>
