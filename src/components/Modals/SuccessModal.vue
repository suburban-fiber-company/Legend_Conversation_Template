<script lang="ts" setup>
import BaseModal from "./BaseModal.vue";

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
  <BaseModal
    :close="close"
    :close-text="closeText"
    :is-open="isOpen"
    @update:is-open="() => handleClose()"
  >
    <div class="flex flex-col items-center justify-center gap-10">
      <img src="@/assets/images/confetti.png" alt="confetti" />
      <div class="flex flex-col items-center justify-center gap-2">
        <h5 class="text-3xl font-semibold">{{ header }}</h5>
        <p class="text-lg" v-if="desc">{{ desc }}</p>
      </div>
    </div>
  </BaseModal>
</template>
