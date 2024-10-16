<script setup lang="ts">
import StatsCard from "@/components/Dashboard/StatsCard.vue";
import LoungeVisitsTable from "@/components/Tables/LoungeVisitsTable.vue";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import BookingTab from "./(tabs)/BookingTab.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-vue-next";
</script>

<template>
  <Tabs default-value="bookings" class="w-full container-xy">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <TabsList class="w-full bg-white border border-[#D7D7D7] justify-start">
          <TabsTrigger theme="outline" value="my-tickets"> My Tickets </TabsTrigger>
          <TabsTrigger theme="outline" value="bookings"> Bookings </TabsTrigger>
          <TabsTrigger theme="outline" value="critical-fault">
            Critical Fault
          </TabsTrigger>
          <TabsTrigger theme="outline" value="escalations"> Escalations </TabsTrigger>
        </TabsList>

        <div class="w-full flex gap-4 justify-end">
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
          </div>
        </div>
      </div>

      <TabsContent value="my-tickets"> tickets </TabsContent>
      <TabsContent value="bookings"> <BookingTab /> </TabsContent>
      <TabsContent value="critical-fault"> critical here. </TabsContent>
      <TabsContent value="escalations"> escalations </TabsContent>
    </div>
  </Tabs>
</template>

<style>
.header {
  @apply text-xl font-semibold;
}
</style>
