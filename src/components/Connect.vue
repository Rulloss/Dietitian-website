<template>
  <section class="connect-section">
    <div class="connect-container">
      <!-- Header Section -->
      <div class="connect-header">
        <h2 class="connect-title">Contact Us</h2>
        <p class="connect-description">
          Get in touch with us to learn more about our nutrition counseling services.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="connect-content">
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                v-model="form.firstName" 
                placeholder="Enter your first name"
                required
              >
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                v-model="form.lastName" 
                placeholder="Enter your last name"
                required
              >
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="Enter your email address"
              required
            >
          </div>

          <div class="form-group">
            <label for="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              placeholder="Enter your phone number"
            >
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" v-model="form.subject" required>
              <option value="">Select a subject</option>
              <option value="consultation">Nutrition Counseling</option>
              <option value="diet-plan">Diet Program</option>
              <option value="weight-management">Weight Management</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              placeholder="Write your message..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>

        <!-- Contact Info -->
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="info-content">
              <h4>Phone</h4>
              <p>+90 (555) 123 45 67</p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="info-content">
              <h4>Email</h4>
              <p>info@nutritionist.com</p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="info-content">
              <h4>Address</h4>
              <p>Health Street No:123<br>Ankara, Turkey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Connect',
  data() {
    return {
      isSubmitting: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      
      try {
        // Form submission logic here
        console.log('Form submitted:', this.form);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Reset form
        this.resetForm();
        
        // Show success message
        alert('Your message has been sent successfully!');
        
      } catch (error) {
        console.error('Form submission error:', error);
        alert('An error occurred while sending the message.');
      } finally {
        this.isSubmitting = false;
      }
    },
    
    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.connect-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, var(--color-nutri-deep) 0%, #f1f5f9 100%);
  min-height: 100vh;
}

.connect-container {
  max-width: 1200px;
  margin: 0 auto;
}

.connect-header {
  text-align: center;
  margin-bottom: 60px;
}

.connect-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-nutri-navy);
  margin-bottom: 20px;
  line-height: 1.2;
}

.connect-description {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.connect-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
  border: 1px solid #e2e8f0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--color-nutri-navy);
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-nutri-green);
  box-shadow: 0 0 0 3px rgba(47, 154, 97, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 16px 32px;
  background: linear-gradient(135deg, var(--color-nutri-green) 0%, var(--color-nutri-green-light) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(47, 154, 97, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-nutri-green) 0%, var(--color-nutri-green-light) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.info-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-nutri-navy);
  margin-bottom: 4px;
}

.info-content p {
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 968px) {
  .connect-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact-info {
    order: -1;
  }
}

@media (max-width: 768px) {
  .connect-section {
    padding: 60px 16px;
  }
  
  .connect-title {
    font-size: 2.5rem;
  }
  
  .connect-description {
    font-size: 1.1rem;
  }
  
  .contact-form {
    padding: 30px 24px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .info-card {
    padding: 24px;
    flex-direction: column;
    text-align: center;
  }
  
  .info-icon {
    margin-bottom: 8px;
  }
}

@media (max-width: 480px) {
  .connect-title {
    font-size: 2rem;
  }
  
  .contact-form {
    padding: 24px 20px;
  }
  
  .info-card {
    padding: 20px;
  }
}
</style>
