<template>
  <header>
    <div class="header__left-side">
      <img src="@assets/aiq-branding.svg" alt="Aiq Branding" />
      <div v-if="width > 767" class="header-location__container">
        <MapPinIcon class="header-location__map-icon" />
        <div class="header-location__info">
          <p class="header-location__info-text">entregando em</p>
          <div class="header-location__address-container">
            <p class="header-location__address-selected-location">
              Rua Mandaguari, 198
            </p>
            <ChevronRightIcon class="header-location__chevron-icon" />
          </div>
        </div>
      </div>
    </div>

    <div class="header__center">
      <div class="header-search-bar" v-if="width > 767">
        <MagnifyingGlassIcon class="header-search-bar__icon" />
        <input
          class="header-search-bar__input"
          placeholder="busque pela loja ou culinária"
        />
      </div>
      <div v-if="width < 767" class="header-location__container">
        <MapPinIcon class="header-location__map-icon" />
        <div class="header-location__info">
          <p class="header-location__info-text">entregando em</p>
          <div class="header-location__address-container">
            <p class="header-location__address-selected-location">
              Rua Mandaguari, 198
            </p>
            <ChevronRightIcon class="header-location__chevron-icon" />
          </div>
        </div>
      </div>
    </div>

    <div class="header__right-side">
      <div
        v-if="width < 767"
        class="header-search-bar"
        :class="width < 767 && 'mobile'"
      >
        <MagnifyingGlassIcon class="header-search-bar__icon" />
      </div>
      <button :class="`header-sign-in ${width < 767 ? 'mobile' : ''}`">
        <UserIcon class="header-sign-in__icon" />
        <p v-if="width > 767">entrar</p>
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { MapPinIcon, UserIcon } from "@heroicons/vue/24/outline";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<style lang="scss" scoped>
header {
  font-size: 1.8rem;
  padding: 1.3% 5%;
  color: #fff;

  height: 8rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  background-color: #ffffff;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);

  background-color: #7b1fa2;

  .header {
    &__left-side {
      display: flex;
      justify-content: start;
      align-items: center;

      gap: 40px;

      @media (max-width: 767px) {
        img {
          height: 50%;
          gap: 0px;
        }
      }
    }
    &__right-side {
      display: flex;
      justify-content: end;
      align-items: center;

      @media (max-width: 767px) {
        justify-content: space-around;
      }
    }

    &__center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    &-location {
      &__container {
        display: flex;
        align-items: center;
      }
      &__map-icon {
        width: 24px;
      }
      &__info {
        margin-left: 0.5rem;

        &-text {
          margin: 0;
          font-weight: bold;
          font-size: 1.4rem;
          color: #eecffc;
          @media (max-width: 1300px) {
            font-size: 1rem;
          }
        }
      }

      &__address {
        &-container {
          display: flex;
          align-items: center;
          font-size: 1.8rem;
        }
        &-selected-location {
          font-weight: bold;
          margin-right: 0.5rem;
          color: #fff;
          font-size: 1.8rem;

          @media (max-width: 1300px) {
            font-size: 1.2rem;
          }
        }
      }

      &__chevron-icon {
        width: 1.6rem;
        height: 1, 6rem;
      }
    }

    &-search-bar {
      background-color: #fff;
      padding: 1.05rem 0 1.05rem 1.2rem;
      border-radius: 8px;
      border: 1px solid #cdd1d9;

      height: 4rem;
      width: 42rem;

      display: flex;
      align-items: center;

      &__icon {
        width: 24px;
        color: #a8adb7;
      }
      &__input {
        border: none;
        outline: none;
        margin-left: 8px;
        font-weight: 600;
        color: #6d6f73;
        opacity: 0.7;

        &::placeholder {
          color: #6d6f73;
          opacity: 0.7;
        }
      }

      &.mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 3.5rem;
        height: 3.6rem;
      }
    }

    &-sign-in {
      cursor: pointer;
      width: 11.8rem;
      height: 3.6rem;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.8rem;

      background-color: #00a296;
      border: none;
      color: #fff;

      font-size: 16px;
      font-weight: bold;

      border-radius: 0.8rem;

      &__icon {
        height: 24px;
      }

      &.mobile {
        width: 3.5rem;
      }
    }

    @media (max-width: 1310px) {
      &-search-bar {
        width: fit-content;
        &__icon {
        }
        &__input {
          &::placeholder {
          }
        }
      }

      &-sign-in {
        &__icon {
        }
      }
    }
    @media (max-width: 767px) {
    }
  }
}
</style>
