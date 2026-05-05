<template>
  <section class="hero-wrapper">
    <div class="hero">
      <div class="hero-inner">
        <img 
          src="/blob1.png" 
          class="blob" 
          alt="blob"
        >
        
        <div class="content">
          <div class="hero-left">
            <div class="title-group">
              <h1>OLV</h1>
            </div>
          </div>
          
          <div class="hero-text">
            <p class="hero-description">
              Увеличиваем узнаваемость бренда<br> 
              за счёт расширения охвата и точечного<br> 
              таргетинга на вашу целевую аудиторию
            </p>
            <UButton color="primary" @click="$emit('open')">
              Оставить заявку
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['open'])

const handleClick = () => {
  console.log('🔵 Кнопка в BlockHero нажата')
  emit('open')
  console.log('🟢 Эмит open отправлен')
}
</script>



<style scoped>
/* Обертка для центрирования */
.hero-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 0;
  background: transparent;
}

/* Основной блок - черный квадрат */
.hero {
  background: #1B1B1B;
  border-radius: 30px;
  max-width: 1200px;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.hero-inner {
  position: relative;
  width: 100%;
  height: 580px;  
}

/* фото, нижний слой */
.blob {
  position: absolute;
  left: 201px;
  top: 0px;
  width: 928px;
  z-index: 1;
  pointer-events: none;
  user-select: none;
}

/* Контент - верхний слой */
.content {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 10 80px;
  height: 100%;  
}

/* Левый блок */
.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  height: 100%;  
  padding-bottom: 40px; 
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 450px;
  font-style: italic;
  font-weight: 700;
  color: #ffffff;
  line-height: 0.8; 
  margin: 0;
  position: relative;
  left: 10px; 
  /* right: 0px; */
}

/* Правый блок с текстом */
.hero-text {
  max-width: 340px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 30px; 
  margin-right: -50px;
  gap: 30px;
}

.hero-description {
  text-align: right;
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: #EBEBEB;
}

/* Кастомизация кнопки Nuxt UI */
.btn-custom {
  background: #9273EA;
  border-radius: 50px;
  padding: 12px 32px;
  font-weight: 700;
  width: fit-content;
  align-self: flex-end;
}

.btn-custom:hover {
  background: #7b5cd4;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Адаптивность для разных экранов */
@media (max-width: 1280px) {
  .hero {
    max-width: 100%;
  }
  
  .content {
    padding: 0 40px;
  }
  
  h1 {
    font-size: 250px;
    right: 60px;
  }
  
  .hero-text {
    margin-right: 0;
  }
}

@media (max-width: 1024px) {
  h1 {
    font-size: 180px;
    right: 40px;
  }
  
  .hero-text {
    max-width: 280px;
  }
  
  .hero-description {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .hero-wrapper {
    padding: 80px 16px 0;
  }
  
  .hero-inner {
    height: auto;
    min-height: 500px;
  }
  
  .content {
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    gap: 40px;
  }
  
  .hero-left {
    justify-content: flex-start;
    padding-bottom: 0;
  }
  
  h1 {
    font-size: 120px;
    right: 0;
    text-align: center;
  }
  
  .hero-text {
    max-width: 100%;
    margin-right: 0;
    align-items: center;
  }
  
  .hero-description {
    text-align: center;
  }
  
  .btn-custom {
    align-self: center;
  }
  
  .blob {
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 600px;
    opacity: 0.3;
  }
}
</style>