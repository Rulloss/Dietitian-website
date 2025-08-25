<template>
  <header class="header">
    <div class="navbar">
      <!-- Logo -->
      <div class="navbar_logo">
        <img src="../assets/Logo.svg" alt="logo" class="Logo" />
      </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Links -->
      <div class="navbar_links" :class="{ 'mobile-open': isMobileMenuOpen }">
        <router-link class="navbar_link" to="/" @click="closeMobileMenu">Home</router-link>
        <router-link class="navbar_link" to="/about" @click="closeMobileMenu">About</router-link>
        <router-link class="navbar_link" to="/services" @click="closeMobileMenu">Services</router-link>
        <router-link class="navbar_link" to="/faq" @click="closeMobileMenu">SSS</router-link>  
        <router-link class="navbar_link" to="/contact" @click="closeMobileMenu">Contact</router-link>
      </div>

      <!-- Buttons -->
      <div class="navbar_buttons">
        <Button />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    }
  }
});
</script>

<style scoped>
/* Navbar için özel stiller */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  width: 100%;
  height: fit-content;
  background-color: var(--color-nutri-deep);
  border-bottom: 1px solid var(--color-nutri-navy);
}

.navbar {
  width: 100%;
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
}

.navbar_logo {
  width: 150px;
  height: fit-content;
  object-fit: cover;
  user-select: none;
  z-index: 1001;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 100%;
  height: 3px;
  background: var(--color-nutri-navy);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.navbar_links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar_link {
  color: var(--color-nutri-navy);
  text-decoration: none;
  font-size: 16px;
  margin-right: 50px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.navbar_link:hover {
  color: var(--color-nutri-navy);
  transform: translateY(-1px);
  border-bottom: 1px solid var(--color-nutri-navy);
  padding-bottom: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.navbar_link:last-child {
  margin-right: 0;
}

.navbar_buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    padding: 0 15px;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .navbar_links {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: var(--color-nutri-deep);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.3s ease;
    z-index: 1000;
    gap: 30px;
  }
  
  .navbar_links.mobile-open {
    left: 0;
  }
  
  .navbar_link {
    font-size: 18px;
    margin: 0;
    padding: 15px 0;
  }
  
  .navbar_buttons {
    display: none;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0 10px;
    height: 60px;
  }
  
  .navbar_logo {
    width: 120px;
  }
}

</style>
