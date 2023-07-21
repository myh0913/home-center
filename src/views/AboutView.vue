<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MyButton></MyButton>
    <Drag></Drag>
  </div>
</template>
<script setup lang="ts">
import MyButton from "@/components/customer/qrcode.vue";
import Drag from "@/components/customer/draggable.vue";
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
