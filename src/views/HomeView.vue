<template>
  <h1 class="text-2xl font-bold">Dashboard</h1>
  <p class="text-gray-500 dark:text-gray-400">
    Welcome to your dashboard. Here you can manage your products, customers, and
    analytics.
  </p>
  <div class="mt-8">
    <Card>
      <CardHeader>
        <CardTitle>Link in Bio</CardTitle>
        <CardDescription>Add a link to your social media profiles.</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="onSubmit">
          <div class="grid gap-4">
            <Input label="Link" placeholder="Enter your link" width="100%" />
            <Button type="submit" class="w-full">Save</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const onSubmit = () => {
  // Handle form submission logic
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
