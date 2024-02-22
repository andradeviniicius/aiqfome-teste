<template>
  <div class="main-content">
    <div class="restaurant-title">
      <img
        class="restaurant-title__logo"
        src="@assets/matsuri-logo.svg"
        alt=""
      />
      <h1 class="restaurant-title__name">Matsuri Concept</h1>
    </div>

    <div class="product-overview">
      <div class="product-overview__container">
        <div class="product-overview__info">
          <p class="product-overview__name">Ceviche de salmão</p>
          <p class="product-overview__text">
            a partir de <span class="product-overview__price">R$ 19,90</span>
          </p>
          <p class="product-overview__description">
            salmão temperado com limão cebola e pimenta
          </p>
        </div>

        <div class="product-overview__add-container">
          <p class="product-overview__text product-overview__text--quantity">
            quantos?
          </p>
          <button class="product-overview__add-btn">adicionar</button>
        </div>
      </div>

      <img class="product-image" src="@assets/ceviche.png" />
    </div>

    <div class="product-details">
      <ExtraOptions
        title="qual o tamanho?"
        subtitle="escolha 1"
        mandatory
        :singleOption="{
          name: 'tamanho',
          items: [
            {
              name: 'médio',
              price: '22,90',
              promotion: '19,90',
            },
            {
              name: 'grande',
              price: '28,90',
            },
          ],
        }"
      />
      <ExtraOptions
        title="vai querer bebida"
        subtitle="escolha quantos quiser"
        :chooseQuantityType="[
          {
            name: 'coca-cola',
            price: '5,00',
          },
          {
            name: 'suco prats laranja',
            price: '6,00',
          },
          {
            name: 'água sem gás',
            price: '3,00',
          },
        ]"
      />
      <ExtraOptions
        title="precisa de talher?"
        subtitle="escolha até 1"
        :singleOption="{
          name: 'talheres',
          items: [
            {
              name: 'hashi',
            },
            {
              name: 'garfo e faca descartável',
              price: '1,00',
            },
          ],
        }"
      />
      <ExtraOptions
        title="mais alguma coisa?"
        subtitle="escolha até 2"
        :multipleOptions="[
          {
            name: 'biscoito da sorte',
            price: '2,00',
          },
          {
            name: 'rolinho primavera',
            price: '8,00',
          },
        ]"
      />

      <div class="product-notes">
        <textarea
          name="product-notes"
          id="product-notes"
          placeholder="alguma observação do item? • opcional &#x0a;ex: tirar algum ingrediente, ponto do prato"
        ></textarea>
      </div>
    </div>
  </div>
teste
  {{ isDrawerOpen }}
</template>

<script setup lang="ts">
import ExtraOptions from "./ExtraOptions.vue";
import { storeToRefs } from "pinia";
import { productDetailsStore } from "@/store/app";

const store = productDetailsStore();

const { isDrawerOpen } = storeToRefs(store);
</script>

<style lang="scss">
.restaurant-title {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 2.4rem 8.4rem;

  &__logo {
  }
  &__name {
    font-size: 2.4rem;
  }
}

.product {
  &-overview {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2.4rem 13.2rem;
    border-bottom: 4px solid #eef0f5;

    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    &__name {
      color: #393a3c;
      font-size: 2.4rem;
      font-weight: 700;
    }

    &__text {
      font-weight: 700;
      font-size: 1.6rem;
      color: #6d6f73;

      &--quantity {
        color: #393a3c;
      }
    }

    &__price {
      font-weight: 800;
      font-size: 2rem;
      color: #7b1fa2;
    }

    &__description {
      font-size: 1.6rem;
      font-weight: 600;
      color: #6d6f73;
    }

    &__add-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 2.1rem 0;
      margin-top: 3.2rem;
    }

    &__add-btn {
      width: 10.8rem;
      height: 4rem;
      border-radius: 0.8rem;
      padding: 1.1rem 2.4rem 1rem 2.4rem;
      border: 0;
      background-color: #6d6f73;
      color: #fff;
      cursor: pointer;
    }
  }

  &-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &-notes {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    textarea {
      min-width: 64.4rem;
      min-height: 5.8rem;

      border: 1px solid #cdd1d9;
      border-radius: 0.4rem;

      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.9rem;
      color: #6d6f73;
      padding: 1.2rem 1rem;

      &::placeholder {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: #6d6f73;
      }
    }
  }
}
</style>
