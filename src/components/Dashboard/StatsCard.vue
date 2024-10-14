<script lang="ts" setup>
import Card from "@/components/ui/card/Card.vue";
import CardDescription from "@/components/ui/card/CardDescription.vue";
import CardTitle from "../ui/card/CardTitle.vue";

defineProps<{
  title: string;
  count: number;
  desc?: string;
}>();
</script>
<template>
  <Card class="bg-[#4B5054] py-5 px-6 flex flex-col gap-6 text-white rounded-xl">
    <p class="text-base">{{ title }}</p>
    <CardTitle class="text-2xl font-bold">24</CardTitle>
    <CardDescription class="text-xs font-bold text-[#E5E5EA]" v-if="desc">{{
      desc
    }}</CardDescription>
  </Card>
</template>
<style scoped></style>
