<template>
  <div class="min-h-screen min-w-screen flex flex-col items-center">
    <!-- Navbar Component -->
    <Navbar />
    
    <!-- Main Content -->
    <main>
      <h1 class="text-3xl font-bold">SSS Page</h1>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "FAQ",
  components: {
    Navbar
  }
};
</script>