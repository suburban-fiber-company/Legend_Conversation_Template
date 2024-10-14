<template>
  <component :is="$route.meta.layoutComponent">
    <slot />
  </component>
</template>

<script setup lang="ts"></script>

<style scoped></style>
