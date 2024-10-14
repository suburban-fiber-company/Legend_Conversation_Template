<script lang="ts" setup>
import SideBarContent from "@/components/SideBar/SideBarContent.vue";
import SidebarBrand from "@/components/SideBar/SidebarBrand.vue";
</script>
<template>
  <div
    class="hidden lg:block lg:w-72 lg:shrink-0 lg:border-r lg:bg-[#333333] dark:lg:bg-gray-800"
  >
    <div class="flex h-full flex-col justify-between py-6 px-4 bg-[#333333]">
      <div class="space-y-6">
        <SidebarBrand />
        <SideBarContent />
      </div>
    </div>
  </div>
</template>
