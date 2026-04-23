/**
 * Массив с URL изображений для слайдера.
 * Можно добавлять или удалять изображения по необходимости
 */
const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
];

// Глобальная переменная для хранения текущего слайда (начинаем с 0)
let sliderIndex = 0;

// Получаем элемент с id="root"
const root = document.getElementById("root");

// Создаем основной контейнер слайдера (рамку)
const frame = document.createElement("div");
frame.classList.add("frame");

// Создаем контейнер для всех слайдов
const cards = document.createElement("div");
cards.classList.add("cards");

// Заполняем контейнер слайдов элементами с изображениями
images.forEach((imageUrl) => {
  const card = document.createElement("div");
  card.classList.add("card");
  // Задаем фоновое изображение для карточки
  card.style.backgroundImage = `url('${imageUrl}')`;
  cards.append(card);
});

// Устанавливаем ширину контейнера .cards в зависимости от количества слайдов
cards.style.width = `${images.length * 500}px`;

// Добавляем контейнер слайдов в рамку
frame.append(cards);

/**
 * Функция для обновления позиции контейнера слайдов
 * Сдвиг происходит на величину: индекс слайда * 500px
 */
function updateSliderPosition() {
  cards.style.left = `${-sliderIndex * 500}px`;
  updateActiveRound();
}

/**
 * Функция создания переключателей "точек"
 * Для каждого изображения создается кнопка, при клике на которую происходит переход к соответствующему слайду
 */
function createRounds() {
  const container = document.createElement("div");
  container.classList.add("rounds");

  images.forEach((_imageUrl, index) => {
    const button = document.createElement("button");
    button.classList.add("btn");

    // Если это первый слайд, делаем индикатор активным
    if (index === 0) {
      button.classList.add("active");
    }

    container.append(button);

    // При клике на индикатор обновляем текущий индекс слайда и позицию контейнера
    button.addEventListener("click", () => {
      sliderIndex = index;
      updateSliderPosition();
    });
  });

  frame.append(container);
}

createRounds();

function updateActiveRound() {
  const rounds = document.querySelectorAll(".rounds button");
}

// Добавляем готовый слайдер в корневой элемент DOM
root.append(frame);
