<script lang="ts" setup>
import Badge from "@/components/ui/badge/Badge.vue";
import Button from "@/components/ui/button/Button.vue";
import Card from "@/components/ui/card/Card.vue";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { XIcon } from "lucide-vue-next";
import { ROUTES } from "@/router";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const data = [
  { label: "Customer Overall Experience", value: "7" },
  { label: "Customer Experience with Agent", value: "Happy" },
  { label: "Customer's Comment", value: "The service was great" },
];
</script>
<template>
  <Card
    default-value="bookings"
    class="grid sm:grid-cols-2 gap-8 relative sm:gap-16 m-4 sm:m-11 container-xy"
  >
    <router-link
      class="absolute top-4 right-4 shadow-md shadow-zinc-400 rounded-sm bg-white p-1"
      :to="ROUTES.Obligations"
    >
      <XIcon class="text-[#FD4F00]" :size="21" />
    </router-link>
    <div class="flex flex-col gap-3 sm:border-r sm:border-[#DEE1E6] sm:pr-28">
      <div class="grid grid-cols-2 gap-3">
        <p>Customer's Name</p>
        <p>Mr Abdulaziz Faghi</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <p>Customer's ID</p>
        <p>0012</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <p>Fiber Status</p>
        <Badge class="w-max" variant="success">Active</Badge>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <p>Subscription Status</p>
        <Badge class="w-max" variant="success">Active</Badge>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-3">
        <p>Agent's Name</p>
        <p>Mr Abdulaziz Faghi</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <p>Priority</p>
        <p :class="'text-destructive'">High</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <p>Channel</p>
        <p>Lounge (Wuse 2)</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <p>Agent Comment</p>
        <p>He wanted to destroy one of our computers</p>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <p>Customer Feedback Type</p>
        <Badge class="w-max" variant="danger">Negative</Badge>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <p>Customer Experience</p>
        <Badge class="w-max" variant="danger">Frustrated</Badge>
      </div>
    </div>

    <div class="col-span-2 flex flex-col gap-4 items-center">
      <div
        v-if="$route.query.action == 'escalate'"
        class="flex w-full gap-8 sm:gap-16 justify-between"
      >
        <div class="flex flex-col gap-2 w-full">
          <Label for="responsible-unit">Responsible Unit</Label>
          <Select id="responsible-unit" class="w-full">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Select Unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>Select Unit</SelectLabel>
            </SelectContent>
          </Select>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <Label for="responsible-unit">Responsible Individual</Label>
          <Select id="responsible-unit" class="w-full">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Select Individual" />
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>Select Unit</SelectLabel>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div v-if="$route.query.action == 'view'" class="w-full">
        <Table>
          <TableBody>
            <TableRow
              v-for="(row, index) in data"
              :key="index"
              base="colored"
              class="border-0"
              :color="index % 2 == 0 ? 'gray' : undefined"
            >
              <TableCell class="md:w-3/12 font-semibold text-[#4B5054]">{{ row.label }}</TableCell>
              <TableCell class="text-[#4B5054]">{{ row.value }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Button class="w-full md:w-6/12 text-lg font-semibold" variant="main"
        >Escalate</Button
      >
    </div>
  </Card>
</template>
