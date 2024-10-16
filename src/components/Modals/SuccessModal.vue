<script lang="ts" setup>
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    close: Function;
    header?: string;
    desc?: string;
    closeText?: string;
  }>(),
  { header: "Sucessful!" }
);

const emit = defineEmits<{
  (e: "update:isOpen", value: boolean): void;
}>();

const handleClose = () => {
  emit("update:isOpen", false);
  props.close();
};
</script>
<template>
  <Dialog :open="isOpen" modal @update:open="(v) => v || handleClose()">
    <DialogContent
      class="sm:max-w-[500px] items-center justify-center flex flex-col gap-10 p-10"
    >
      <div class="flex flex-col items-center justify-center gap-10">
        <img src="@/assets/images/confetti.png" alt="confetti" />
        <div class="flex flex-col items-center justify-center gap-2">
          <h5 class="text-3xl font-semibold">{{ header }}</h5>
          <p class="text-lg" v-if="desc">{{ desc }}</p>
        </div>
      </div>
      <DialogFooter class="flex justify-center">
        <DialogClose v-if="closeText" as-child>
          <Button @click="close()" type="button" variant="main"> {{ closeText }} </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
