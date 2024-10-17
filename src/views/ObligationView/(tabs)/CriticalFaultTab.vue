<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { Search } from "lucide-vue-next";
import CriticalFaultSubTab from "./CriticalFaultSubTab.vue";
</script>

<template>
  <div class="w-full flex gap-4 -mt-4 justify-end">
    <div class="flex gap-1 justify-end">
      <select class="rounded px-3">
        <option>Today</option>
        <option>... Others</option>
      </select>
      <div class="flex relative">
        <Input placeholder="Search" />
        <Button size="icon" class="rounded-l-none absolute top-0 right-0">
          <Search :size="14" />
        </Button>
      </div>
      <Button variant="outline-default"> Export </Button>
    </div>
  </div>
  <Tabs default-value="Critical" class="w-full">
    <Teleport defer to="#teleport-secondary-tablist">
      <TabsList
        class="w-full mt-2 bg-white border border-[#D7D7D7] justify-start"
      >
        <TabsTrigger theme="outline" value="Critical">Critical</TabsTrigger>
        <TabsTrigger theme="outline" value="Major">Major</TabsTrigger>
        <TabsTrigger theme="outline" value="Minor">Minor</TabsTrigger>
        <TabsTrigger theme="outline" value="Installation"
          >Installation</TabsTrigger
        >
        <TabsTrigger theme="outline" value="Subscription"
          >Subscription</TabsTrigger
        >
        <TabsTrigger theme="outline" value="GetLegend">GetLegend</TabsTrigger>
      </TabsList>
    </Teleport>
    <TabsContent value="Critical">
      <CriticalFaultSubTab />
    </TabsContent>
    <TabsContent value="Major">Major</TabsContent>
    <TabsContent value="Minor">Minor</TabsContent>
    <TabsContent value="Installation">Installation</TabsContent>
    <TabsContent value="Subscription">Subscription</TabsContent>
    <TabsContent value="GetLegend">GetLegend</TabsContent>
  </Tabs>
</template>
