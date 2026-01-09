<template>
  <header class="fixed top-0 left-0 right-0 bg-[#E6D7C3] shadow-md z-50">
    <div
      class="relative mx-auto flex items-center justify-center h-20 px-4 max-w-[calc(100vw)]"
    >
      <SideMenu />
      <router-link to="/">
        <img
          class="w-60 h-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/960px-Magicthegathering-logo.svg.png"
          alt="image"
        />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import SideMenu from "./SideMenu.vue";

const MenuVisible = ref(true);
const menuLinks = ref([
  { name: "Home", path: "/" },
  { name: "Card List", path: "/cardlist" },
]);
const ToggleMenu = () => {
  MenuVisible.value = !MenuVisible.value;
};
</script>
