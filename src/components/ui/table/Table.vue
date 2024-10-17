<script setup lang="ts">
import { type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  border?: boolean;
}>();
</script>

<template>
  <div class="relative w-full overflow-auto">
    <table
      :class="
        cn(
          'w-full caption-bottom text-sm',
          { 'table-bordered': $props.border },
          props.class
        )
      "
    >
      <slot />
    </table>
  </div>
</template>

<style>
table.table-bordered,
table.table-bordered th,
table.table-bordered td {
  border: 1px solid #c6c1a9;
}
</style>
