<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBadgeColor } from "@/utils/get-badge-color";
import { ref } from "vue";

const tableData = ref([
  {
    date: "20 Aug 2024",
    time: "9:00",
    name: "Excel Splitter",
    notification: "CRITICAL_FMN 2",
    expectedResolutionDate: "20 Aug 2024",
    expectedResolutionTime: "3:00",
    numberOfCustomers: 4,
    color: "success" as const,
  },
  {
    date: "20 Aug 2024",
    time: "10:00",
    name: "Cosgrove Splitter 1",
    notification: "CRITICAL_FMN X",
    expectedResolutionDate: "20 Aug 2024",
    expectedResolutionTime: "3:00",
    numberOfCustomers: 1,
    color: "warning" as const,
  },
]);
</script>
<template>
  <Table border class="w-full">
    <TableHeader class="bg-[#A5A5A8]">
      <TableRow>
        <TableHead class="table-header">Date</TableHead>
        <TableHead class="table-header">Time</TableHead>
        <TableHead class="table-header">Name</TableHead>
        <TableHead class="table-header">Notification</TableHead>
        <TableHead class="table-header">Expected Resolution Date</TableHead>
        <TableHead class="table-header">Expected Resolution Time</TableHead>
        <TableHead class="table-header">Number of Customers</TableHead>
        <TableHead class="table-header">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(row, index) in tableData"
        :key="index"
        :color="row.color"
        base="colored"
      >
        <TableCell class="text-center">{{ row.date }}</TableCell>
        <TableCell class="text-center">{{ row.time }}</TableCell>
        <TableCell class="text-center">{{ row.name }}</TableCell>
        <TableCell
          :class="[
            'text-center',
            {
              'text-[#1F659C]': index % 2 == 0,
              'text-[#00ACAC]': index % 2 !== 0,
            },
          ]"
          >{{ row.notification }}</TableCell
        >
        <TableCell class="text-center">{{ row.expectedResolutionDate }}</TableCell>
        <TableCell class="text-center">{{
          row.expectedResolutionTime
        }}</TableCell>
        <TableCell class="text-center">{{ row.numberOfCustomers }}</TableCell>
        <TableCell class="text-center"
          ><Button variant="outline-default"
            >Send Notification</Button
          ></TableCell
        >
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped></style>
