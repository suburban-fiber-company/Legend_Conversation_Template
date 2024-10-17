<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";
import { tabVariants, TabVariants } from ".";

const props = defineProps<
  TabsTriggerProps & {
    class?: HTMLAttributes["class"];
    theme?: TabVariants["theme"];
    base?: TabVariants["base"];
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="cn(tabVariants({ theme, base }), props.class)"
  >
    <span class="truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
