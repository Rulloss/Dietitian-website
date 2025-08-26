<template>
  <div class="page-container">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <span class="tag">My Services</span>
          <h1 class="title">
            Trusted Expert for <br />
            Healthy Living
          </h1>
          <p class="subtitle">
            Achieve your healthy lifestyle goals with personalized nutrition plans and professional counseling services.
          </p>
          <Button>
            <span>Book Appointment</span>
          </Button>
        </div>
      </section>

      <!-- Services Grid Section -->
      <section class="services-section">
        <div class="section-header">
          <h2 class="section-title">Services I Offer</h2>
          <p class="section-description">
            I provide personalized nutrition solutions tailored to your unique needs
          </p>
        </div>
        
        <div class="services-grid">
          <div 
            v-for="service in services" 
            :key="service.id" 
            class="service-card"
          >
            <div class="service-icon" v-html="service.icon"></div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#2F9A61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
            <div class="service-price">
              <span class="price">{{ service.price }}</span>
              <span class="period">{{ service.period }}</span>
            </div>
            <Button class="service-button">
              <span>Get Started</span>
            </Button>
          </div>
        </div>
      </section>

      <!-- Why Choose Me Section -->
      <section class="why-choose-section">
        <div class="why-choose-content">
          <div class="why-choose-text">
            <h2 class="section-title">Why Choose Me?</h2>
            <p class="section-description">
              With years of experience and thousands of success stories, I'm here to support you on your healthy living journey.
            </p>
            
            <div class="features-list">
              <div 
                v-for="feature in whyChooseFeatures" 
                :key="feature.id" 
                class="feature-item"
              >
                <div class="feature-icon" v-html="feature.icon"></div>
                <div class="feature-content">
                  <h4 class="feature-title">{{ feature.title }}</h4>
                  <p class="feature-description">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="why-choose-stats">
            <div class="stats-grid">
              <div v-for="stat in stats" :key="stat.id" class="stat-item">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="process-section">
        <div class="section-header">
          <h2 class="section-title">How I Work?</h2>
          <p class="section-description">
            Start your healthy living journey in 4 simple steps
          </p>
        </div>
        
        <div class="process-steps">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.id" 
            class="process-step"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon" v-html="step.icon"></div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </section>
    </main>
    
    <Connect />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Connect from "../components/Connect.vue";
import Button from "../assets/Button.vue";

export default {
  name: "Service",
  components: {
    Navbar,
    Footer,
    Connect,
    Button,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                   <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="#2F9A61" stroke-width="2" fill="none"/>
                   <circle cx="12" cy="12" r="2" fill="#2F9A61"/>
                 </svg>`,
          title: "Personal Nutrition Counseling",
          description: "Achieve your healthy lifestyle goals with personalized nutrition plans tailored specifically for you.",
          features: [
            "Detailed nutrition analysis",
            "Personalized meal plans",
            "Weekly follow-up sessions",
            "WhatsApp support line"
          ],
          price: "$99",
          period: "/month"
        },
        {
          id: 2,
          icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                   <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="#2F9A61" stroke-width="2"/>
                   <circle cx="12" cy="7" r="4" stroke="#2F9A61" stroke-width="2" fill="none"/>
                   <path d="M23 21V19C23 18.1 22.3 17.4 21.4 17.1" stroke="#2F9A61" stroke-width="2"/>
                   <path d="M16.5 3.1C17.4 3.4 18 4.1 18 5S17.4 6.6 16.5 6.9" stroke="#2F9A61" stroke-width="2"/>
                 </svg>`,
          title: "Group Nutrition Education",
          description: "Learn healthy eating habits together with your friends in an interactive group setting.",
          features: [
            "Group-based education",
            "Interactive workshops",
            "Meal preparation techniques",
            "Motivational support"
          ],
          price: "$49",
          period: "/person"
        },
        {
          id: 3,
          icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                   <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#2F9A61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>`,
          title: "Sports Nutrition",
          description: "Specialized sports nutrition programs to enhance your athletic performance and recovery.",
          features: [
            "Performance-focused nutrition",
            "Pre/post-workout plans",
            "Supplement recommendations",
            "Competition preparation"
          ],
          price: "$149",
          period: "/month"
        }
      ],
      
      whyChooseFeatures: [
        {
          id: 1,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                   <path d="M9 12L11 14L15 10" stroke="#2F9A61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   <circle cx="12" cy="12" r="10" stroke="#2F9A61" stroke-width="2"/>
                 </svg>`,
          title: "Proven Results",
          description: "Effective methods backed by thousands of client success stories and proven outcomes."
        },
        {
          id: 2,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                   <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#2F9A61" stroke-width="2"/>
                 </svg>`,
          title: "Expert Knowledge",
          description: "Experienced, certified dietitian with specialized knowledge in nutrition and wellness."
        },
        {
          id: 3,
          icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                   <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2F9A61" stroke-width="2"/>
                   <path d="M12 6V12L16 14" stroke="#2F9A61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>`,
          title: "24/7 Support",
          description: "Always available support to answer your questions and guide you through your journey."
        }
      ],
      
      stats: [
        { id: 1, number: "2000+", label: "Happy Clients" },
        { id: 2, number: "6+", label: "Years Experience" },
        { id: 3, number: "95%", label: "Success Rate" },
        { id: 4, number: "24/7", label: "Support" }
      ],
      
      processSteps: [
        {
          id: 1,
          icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                   <path d="M20 21V19C20 17.9 19.1 17 18 17H6C4.9 17 4 17.9 4 19V21" stroke="#2F9A61" stroke-width="2"/>
                   <circle cx="12" cy="7" r="4" stroke="#2F9A61" stroke-width="2"/>
                 </svg>`,
          title: "Free Consultation",
          description: "In our first meeting, I'll identify your goals and create a suitable plan for you."
        },
        {
          id: 2,
          icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                   <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#2F9A61" stroke-width="2"/>
                   <path d="M14 2V8H20" stroke="#2F9A61" stroke-width="2"/>
                   <path d="M16 13H8" stroke="#2F9A61" stroke-width="2"/>
                   <path d="M16 17H8" stroke="#2F9A61" stroke-width="2"/>
                   <path d="M10 9H8" stroke="#2F9A61" stroke-width="2"/>
                 </svg>`,
          title: "Personal Plan Creation",
          description: "I'll prepare your personalized nutrition plan and present it with detailed explanations."
        },
        {
          id: 3,
          icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                   <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#2F9A61" stroke-width="2"/>
                 </svg>`,
          title: "Follow-up & Support",
          description: "I'll track your progress with regular check-ins and make necessary adjustments."
        },
        {
          id: 4,
          icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                   <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#2F9A61" stroke-width="2"/>
                 </svg>`,
          title: "Achieving Goals",
          description: "I'll be with you until you reach your set goals and celebrate your success."
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

.page-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  padding: 80px 0 60px;
  text-align: center;
}

.hero-content {
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
}

.tag {
  display: inline-block;
  background-color: #fff5f5;
  color: #2f9a61;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
  border: 1px solid #50b17acb;
}

.title {
  font-size: 60px;
  font-weight: 400;
  color: #0f172a;
  line-height: 1.2;
  letter-spacing: -2px;
  margin-bottom: 24px;
  font-family: "Lexend", sans-serif;
}

.subtitle {
  font-size: 18px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 36px;
  max-width: 600px;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 48px;
  font-weight: 500;
  color: #0f172a;
  margin-bottom: 16px;
  font-family: "Lexend", sans-serif;
}

.section-description {
  font-size: 18px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Services Section */
.services-section {
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.service-card {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(47, 154, 97, 0.15);
  border-color: #2f9a61;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #2f9a61, #50b17a);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.service-title {
  font-size: 24px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 16px;
  text-align: center;
}

.service-description {
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
  text-align: center;
}

.service-features {
  list-style: none;
  margin-bottom: 30px;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  font-size: 14px;
  color: #475569;
}

.service-price {
  text-align: center;
  margin-bottom: 24px;
}

.price {
  font-size: 32px;
  font-weight: 700;
  color: #2f9a61;
}

.period {
  font-size: 16px;
  color: #64748b;
  margin-left: 4px;
}

.service-button {
  width: 100%;
  justify-content: center;
}

/* Why Choose Section */
.why-choose-section {
  padding: 80px 0;
  background: white;
  margin: 0 -20px;
}

.why-choose-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.why-choose-text .section-title {
  text-align: left;
  margin-bottom: 20px;
}

.why-choose-text .section-description {
  text-align: left;
  margin-bottom: 40px;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.feature-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.feature-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: #f0f9f4;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
}

.feature-description {
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.stat-item {
  text-align: center;
  padding: 30px 20px;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: #2f9a61;
  margin-bottom: 8px;
  font-family: "Lexend", sans-serif;
}

.stat-label {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
}

/* Process Section */
.process-section {
  width: 100%;
  padding: 100px 0px;
  background-image: url('../assets/VegetablesBG.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}

.process-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
}

.process-section > * {
  position: relative;
  z-index: 2;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.process-step {
  text-align: center;
  position: relative;
}

.step-number {
  position: absolute;
  top: -10px;
  right: 20px;
  width: 32px;
  height: 32px;
  background: #2f9a61;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: #f0f9f4;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.process-step:hover .step-icon {
  border-color: var(--color-nutri-green);
}

.process-step:hover .step-icon svg {
  stroke: white;
}

.step-title {
  font-size: 20px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 12px;
}

.step-description {
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    padding: 0 16px;
  }
  
  .title {
    font-size: 42px;
  }
  
  .subtitle {
    font-size: 16px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .service-card {
    padding: 30px 20px;
  }
  
  .why-choose-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .why-choose-text .section-title,
  .why-choose-text .section-description {
    text-align: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .hero-section,
  .services-section,
  .why-choose-section,
  .process-section {
    padding: 60px 0;
  }
  
  .process-section {
    background-attachment: scroll;
    background-size: cover;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 36px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: 24px 16px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-item {
    padding: 20px 16px;
  }
  
  .why-choose-section {
    margin: 0 -16px;
  }
  
  .process-section {
    background-attachment: scroll;
    background-size: contain;
    background-position: center bottom;
  }
  
  .process-section::before {
    background: rgba(255, 255, 255, 0.95);
  }
}
</style>