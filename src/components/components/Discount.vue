<template>
  <div class="discount-container">
    <div class="section-header">
      <span class="tag">🎉 Special Offers 🎉</span>
      <h2 class="section-title">Limited Time Discounts</h2>
      <p class="section-subtitle">Don't miss out on these exclusive deals for your health journey</p>
    </div>
    
    <div class="discount-cards">
      <div
        v-for="(discountCard, index) in discountCards"
        :key="discountCard.title"
        class="discount-card"
        :class="`card-${index + 1}`"
      >
        <div class="card-content">
          <div class="discount-badge">
            <span class="discount-text">{{ discountCard.tag }}</span>
          </div>
          <div class="content-text">
            <h3 class="card-title">{{ discountCard.title }}</h3>
            <p class="card-description">{{ discountCard.description }}</p>
            <div class="card-footer">
              <Button class="cta-button">{{ discountCard.buttonText }}</Button>
              <div class="validity">
                <span class="validity-text">{{ discountCard.validity }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-image">
          <div class="image-overlay"></div>
          <img :src="discountCard.image" :alt="discountCard.title" />
        </div>
      </div>
    </div>
    
    <div class="terms-section">
      <p class="terms-text">*Terms and conditions apply. Offers valid for new customers only.</p>
    </div>
  </div>
</template>

<script>
import Button from "../assets/Button.vue";

export default {
  name: "Discount",
  components: {
    Button,
  },
  data() {
    return {
      discountCards: [
        {
          tag: "20% OFF",
          title: "Healthy Solutions",
          description:
            "Transform your lifestyle with our comprehensive healthy living program. Get personalized nutrition plans and expert guidance.",
          buttonText: "Claim Offer",
          validity: "Valid until Dec 31, 2025",
          image: "src/assets/doctor.png",
        },
        {
          tag: "15% OFF",
          title: "Weight Control",
          description:
            "Achieve your weight goals with our scientifically-backed weight management program. Sustainable results guaranteed.",
          buttonText: "Start Journey",
          validity: "Valid until Dec 31, 2025",
          image: "src/assets/dietician.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.discount-container {
  width: 100%;
  min-height: 100vh;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, var(--color-nutri-deep) 0%, #f0f9ff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
}

.tag {
  font-size: 1.2rem;
  color: var(--color-nutri-green);
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
}

.section-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--color-nutri-navy);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
}

/* Discount Cards */
.discount-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 3rem;
}

@media (max-width: 600px) {
  .discount-cards {
    grid-template-columns: 1fr;
  }
}

.discount-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  display: flex;
  min-height: 280px;
  position: relative;
  border: 2px solid transparent;
}

.discount-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-1 {
  background: linear-gradient(135deg, rgba(47, 154, 97, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%);
  border-color: var(--color-nutri-green-light);
}

.card-2 {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%);
  border-color: rgba(15, 23, 42, 0.2);
}

/* Card Content */
.card-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.discount-badge {
  position: absolute;
  top: -2px;
  left: -2px;
  background: var(--color-nutri-green);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 24px 0 24px 0;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(47, 154, 97, 0.3);
}

.card-2 .discount-badge {
  background: var(--color-nutri-navy);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.3);
}

.content-text {
  margin-top: 2rem;
}

.card-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-nutri-navy);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.card-description {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-button {
  align-self: flex-start;
  padding: 0.8rem 2rem;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateX(5px);
}

.validity {
  display: flex;
  align-items: center;
}

.validity-text {
  font-size: 0.85rem;
  color: #94a3b8;
  font-style: italic;
}

/* Card Image */
.card-image {
  flex: 0 0 230px;
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.discount-card:hover .card-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(47, 154, 97, 0.1) 0%, transparent 100%);
  z-index: 1;
}

/* Terms Section */
.terms-section {
  text-align: center;
  max-width: 600px;
}

.terms-text {
  font-size: 0.9rem;
  color: #94a3b8;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .discount-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2.4rem;
  }
}

@media (max-width: 768px) {
  .discount-container {
    padding: 2rem 1rem;
    overflow-x: hidden;
  }
  
  .section-title {
    font-size: 2rem;
    word-break: break-word;
  }
  
  .section-subtitle {
    word-break: break-word;
  }
  
  .discount-card {
    flex-direction: column;
    min-height: auto;
    max-width: 100%;
  }
  
  .card-image {
    flex: 0 0 200px;
    order: -1;
    width: 100%;
  }
  
  .card-content {
    padding: 1.5rem;
    width: 100%;
  }
  
  .content-text {
    margin-top: 1rem;
  }
  
  .card-title {
    font-size: 1.5rem;
    word-break: break-word;
  }
  
  .card-description {
    word-break: break-word;
  }
  
  .discount-badge {
    position: relative;
    top: 0;
    left: 0;
    align-self: flex-start;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .discount-container {
    padding: 1.5rem 0.5rem;
  }
  
  .discount-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
    line-height: 1.1;
    word-break: break-word;
  }
  
  .section-subtitle {
    font-size: 1rem;
    word-break: break-word;
  }
  
  .card-content {
    padding: 1rem;
    width: 100%;
  }
  
  .card-title {
    font-size: 1.3rem;
    word-break: break-word;
  }
  
  .card-description {
    font-size: 0.9rem;
    word-break: break-word;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
  
  .card-image {
    flex: 0 0 180px;
  }
}

@media (max-width: 320px) {
  .discount-container {
    padding: 1rem 0.25rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
  }
  
  .tag {
    font-size: 1rem;
  }
  
  .card-content {
    padding: 0.8rem;
  }
  
  .card-title {
    font-size: 1.2rem;
  }
  
  .card-description {
    font-size: 0.85rem;
  }
  
  .discount-badge {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
  
  .validity-text {
    font-size: 0.8rem;
  }
  
  .card-image {
    flex: 0 0 160px;
  }
}
</style>
