<template>
  <div
    v-if="paginatedCards.length"
    class="flex flex-col gap-4 overflow-x-hidden m-3 justify-center items-center"
  >
    <div
      v-for="card in paginatedCards"
      :key="card.id"
      class="flex justify-start items-center gap-3 h-auto w-60 p-3 rounded-2xl bg-[#E6D7C3] hover:shadow-lg cursor-pointer"
    >
      <img
        class="w-14 aspect-63/88 object-cover"
        :src="card.imageUrl"
        alt="imagen"
      />
      <span class="text-lg">{{ card.name }}</span>
    </div>

    <div class="flex gap-3 mt-4">
      <button
        :disabled="currentPage === 1"
        @click="prevPage"
        class="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer hover:bg-[#E6D7C3] hover:shadow-lg"
      >
        Anterior
      </button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="nextPage"
        class="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer hover:bg-[#E6D7C3] hover:shadow-lg"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed } from "vue";

const cardsData = ref([]);
const cardsUrl = "https://api.magicthegathering.io/v1/cards";

const currentPage = ref(1);
const cardsPerPage = 10;

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  return cardsData.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(cardsData.value.length / cardsPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

axios.get(cardsUrl).then((response) => {
  const uniqueCards = response.data.cards.filter(
    (card, index, self) => index === self.findIndex((c) => c.name === card.name)
  );
  cardsData.value = uniqueCards;
});
</script>
