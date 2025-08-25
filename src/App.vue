<template>
  <div class="page-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.page-container {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Custom font smoothing */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
