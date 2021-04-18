<template>
  <div class="home">
    <router-link to="/about">To about page</router-link><br />
    <router-link to="/testpage">To test page</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Home",
});
</script>

<style>
</style>