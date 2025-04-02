<template>
  <canvas id="qr" ref="qrcode"></canvas>
</template>
<script setup>
import { ref, onMounted } from "vue";
import QRCode from "qrcode";

const qrcode = ref(null);

onMounted(() => {
  const params = {
    id: 123,
    name: "Vue3",
  };
  const queryString = new URLSearchParams(params).toString(); // 将参数转换为字符串
  const url = "http://www.baidu.com";
  // const url = `${location.origin}/scan?${queryString}` // 拼接URL和参数
  QRCode.toCanvas(qrcode.value, url); // 生成二维码
});
</script>
<style>
#qr {
  width: 100px;
  height: 100px;
}
</style>
