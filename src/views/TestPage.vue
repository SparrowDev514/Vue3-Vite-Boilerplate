<template>
  <div class="test-page">
    <h2>Here is Test page</h2>
    <router-link to="/">Go home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TestPage",
});
</script>

<style>
</style>