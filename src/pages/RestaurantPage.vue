<template>
  restaurant páge

  <button
    @click="
      router.push({ name: 'selectedDish', params: { selectedDish: '2' } })
    "
  >
    ir pra dishes
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
