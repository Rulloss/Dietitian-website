<template>
  <div class="pricing-container">
    <div class="texts">
      <span class="tag">💰 Pricing Plans 💰</span>
      <h1 class="title">Choose Your Perfect Plan</h1>
      <p class="subtitle">Affordable nutrition guidance tailored to your needs and budget</p>
    </div>
    
    <div class="pricing-cards">
      <div class="pricing-card" v-for="plan in pricingPlans" :key="plan.id" :class="{ 'featured': plan.featured }">
        <div class="card-header">
          <h3 class="plan-name">{{ plan.name }}</h3>
          <div class="price-section">
            <span class="currency">$</span>
            <span class="price">{{ plan.price }}</span>
            <span class="period">/{{ plan.period }}</span>
          </div>
          <p class="plan-description">{{ plan.description }}</p>
        </div>
        
        <div class="features-section">
          <ul class="features-list"> 
            <li v-for="feature in plan.features" :key="feature" class="feature-item">
              <span class="check-icon">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>
        
        <div class="card-footer">
          <Button v-if="plan.featured" class="cta-button featured-button">
            Get Started
          </Button>
          <OutlineButton v-else class="cta-button">
            Choose Plan
          </OutlineButton>
        </div>
        
        <div v-if="plan.featured" class="popular-badge">
          Most Popular
        </div>
      </div>
    </div>
    
    <div class="guarantee-section">
      <div class="guarantee-card">
        <h3>30-Day Money Back Guarantee</h3>
        <p>Not satisfied with your results? Get a full refund within 30 days, no questions asked.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../assets/Button.vue";
import OutlineButton from "../assets/OutlineButton.vue";

export default {
  name: "Pricing",
  components: {
    Button,
    OutlineButton,
  },
  data() {
    return {
      pricingPlans: [
        {
          id: 1,
          name: "Basic",
          price: "49",
          period: "month",
          description: "Perfect for getting started with healthy eating habits",
          features: [
            "Personalized meal plan",
            "Weekly check-ins",
            "Basic nutrition guidance",
            "Email support",
            "Recipe suggestions"
          ],
          featured: false
        },
        {
          id: 2,
          name: "Professional",
          price: "99",
          period: "month",
          description: "Comprehensive nutrition support for serious results",
          features: [
            "Everything in Basic",
            "Bi-weekly video consultations",
            "Custom workout plans",
            "24/7 chat support",
            "Progress tracking tools",
            "Supplement recommendations"
          ],
          featured: true
        },
        {
          id: 3,
          name: "Premium",
          price: "149",
          period: "month",
          description: "Ultimate nutrition coaching with premium features",
          features: [
            "Everything in Professional",
            "Weekly 1-on-1 sessions",
            "Family meal planning",
            "Priority support",
            "Advanced health analytics",
            "Grocery shopping assistance",
            "Lifestyle coaching"
          ],
          featured: false
        }
      ]
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

.pricing-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, var(--color-nutri-deep) 0%, #ffffff 100%);
}

/* Header Section */
.texts {
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

.title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-nutri-navy);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
}

/* Pricing Cards */
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 4rem;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.pricing-card.featured {
  border-color: var(--color-nutri-green);
  transform: scale(1.05);
  background: linear-gradient(135deg, rgba(47, 154, 97, 0.05) 0%, rgba(255, 255, 255, 0.95) 100%);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

/* Popular Badge */
.popular-badge {
  position: absolute;
  top: -1px;
  right: -1px;
  background: var(--color-nutri-green);
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 0.85rem;
  font-weight: bold;
  border-radius: 0 24px 0 24px;
  transform: translateX(0);
}

/* Card Header */
.card-header {
  margin-bottom: 2rem;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-nutri-navy);
  margin-bottom: 1rem;
}

.price-section {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1rem;
}

.currency {
  font-size: 1.5rem;
  color: var(--color-nutri-green);
  font-weight: bold;
}

.price {
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--color-nutri-navy);
  margin: 0 0.2rem;
}

.period {
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 500;
}

.plan-description {
  color: #64748b;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* Features Section */
.features-section {
  flex: 1;
  margin-bottom: 2rem;
}

.features-list {
  list-style: none;
  text-align: left;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-nutri-navy);
}

.check-icon {
  background: var(--color-nutri-green);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

/* Card Footer */
.card-footer {
  margin-top: auto;
}

.cta-button {
  width: 100%;
  justify-content: center;
  font-size: 1rem;
  padding: 1rem 2rem;
}

.featured-button {
  background: var(--color-nutri-green);
  transform: scale(1.02);
}

/* Guarantee Section */
.guarantee-section {
  max-width: 600px;
  width: 100%;
}

.guarantee-card {
  background: rgba(47, 154, 97, 0.1);
  border: 2px solid var(--color-nutri-green-light);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
}

.guarantee-card h3 {
  color: var(--color-nutri-navy);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.guarantee-card p {
  color: #64748b;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .pricing-container {
    padding: 2rem 1rem;
  }
  
  .title {
    font-size: 2.2rem;
  }
  
  .pricing-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .pricing-card.featured {
    transform: none;
  }
  
  .pricing-card.featured:hover {
    transform: translateY(-8px);
  }
  
  .price {
    font-size: 2.8rem;
  }
  
  .pricing-card {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }
  
  .price {
    font-size: 2.4rem;
  }
  
  .pricing-card {
    padding: 1.5rem 1rem;
  }
  
  .popular-badge {
    font-size: 0.75rem;
    padding: 0.4rem 1rem;
  }
}
</style>
