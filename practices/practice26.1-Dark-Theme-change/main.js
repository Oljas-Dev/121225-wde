// Получаем элемент html
const html = document.documentElement;
const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

function handleThemeChange(theme) {
  // Меняем тему на темную в localStorage
  localStorage.setItem("theme", theme);
  // Меняем значение атрибута у тега html
  html.setAttribute("data-theme", theme);
}

themeButton.addEventListener("click", () => {
  // Проверяем есть ли сохраненная тема в localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    handleThemeChange("dark");
  } else if (currentTheme === "dark") {
    handleThemeChange("light");
  } else {
    handleThemeChange("dark");
  }
});
