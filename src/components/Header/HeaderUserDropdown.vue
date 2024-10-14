<script setup lang="ts">
import { ROUTES } from "@/router";
import HeaderDropdownNavLink from "@/components/Header/HeaderDropdownNavLink.vue";
import { useToggle } from "@vueuse/core";
import { ChevronDown } from "lucide-vue-next";
const [isProfileOpen, toggleProfileOpen] = useToggle(false);
</script>
<template>
  <div
    class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative"
  >
    <button
      @click="toggleProfileOpen()"
      type="button"
      class="flex gap-1 text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 items-center"
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="user-dropdown"
      data-dropdown-placement="bottom"
    >
      <span class="sr-only">Open user menu</span>
      <img
        alt="user photo"
        class="h-10 w-10 object-cover rounded-full border-2 border-[#FD4F00]"
        src="https://s3-alpha-sig.figma.com/img/ff1d/df0e/75ba731bffb2b3a32178cdcc17843365?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jmJagTgh~riudvb0mxcfYsmmmgyvZZAtLMx5-JTdlpdJew7kdN9StpELs4pX9RkqnsGe506BaLTMnf8pnQ2j1wq2YfzvMzeq54AYcEEEIC3Reb8ycxZox0bctNNMfJftVUs4Sd-ul51jH4gV8XRZndrXBT1jveJbkOwfjh~c27qHz-Dmx0ARDqjffYAngZHem37j~X8-hj-sN~7PSbnz22wwPZbAj8MxXLO7WxF1yyJONyoHj~1zJ3w4ruzYFUjfuU6qli6hSGgfNqIt5Q57hXftfDZacpH1qpux2C7ZlQp4~OtemBLVi2Zen8MDByfCccwtWxk6QI75UgrgCk7NBw__"
      />
      <ChevronDown
        alt="view profile"
        :size="12"
        :class="[isProfileOpen ? 'rotate-180' : '']"
      />
    </button>
    <!-- Dropdown menu -->
    <div
      :class="[
        'absolute z-50 my-4 max-xs:w-screen  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600',
        isProfileOpen ? 'block top-full right-0 max-sm:-right-[70%]' : 'hidden',
      ]"
      id="user-dropdown"
    >
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">The Predator</span>
        <span class="block text-sm text-gray-500 truncate dark:text-gray-400"
          >jerrydepredator@legendacademy.com</span
        >
      </div>
      <ul class="py-2" aria-labelledby="user-menu-button">
        <HeaderDropdownNavLink :route="ROUTES.Home" name="Profile" />
        <HeaderDropdownNavLink
          :route="ROUTES.Home"
          name="Sign Out"
          class="text-red-600"
        />
      </ul>
    </div>
  </div>
</template>
