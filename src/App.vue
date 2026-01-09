<template>
  <div class="overflow-x-hidden">
    <Header />

    <main class="pt-26">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import SideMenu from "./components/SideMenu.vue";
</script>
