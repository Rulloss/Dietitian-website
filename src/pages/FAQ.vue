<template>
  <div class="faq-page">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Frequently Asked Questions</h1>
        <p class="hero-description">
          Find everything you need to know about my nutrition counseling
          services here.
        </p>
      </div>
    </section>

    <!-- Search Section -->
    <section class="search-section">
      <div class="container">
        <div class="search-box">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search questions..."
            class="search-input"
          />
          <i class="search-icon">🔍</i>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories-section">
      <div class="container">
        <div class="category-tabs">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'category-tab',
              { active: selectedCategory === category.id },
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="faq-content">
      <div class="container">
        <div class="faq-grid">
          <div v-for="faq in filteredFAQs" :key="faq.id" class="faq-item">
            <div class="faq-question" @click="toggleFAQ(faq.id)">
              <h3>{{ faq.question }}</h3>
              <span class="toggle-icon" :class="{ active: faq.isOpen }">+</span>
            </div>
            <div class="faq-answer" :class="{ open: faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredFAQs.length === 0" class="no-results">
          <h3>No questions found matching your criteria.</h3>
          <p>Try different keywords or change your category selection.</p>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Couldn't find the answer to your question?</h2>
          <p>Contact me, I'd be happy to help you.</p>
          <Button><Span>Get in Touch</Span></Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "FAQ",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      searchQuery: "",
      selectedCategory: "all",
      categories: [
        { id: "all", name: "All" },
        { id: "general", name: "General" },
        { id: "nutrition", name: "Nutrition" },
        { id: "consultation", name: "Consultation" },
        { id: "pricing", name: "Pricing" },
      ],
      faqs: [
        {
          id: 1,
          category: "general",
          question: "What is a dietitian and what do they do?",
          answer:
            "A dietitian is a health professional specialized in nutrition science who helps individuals develop healthy eating habits. They provide counseling on weight management, disease management, and overall health improvement.",
          isOpen: false,
        },
        {
          id: 2,
          category: "consultation",
          question: "What happens during the first consultation session?",
          answer:
            "In our first session, I take a detailed medical history, evaluate your eating habits, determine your goals, and prepare a personalized nutrition plan for you. I also perform body analysis and measurements.",
          isOpen: false,
        },
        {
          id: 3,
          category: "nutrition",
          question: "When should I consult a dietitian?",
          answer:
            "You can consult a dietitian if you want to lose or gain weight, have chronic diseases, want to improve your sports performance, correct your eating habits, or improve your overall health.",
          isOpen: false,
        },
        {
          id: 4,
          category: "pricing",
          question: "How are consultation fees determined?",
          answer:
            "My fees vary according to session duration, type of consultation, and follow-up frequency. For detailed pricing information, you can contact me or check my services page.",
          isOpen: false,
        },
        {
          id: 5,
          category: "consultation",
          question: "Do you provide online consultation services?",
          answer:
            "Yes, I provide online consultation services. We can meet via video conference, share your nutrition plan digitally, and conduct regular follow-ups.",
          isOpen: false,
        },
        {
          id: 6,
          category: "nutrition",
          question: "How long does it take to prepare a nutrition plan?",
          answer:
            "After our first meeting, I prepare and deliver your personalized nutrition plan within 2-3 days. The plan is customized according to your lifestyle and preferences.",
          isOpen: false,
        },
        {
          id: 7,
          category: "general",
          question: "How often are follow-up sessions conducted?",
          answer:
            "Follow-up sessions are usually conducted every 2-4 weeks. This period can be adjusted according to your goals, progress, and needs.",
          isOpen: false,
        },
        {
          id: 8,
          category: "nutrition",
          question: "Can you help if I have special dietary needs?",
          answer:
            "Absolutely! I can prepare suitable plans for your special nutritional needs such as gluten intolerance, lactose intolerance, vegetarianism, veganism.",
          isOpen: false,
        },
        {
          id: 9,
          category: "consultation",
          question: "How can I make an appointment?",
          answer:
            "To make an appointment, you can contact me through the form on the contact page, my phone number, or my email address. We will determine the most suitable date and time for you together.",
          isOpen: false,
        },
        {
          id: 10,
          category: "general",
          question: "How soon can I see results?",
          answer:
            "When you adapt to the nutrition plan, you can feel an increase in your energy level and general improvement within the first 2-4 weeks. Physical results such as weight change begin to be seen within 4-8 weeks.",
          isOpen: false,
        },
      ],
    };
  },
  computed: {
    filteredFAQs() {
      let filtered = this.faqs;

      // Category filter
      if (this.selectedCategory !== "all") {
        filtered = filtered.filter(
          (faq) => faq.category === this.selectedCategory
        );
      }

      // Search filter
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (faq) =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query)
        );
      }

      return filtered;
    },
  },
  methods: {
    toggleFAQ(id) {
      const faq = this.faqs.find((f) => f.id === id);
      if (faq) {
        faq.isOpen = !faq.isOpen;
      }
    },
  },
};
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: #11998e;
  background: -webkit-linear-gradient(
    to right,
    var(--color-nutri-deep),
    #11998e
  );
  background: linear-gradient(
    to right,
    var(--color-nutri-green),
    var(--color-nutri-green-light)
  );

  color: white;
  padding: 120px 0 80px;
  text-align: center;
}

.hero-title {
  font-size: 60px;
  font-weight: 400;
  color: var(--color-nutri-light);
  line-height: 1.2;
  letter-spacing: -2px;
  margin-bottom: 24px;
  font-family: "Lexend", sans-serif;
}

.hero-description {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Search Section */
.search-section {
  padding: 60px 0;
  background: white;
}

.search-box {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 18px 60px 18px 24px;
  font-size: 1.1rem;
  border: 2px solid var(--color-nutri-light);
  border-radius: 50px;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-nutri-navy);
  box-shadow: 0 6px 30px rgba(76, 175, 80, 0.15);
  transform: translateY(-2px);
}

.search-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: var(--color-nutri-green);
}

/* Categories Section */
.categories-section {
  padding: 40px 0;
  background: #f8fffe;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.category-tab {
  padding: 12px 24px;
  border: 2px solid #e1e8e5;
  background: white;
  color: var(--color-nutri-navy);
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.category-tab:hover {
  border-color: var(--color-nutri-green);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.2);
}

.category-tab.active {
  background: var(--color-nutri-green);
  border-color: var(--color-nutri-green);
  color: white;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
}

/* FAQ Content */
.faq-content {
  padding: 80px 0;
  background: white;
}

.faq-grid {
  display: grid;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #f0f9f7;
}

.faq-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.faq-question {
  padding: 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #f8fffe 0%, #f0f9f7 100%);
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: linear-gradient(
    135deg,
    var(--color-nutri-green-light) 0%,
    var(--color-nutri-light) 100%
  );
}

.faq-question h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
  line-height: 1.4;
  flex: 1;
  padding-right: 20px;
}

.toggle-icon {
  width: 32px;
  height: 32px;
  background: var(--color-nutri-green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.toggle-icon.active {
  transform: rotate(45deg);
  background: var(--color-nutri-navy);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  background: white;
}

.faq-answer.open {
  max-height: 300px;
  padding: 0 24px 24px;
}

.faq-answer p {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
  padding-top: 16px;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.no-results h3 {
  color: var(--color-nutri-navy);
  margin-bottom: 12px;
  font-size: 1.5rem;
}

.no-results p {
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Contact CTA */
.contact-cta {
  background: #11998e;
  background: -webkit-linear-gradient(
    to right,
    var(--color-nutri-deep),
    #11998e
  );
  background: linear-gradient(
    to right,
    var(--color-nutri-green),
    var(--color-nutri-green-light)
  );
  color: white;
  padding: 80px 0;
  text-align: center;
}
.cta-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-content button,
.cta-content span {
  background-color: var(--color-nutri-navy);
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .search-input {
    font-size: 1rem;
    padding: 16px 50px 16px 20px;
  }

  .category-tabs {
    gap: 8px;
  }

  .category-tab {
    padding: 10px 18px;
    font-size: 0.9rem;
  }

  .faq-question {
    padding: 20px;
  }

  .faq-question h3 {
    font-size: 1.05rem;
  }

  .faq-answer.open {
    padding: 0 20px 20px;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .hero-section {
    padding: 100px 0 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .search-section {
    padding: 40px 0;
  }

  .categories-section {
    padding: 30px 0;
  }

  .faq-content {
    padding: 60px 0;
  }

  .contact-cta {
    padding: 60px 0;
  }

  .cta-content h2 {
    font-size: 1.8rem;
  }

  .cta-button {
    padding: 14px 32px;
    font-size: 1rem;
  }
}
</style>
