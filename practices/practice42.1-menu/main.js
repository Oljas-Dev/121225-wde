const navMenu = document.getElementById("navMenu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");

// Функция открытия меню
/**
 * 1. Добавляем класс nav-menu--open
 * 2. Меню получает transform: translateX(0)
 * 3. Меню плавно выезжает на экран
 * 4. Добавляем затемнение фона
 */
const openMenu = () => {
  navMenu.classList.add("nav-menu--open");
  overlay.classList.add("overlay--active");
};

// Функция закрытия меню
/**
 * 1. Убираем класс nav-menu--open
 * 2. Меню снова получает transform: translateX(-100%)
 * 3. Меню плавно уезжает за левый край экрана
 * 4. Убираем затемнение фона
 */
const closeMenu = () => {
  navMenu.classList.remove("nav-menu--open");
  overlay.classList.remove("overlay--active");
};

// При клике на кнопку "openButton" открываем боковую панель
openButton.addEventListener("click", openMenu);

// При клике на кнопку "closeButton" закрываем боковую панель
closeButton.addEventListener("click", closeMenu);

// При клике на кнопку "overlay" закрываем боковую панель
overlay.addEventListener("click", closeMenu);

/**
 * Закрытие меню по клавише Escape
 */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
