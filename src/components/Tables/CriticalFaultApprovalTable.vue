<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { computed, ref } from "vue";
import CriticalBadge from "@/components/Dashboard/CriticalBadge.vue";
import DialogHeader from "@/components/ui/dialog/DialogHeader.vue";
import BaseModal from "@/components/Modals/BaseModal.vue";
import { useStage } from "@/lib/store/useStage";

const tableData = ref([
  {
    id: 1,
    date: "20 Aug 2024",
    time: "9:00",
    name: "Excel Splitter",
    critical_fmn1: "Triggered",
    critical_fmn2: "Triggered",
    critical_fmnX: "Not Required",
    critical_fmr: "Not triggered",
    expectedResolutionDate: "20 Aug 2024",
    expectedResolutionTime: "3:00",
    colors: "warning" as const,
    isApproved: true,
  },
  {
    id: 2,
    date: "19 Aug 2024",
    time: "10:00",
    name: "Cosgrove Splitter 1",
    critical_fmn1: "Not Triggered",
    critical_fmn2: "Not Required",
    critical_fmnX: "Not Required",
    critical_fmr: "Not triggered",
    expectedResolutionDate: "19 Aug 2024",
    expectedResolutionTime: "3:00",
    colors: "danger" as const,
    isApproved: false,
  },
  {
    id: 3,
    date: "18 Aug 2024",
    time: "11:00",
    name: "Road 69 Splitter",
    critical_fmn1: "Triggered",
    critical_fmn2: "Not Required",
    critical_fmnX: "Not Required",
    critical_fmr: "Not triggered",
    expectedResolutionDate: "18 Aug 2024",
    expectedResolutionTime: "2:00",
    colors: "success" as const,
    isApproved: false,
  },
  {
    id: 4,
    date: "17 Aug 2024",
    time: "12:00",
    name: "Thujaville Splitter",
    critical_fmn1: "Triggered",
    critical_fmn2: "Not Required",
    critical_fmnX: "Not Required",
    critical_fmr: "Not triggered",
    expectedResolutionDate: "17 Aug 2024",
    expectedResolutionTime: "1:00",
    colors: "warning" as const,
    isApproved: false,
  },
  {
    id: 5,
    date: "16 Aug 2024",
    time: "9:00",
    name: "Cosgrove Splitter 2",
    critical_fmn1: "Triggered",
    critical_fmn2: "Not Required",
    critical_fmnX: "Not Required",
    critical_fmr: "Not triggered",
    expectedResolutionDate: "16 Aug 2024",
    expectedResolutionTime: "6:00",
    colors: "danger" as const,
    isApproved: true,
  },
  {
    id: 6,
    date: "15 Aug 2024",
    time: "11:00",
    name: "Excel Splitter",
    critical_fmn1: "Triggered",
    critical_fmn2: "Not Required",
    critical_fmnX: "Not Required",
    critical_fmr: "Not triggered",
    expectedResolutionDate: "15 Aug 2024",
    expectedResolutionTime: "5:00",
    colors: "success" as const,
    isApproved: false,
  },
]);

const toggleActiveStatus = (id: number) => {
  tableData.value = tableData.value.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isApproved: !item.isApproved,
      };
    }
    return item;
  });
};

const faultId = ref<number | null>(null);
const openDialog = computed(() => !!faultId.value);
const setFaultId = (v: number | null) => (faultId.value = v);
const { stage, nextStage } = useStage(2);
const handleClose = () => {
  // reset form value tooo
  stage.value = 1;
  setFaultId(null);
};
</script>
<template>
  <Table border class="w-full">
    <TableHeader class="bg-[#A5A5A8]">
      <TableRow>
        <TableHead class="table-header">Date</TableHead>
        <TableHead class="table-header">Time</TableHead>
        <TableHead class="table-header">Name</TableHead>
        <TableHead class="table-header">Critical_FMN 1</TableHead>
        <TableHead class="table-header">Critical_FMN 2</TableHead>
        <TableHead class="table-header">Critical_FMN X</TableHead>
        <TableHead class="table-header">Critical_FMR</TableHead>
        <TableHead class="table-header">Expected Resolution Date</TableHead>
        <TableHead class="table-header">Expected Resolution Time</TableHead>
        <TableHead class="table-header">Status</TableHead>
        <TableHead class="table-header">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(row, index) in tableData"
        :key="index"
        :color="row.colors"
        base="colored"
      >
        <TableCell class="text-center">{{ row.date }}</TableCell>
        <TableCell class="text-center">{{ row.time }}</TableCell>
        <TableCell class="text-center">{{ row.name }}</TableCell>
        <TableCell class="text-center">
          <CriticalBadge :value="row.critical_fmn1" />
        </TableCell>
        <TableCell class="text-center">
          <CriticalBadge :value="row.critical_fmn2" />
        </TableCell>
        <TableCell class="text-center">
          <CriticalBadge :value="row.critical_fmnX" />
        </TableCell>
        <TableCell class="text-center">
          <CriticalBadge :value="row.critical_fmr" />
        </TableCell>
        <TableCell class="text-center">
          {{ row.expectedResolutionDate }}
        </TableCell>
        <TableCell class="text-center">
          {{ row.expectedResolutionTime }}
        </TableCell>
        <TableCell class="text-center">
          <Button
            @click="() => toggleActiveStatus(row.id)"
            :variant="!row.isApproved ? 'gray' : 'main'"
            >{{ !row.isApproved ? "Approve" : "Approved" }}</Button
          >
        </TableCell>
        <TableCell class="text-center">
          <Button @click="() => setFaultId(row.id)" variant="outline-default"
            >Change</Button
          >
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <BaseModal
    :close="handleClose"
    :is-open="openDialog"
    @update:is-open="handleClose"
  >
    <template v-if="stage == 1">
      <DialogHeader class="text-3xl text-[#262324] font-bold self-center"
        >Send Notification</DialogHeader
      >
      <div class="flex w-full gap-8">
        <div class="flex w-full flex-col gap-1">
          <label for="date">Date</label>
          <input class="border p-2 rounded-md" type="date" />
        </div>
        <div class="flex w-full flex-col gap-1">
          <label for="date">Time</label>
          <input class="border p-2 rounded-md" type="time" />
        </div>
      </div>

      <Button
        class="w-full md:w-8/12"
        @click="() => nextStage()"
        variant="main"
      >
        Set Date
      </Button>
    </template>
    <template v-else>
      <img src="@/assets/images/checked.gif" alt="checked gif" />
      <p class="text-xl font-bold">Notification Sent</p>
    </template>
  </BaseModal>
</template>

<style scoped></style>
