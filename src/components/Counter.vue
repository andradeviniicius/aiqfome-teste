<template>
  <div style="display: flex; align-items: center; gap: 0.8rem">
    <div style="display: flex; gap: 0.8rem; align-items: center">
      <button
        v-if="!showTrashCanWhenCounterZero || counter > 1"
        :class="`extra-option__item-quantity-btn extra-option__item-quantity-btn--minus ${
          size ? size : ''
        } ${counter === 0 ? 'disabled' : ''}`"
        @click="emits('decrement')"
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
        @click="emits('trashCanClick')"
      />

      <p :class="`extra-option__item-counter ${size}`">
        {{ counter }}
      </p>

      <button
        @click="emits('increment')"
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
import { defineProps, defineEmits } from "vue";
import { CurrencyDollarIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { CounterProps } from "../types/counter";
const { isPromotion, name, showTrashCanWhenCounterZero, size, counter } =
  defineProps<CounterProps>();

const emits = defineEmits(["increment", "decrement", "trashCanClick"]);
</script>
