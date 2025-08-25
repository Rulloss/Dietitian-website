<template>
  <section class="faq-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="tag">* Frequently Asked Questions *</span>
        <h2 class="section-title">
          Common <span class="highlight">Questions</span>
        </h2>
        <p class="section-description">
          Find answers to the most frequently asked questions about our nutrition services and programs.
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="faq-container">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="faq-item"
          :class="{ 'active': activeIndex === index }"
        >
          <div 
            class="faq-question" 
            @click="toggleFaq(index)"
          >
            <h3 class="question-text">{{ faq.question }}</h3>
            <div class="icon-wrapper">
              <svg 
                class="chevron-icon" 
                :class="{ 'rotated': activeIndex === index }"
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M6 9L12 15L18 9" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div 
            class="faq-answer"
            :class="{ 'expanded': activeIndex === index }"
          >
            <div class="answer-content">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="contact-cta">
        <div class="cta-content">
          <h3 class="cta-title">Still have questions?</h3>
          <p class="cta-description">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button class="cta-button">
            <span>Contact Us</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: "How long does it take to see results with a personalized nutrition plan?",
          answer: "Results vary depending on individual goals and starting points. Most clients begin to notice improvements in energy levels and overall well-being within 2-3 weeks. For weight management goals, visible changes typically occur within 4-6 weeks when following the plan consistently. We provide ongoing support and adjustments to ensure you're progressing toward your goals."
        },
        {
          question: "Do you provide meal plans for specific dietary restrictions or allergies?",
          answer: "Absolutely! We specialize in creating customized nutrition plans that accommodate various dietary restrictions, food allergies, and preferences. Whether you're vegetarian, vegan, gluten-free, have diabetes, or any other specific needs, our expert nutritionists will design a plan that's both safe and effective for your unique situation."
        },
        {
          question: "What's included in a nutrition consultation session?",
          answer: "Each consultation includes a comprehensive health and lifestyle assessment, body composition analysis, discussion of your goals and challenges, and creation of a personalized nutrition plan. You'll also receive meal planning guidance, shopping lists, recipe suggestions, and ongoing support through follow-up sessions. We also provide educational materials to help you understand the science behind your plan."
        },
        {
          question: "How often should I schedule follow-up appointments?",
          answer: "We recommend follow-up appointments every 2-4 weeks initially to monitor progress and make necessary adjustments to your plan. As you become more comfortable with your new eating habits and start seeing consistent results, we can extend the intervals to monthly or bi-monthly check-ins. The frequency depends on your individual needs, goals, and progress rate."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
}
</script>

<style scoped>
.faq-section {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--color-nutri-deep) 0%, #f8fafc 100%);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
  word-wrap: break-word;
}

.tag {
  display: inline-block;
  background: var(--color-nutri-green);
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  font-style: italic;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-nutri-navy);
  margin-bottom: 20px;
  line-height: 1.2;
  word-break: break-word;
}

.highlight {
  color: var(--color-nutri-green);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--color-nutri-green);
  border-radius: 2px;
}

.section-description {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  word-break: break-word;
}

/* FAQ Container */
.faq-container {
  margin-bottom: 60px;
  width: 100%;
}

.faq-item {
  background: white;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.faq-item:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.faq-item.active {
  border-color: var(--color-nutri-green);
  box-shadow: 0 8px 30px rgba(47, 154, 97, 0.15);
}

.faq-question {
  padding: 24px 28px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  width: 100%;
  box-sizing: border-box;
}

.faq-item.active .faq-question {
  border-bottom-color: #e2e8f0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.question-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
  margin: 0;
  line-height: 1.4;
  flex: 1;
  padding-right: 20px;
  word-break: break-word;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-nutri-green);
  transition: all 0.3s ease;
}

.chevron-icon {
  color: white;
  transition: transform 0.3s ease;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.faq-answer.expanded {
  max-height: 300px;
}

.answer-content {
  padding: 0 28px 28px 28px;
}

.answer-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
  margin: 0;
  word-break: break-word;
}

/* Contact CTA */
.contact-cta {
  background: linear-gradient(135deg, var(--color-nutri-green) 0%, #34d399 100%);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  color: white;
  width: 100%;
  box-sizing: border-box;
}

.cta-content {
  max-width: 500px;
  margin: 0 auto;
}

.cta-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: white;
  word-break: break-word;
}

.cta-description {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
  line-height: 1.6;
  word-break: break-word;
}

.cta-button {
  background: white;
  color: var(--color-nutri-green);
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 100%;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: #f8fafc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .faq-section {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .faq-question {
    padding: 20px 24px;
  }
  
  .question-text {
    font-size: 1rem;
    padding-right: 15px;
  }
  
  .icon-wrapper {
    width: 36px;
    height: 36px;
  }
  
  .answer-content {
    padding: 0 24px 24px 24px;
  }
  
  .contact-cta {
    padding: 30px 20px;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .section-title {
    font-size: 1.8rem;
    line-height: 1.1;
  }
  
  .faq-question {
    padding: 18px 20px;
  }
  
  .question-text {
    font-size: 0.95rem;
  }
  
  .answer-content {
    padding: 0 20px 20px 20px;
  }
  
  .answer-content p {
    font-size: 0.95rem;
  }
  
  .contact-cta {
    padding: 25px 15px;
  }
  
  .cta-title {
    font-size: 1.4rem;
    line-height: 1.2;
  }
  
  .cta-button {
    padding: 12px 24px;
    font-size: 0.9rem;
    width: 90%;
    max-width: 300px;
  }
}

@media (max-width: 320px) {
  .faq-section {
    padding: 50px 0;
  }
  
  .container {
    padding: 0 10px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
  
  .tag {
    font-size: 12px;
    padding: 6px 16px;
  }
  
  .faq-question {
    padding: 15px 15px;
  }
  
  .question-text {
    font-size: 0.9rem;
  }
  
  .icon-wrapper {
    width: 32px;
    height: 32px;
  }
  
  .answer-content {
    padding: 0 15px 15px 15px;
  }
  
  .answer-content p {
    font-size: 0.85rem;
  }
  
  .contact-cta {
    padding: 20px 10px;
  }
  
  .cta-title {
    font-size: 1.3rem;
  }
  
  .cta-description {
    font-size: 0.9rem;
  }
  
  .cta-button {
    padding: 10px 20px;
    font-size: 0.85rem;
    width: 95%;
    max-width: 250px;
  }
}
</style>
