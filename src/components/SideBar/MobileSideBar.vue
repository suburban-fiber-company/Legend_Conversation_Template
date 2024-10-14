<script lang="ts" setup>
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBarContent from "@/components/SideBar/SideBarContent.vue";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-vue-next";
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline" size="icon" class="order-4 shrink-0 lg:hidden">
        <Menu class="h-5 w-5" />
        <span class="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="flex bg-[#333333] flex-col">
      <SideBarContent />
    </SheetContent>
  </Sheet>
</template>
