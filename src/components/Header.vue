<template>
  <header>
    <div class="header__left-side">
      <img src="@assets/aiq-branding.svg" alt="Aiq Branding" />
      <div class="location">
        <MapPinIcon class="location-icon" />
        <div class="location-info">
          <p>entregando em</p>
          <div class="address">
            <p>Rua Mandaguari, 198</p>
            <ChevronRightIcon class="chevron-icon" />
          </div>
        </div>
      </div>
    </div>

    <div class="header__center">
      <div class="header-search-bar">
        <MagnifyingGlassIcon class="header-search-bar__icon" />
        <input
          class="header-search-bar__input"
          placeholder="busque pela loja ou culinária"
        />
        type="email"
      </div>
    </div>

    <div class="header__right-side">
      <button class="header-sign-in">
        <UserIcon class="header-sign-in__icon" />
        entrar
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { MapPinIcon, UserIcon } from "@heroicons/vue/24/outline";
</script>

<style lang="scss" scoped>
header {
  font-size: 1.8rem;
  padding: 2rem 8.4rem;
  color: #fff;

  display: flex;
  background-color: #ffffff;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);

  background-color: #7b1fa2;

  .header__left-side,
  .header__center,
  .header__right-side {
    flex: 1;
    display: flex;
    justify-content: center;

    &:first-child {
      margin-right: auto;
    }
    &:last-child {
      margin-left: auto;
    }
  }

  .header__left-side {
    display: flex;
    gap: 40px;
  }
  .header__right-side {
    display: flex;
    align-items: center;
  }

  .header__center {
    min-width: 420px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .location {
    display: flex;
    align-items: center;
    .location-icon {
      width: 24px;
    }
    .location-info {
      margin-left: 0.5rem;

      p {
        margin: 0;
        font-weight: bold;
        font-size: 1.4rem;
        color: #eecffc;
      }

      .address {
        display: flex;
        align-items: center;
        font-size: 1.8rem;

        p {
          margin-right: 0.5rem;
          color: #fff;
          font-size: 1.8rem;
        }

        .chevron-icon {
          width: 1.6rem;
          height: 1, 6rem;
        }
      }
    }
  }

  .header {
    &-search-bar {
      background-color: #fff;
      padding: 1.05rem 0 1.05rem 1.2rem;
      border-radius: 8px;
      border: 1px solid #cdd1d9;

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
        min-width: 420px;
        font-weight: 600;
        color: #6d6f73;
        opacity: 0.7;

        &::placeholder {
          color: #6d6f73;
          opacity: 0.7;
        }
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
    }
  }
}
</style>
