// Получаем элементы формы
// Форма регистрации
const regForm = document.getElementById("regForm");

// поля формы регистрации
const usernameFormReg = document.getElementById("usernameFormReg");
const phoneFormReg = document.getElementById("phoneFormReg");
const emailFormReg = document.getElementById("emailFormReg");
const passwordFormReg = document.getElementById("passwordFormReg");

// Форма аутентификации
const authForm = document.getElementById("authForm");

// поля формы аутентификации
const emailFormAuth = document.getElementById("emailFormAuth");
const passwordFormAuth = document.getElementById("passwordFormAuth");

// Параграф для сообщений
const message = document.getElementById("message");

// Работа с localStorage
/**
 * Получаем массив пользователей из LocalStorage,
 * если массива нет, тогда создаем пустой массив
 */
const users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

// Функция для сообщений
function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

// Регистрация
regForm.addEventListener("submit", (event) => {
  // Отключаем перезагрузку страницы
  event.preventDefault();

  // Проверка на пустые поля
  if (
    usernameFormReg.value === "" ||
    phoneFormReg.value === "" ||
    emailFormReg.value === "" ||
    passwordFormReg.value === ""
  ) {
    showMessage("Все поля обязательны к заполнению", "red");
    return;
  }

  // Проверим есть ли пользователь
  const userExists = users.some((user) => user.email === emailFormReg.value);
  if (userExists) {
    showMessage("Пользователь с таким email уже существует", "red");
    return;
  }

  // Создаем объект пользователя
  const newUser = {
    username: usernameFormReg.value,
    phone: phoneFormReg.value,
    email: emailFormReg.value,
    password: passwordFormReg.value,
  };

  // Добавляем нового пользователя в массив
  users.push(newUser);
  // Сохраняем в localStorage массив users
  localStorage.setItem("users", JSON.stringify(users));
  // Очищаем поля
  regForm.reset();
  showMessage("Регистрация прошла успешно", "green");
});
