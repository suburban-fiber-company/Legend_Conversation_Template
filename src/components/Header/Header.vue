<script setup lang="ts">
import MobileSideBar from "@/components/SideBar/MobileSideBar.vue";
import HeaderUserDropdown from "@/components/Header/HeaderUserDropdown.vue";
import HeaderNotifications from "@/components/Header/HeaderNotifications.vue";
</script>

<template>
  <header
    class="sticky top-0 z-10 border-b bg-white px-4 md:px-10 py-5 dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="flex items-center justify-between">
      <router-link to="#" class="flex items-center gap-2 font-bold">
        <span class="page-name">{{ $route.name }}</span>
      </router-link>
      <div>
        <div class="relative flex gap-1 md:gap-6 items-center">
          <HeaderNotifications class="max-sm:hidden" />
          <HeaderUserDropdown class="" />
          <MobileSideBar />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.page-name {
  @apply text-2xl font-bold;
}
</style>
