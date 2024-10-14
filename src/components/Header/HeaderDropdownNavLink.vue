<script setup lang="ts">
import type { RouteProps } from "@/utils/types";

const { route, name } = defineProps<RouteProps>();
</script>

<template>
  <li class="text-gray-700 hover:text-main">
    <router-link :to="route" class="block px-4 py-2 text-sm">{{ name }}</router-link>
  </li>
</template>
