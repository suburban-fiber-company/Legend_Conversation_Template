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
import { computed, ref } from "vue";
import SuccessModal from "@/components/Modals/SuccessModal.vue";
import ObligationBookingModal from "@/components/Modals/ObligationBookingModal.vue";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { Search } from "lucide-vue-next";

interface TableData {
  ticketNumber: string;
  name: string;
  phoneNumber: string;
  faultCategory: string;
  faultType: string;
  date: string;
  note: string;
}

const tableData: TableData[] = [
  {
    ticketNumber: "T12345",
    name: "John Doe",
    phoneNumber: "08034567890",
    faultCategory: "Electronics",
    faultType: "TV Repair",
    date: "2024-10-15",
    note: "TV screen is flickering.",
  },
  {
    ticketNumber: "T67890",
    name: "Jane Smith",
    phoneNumber: "07065432109",
    faultCategory: "Appliances",
    faultType: "Refrigerator Repair",
    date: "2024-10-12",
    note: "Refrigerator not cooling properly.",
  },
  {
    ticketNumber: "T34567",
    name: "Michael Johnson",
    phoneNumber: "09087654321",
    faultCategory: "Plumbing",
    faultType: "Leakage",
    date: "2024-10-10",
    note: "Sink is leaking.",
  },
  {
    ticketNumber: "T89012",
    name: "Emily Davis",
    phoneNumber: "08123456789",
    faultCategory: "Electrical",
    faultType: "Wiring Issue",
    date: "2024-10-08",
    note: "Lights are flickering.",
  },
  {
    ticketNumber: "T56789",
    name: "Oliver Wilson",
    phoneNumber: "07098765432",
    faultCategory: "Electronics",
    faultType: "Computer Repair",
    date: "2024-10-05",
    note: "Computer is running slow.",
  },
  {
    ticketNumber: "T12345",
    name: "Sophia Martinez",
    phoneNumber: "08012345678",
    faultCategory: "Appliances",
    faultType: "Washing Machine Repair",
    date: "2024-10-03",
    note: "Washing machine is not draining.",
  },
];
</script>

<template>
  <div class="w-full flex gap-4 mt-1 justify-end">
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

  <Table border>
    <TableHeader class="bg-[#A5A5A8]">
      <TableRow>
        <TableHead class="table-header">Ticket Number</TableHead>
        <TableHead class="table-header">Name</TableHead>
        <TableHead class="table-header">Phone Number</TableHead>
        <TableHead class="table-header">Fault Category</TableHead>
        <TableHead class="table-header">Fault Type</TableHead>
        <TableHead class="table-header">Date</TableHead>
        <TableHead class="table-header">Note</TableHead>
        <!-- <TableHead class="table-header">Action</TableHead> -->
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(row, index) in tableData"
        :key="index"
        :color="index % 2 != 0 ? 'gray' : 'white'"
        base="colored"
      >
        <TableCell class="text-center">{{ row.ticketNumber }}</TableCell>
        <TableCell class="text-center">{{ row.name }}</TableCell>
        <TableCell class="text-center">{{ row.phoneNumber }}</TableCell>
        <TableCell class="text-center">{{ row.faultCategory }}</TableCell>
        <TableCell class="text-center">{{ row.faultType }}</TableCell>
        <TableCell class="text-center">{{ row.date }}</TableCell>
        <TableCell class="text-center">{{ row.note }}</TableCell>
        <!-- <TableCell
          class="flex justify-center items-center max-sm:flex-col gap-2"
        >
          <Button
            @click="setSendingEmail(row.emailAddress)"
            variant="outline-default"
            >Resend Email</Button
          >
          <Button @click="setBookingId(row.id)" variant="main">Book</Button>
        </TableCell> -->
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped></style>
