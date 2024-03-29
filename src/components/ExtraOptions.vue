<template>
  <div class="extra-option__container">
    <div class="extra-option__upperside">
      <div>
        <p class="extra-option__title">
          {{ props.title }}
        </p>
        <p class="extra-option__subtitle">
          {{ props.subtitle }}
        </p>
      </div>

      <span v-if="props.mandatory" class="extra-option__mandatory-tag"
        >obrigatório
      </span>
    </div>

    <div class="extra-option__downside">
      <div
        v-if="chooseQuantityType"
        v-for="item in chooseQuantityType"
        class="extra-option__item--quantitative"
      >
        <Counter
          :name="item.name"
          :isPromotion="item.promotion"
          :price="item.price"
          :counter="item.quantity"
          @increment="incrementThisValue(item.name)"
          @decrement="decrementThisValue(item.name)"
        />
        <div v-if="!item.promotion" class="extra-options__item-price-container">
          <p v-if="item.price" class="extra-option__item-price">
            +R$ {{ item.price }}
          </p>
        </div>

        <div class="extra-option__item-price-container" v-else>
          <p
            v-if="item.price"
            class="extra-option__item-price extra-option__item-price--old"
          >
            de R$ {{ item.price }} por &nbsp
          </p>
          <p
            v-if="item.promotion"
            class="extra-option__item-price extra-option__item-price--promotion"
          >
            R$ {{ item.promotion }}
          </p>
        </div>
      </div>

      <div
        v-if="singleOption?.items"
        v-for="item in singleOption.items"
        class="extra-option__item--single"
      >
        <div style="display: flex; gap: 0.8rem; align-items: center">
          <input
            type="radio"
            :name="`extra-option__item--single--${singleOption?.name}`"
            :id="item.name"
            :value="{
              name: item.name,
              price: item.promotion ? item.promotion : item.price,
            }"
            v-model="modelValue"
            @change="$emit('update:modelValue', modelValue)"
          />
          <CurrencyDollarIcon
            class="extra-option__item-promotion-icon"
            v-if="item.promotion"
          />
          <label :for="item.name" class="extra-option__item-name">
            {{ item.name }}
          </label>
        </div>
        <div v-if="!item.promotion" class="extra-options__item-price-container">
          <p v-if="item.price" class="extra-option__item-price">
            +R$ {{ item.price }}
          </p>
        </div>

        <div class="extra-option__item-price-container" v-else>
          <p
            v-if="item.price"
            class="extra-option__item-price extra-option__item-price--old"
          >
            de R$ {{ item.price }} por &nbsp
          </p>
          <p
            v-if="item.promotion"
            class="extra-option__item-price extra-option__item-price--promotion"
          >
            R$ {{ item.promotion }}
          </p>
        </div>
      </div>

      <div
        v-if="multipleOptions"
        v-for="item in multipleOptions"
        class="extra-option__item--multiple"
      >
        <div style="display: flex; gap: 0.8rem; align-items: center">
          <input
            :id="item.name"
            type="checkbox"
            v-model="modelValue"
            :value="{ name: item.name, price: item.price }"
            @change="$emit('update:modelValue', modelValue)"
          />
          <CurrencyDollarIcon v-if="item.promotion" />
          <label :for="item.name" class="extra-option__item-name">
            {{ item.name }}
          </label>
        </div>

        <div v-if="!item.promotion" class="extra-options__item-price-container">
          <p v-if="item.price" class="extra-option__item-price">
            +R$ {{ item.price }}
          </p>
        </div>

        <div class="extra-option__item-price-container" v-else>
          <p
            v-if="item.price"
            class="extra-option__item-price extra-option__item-price--old"
          >
            de R$ {{ item.price }} por &nbsp
          </p>
          <p
            v-if="item.promotion"
            class="extra-option__item-price extra-option__item-price--promotion"
          >
            {{ item.promotion }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CurrencyDollarIcon } from "@heroicons/vue/24/outline";
import { defineEmits, computed } from "vue";
import Counter from "@components/Counter.vue";
import { ExtraOptionsProps } from "../types/extra-option";

const props = defineProps<ExtraOptionsProps>();
const emit = defineEmits();

const modelValue = computed({
  get: () => props.modelValue,
  set(value) {
    emit("update:modelValue", value);
  },
});

function incrementThisValue(name: string) {
  modelValue.value!.find((el: { name: string }) => el.name == name).quantity++;
}
function decrementThisValue(name: string) {
  if (
    modelValue.value!.find((el: { name: string }) => el.name == name).quantity >
    0
  ) {
    modelValue.value!.find((el: { name: string }) => el.name == name)
      .quantity--;
  }
}
</script>

<style lang="scss">
.extra-option {
  &__container {
    width: 100%;
    min-height: 8.8rem;
    padding: 2.4rem 13.2rem;
    border-bottom: 4px solid #eef0f5;
  }
  &__upperside {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 700;
    font-size: 1.6rem;
    color: #202326;
    line-height: 2.182rem;
  }
  &__subtitle {
    font-weight: 700;
    font-size: 1.2rem;
    color: #6d6f73;
    line-height: 1.637rem;
    margin-top: 0.2rem;
    margin-bottom: 1.6rem;
  }
  &__mandatory-tag {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 7.8rem;
    height: 2.8rem;
    padding: 6px 4px 6px 4px;
    background-color: #393a3c;
    color: #fff;
    border-radius: 4px;

    font-size: 1.2rem;
    font-weight: 700;
  }

  &__downside {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 1.6rem;
    width: 100%;
  }
  &__item {
    width: 100%;

    &--quantitative,
    &--multiple,
    &--single {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-quantity-btn {
      border: 1px solid #000;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      background: none;

      &.large {
        height: 3.6rem;
        width: 3.6rem;
        font-size: 1.6rem;
      }

      &--plus {
        border: 1px solid #00a296;

        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #00a296;
        }

        &::before {
          width: 0.15rem;
          margin: 0.5rem auto;
          border-radius: 5px;
        }
        &::after {
          border-radius: 5px;
          margin: auto 0.5rem;
          height: 0.15rem;
        }

        &.large {
          &::before {
            width: 0.2rem;
            margin: 1.1rem auto;
            border-radius: 5px;
          }
          &::after {
            border-radius: 5px;
            margin: auto 1.1rem;
            height: 0.2rem;
          }
        }
      }

      &--minus {
        border: 1px solid #00a296;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #00a296;
          margin: auto 0.5rem;
          border-radius: 5px;
          height: 0.2rem;
        }

        &.large {
          &::before {
            margin: auto 1.1rem;
          }
        }

        &.disabled {
          background: #eef0f5;
          border: 1px solid #eef0f5;
          cursor: not-allowed;

          &::before {
            background: #a8adb7;
          }
        }
      }
    }

    &-counter {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.9rem;
      color: #393a3c;
      padding: 1.1rem;

      &.large {
        font-size: 1.6rem;
      }
    }

    &-promotion-icon {
      width: 1.8rem;
      height: 1.8rem;
      color: #02a117;
    }

    &-name {
      font-size: 1.4rem;
      font-weight: 600;
      color: #6d6f73;
    }

    &-price {
      color: #7b1fa2;
      font-size: 1.4rem;
      font-weight: 700;
      margin-right: 6rem;

      &-container {
        display: flex;
        align-items: center;
      }

      &--old {
        color: #6d6f73;
        font-size: 1.2rem;
        font-weight: 700;
        margin-right: 0;
      }
      &--promotion {
        color: #02a117;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 825px) {
    &__container {
      padding: 5%;
    }
    &__upperside {
    }

    &__title {
    }
    &__subtitle {
    }
    &__mandatory-tag {
    }

    &__downside {
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: 1fr;
    }
    &__item {
      &--quantitative,
      &--multiple,
      &--single {
      }

      &-quantity-btn {
        &.large {
        }

        &--plus {
          &::before,
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
          }

          &::before {
          }
          &::after {
          }

          &.large {
            &::before {
            }
            &::after {
            }
          }
        }

        &--minus {
          &::before {
          }

          &.large {
            &::before {
            }
          }

          &.disabled {
            &::before {
            }
          }
        }
      }

      &-counter {
        &.large {
        }
      }

      &-promotion-icon {
      }

      &-name {
      }

      &-price {
        margin: 0;
        &-container {
        }

        &--old {
        }
        &--promotion {
        }
      }
    }
  }
}
</style>
