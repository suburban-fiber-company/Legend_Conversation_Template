<script setup lang="ts">
import WorkSpaceIcon from "@/components/svgs/WorkSpaceIcon.vue";
import SidebarLink from "@/components/SideBar/SidebarLink.vue";
import { Bell, Binoculars, LayoutList, MessageCircle, Shell } from "lucide-vue-next";
import { ROUTES } from "@/router";
import type { RouteProps } from "@/utils/types";

const workSpaceSubmenuLinks: RouteProps[] = [
  { name: "Schedules & Reports", route: ROUTES.Home },
  { name: "Collaboration", route: ROUTES.Home },
  { name: "Requests", route: ROUTES.Home },
];
</script>

<template>
  <nav class="space-y-1">
    <sidebar-link
      :to="ROUTES.Home"
      name="My Workspace"
      :sub-menu-links="workSpaceSubmenuLinks"
    >
      <template #icon>
        <WorkSpaceIcon class="h-5 w-5" />
      </template>
    </sidebar-link>

    <sidebar-link :to="ROUTES.Obligations" name="Obligations">
      <template #icon>
        <LayoutList class="h-5 w-5" />
      </template>
    </sidebar-link>

    <sidebar-link to="#" name="Omni-Channel Agent">
      <template #icon>
        <Shell class="h-5 w-5" />
      </template>
    </sidebar-link>

    <sidebar-link to="#" name="Customer Insight">
      <template #icon>
        <Binoculars class="h-5 w-5" />
      </template>
    </sidebar-link>

    <sidebar-link :to="ROUTES.Conversations" name="Conversations">
      <template #icon>
        <MessageCircle class="h-5 w-5" />
      </template>
    </sidebar-link>

    <sidebar-link to="#" name="Notifications">
      <template #icon>
        <Bell class="h-5 w-5" />
      </template>
    </sidebar-link>
  </nav>
</template>
