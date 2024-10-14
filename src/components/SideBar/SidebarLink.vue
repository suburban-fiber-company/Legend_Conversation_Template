<script lang="ts" setup>
import { useAppSidebarMenuOption } from "@/utils/hooks/toogle";
import type { RouteProps } from "@/utils/types";
import { ChevronDown } from "lucide-vue-next";
import { computed, h } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  name: string;
  to?: string;
  subMenuLinks?: RouteProps[];
}>();
const { isSidebarMenuOptionOpen, toggleSidebarMenuOption } = useAppSidebarMenuOption;
const _isSidebarOpen = isSidebarMenuOptionOpen(props.name);
const _component = props.subMenuLinks?.length
  ? h("div", { role: "button", tabindex: 0 })
  : RouterLink;
</script>

<template>
  <component
    :is="_component"
    @click="() => subMenuLinks?.length && toggleSidebarMenuOption(name)"
    :to="to ?? '#'"
    :class="[
      'flex justify-between rounded-md px-6 py-4 text-sm font-medium text-[#B3B3B3] dark:text-gray-400',
      {
        active:
          $route.path == to || subMenuLinks?.some((sml) => sml.route == $route.path),
      },
    ]"
  >
    <div class="flex gap-2">
      <slot name="icon" />
      <div class="flex flex-col gap-5">
        {{ name }}
        <div
          class="flex flex-wrap flex-col gap-3"
          v-if="subMenuLinks?.length && _isSidebarOpen"
        >
          <router-link v-for="menu in subMenuLinks" :to="menu.route">{{
            menu.name
          }}</router-link>
        </div>
      </div>
    </div>

    <ChevronDown
      v-if="subMenuLinks?.length"
      :size="20"
      :class="[_isSidebarOpen ? 'rotate-180' : '']"
    />
  </component>
</template>

<style scoped>
.active,
a:hover {
  @apply bg-[#4B4B4B] text-[#EBEDF0] dark:bg-gray-700 dark:text-gray-50;
}
</style>
