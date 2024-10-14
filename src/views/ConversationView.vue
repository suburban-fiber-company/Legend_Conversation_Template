<script setup lang="ts">
import StatsCard from "@/components/Dashboard/StatsCard.vue";
import LoungeVisitsTable from "@/components/Tables/LoungeVisitsTable.vue";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-vue-next";
</script>

<template>
  <Tabs default-value="lounge" class="w-full">
    <div class="flex flex-col">
      <div class="flex flex-col gap-4 container-xy">
        <TabsList class="w-full bg-white border border-[#D7D7D7] justify-start">
          <TabsTrigger theme="outline" value="call-logs"> Call Logs </TabsTrigger>
          <TabsTrigger theme="outline" value="emails-logs"> Emails Logs </TabsTrigger>
          <TabsTrigger theme="outline" value="chats"> Chats </TabsTrigger>
          <TabsTrigger theme="outline" value="lounge"> Lounge </TabsTrigger>
        </TabsList>

        <div class="w-full flex gap-4 justify-end">
          <div class="flex gap-1 justify-end">
            <select class="rounded px-3">
              <option>Today</option>
              <option>... Others</option>
            </select>
            <div class="flex relative">
              <Input />
              <Button size="icon" class="rounded-l-none absolute top-0 right-0">
                <Search :size="14" />
              </Button>
            </div>
          </div>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      <TabsContent value="call-logs">
        <div class="bg-white flex flex-col gap-4 p-4">
          <div class="flex justify-start items-center gap-2 md:gap-5">
            <p class="header">Calls</p>
            <select class="rounded border p-1 px-3 text-[#6D7D93]">
              <option>Today</option>
              <option>... Others</option>
            </select>
          </div>

          <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Calls" :count="4952" desc="Per week" />
            <StatsCard title="Faults" :count="2709" desc="8% Increase from last week" />
            <StatsCard title="Enquires" :count="549" desc="8% Decrease from last week" />
            <StatsCard
              title="Installations"
              :count="1701"
              desc="8% Achieved From Target"
            />
          </div>

          <LoungeVisitsTable />
        </div>
      </TabsContent>
      <TabsContent value="emails-logs"> email here. </TabsContent>
      <TabsContent value="chats"> chats here. </TabsContent>
      <TabsContent value="lounge">
        <div class="bg-white flex flex-col gap-4 p-4">
          <div class="flex justify-start items-center gap-2 md:gap-5">
            <p class="header">Lounge Visits</p>
            <select class="rounded border p-1 px-3 text-[#6D7D93]">
              <option>Today</option>
              <option>... Others</option>
            </select>
          </div>

          <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Visits" :count="24" desc="Per week" />
            <StatsCard title="Faults" :count="12" desc="8% Increase from last week" />
            <StatsCard title="Enquires" :count="7" desc="8% Decrease from last week" />
            <StatsCard title="Installations" :count="6" desc="8% Achieved From Target" />
          </div>

          <LoungeVisitsTable />
        </div>
      </TabsContent>
    </div>
  </Tabs>
</template>

<style>
.header {
  @apply text-xl font-semibold;
}
</style>
