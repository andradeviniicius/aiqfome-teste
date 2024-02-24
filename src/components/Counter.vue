<template>
  <div style="display: flex; align-items: center; gap: 0.8rem">
    <div style="display: flex; gap: 0.8rem; align-items: center">
      <button
        v-if="!showTrashCanWhenCounterZero || counter > 1"
        :class="`extra-option__item-quantity-btn extra-option__item-quantity-btn--minus ${
          size ? size : ''
        } ${isDisabled ? 'disabled' : ''}`"
        @click="decrementCounter"
      ></button>

      <TrashIcon
        v-else
        style="
          width: 3.2rem;
          height: 3.2rem;
          color: #00a296;
          cursor: pointer;
          padding: 0.2rem;
        "
        @click="handleTrashCanClik"
      />

      <p
        v-if="!showTrashCanWhenCounterZero"
        :class="`extra-option__item-counter ${size}`"
      >
        {{ modelValueComputed.find((el: any) => el.name == name).quantity }}
      </p>

      <p v-else :class="`extra-option__item-counter ${size}`">
        {{ counter }}
      </p>

      <button
        @click="incrementCounter"
        :class="`extra-option__item-quantity-btn extra-option__item-quantity-btn--plus ${size}`"
      ></button>
    </div>

    <CurrencyDollarIcon v-if="isPromotion" />
    <p class="extra-option__item-name">
      {{ name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from "vue";
import { CurrencyDollarIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { CounterProps } from "../types/counter";
const {
  isPromotion,
  name,
  price,
  showTrashCanWhenCounterZero,
  size,
  startCounterAt,
  modelValue,
} = defineProps<CounterProps>();

const modelValueComputed = computed({
  get: () => modelValue,
  set(value) {},
});
let isDisabled = computed(() => counter.value === 0);

const emits = defineEmits(["updateCounter", "trashCanClick"]);

let counter = ref(startCounterAt ? startCounterAt : 0);

const handleTrashCanClik = () => {
  counter.value = 0;
  console.log(`oiii`);

  emits("trashCanClick");
};

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
