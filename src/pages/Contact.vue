<template>
  <div class="page-container">
    <!-- Navbar Component -->
    <Navbar />
    
    <!-- Main Content -->
    <main class="contact-content">
      <h1 class="contact-title">İletişim Sayfası</h1>
      <div class="contact-form">
        <form>
          <div class="form-group">
            <label for="name">Adınız</label>
            <input type="text" id="name" name="name" placeholder="Adınızı giriniz" />
          </div>
          <div class="form-group">
            <label for="email">E-posta</label>
            <input type="email" id="email" name="email" placeholder="E-posta adresinizi giriniz" />
          </div>
          <div class="form-group">
            <label for="message">Mesajınız</label>
            <textarea id="message" name="message" placeholder="Mesajınızı giriniz"></textarea>
          </div>
          <div class="button-container">
            <Button>
              <span>Gönder</span>
            </Button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Button from "../assets/Button.vue";

export default {
  name: "Contact",
  components: {
    Navbar,
    Button
  }
};
</script>

<style scoped>
.page-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.contact-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.contact-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--color-nutri-navy);
}

.contact-form {
  width: 100%;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .contact-content {
    padding: 1.5rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact-content {
    padding: 1rem;
  }
  
  .contact-form {
    padding: 1rem;
  }
  
  .contact-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>