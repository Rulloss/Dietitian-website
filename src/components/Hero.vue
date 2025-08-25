<template>
  <div class="page-container">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content -->
    <main class="main-content">
      <div class="hero">
        <!-- Sol Taraf - Yazılar -->
        <div class="content">
          <span class="tag"><i>* Your Trusted Dietician *</i></span>
          <h1 class="title">
            Take the First Step to a
            <span>New You</span>
          </h1>
          <p class="description">
            With a personalized nutrition plan designed just for you, discover
            the path to feeling stronger, living happier, and embracing an
            healthier lifestyle that lasts. Start today and let every small
            change bring you closer to your goals.
          </p>
          <div class="button-container">
            <Button class="contact-button">
              <span>Book a Reservation</span>
            </Button>
            <OutlineButton class="contact-button">
              <span>Services</span>
            </OutlineButton>
          </div>
        </div>
        <!-- Sağ Taraf - Fotoğraf -->
        <div class="picture">
          <img
            :src="dieticianImage"
            alt="Diyetisyen"
            class="dietician-image"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import DiyetisyenImage from "../assets/Diyetisyen.png";
import Button from "../assets/Button.vue";
import OutlineButton from "../assets/OutlineButton.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    OutlineButton,
    Button,
  },
  data() {
    return {
      dieticianImage: DiyetisyenImage
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Ana Sayfa Konteyneri */
.page-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Ana İçerik Alanı */
.main-content {
  width: 100%;
  max-width: 1280px;
  padding: 2rem 1rem;
}

/* Hero Bölümü */
.hero {
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}

/* İçerik Bölümü (Sol Taraf) */
.content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.content > * {
  margin-bottom: 1.5rem;
  width: 100%;
}

/* Etiket */
.tag {
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: #ffffff;
  background: linear-gradient(
    0deg,
    hsla(202, 71%, 27%, 1) 0%,
    hsla(176, 45%, 66%, 1) 86%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin-bottom: 1.3rem;
  letter-spacing: 1px;
}

/* Başlık */
.title{
  font-size: 3rem;
  font-weight: 700; 
  color: #0e3d2d; 
  margin-bottom: 1rem;
  line-height: 1.2;
  word-spacing: -5px;
}

.title span {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937; 
  margin-bottom: 1rem;
  line-height: 1.2;
  background: linear-gradient(to right, #10b981, #047857);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Açıklama */
.description {
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* Buton Konteyneri */
.button-container {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

/* İletişim Butonu */
.contact-button {
  padding: 0.75rem 2rem; 
  font-size: 1.125rem; 
}

/* Resim Bölümü (Sağ Taraf) */
.picture {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Diyetisyen Resmi */
.dietician-image {
  width: 100%;
  max-width: 32rem;
  height: auto;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
  object-fit: contain;
}

.dietician-image:hover {
  transform: scale(1.01);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.03);
}

/* Tablet Görünüm */
@media (max-width: 1024px) {
  .main-content {
    padding: 1.5rem 1rem;
  }

  .hero {
    gap: 2rem;
  }

  .content {
    width: 45%;
  }

  .picture {
    width: 55%;
  }
}

/* Mobil Görünüm */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
    overflow-x: hidden;
  }

  .hero {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
    min-height: auto;
    width: 100%;
  }

  .content {
    width: 100%;
    order: 2;
    align-items: center;
    text-align: center;
    padding: 0 0.5rem;
  }

  .content > * {
    text-align: center;
    max-width: 100%;
  }

  .button-container {
    justify-content: center;
    gap: 12px;
  }

  .picture {
    width: 100%;
    order: 1;
    padding: 0 0.5rem;
  }

  .dietician-image {
    max-width: 90%;
    margin: 0 auto;
  }

  .title {
    font-size: 2.5rem;
    word-break: break-word;
  }

  .description {
    font-size: 1rem;
  }
}

/* Küçük Mobil Görünüm */
@media (max-width: 480px) {
  .main-content {
    padding: 0.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }

  .hero {
    gap: 1.5rem;
    padding: 0.5rem 0;
  }

  .title {
    font-size: 2rem;
    line-height: 1.1;
  }

  .tag {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }

  .button-container {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .contact-button {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    max-width: 250px;
  }

  .dietician-image {
    width: 100%;
  }
}

/* Çok Küçük Mobil Görünüm */
@media (max-width: 400px) {
  .main-content {
    padding: 0.5rem 0.3rem;
    overflow-x: hidden;
  }

  .hero {
    gap: 1rem;
  }

  .title {
    font-size: 1.75rem;
    line-height: 1.1;
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .tag {
    font-size: 0.9rem;
    padding: 0.3rem 0.6rem;
    margin-bottom: 1rem;
  }

  .button-container {
    flex-direction: column;
    gap: 8px;
  }

  .contact-button {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
    width: 100%;
    max-width: 200px;
  }

  .content > * {
    margin-bottom: 1rem;
  }
}
</style>
