<template>
  <div
    v-if="cardsData"
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 overflow-x-hidden m-3"
  >
    <span v-for="card in cardsData" :key="card.id">
      <!--      {{ card.name }}
        <span v-if="card.power && card.toughness">
        - {{ card.power }}/{{ card.toughness }}
      </span>
      <span>: {{ card.type }}</span> -->
      <img
        class="w-60 aspect-63/88 object-cover"
        :src="card.imageUrl"
        alt="imagen"
      />
    </span>
  </div>
  <!--   <div class="debug-box">{{ cardsData }}</div> -->
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const cardsData = ref([]);
const cardsUrl = "https://api.magicthegathering.io/v1/cards";

axios.get(cardsUrl).then((response) => {
  const uniqueCards = response.data.cards.filter(
    (card, index, self) => index === self.findIndex((c) => c.name === card.name)
  );

  cardsData.value = uniqueCards;
});
</script>
