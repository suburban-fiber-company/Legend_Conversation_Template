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
          critical_fmn1: "Critical_FMN 1",
          critical_fmn2: "Critical_FMN 2",
          critical_fmnX: "Critical_FMN X",
          critical_fmr: "Critical_FMR",
          expectedResolutionDate: "20 Aug 2024",
          expectedResolutionTime: "3:00",
          numberOfCustomers: 10,
        },
        {
          date: "19 Aug 2024",
          time: "10:00",
          name: "Cosgrove Splitter 1",
          critical_fmn1: "Critical_FMN 1",
          critical_fmn2: "Critical_FMN 2",
          critical_fmnX: "Critical_FMN X",
          critical_fmr: "Critical_FMR",
          expectedResolutionDate: "19 Aug 2024",
          expectedResolutionTime: "3:00",
          numberOfCustomers: 20,
        },
        {
          date: "18 Aug 2024",
          time: "11:00",
          name: "Road 69 Splitter",
          critical_fmn1: "Critical_FMN 1",
          critical_fmn2: "Critical_FMN 2",
          critical_fmnX: "Critical_FMN X",
          critical_fmr: "Critical_FMR",
          expectedResolutionDate: "18 Aug 2024",
          expectedResolutionTime: "2:00",
          numberOfCustomers: 15,
        },
        {
          date: "17 Aug 2024",
          time: "12:00",
          name: "Thujaville Splitter",
          critical_fmn1: "Critical_FMN 1",
          critical_fmn2: "Critical_FMN 2",
          critical_fmnX: "Critical_FMN X",
          critical_fmr: "Critical_FMR",
          expectedResolutionDate: "17 Aug 2024",
          expectedResolutionTime: "1:00",
          numberOfCustomers: 25,
        },
        {
          date: "16 Aug 2024",
          time: "9:00",
          name: "Cosgrove Splitter 2",
          critical_fmn1: "Critical_FMN 1",
          critical_fmn2: "Critical_FMN 2",
          critical_fmnX: "Critical_FMN X",
          critical_fmr: "Critical_FMR",
          expectedResolutionDate: "16 Aug 2024",
          expectedResolutionTime: "6:00",
          numberOfCustomers: 30,
        },
        {
          date: "15 Aug 2024",
          time: "11:00",
          name: "Excel Splitter",
          critical_fmn1: "Critical_FMN 1",
          critical_fmn2: "Critical_FMN 2",
          critical_fmnX: "Critical_FMN X",
          critical_fmr: "Critical_FMR",
          expectedResolutionDate: "15 Aug 2024",
          expectedResolutionTime: "5:00",
          numberOfCustomers: 40,
        },
      ]);
</script>
<template>
<Table class="w-full">
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
        <TableHead class="table-header">Number of Customers</TableHead>
        <TableHead class="table-header">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(row, index) in tableData"
        :key="index"
        :class="{ 'bg-gray-100 text-slate-900': index % 2 === 0 }"
      >
        <TableCell class="text-center">{{ row.date }}</TableCell>
        <TableCell class="text-center">{{ row.time }}</TableCell>
        <TableCell class="text-center">{{ row.name }}</TableCell>
        <TableCell class="text-center">
          <Badge :variant="getBadgeColor(row.critical_fmn1)">
            {{ row.critical_fmn1 }}
          </Badge>
        </TableCell>
        <TableCell class="text-center">
          <Badge :variant="getBadgeColor(row.critical_fmn2)">
            {{ row.critical_fmn2 }}
          </Badge>
        </TableCell>
        <TableCell class="text-center">
          <Badge :variant="getBadgeColor(row.critical_fmnX)">
            {{ row.critical_fmnX }}
          </Badge>
        </TableCell>
        <TableCell class="text-center">
          <Badge :variant="getBadgeColor(row.critical_fmr)">
            {{ row.critical_fmr }}
          </Badge>
        </TableCell>
        <TableCell class="text-center">
          {{ row.expectedResolutionDate }}
        </TableCell>
        <TableCell class="text-center">
          {{ row.expectedResolutionTime }}
        </TableCell>
        <TableCell class="text-center">{{ row.numberOfCustomers }}</TableCell>
        <TableCell class="text-center">
          <Button variant="outline-default">Send Notification</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped></style>
