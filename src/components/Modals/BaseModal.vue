<script lang="ts" setup>
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {type  HTMLAttributes } from "vue";

defineOptions({
  inheritAttrs: true,
});

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    close: Function;
    closeText?: string;
    class?: HTMLAttributes["class"];
  }>(),
  {}
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
  <Dialog
    :open="isOpen"
    modal
    @update:open="(v) => v || handleClose()"
    :class="cn('rounded-xl', $props.class)"
  >
    <DialogContent
      :class="
        cn(
          'sm:max-w-[500px] items-center justify-center flex flex-col gap-10 p-10',
          $props.class
        )
      "
    >
      <slot />
      <DialogFooter v-if="!$slots.footer" class="flex justify-center">
        <DialogClose v-if="closeText" as-child>
          <Button @click="close()" type="button" variant="main"> {{ closeText }} </Button>
        </DialogClose>
      </DialogFooter>
      <slot name="footer" />
    </DialogContent>
  </Dialog>
</template>
