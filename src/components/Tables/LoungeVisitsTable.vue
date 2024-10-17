<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowVariants,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBadgeColor } from "@/utils/get-badge-color";

interface LoungeVisitData {
  date: string;
  userId: string;
  customerName: string;
  agentName: string;
  category: string;
  type: string;
  lastConversation: string;
  customerFeedback: string;
  agentAction: string;
  color: TableRowVariants["color"];
}

const data: LoungeVisitData[] = [
  {
    date: "Aug 13, 2024 12:30PM",
    userId: "625",
    customerName: "Oluchi Daramola",
    agentName: "Victor John",
    category: "Fault",
    type: "Major Fault",
    lastConversation: "Customer called to find out why he was on LOS",
    customerFeedback: "Satisfied",
    agentAction: "Resolved",
    color: "success",
  },
  {
    date: "Aug 13, 2024 12:30PM",
    userId: "625",
    customerName: "Nneka Adeyemi",
    agentName: "Victor John",
    category: "Installation",
    type: "Installation",
    lastConversation: "Customer called to find out why he was on LOS",
    customerFeedback: "Satisfied",
    agentAction: "Resolved",
    color: "danger",
  },
  {
    date: "Aug 13, 2024 12:30PM",
    userId: "625",
    customerName: "Kelechi Osifo",
    agentName: "Victor John",
    category: "Installation",
    type: "Installation",
    lastConversation: "Customer called to find out why he was on LOS",
    customerFeedback: "Frustrated Unmanageable",
    agentAction: "Follow-up",
    color: "warning",
  },
];
</script>
<template>
  <Table>
    <TableHeader class="bg-[#E4E4E5]">
      <TableRow>
        <TableHead class="table-header">Date</TableHead>
        <TableHead class="table-header">User ID</TableHead>
        <TableHead class="table-header">Customer Name</TableHead>
        <TableHead class="table-header">Agent Name</TableHead>
        <TableHead class="table-header">Category</TableHead>
        <TableHead class="table-header">Type</TableHead>
        <TableHead class="table-header">Last Conversation</TableHead>
        <TableHead class="table-header">Customer Feedback</TableHead>
        <TableHead class="table-header">Agent Action</TableHead>
        <TableHead class="table-header">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(row, index) in data"
        :key="index"
        :color="row.color"
        base="colored"
      >
        <TableCell>{{ row.date }}</TableCell>
        <TableCell class="text-[#4B5054] text-base">{{ row.userId }}</TableCell>
        <TableCell>{{ row.customerName }}</TableCell>
        <TableCell>{{ row.agentName }}</TableCell>
        <TableCell>{{ row.category }}</TableCell>
        <TableCell>{{ row.type }}</TableCell>
        <TableCell>{{ row.lastConversation }}</TableCell>
        <TableCell>
          <Badge
            class="w-fit text-center"
            :variant="getBadgeColor(row.customerFeedback)"
            >{{ row.customerFeedback }}</Badge
          >
        </TableCell>
        <TableCell>
          <Badge
            class="w-fit text-center"
            :variant="getBadgeColor(row.agentAction)"
            >{{ row.agentAction }}</Badge
          >
        </TableCell>
        <TableCell>
          <Button variant="link">View</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped>
.table-header {
  @apply text-[#0F151F] font-semibold text-base;
}
</style>
