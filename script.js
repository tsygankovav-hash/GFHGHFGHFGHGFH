 document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');

  // Кнопка "Подробнее"
  learnMoreBtn.addEventListener('click', () => {
    alert('Компания ООО "Товары и услуги" работает более 15 лет и предлагает лучшие решения для вас!');
  });

  // Мобильное меню
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});
