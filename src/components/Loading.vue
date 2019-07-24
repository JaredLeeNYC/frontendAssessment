<template>
  <div class="loading">
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>
<style scoped>
.loading {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.loading div {
  position: absolute;
  border: 4px solid green;
  opacity: 1;
  border-radius: 50%;
  animation: loading 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loading div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes loading {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
