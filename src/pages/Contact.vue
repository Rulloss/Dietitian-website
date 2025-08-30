<template>
  <div class="page-container">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Hero Section with Background Pattern -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="pattern-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">Contact</div>
        <h1 class="hero-title">Let's Start Your Health Journey</h1>
        <p class="hero-description">
          Transform your life with personalized nutrition guidance. I'm here to
          support you every step of the way.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">2000+</span>
            <span class="stat-label">Happy Clients</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">24h</span>
            <span class="stat-label">Response Time</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">6+</span>
            <span class="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="contact-content">
      <div class="contact-container">
        <!-- Contact Form - Now First -->
        <div class="contact-form-section">
          <div class="form-header">
            <h2 class="section-title">Get In Touch</h2>
            <p class="section-subtitle">
              Fill out the form below and I'll get back to you within 24 hours
            </p>
          </div>

          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-grid">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      :class="{ error: errors.firstName }"
                      placeholder="John"
                      required
                    />
                    <div class="input-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <circle
                          cx="12"
                          cy="7"
                          r="4"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <span v-if="errors.firstName" class="error-message">{{
                    errors.firstName
                  }}</span>
                </div>

                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      :class="{ error: errors.lastName }"
                      placeholder="Doe"
                      required
                    />
                    <div class="input-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <circle
                          cx="12"
                          cy="7"
                          r="4"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <span v-if="errors.lastName" class="error-message">{{
                    errors.lastName
                  }}</span>
                </div>
              </div>

              <div class="form-grid">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <div class="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      :class="{ error: errors.email }"
                      placeholder="john@example.com"
                      required
                    />
                    <div class="input-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m4 4 16 0 0 16-16 0z"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <path
                          d="m22 6-10 7L2 6"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <span v-if="errors.email" class="error-message">{{
                    errors.email
                  }}</span>
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <div class="input-wrapper">
                    <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      placeholder="+1 (555) 123-4567"
                    />
                    <div class="input-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <div class="select-wrapper">
                  <select
                    id="subject"
                    v-model="form.subject"
                    :class="{ error: errors.subject }"
                    required
                  >
                    <option value="">Choose your consultation type</option>
                    <option value="consultation">Initial Consultation</option>
                    <option value="follow-up">Follow-up Appointment</option>
                    <option value="nutrition-plan">
                      Nutrition Plan Inquiry
                    </option>
                    <option value="weight-management">Weight Management</option>
                    <option value="special-diet">Special Dietary Needs</option>
                    <option value="other">Other</option>
                  </select>
                  <div class="select-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
                <span v-if="errors.subject" class="error-message">{{
                  errors.subject
                }}</span>
              </div>

              <div class="form-group">
                <label for="message">Your Message *</label>
                <div class="textarea-wrapper">
                  <textarea
                    id="message"
                    v-model="form.message"
                    :class="{ error: errors.message }"
                    placeholder="Tell me about your health goals, current diet, any medical conditions, and what you hope to achieve..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                <span v-if="errors.message" class="error-message">{{
                  errors.message
                }}</span>
              </div>

              <div class="submit-section">
                <Button
                  type="submit"
                  :disabled="isSubmitting"
                  class="submit-btn"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>
                </Button>
                <p class="privacy-note">
                  Your information is secure and will never be shared with third
                  parties.
                </p>
              </div>
            </form>
          </div>
        </div>

        <!-- Contact Information Sidebar -->
        <div class="contact-sidebar">
          <div class="contact-info">
            <h3 class="info-title">Contact Information</h3>
            <p class="info-subtitle">
              Get in touch through any of these channels
            </p>

            <div class="info-cards">
              <div class="info-card phone-card">
                <div class="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div class="card-content">
                  <h4>Phone</h4>
                  <p>+90 (555) 123 45 67</p>
                  <span>Mon - Fri, 9AM - 6PM</span>
                </div>
              </div>

              <div class="info-card email-card">
                <div class="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m4 4 16 0 0 16-16 0z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <path
                      d="m22 6-10 7L2 6"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div class="card-content">
                  <h4>Email</h4>
                  <p>info@nutritionist.com</p>
                  <span>24 hour response</span>
                </div>
              </div>

              <div class="info-card location-card">
                <div class="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div class="card-content">
                  <h4>Office</h4>
                  <p>Health Street No:123</p>
                  <span>Ankara, Turkey</span>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="quick-faq">
            <h3 class="faq-title">Quick Questions</h3>
            <div class="faq-items">
              <div class="faq-item">
                <h4>How long is a consultation?</h4>
                <p>
                  Initial consultations are 60 minutes, follow-ups are 30
                  minutes.
                </p>
              </div>
              <div class="faq-item">
                <h4>Do you offer online sessions?</h4>
                <p>Yes, I offer both in-person and virtual consultations.</p>
              </div>
              <div class="faq-item">
                <h4>What should I prepare?</h4>
                <p>Bring any recent lab work and a 3-day food diary.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Button from "../assets/Button.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Navbar,
    Button,
    Footer,
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      },
      errors: {},
      isSubmitting: false,
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      // First Name validation
      if (!this.form.firstName.trim()) {
        this.errors.firstName = "First name is required";
      } else if (this.form.firstName.trim().length < 2) {
        this.errors.firstName = "First name must be at least 2 characters";
      }

      // Last Name validation
      if (!this.form.lastName.trim()) {
        this.errors.lastName = "Last name is required";
      } else if (this.form.lastName.trim().length < 2) {
        this.errors.lastName = "Last name must be at least 2 characters";
      }

      // Email validation
      if (!this.form.email.trim()) {
        this.errors.email = "Email address is required";
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = "Please enter a valid email address";
      }

      // Subject validation
      if (!this.form.subject) {
        this.errors.subject = "Please select a subject";
      }

      // Message validation
      if (!this.form.message.trim()) {
        this.errors.message = "Message is required";
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = "Message must be at least 10 characters";
      }

      return Object.keys(this.errors).length === 0;
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    async submitForm() {
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Show success message
        alert(
          "Thank you for your message! I will get back to you within 24 hours."
        );

        // Reset form
        this.resetForm();
      } catch (error) {
        alert(
          "Sorry, there was an error sending your message. Please try again."
        );
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      };
      this.errors = {};
    },
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Section with Background Image */
.hero-section {
  position: relative;
  background-image: url("../assets/VegetablesBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
  padding: 100px 0;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    );
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
}

.hero-content {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
  color: var(--color-nutri-navy);
}

.hero-badge {
  display: inline-block;
  background: rgba(1, 202, 85, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  color: var(--color-nutri-navy);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-title {
  font-size: 60px;
  font-weight: 400;
  color: var(--color-nutri-green);
  line-height: 1.2;
  letter-spacing: -2px;
  margin-bottom: 24px;
  font-family: "Lexend", sans-serif;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-nutri-green-light);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  font-weight: 500;
}

/* Main Content */
.contact-content {
  padding: 80px 2rem;
  background: linear-gradient(135deg, #f8fffe 0%, #f0f8f5 100%);
  min-height: 100vh;
}

.contact-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Form Section */
.contact-form-section {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(106, 155, 122, 0.1);
}

.form-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
  margin-bottom: 1rem;
  position: relative;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--color-nutri-navy);
  opacity: 0.8;
  line-height: 1.6;
}

.contact-form {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
  font-size: 1rem;
}

.input-wrapper,
.select-wrapper,
.textarea-wrapper {
  position: relative;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e8f4f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafffe;
  box-sizing: border-box;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-nutri-green);
  box-shadow: 0 0 0 4px rgba(106, 155, 122, 0.1);
  background: white;
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #ff6b6b;
  box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
}

.input-icon,
.select-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-nutri-green);
  pointer-events: none;
}

.form-group textarea {
  padding: 1rem;
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

.form-group select {
  cursor: pointer;
  appearance: none;
  background-image: none;
}

.select-icon {
  right: 1rem;
  left: auto;
}

.error-message {
  display: block;
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

/* Checkbox Group */
.checkbox-group {
  margin: 2rem 0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: var(--color-nutri-navy);
  line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 22px;
  height: 22px;
  border: 2px solid var(--color-nutri-green);
  border-radius: 6px;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-top: 2px;
}

.checkbox-label input[type="checkbox"]:checked + .checkmark {
  background-color: var(--color-nutri-green);
  border-color: var(--color-nutri-green);
}

.checkbox-label input[type="checkbox"]:checked + .checkmark::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.checkbox-text {
  flex: 1;
}

.submit-section {
  text-align: center;
  margin-top: 2.5rem;
}

.submit-btn {
  min-width: 200px;
  margin-bottom: 1rem;
}

.privacy-note {
  font-size: 0.9rem;
  color: var(--color-nutri-navy);
  opacity: 0.7;
  margin: 0;
}

/* Contact Sidebar */
.contact-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-info {
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(106, 155, 122, 0.1);
}

.info-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
  margin-bottom: 0.5rem;
}

.info-subtitle {
  font-size: 1rem;
  color: var(--color-nutri-navy);
  opacity: 0.8;
  margin-bottom: 2rem;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  border: 1px solid #d2d7dd;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(
    135deg,
    var(--color-nutri-green) 0%,
    var(--color-nutri-green-light) 100%
  );
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.card-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
  margin-bottom: 4px;
}

.card-content p {
  color: var(--color-nutri-navy);
  line-height: 1.5;
  margin: 0;
}

.card-content span {
  font-size: 0.875rem;
  color: var(--color-nutri-navy);
}

/* Quick FAQ */
.quick-faq {
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(106, 155, 122, 0.1);
}

.faq-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-nutri-navy);
  margin-bottom: 1.5rem;
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  padding: 1.25rem;
  background: linear-gradient(135deg, #f8fffe 0%, #f0f8f5 100%);
  border-radius: 12px;
  border-left: 4px solid var(--color-nutri-green);
}

.faq-item h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
  margin-bottom: 0.5rem;
}

.faq-item p {
  font-size: 0.9rem;
  color: var(--color-nutri-navy);
  line-height: 1.5;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .contact-container {
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
  }
}

@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-stats {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-content {
    padding: 60px 1.5rem;
  }

  .contact-form-section,
  .contact-info,
  .quick-faq {
    padding: 2rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 0;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .contact-content {
    padding: 40px 1rem;
  }

  .contact-form-section,
  .contact-info,
  .quick-faq {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .info-card {
    padding: 1rem;
  }

  .card-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
