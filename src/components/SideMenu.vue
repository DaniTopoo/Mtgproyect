<template>
  <aside
    class="fixed top-0 left-0 h-full transition-all duration-300 overflow-hidden z-40"
    :class="[
      MenuVisible ? 'w-64 bg-[#E6D7C3] shadow-xl' : 'w-16 bg-transparent',
    ]"
  >
    <ListIcon
      @click="ToggleMenu"
      class="size-10 m-5 mt-7 cursor-pointer z-50"
    />
    <nav
      v-show="MenuVisible"
      class="mt-10 px-5 space-y-5 text-lg font-medium flex flex-col"
    >
      <router-link
        v-for="link in menuLinks"
        @click="closeMenu"
        :key="link.path"
        :to="link.path"
      >
        <span
          class="bg-[#D64545] text-white p-3 rounded-xl shadow-lg hover:bg-[#E04D4D] w-26 inline-block"
          >{{ link.name }}</span
        >
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import ListIcon from "./iconics/ListIcon.vue";
const menuLinks = ref([
  { name: "Home", path: "/" },
  { name: "Card List", path: "/cardlist" },
]);
const MenuVisible = ref(false);
const ToggleMenu = () => {
  MenuVisible.value = !MenuVisible.value;
};
const closeMenu = () => {
  MenuVisible.value = false;
};
</script>
