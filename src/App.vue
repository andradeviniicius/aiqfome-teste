<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <Header />

  <div class="restaurant">
    <img class="restaurant__logo" src="@assets/matsuri-logo.svg" alt="" />
    <h1 class="restaurant__title">Matsuri Concept</h1>
  </div>

  <div class="main-dish"></div>

  <footer>
    <p>feito com 💜 em maringá-PR</p>
    <p>aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58</p>
  </footer>
</template>

<style lang="scss">
footer {
  color: #580f78;

  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #eef0f5;

  height: 11.6rem;

  &:first-child {
    font-weight: 700;
    font-size: 1.4rem;
  }
  &:last-child {
    font-weight: 700;
    font-size: 1.8rem;
  }
}
</style>
