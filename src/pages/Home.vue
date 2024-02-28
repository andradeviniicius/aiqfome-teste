<template>
  <ul>
    <li v-for="restaurant in restaurants" :key="restaurant.id">
      <button @click="goToRestaurant(restaurant.id)">
        Restaurante {{ restaurant.name }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const mockRestaurants = [
  { id: 1, name: "Restaurant A" },
  { id: 2, name: "Restaurant B" },
  { id: 3, name: "Restaurant C" },
];

const restaurants = ref(mockRestaurants);

const router = useRouter();

const goToRestaurant = (restaurantId: number) => {
  router.push(`restaurant/${restaurantId}`);
};
</script>
