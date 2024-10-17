<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { computed, ref } from "vue";
import SuccessModal from "@/components/Modals/SuccessModal.vue";
import ObligationBookingModal from "@/components/Modals/ObligationBookingModal.vue";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { Search } from "lucide-vue-next";

interface TableData {
  id: string;
  name: string;
  phoneNumber: string;
  emailAddress: string;
  activity: string;
  bookingDate: string;
  durationOfFault: string;
  action: string;
}

const tableData: TableData[] = [
  {
    id: "1",
    name: "John Doe",
    phoneNumber: "08034567890",
    emailAddress: "johndoe@example.com",
    activity: "Air Conditioner Repair",
    bookingDate: "2024-10-15",
    durationOfFault: "2 days",
    action: "Pending",
  },
  {
    id: "2",
    name: "Jane Smith",
    phoneNumber: "07065432109",
    emailAddress: "janesmith@example.com",
    activity: "Refrigerator Repair",
    bookingDate: "2024-10-12",
    durationOfFault: "1 day",
    action: "Completed",
  },
  {
    id: "3",
    name: "Michael Johnson",
    phoneNumber: "09087654321",
    emailAddress: "michaeljohnson@example.com",
    activity: "Washing Machine Repair",
    bookingDate: "2024-10-10",
    durationOfFault: "3 days",
    action: "In Progress",
  },
  {
    id: "4",
    name: "Emily Davis",
    phoneNumber: "08123456789",
    emailAddress: "emilydavis@example.com",
    activity: "TV Repair",
    bookingDate: "2024-10-08",
    durationOfFault: "2 days",
    action: "Pending",
  },
  {
    id: "5",
    name: "Oliver Wilson",
    phoneNumber: "07098765432",
    emailAddress: "oliverwilson@example.com",
    activity: "Oven Repair",
    bookingDate: "2024-10-05",
    durationOfFault: "1 day",
    action: "Completed",
  },
  {
    id: "6",
    name: "Sophia Martinez",
    phoneNumber: "08012345678",
    emailAddress: "sophiamartinez@example.com",
    activity: "Microwave Repair",
    bookingDate: "2024-10-03",
    durationOfFault: "3 days",
    action: "In Progress",
  },
];

const sendingEmail = ref<string | undefined | null>(null);
const setSendingEmail = (v?: string) => (sendingEmail.value = v);
const openSuccessDialog = computed(() => !!sendingEmail.value);
const handleCloseDialog = (isOpen: boolean = false) => {
  if (!isOpen) setSendingEmail();
};

const bookingId = ref<string | undefined | null>(null);
const setBookingId = (v?: string) => (bookingId.value = v);
</script>

<template>
  <div class="w-full flex gap-4 -mt-3 justify-end">
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

  <Table>
    <TableHeader class="bg-[#A5A5A8]">
      <TableRow>
        <TableHead class="table-header">Name</TableHead>
        <TableHead class="table-header">Phone Number</TableHead>
        <TableHead class="table-header">Email Address</TableHead>
        <TableHead class="table-header">Activity</TableHead>
        <TableHead class="table-header">Booking Date</TableHead>
        <TableHead class="table-header">Duration of fault</TableHead>
        <TableHead class="table-header">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(row, index) in tableData"
        :key="index"
        :class="{ 'bg-gray-100 text-slate-900': index % 2 === 0 }"
      >
        <TableCell class="text-center">{{ row.name }}</TableCell>
        <TableCell class="text-center">{{ row.phoneNumber }}</TableCell>
        <TableCell class="text-center">{{ row.emailAddress }}</TableCell>
        <TableCell class="text-center">{{ row.activity }}</TableCell>
        <TableCell class="text-center">{{ row.bookingDate }}</TableCell>
        <TableCell class="text-center">{{ row.durationOfFault }}</TableCell>
        <TableCell
          class="flex justify-center items-center max-sm:flex-col gap-2"
        >
          <Button
            @click="setSendingEmail(row.emailAddress)"
            variant="outline-default"
            >Resend Email</Button
          >
          <Button @click="setBookingId(row.id)" variant="main">Book</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <SuccessModal
    :close="handleCloseDialog"
    close-text="Back"
    desc="You have successfully booked an appointment"
    :is-open="openSuccessDialog"
    @update:is-open="handleCloseDialog"
  />

  <ObligationBookingModal
    :booking-id="bookingId"
    @update:is-open="(s) => s || setBookingId()"
  />
</template>

<style scoped></style>
