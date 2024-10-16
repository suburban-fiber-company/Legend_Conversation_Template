<script setup lang="ts">
import SideBar from "@/components/SideBar/SideBar.vue";
import Header from "@/components/Header/Header.vue";
</script>
<template>
  <div class="flex h-screen w-full">
    <!-- Sidebar for large screens -->
    <SideBar />

    <!-- Main Content -->
    <div class="w-full">
      <Header />
      <main class="bg-[#F3f3f3] h-[calc(100vh-80.8px)] overflow-y-auto">
        <div class="">
          <slot />
        </div>
        <slot name="has-padding" id="has-padding" class="container-xy" />
      </main>
    </div>
  </div>
</template>
