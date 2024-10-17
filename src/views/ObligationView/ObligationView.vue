<script setup lang="ts">
import BookingTab from "./(tabs)/BookingTab.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EscalationTab from "./(tabs)/EscalationTab.vue";
import CriticalFaultTab from "./(tabs)/CriticalFaultTab.vue";
</script>

<template>
  <Tabs default-value="bookings" class="w-full container-xy">
    <div class="flex flex-col gap-1">
      <div class="flex flex-col gap-1">
        <TabsList class="w-full bg-white border border-[#D7D7D7] justify-start">
          <TabsTrigger theme="outline" value="my-tickets">
            My Tickets
          </TabsTrigger>
          <TabsTrigger theme="outline" value="bookings"> Bookings </TabsTrigger>
          <TabsTrigger theme="outline" value="critical-fault">
            Critical Fault
          </TabsTrigger>
          <TabsTrigger theme="outline" value="escalations">
            Escalations
          </TabsTrigger>
        </TabsList>

        <div id="teleport-secondary-tablist"></div>
      </div>

      <TabsContent  class="flex flex-col gap-4 w-full" value="my-tickets"> tickets </TabsContent>
      <TabsContent  class="flex flex-col gap-4 w-full" value="bookings"> <BookingTab /> </TabsContent>
      <TabsContent  class="flex flex-col gap-4 w-full" value="critical-fault"> <CriticalFaultTab /> </TabsContent>
      <TabsContent  class="flex flex-col gap-4 w-full" value="escalations"> <EscalationTab /> </TabsContent>
    </div>
  </Tabs>
</template>

<style>
.header {
  @apply text-xl font-semibold;
}
</style>
