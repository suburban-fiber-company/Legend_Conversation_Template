<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowVariants,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/router";
import { getBadgeColor } from "@/utils/get-badge-color";
import Input from "@/components/ui/input/Input.vue";
import { Search } from "lucide-vue-next";

interface TableData {
  date: string;
  customerName: string;
  customerID: string;
  category: string;
  type: string;
  lastConversationMessageText: string;
  priority: string;
  color: TableRowVariants["color"];
}

const tableData: TableData[] = [
  {
    date: "2024-10-15",
    customerName: "John Doe",
    customerID: "C12345",
    category: "Sales",
    type: "Inquiry",
    lastConversationMessageText: "Interested in your new product line.",
    priority: "High",
    color: 'danger'
  },
  {
    date: "2024-10-12",
    customerName: "Jane Smith",
    customerID: "C67890",
    category: "Support",
    type: "Issue",
    lastConversationMessageText: "Having trouble with my order.",
    priority: "Medium",
    color: 'warning'
  },
  {
    date: "2024-10-10",
    customerName: "Michael Johnson",
    customerID: "C34567",
    category: "Feedback",
    type: "Suggestion",
    lastConversationMessageText: "Would love to see more color options.",
    priority: "Low",
    color: 'success'
  },
  {
    date: "2024-10-08",
    customerName: "Emily Davis",
    customerID: "C89012",
    category: "Sales",
    type: "Complaint",
    lastConversationMessageText: "Received a damaged product.",
    priority: "High",
    color: 'danger'
  },
  {
    date: "2024-10-05",
    customerName: "Oliver Wilson",
    customerID: "C56789",
    category: "Support",
    type: "Inquiry",
    lastConversationMessageText: "Need help with my account.",
    priority: "Medium",
    color: 'warning'
  },
  {
    date: "2024-10-03",
    customerName: "Sophia Martinez",
    customerID: "C12345",
    category: "Feedback",
    type: "Suggestion",
    lastConversationMessageText: "Consider offering free shipping.",
    priority: "Low",
    color: 'success'
  },
];
</script>

<template>
  <div class="w-full flex gap-4 -mt-9 justify-end">
    <div class="flex gap-1 justify-end">
      <select class="rounded text-lg px-3">
        <option>Option</option>
        <option>... Others</option>
      </select>
      <div class="flex relative">
        <Input class="text-lg" placeholder="Search" />
        <Button size="icon" class="rounded-l-none absolute top-0 right-0">
          <Search :size="14" />
        </Button>
      </div>
      <Button variant="outline-default" class=""> Export </Button>
    </div>
  </div>
  <Table border>
    <TableHeader class="bg-[#A5A5A8]">
      <TableRow>
        <TableHead class="table-header">Date</TableHead>
        <TableHead class="table-header">Customer Name</TableHead>
        <TableHead class="table-header">Customer ID</TableHead>
        <TableHead class="table-header">Category</TableHead>
        <TableHead class="table-header">Type</TableHead>
        <TableHead class="table-header">Last Conversation</TableHead>
        <TableHead class="table-header">Priority</TableHead>
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
        <TableCell class="text-center">{{ row.customerName }}</TableCell>
        <TableCell class="text-center">{{ row.customerID }}</TableCell>
        <TableCell class="text-center">{{ row.category }}</TableCell>
        <TableCell class="text-center">{{ row.type }}</TableCell>
        <TableCell class="text-center">{{
          row.lastConversationMessageText
        }}</TableCell>
        <TableCell class="text-center">
          <Badge :variant="getBadgeColor(row.priority)">
            {{ row.priority }}
          </Badge>
        </TableCell>
        <TableCell
          class="flex justify-center items-center max-sm:flex-col gap-2"
        >
          <router-link :to="ROUTES.ObligationExcalation(String(index + 1))">
            <Button variant="outline-default">View</Button>
          </router-link>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped></style>
