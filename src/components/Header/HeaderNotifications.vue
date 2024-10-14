<script setup lang="ts">
import { Bell } from "lucide-vue-next";

withDefaults(defineProps<{ hasNotificaitions?: boolean; notificationCount?: number }>(), {
  hasNotificaitions: false,
  notificationCount: 0,
});
</script>

<template>
  <div class="relative order-1">
    <Bell :size="30" alt="notifications" />
    <div
      v-if="hasNotificaitions"
      class="absolute -right-2 -top-3 grid h-5 min-w-5 place-content-center rounded-full bg-red-600 p-1 text-xs text-white"
    >
      {{ notificationCount }}
    </div>
  </div>
</template>
