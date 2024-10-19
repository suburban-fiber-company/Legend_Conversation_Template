<script lang="ts" setup>
import { computed, ref } from "vue";
import MonthYearCalendar from "../Calendar/MonthYearCalendar.vue";
import BaseModal from "./BaseModal.vue";
import { type DateValue } from "@internationalized/date";
import Button from "../ui/button/Button.vue";
import DialogClose from "@/components/ui/dialog/DialogClose.vue";
import DialogFooter from "@/components/ui/dialog/DialogFooter.vue";
import { useStage } from "@/lib/store/useStage";
import DialogHeader from "../ui/dialog/DialogHeader.vue";
import { ArrowLeftIcon } from "lucide-vue-next";
import SuccessModal from "./SuccessModal.vue";

const props = defineProps<{
  bookingId?: string | null;
}>();

const openBookingDialog = computed(() => !!props.bookingId);

const emit = defineEmits<{
  (e: "update:isOpen", value: boolean): void;
}>();

const handleClose = () => {
  emit("update:isOpen", false);
};

const selectedDate = ref<DateValue | undefined>(undefined);
const showMessage = ref<boolean>(false);
const localDate = computed(() => selectedDate.value?.toDate("Africa/Lagos"));

const slotId = ref<number | null>(null);
const slots = [
  { id: 1, slotName: "Morning Slot", time: ["08:30am", "11:30am"] },
  { id: 2, slotName: "Afternoon Slot", time: ["12:00pm", "03:00pm"] },
  { id: 3, slotName: "Evening Slot", time: ["03:30pm", "06:30pm"] },
];

const { stage, nextStage, prevStage } = useStage(3, () => {
  showMessage.value = false;
});

const openSuccessDialog = computed(() => stage.value == 3);
const handleCloseDialog = (isOpen: boolean = false) => {
  if (!isOpen) {
    stage.value = 1;
    slotId.value = null;
    selectedDate.value = undefined;
    showMessage.value = false;
    handleClose();
  }
};
</script>
<template>
  <BaseModal
    :close="handleClose"
    :is-open="openBookingDialog"
    @update:is-open="handleClose"
  >
    <template #default v-if="stage == 1">
      <MonthYearCalendar class="w-full border-0" v-model="selectedDate" />
      <Label
        v-if="!selectedDate && showMessage"
        class="font-medium text-destructive"
        >Date is required</Label
      >
    </template>

    <template #default v-if="stage == 2">
      <DialogHeader class="self-start text-2xl font-medium font-inter"
        >Select available time</DialogHeader
      >
      <div class="flex flex-col w-full items-center gap-2">
        <div class="flex w-full justify-between items-center border-[#4B5054]">
          <p class="font-inter">
            {{
              localDate?.toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
          <Button @click="prevStage" variant="ghost-main">
            <ArrowLeftIcon :size="18" class="mr-2" />
            Change Date
          </Button>
        </div>

        <hr class="text-[#4B5054] w-full h-[0.6px]" />
      </div>
      <div class="flex flex-col items-center w-full gap-4">
        <div v-for="slot in slots" class="flex flex-col gap-2 w-full">
          <p class="font-inter">{{ slot.slotName }}</p>
          <Button
            @click="() => (slotId = slot.id)"
            class="font-bold text-sm font-inter"
            :variant="slotId == slot.id ? 'main' : 'outline-default'"
            >{{ slot.time[0] }} - {{ slot.time[1] }}</Button
          >
        </div>
        <Label
          v-if="!slotId && showMessage"
          class="font-medium text-destructive"
          >Slot is required</Label
        >
      </div>
    </template>

    <template #footer>
      <DialogFooter class="flex justify-center">
        <DialogClose>
          <Button variant="secondary" @click="handleClose"> Cancel </Button>
        </DialogClose>
        <Button
          v-if="stage == 1"
          @click="
            () => {
              nextStage(!!localDate);
              showMessage = true;
            }
          "
          :disable="!localDate"
          variant="main"
        >
          Set Date
        </Button>

        <Button
          v-if="stage == 2"
          @click="
            () => {
              nextStage(!!localDate && !!slotId);
              showMessage = true;
            }
          "
          :disable="!localDate"
          variant="main"
        >
          Confirm Booking
        </Button>
      </DialogFooter>
    </template>
  </BaseModal>
  <SuccessModal
    :close="handleCloseDialog"
    close-text="Back"
    desc="You have successfully sent an email"
    :is-open="openSuccessDialog"
    @update:is-open="handleCloseDialog"
  />
</template>
