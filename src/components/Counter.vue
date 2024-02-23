<template>
  <div style="display: flex; align-items: center; gap: 0.8rem">
    <div style="display: flex; gap: 0.8rem; align-items: center">
      <button
        class="extra-option__item-quantity-btn extra-option__item-quantity-btn--minus"
        @click="decrementCounter"
      ></button>

      <p class="extra-option__item-counter">
        {{ counter }}
      </p>

      <button
        @click="incrementCounter"
        class="extra-option__item-quantity-btn extra-option__item-quantity-btn--plus"
      ></button>
    </div>

    <CurrencyDollarIcon v-if="isPromotion" />
    <p class="extra-option__item-name">
      {{ name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
const { isPromotion, name, price } = defineProps<{
  name: string;
  isPromotion: string | undefined;
  price: string;
}>();

const emits = defineEmits(["updateCounter"]);

let counter = ref(0);

const incrementCounter = () => {
  counter.value++;
  emits("updateCounter", { name, quantity: counter.value, price });
};

const decrementCounter = () => {
  if (counter.value > 0) {
    counter.value--;
    emits("updateCounter", {
      name,
      quantity: counter.value,
      price,
    });
  }
};
</script>
