<script setup lang="ts">
import CriticalFaultActiveTable from "@/components/Tables/CriticalFaultActiveTable.vue";
import CriticalFaultApprovalTable from "@/components/Tables/CriticalFaultApprovalTable.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
  <Tabs default-value="Active">
    <TabsList class="bg-transparent gap-2">
      <TabsTrigger theme="solid" base="empty" value="Active"
        >Active</TabsTrigger
      >
      <TabsTrigger theme="solid" base="empty" value="Approval"
        >Approval</TabsTrigger
      >
    </TabsList>
    <TabsContent value="Active">
      <CriticalFaultActiveTable />
    </TabsContent>
    <TabsContent value="Approval">
      <CriticalFaultApprovalTable />
    </TabsContent>
  </Tabs>
</template>
