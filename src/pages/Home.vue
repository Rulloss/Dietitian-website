<template>
  <div class="page-container">
    <!-- Main Content -->
    <Hero />
    <Service />
    <Discount />
    <Testimonial />
    <Pricing />
    <Faq />
    <Footer />

  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Service from "../components/service.vue";
import Discount from "../components/Discount.vue";
import Pricing from "../components/Pricing.vue";
import Testimonial from "../components/Testimonial.vue";
import Faq from "../components/Faq.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Service,
    Discount,
    Pricing,
    Testimonial,
    Faq,
    Footer,
  },
};
</script>

<style scoped>
.page-container {
  height: 100%;
}
</style>
