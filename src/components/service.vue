<template>
  <div class="service-container">
    <div class="texts">
      <span class="tag">☘️ My Services ☘️</span>
      <h1 class="title">Personalized Support for Every Goal</h1>
    </div>
    <div class="cards">
      <div class="card" v-for="service in services" :key="service.id">
        <div class="card-icon">
          <img :src="service.imagePath" :alt="service.title" class="service-image" />
        </div>
        <h3 class="card-title">{{ service.title }}</h3>
        <p class="card-subtitle">{{ service.subtitle }}</p>
        <p class="card-description">{{ service.description }}</p>
        <!-- <Button>{{ service.buttonText }}</Button> -->
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../assets/Button.vue";
import OutlineButton from "../assets/OutlineButton.vue";
import AvocadoImage from "../assets/avacado.png";
import WeightImage from "../assets/weight.png";
import DumbbellImage from "../assets/dumbbell.png";
import AllergiesImage from "../assets/allergies.png";
import SaladImage from "../assets/salad.png";

export default {
  name: "Service",
  components: {
    OutlineButton,
    Button,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          imagePath: AvocadoImage,
          title: "Nutrition",
          subtitle: "Personalized Nutrition Plans",
          description:
            "Tailored meal programs designed to fit your lifestyle, preferences, and health goals.",
          buttonText: "",
        },
        {
          id: 2,
          imagePath: WeightImage,
          title: "Weight Management",
          subtitle: "Tailored Weight Management Programs",
          description:
            "Sustainable strategies to help you lose weight, maintain progress, and build healthy habits.",
          buttonText: "",
        },
        {
          id: 3,
          imagePath: DumbbellImage,
          title: "Sport",
          subtitle: "Sports & Performance Nutrition",
          description:
            "Optimized nutrition guidance to fuel your workouts, improve recovery, and boost performance.",
          buttonText: "",
        },
        {
          id: 4,
          imagePath: AllergiesImage,
          title: "Allergy",
          subtitle: "Food Allergy & Intolerance Management",
          description: "Personalized strategies to help you enjoy meals safely and comfortably.",
          buttonText: "",
        },
        {
          id: 5,
          imagePath: SaladImage,
          title: "Healthy Living",
          subtitle: "Healthy Lifestyle Guidance",
          description:
            "Guidance on maintaining a balanced diet, regular exercise, and overall well-being.",
          buttonText: "",
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

/* Ana Sayfa Konteyneri */
.service-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  overflow-x: hidden;
}

/* Metinler */
.texts {
  margin-bottom: 3rem;
  word-wrap: break-word;
}

.tag {
  font-size: 1.2rem;
  color: var(--color-nutri-green);
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-nutri-navy);
  margin-bottom: 1rem;
  word-break: break-word;
}

/* Kartlar */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
  padding: 0 1rem;
}

.card {
  height: 100%;
  background: rgba(255, 255, 255, 0.295);
  border-radius: 20px;
  padding: 1rem 1rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #f0f0f0;
  min-width: 0;
  word-wrap: break-word;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.10);
}

.card-icon {
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 0 auto 1.5rem;
  flex-shrink: 0;
}

.service-image {
  width: 60px;
  height: 60px;
  object-fit: contain; 
  transition: transform 0.3s ease;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-nutri-navy);
  margin-bottom: 0.5rem;
  word-break: break-word;
}

.card-subtitle {
  font-size: 1rem;
  color: var(--color-nutri-green);
  font-weight: 600;
  margin-bottom: 1rem;
  word-break: break-word;
}

.card-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
  word-break: break-word;
}

/* Responsive Tasarım */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .service-container {
    padding: 1.5rem 0.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .cards {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 0 0.5rem;
  }

  .card {
    padding: 1.5rem;
  }

  .card-icon {
    width: 70px;
    height: 70px;
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .service-container {
    padding: 1rem 0.25rem;
  }

  .title {
    font-size: 1.8rem;
    line-height: 1.1;
  }

  .cards {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.25rem;
  }

  .card {
    padding: 1.25rem;
  }

  .card-title {
    font-size: 1.3rem;
    line-height: 1.2;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
}

@media (max-width: 320px) {
  .service-container {
    padding: 0.75rem 0.15rem;
  }

  .title {
    font-size: 1.6rem;
  }

  .cards {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 0 0.15rem;
  }

  .card {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-subtitle {
    font-size: 0.9rem;
  }

  .card-description {
    font-size: 0.85rem;
  }

  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .tag {
    font-size: 1rem;
  }
}
</style>
