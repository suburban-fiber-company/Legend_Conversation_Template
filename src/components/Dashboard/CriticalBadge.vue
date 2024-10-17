<script setup lang="ts">
import { getBadgeColor } from "@/utils/get-badge-color";
import Badge from "@/components/ui/badge/Badge.vue";
import { Dot, TriangleAlert } from "lucide-vue-next";

defineProps<{
  value: string;
}>();
</script>

<template>
  <Badge :variant="getBadgeColor(value)">
    <TriangleAlert v-if="value.toLowerCase() == 'not triggered'" class="mr-0" />
    <Dot v-else class="mr-0" />
    {{ value }}
  </Badge>
</template>
