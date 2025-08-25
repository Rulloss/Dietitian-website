<template>
  <div class="page-container">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content -->
    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <span class="tag">About Nutrition</span>
          <h1 class="title">
            Trusted Expert for <br />
            Healthy Living
          </h1>
          <Button>
            <span>Book a Consultation</span>
          </Button>
        </div>
      </section>

      <!-- Video Section -->
      <section class="video-section">
        <div class="video-container">
          <div class="custom-video-player" @click="togglePlay">
            <video
              ref="videoPlayer"
              :poster="videoPoster"
              class="video-element"
              @loadedmetadata="onVideoLoaded"
              @play="onPlay"
              @pause="onPause"
              @ended="onEnded"
            >
              <source :src="videoSrc" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>

            <div v-if="!isPlaying" class="play-overlay">
              <div class="play-button">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)" />
                  <path d="M25 20L40 30L25 40V20Z" fill="#2F9A61" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Approach Section -->
      <section class="approach-section">
        <div class="approach-header">
          <span class="approach-tag">Approach</span>
          <h2 class="approach-title">Our approach to nutrition</h2>
        </div>

        <div class="approach-grid">
          <div
            v-for="card in approachCards"
            :key="card.id"
            class="approach-card"
          >
            <div class="card-icon">
              <div v-html="card.icon"></div>
            </div>
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-description">{{ card.description }}</p>
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
import Connect from "../components/Connect.vue"
import Button from "../assets/Button.vue";
import videoFile from "../assets/dietician.mp4";

export default {
  name: "About",
  components: {
    Navbar,
    Footer,
    Connect,
    Button,
  },
  data() {
    return {
      // Approach Cards Data
      approachCards: [
        {
          id: 1,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="#2F9A61" stroke-width="2" fill="none"/>
                   <circle cx="12" cy="12" r="2" fill="#2F9A61"/>
                 </svg>`,
          title: "Personalized Nutrition",
          description:
            "We create customized meal plans tailored to your unique health goals, dietary preferences, and lifestyle for optimal nutrition results.",
        },
        {
          id: 2,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="#2F9A61"/>
                   <path d="M21 9V7L15 7.5V9M15 11V22H13V18H11V22H9V11H15Z" stroke="#2F9A61" stroke-width="2" fill="none"/>
                   <path d="M5 12L3 14L5 16L7 14L5 12Z" fill="#2F9A61"/>
                 </svg>`,
          title: "Lifestyle Integration",
          description:
            "We help you seamlessly integrate healthy eating habits into your daily routine, making nutrition a natural part of your lifestyle.",
        },
        {
          id: 3,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M9 11H15L13 13.5L11 13.5L9 11Z" fill="#2F9A61"/>
                   <path d="M20 6H4C2.89 6 2 6.89 2 8V16C2 17.11 2.89 18 4 18H20C21.11 18 22 17.11 22 16V8C22 6.89 21.11 6 20 6Z" stroke="#2F9A61" stroke-width="2" fill="none"/>
                   <circle cx="7" cy="12" r="1" fill="#2F9A61"/>
                   <circle cx="17" cy="12" r="1" fill="#2F9A61"/>
                 </svg>`,
          title: "Educational Support",
          description:
            "We provide comprehensive nutrition education to empower you with knowledge about food choices and their impact on your health.",
        },
        {
          id: 4,
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#2F9A61" stroke-width="2" fill="none"/>
                   <circle cx="12" cy="12" r="3" stroke="#2F9A61" stroke-width="1" fill="none"/>
                 </svg>`,
          title: "Holistic Wellness",
          description:
            "Our approach combines nutrition science with mental wellness, creating a balanced foundation for your overall health and vitality.",
        },
      ],
      
      // Video Data
      videoSrc: videoFile,
      videoPoster: "",
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      progress: 0,
    };
  },
  methods: {
    togglePlay() {
      const video = this.$refs.videoPlayer;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },

    onPlay() {
      this.isPlaying = true;
      this.updateProgress();
    },

    onPause() {
      this.isPlaying = false;
    },

    onEnded() {
      this.isPlaying = false;
      this.progress = 0;
      this.currentTime = 0;
    },

    onVideoLoaded() {
      const video = this.$refs.videoPlayer;
      this.duration = video.duration;
    },

    updateProgress() {
      if (this.isPlaying) {
        const video = this.$refs.videoPlayer;
        this.currentTime = video.currentTime;
        this.progress = (video.currentTime / video.duration) * 100;

        requestAnimationFrame(this.updateProgress);
      }
    },

    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    },
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
  max-width: 600px;
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
  margin-bottom: 36px;
  font-family: "Lexend", sans-serif;
}

/* Video Section */
.video-section {
  padding: 40px 0 80px;
}

.video-container {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
}

.custom-video-player {
  position: relative;
  cursor: pointer;
  background: #000;
  border-radius: 20px;
  overflow: hidden;
}

.video-element {
  width: 100%;
  height: 450px;
  object-fit: cover;
  display: block;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;
}

.play-overlay:hover {
  background: rgba(0, 0, 0, 0.5);
}

.play-button {
  transition: transform 0.3s ease;
}

.play-overlay:hover .play-button {
  transform: scale(1.1);
}

/* Approach Section */
.approach-section {
  padding: 80px 0;
  background-color: #fdf7f7b2;
  border-radius: 30px;
  margin-bottom: 40px;
}

.approach-header {
  text-align: center;
  margin-bottom: 60px;
}

.approach-tag {
  display: inline-block;
  background-color: #fff5f5;
  color: #2f9a61;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  border: 1px solid #50b17acb;
}

.approach-title {
  font-size: 48px;
  font-weight: 400;
  letter-spacing: -1px;
  color: #0f172a;
  font-family: "Lexend", sans-serif;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
  padding: 0 40px;
}

.approach-card {
  background: white;
  padding: 32px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.approach-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 48px;
  height: 48px;
  background-color: #fff5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: 500;
  color: #0f172a;
  margin-bottom: 12px;
  font-family: "Lexend", sans-serif;
}

.card-description {
  font-size: 18px;
  line-height: 1.6;
  color: #64748b;
  font-family: "DM Sans", sans-serif;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    padding: 0 16px;
  }

  .hero-section {
    padding: 60px 0 40px;
  }

  .title {
    font-size: 36px;
  }

  .video-element {
    height: 300px;
  }

  .approach-title {
    font-size: 28px;
  }

  .approach-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 20px;
  }

  .approach-card {
    padding: 24px 20px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 40px 0 30px;
  }

  .title {
    font-size: 28px;
  }

  .video-element {
    height: 250px;
  }

  .approach-section {
    padding: 60px 0;
    border-radius: 20px;
  }

  .approach-title {
    font-size: 24px;
  }

  .approach-grid {
    padding: 0 16px;
  }
}
</style>
