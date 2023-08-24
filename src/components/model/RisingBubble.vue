<template>
  <div class="bubble-container">
    <div class="bubble-wrap">
      <div
        class="bubble"
        v-for="(item, index) in 200"
        :key="index + 'bubble'"
      ></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bubble-container {
  filter: contrast(8);
  .bubble-wrap {
    position: relative;
    width: 600px;
    height: 200px;
    overflow: hidden;
    background: #ffffff;
    filter: blur(5px);
    .bubble {
      position: absolute;
      background: rgb(56, 222, 228);
    }
    @keyframes moveToTop {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0.3;
        transform: translate(-50%, -200px) scale(0.3);
      }
    }
    @for $i from 1 to 200 {
      .bubble:nth-child(#{$i}) {
        $width: random(100);
        bottom: #{random(100) - 100}px;
        left: #{random(100) + "%"};
        width: #{$width}px;
        height: #{$width}px;
        border-radius: #{$width / 2}px;
        animation: moveToTop #{(random(25) + 15) / 10}s ease-in-out #{random(5)}s infinite;
      }
    }
  }
}
</style>
