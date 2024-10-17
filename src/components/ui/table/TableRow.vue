<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { TableRowVariants, tableRowVariants } from ".";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  color?: TableRowVariants["color"];
  base?: TableRowVariants["base"];
}>();
</script>

<template>
  <tr
    :class="
      cn(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        tableRowVariants({ color, base }),
        props.class
      )
    "
  >
    <slot />
  </tr>
</template>
