<template>
  <div class="faq-page">
    <!-- Navbar Component -->
    <Navbar />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Sıkça Sorulan Sorular</h1>
        <p class="hero-description">
          Beslenme danışmanlığı hizmetlerim hakkında merak ettiğiniz her şeyi burada bulabilirsiniz.
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
            placeholder="Soru ara..."
            class="search-input"
          >
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
            :class="['category-tab', { active: selectedCategory === category.id }]"
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
          <div 
            v-for="faq in filteredFAQs" 
            :key="faq.id"
            class="faq-item"
          >
            <div 
              class="faq-question" 
              @click="toggleFAQ(faq.id)"
            >
              <h3>{{ faq.question }}</h3>
              <span class="toggle-icon" :class="{ active: faq.isOpen }">+</span>
            </div>
            <div 
              class="faq-answer" 
              :class="{ open: faq.isOpen }"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredFAQs.length === 0" class="no-results">
          <h3>Aradığınız kriterlere uygun soru bulunamadı.</h3>
          <p>Farklı anahtar kelimeler deneyebilir veya kategori seçiminizi değiştirebilirsiniz.</p>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Sorunuzun cevabını bulamadınız mı?</h2>
          <p>Benimle iletişime geçin, size yardımcı olmaktan mutluluk duyarım.</p>
          <router-link to="/contact" class="cta-button">
            İletişime Geç
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "FAQ",
  components: {
    Navbar
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      categories: [
        { id: 'all', name: 'Tümü' },
        { id: 'general', name: 'Genel' },
        { id: 'nutrition', name: 'Beslenme' },
        { id: 'consultation', name: 'Danışmanlık' },
        { id: 'pricing', name: 'Fiyatlandırma' }
      ],
      faqs: [
        {
          id: 1,
          category: 'general',
          question: 'Diyetisyen kimdir ve ne iş yapar?',
          answer: 'Diyetisyen, beslenme bilimi alanında uzmanlaşmış, kişilerin sağlıklı beslenme alışkanlıkları geliştirmesine yardımcı olan sağlık profesyonelidir. Kilo kontrolü, hastalık yönetimi ve genel sağlık iyileştirme konularında danışmanlık verir.',
          isOpen: false
        },
        {
          id: 2,
          category: 'consultation',
          question: 'İlk danışmanlık seansında neler yapılır?',
          answer: 'İlk seansımızda detaylı anamnez alırım, beslenme alışkanlıklarınızı değerlendiririm, hedeflerinizi belirleriz ve size özel bir beslenme planı hazırlarım. Ayrıca vücut analizi ve ölçümlerinizi de yaparım.',
          isOpen: false
        },
        {
          id: 3,
          category: 'nutrition',
          question: 'Hangi durumlarda diyetisyene başvurmalıyım?',
          answer: 'Kilo vermek veya almak istiyorsanız, kronik hastalıklarınız varsa, spor performansınızı artırmak istiyorsanız, beslenme alışkanlıklarınızı düzeltmek istiyorsanız veya genel sağlığınızı iyileştirmek istiyorsanız diyetisyene başvurabilirsiniz.',
          isOpen: false
        },
        {
          id: 4,
          category: 'pricing',
          question: 'Danışmanlık ücretleri nasıl belirlenir?',
          answer: 'Ücretlerim seansın süresi, danışmanlık türü ve takip sıklığına göre değişmektedir. Detaylı fiyat bilgisi için benimle iletişime geçebilir veya hizmetler sayfamı inceleyebilirsiniz.',
          isOpen: false
        },
        {
          id: 5,
          category: 'consultation',
          question: 'Online danışmanlık hizmeti veriyor musunuz?',
          answer: 'Evet, online danışmanlık hizmeti veriyorum. Video konferans yoluyla görüşebilir, beslenme planınızı dijital ortamda paylaşabilir ve düzenli takiplerinizi yapabiliriz.',
          isOpen: false
        },
        {
          id: 6,
          category: 'nutrition',
          question: 'Beslenme planı ne kadar sürede hazırlanır?',
          answer: 'İlk görüşmemizden sonra, kişisel beslenme planınızı 2-3 gün içinde hazırlayıp size iletiyorum. Plan, yaşam tarzınıza ve tercihlerinize göre özelleştirilmiş olur.',
          isOpen: false
        },
        {
          id: 7,
          category: 'general',
          question: 'Takip seansları ne sıklıkla yapılır?',
          answer: 'Takip seansları genellikle 2-4 hafta aralıklarla yapılır. Bu süre, hedeflerinize, ilerlemenize ve ihtiyaçlarınıza göre ayarlanabilir.',
          isOpen: false
        },
        {
          id: 8,
          category: 'nutrition',
          question: 'Özel diyet ihtiyaçlarım varsa yardımcı olabilir misiniz?',
          answer: 'Tabii ki! Gluten intoleransı, laktoz intoleransı, vejetaryenlik, veganlık gibi özel beslenme ihtiyaçlarınız için uygun planlar hazırlayabilirim.',
          isOpen: false
        },
        {
          id: 9,
          category: 'consultation',
          question: 'Randevu nasıl alabilirim?',
          answer: 'Randevu almak için iletişim sayfasındaki form üzerinden, telefon numaramdan veya e-posta adresimden benimle iletişime geçebilirsiniz. Size en uygun tarih ve saati birlikte belirleriz.',
          isOpen: false
        },
        {
          id: 10,
          category: 'general',
          question: 'Sonuçları ne kadar sürede görebilirim?',
          answer: 'Beslenme planına uyum sağladığınızda, ilk 2-4 hafta içinde enerji seviyenizde artış ve genel iyileşme hissedebilirsiniz. Kilo değişimi gibi fiziksel sonuçlar ise 4-8 hafta içinde görülmeye başlar.',
          isOpen: false
        }
      ]
    }
  },
  computed: {
    filteredFAQs() {
      let filtered = this.faqs;
      
      // Category filter
      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(faq => faq.category === this.selectedCategory);
      }
      
      // Search filter
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(faq => 
          faq.question.toLowerCase().includes(query) || 
          faq.answer.toLowerCase().includes(query)
        );
      }
      
      return filtered;
    }
  },
  methods: {
    toggleFAQ(id) {
      const faq = this.faqs.find(f => f.id === id);
      if (faq) {
        faq.isOpen = !faq.isOpen;
      }
    }
  }
};
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fffe 0%, #f0f9f7 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--color-nutri-navy) 0%, var(--color-nutri-deep) 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #ffffff, #e8f5f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  border: 2px solid #e1e8e5;
  border-radius: 50px;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-nutri-green);
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
  background: linear-gradient(135deg, var(--color-nutri-green-light) 0%, #e8f5f3 100%);
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
  background: linear-gradient(135deg, var(--color-nutri-navy) 0%, var(--color-nutri-deep) 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
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

.cta-button {
  display: inline-block;
  padding: 16px 40px;
  background: var(--color-nutri-green);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(76, 175, 80, 0.4);
  background: var(--color-nutri-green-light);
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