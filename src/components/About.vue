<style scoped>
.about {
  padding: 80px 0;
  background-color: #f8fafc;
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
}

.about-text {
  padding-right: 20px;
  min-width: 0;
  word-wrap: break-word;
}

.section-tag {
  display: inline-block;
  background-color: var(--color-nutri-green-light);
  color: var(--color-nutri-navy);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-nutri-navy);
  margin-bottom: 20px;
  line-height: 1.2;
  word-break: break-word;
}

.section-description {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 30px;
  word-break: break-word;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1rem;
  color: var(--color-nutri-navy);
  word-break: break-word;
}

.feature-icon {
  width: 20px;
  height: 20px;
  background-color: var(--color-nutri-green);
  border-radius: 50%;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.about-image {
  position: relative;
  min-width: 0;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 100%;
}

.image-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background-color: var(--color-nutri-green-light);
  border-radius: 50%;
  z-index: -1;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .about-content {
    gap: 40px;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 20px;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-text {
    padding-right: 0;
    order: 2;
  }
  
  .about-image {
    order: 1;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .section-title {
    font-size: 1.8rem;
    line-height: 1.1;
  }
  
  .section-description {
    font-size: 0.95rem;
  }
  
  .feature-item {
    font-size: 0.9rem;
  }
  
  .image-decoration {
    width: 60px;
    height: 60px;
    top: -10px;
    right: -10px;
  }
}

@media (max-width: 320px) {
  .about {
    padding: 30px 0;
  }
  
  .container {
    padding: 0 10px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .section-description {
    font-size: 0.9rem;
  }
  
  .feature-item {
    font-size: 0.85rem;
  }
  
  .section-tag {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>