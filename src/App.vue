<script setup lang="ts">
import Header from "@components/Header.vue";
import MainContent from "@components/MainContent.vue";
</script>

<template>
  <Header />

  <MainContent />

  <footer>
    <p>feito com 💜 em maringá-PR</p>
    <p>aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58</p>
  </footer>
</template>

<style lang="scss">
footer {
  color: #580f78;
  margin-top: 4.8rem;

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

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
