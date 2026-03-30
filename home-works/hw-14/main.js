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

  // New username check
  const isValid = /^[A-Za-z]+$/.test(usernameFormReg.value);
  if (
    usernameFormReg.value.length < 2 ||
    usernameFormReg.value.length > 24 ||
    !isValid
  ) {
    showMessage(
      "Username should contain minimum 2 or maximum 24 symbols with no numbers",
      "red",
    );
    return;
  }

  // Phone check
  const isValidPhone = /^\+?\d+$/.test(phoneFormReg.value);
  if (phoneFormReg.value === "") {
    showMessage("Please enter your phone number", "red");
    return;
  } else if (!phoneFormReg.value.startsWith("+")) {
    showMessage("Don't forget about plus in the begining 😉", "red");
    return;
  } else if (phoneFormReg.value.length > 12 || phoneFormReg.value.length < 8) {
    showMessage(
      "The phone number should be maximum of 12 and minimum of 8 symbols",
      "red",
    );
    return;
  } else if (!isValidPhone) {
    showMessage("Phone number may not contain letters", "red");
    return;
  }

  // Email check
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailFormReg.value);

  if (!isValidEmail || emailFormReg.value.length < 7) {
    showMessage("The email is incorrect!", "red");
    return;
  }

  // Password check
  const isValidPassword =
    passwordFormReg.value.length > 26 || passwordFormReg.value.length < 5;
  if (isValidPassword) {
    showMessage(
      "Password should contain at least 5 and not more than 26 symbols",
      "red",
    );
    return;
  }

  if (
    usernameFormReg.value === "" ||
    emailFormReg.value === "" ||
    passwordFormReg.value === ""
  ) {
    // Проверка на пустые поля
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

// Авторизация
authForm.addEventListener("submit", (e) => {
  // отключаем перезагрузку страницы
  e.preventDefault();

  // проверка на пустые поля
  if (emailFormAuth.value === "" || passwordFormAuth.value === "") {
    showMessage("Заполните все поля", "red");
    return;
  }

  // ищем пользователя
  const foundUser = users.find(
    (user) =>
      user.email === emailFormAuth.value &&
      user.password === passwordFormAuth.value,
  );

  if (!foundUser) {
    showMessage("Неверный email или пароль", "red");
    return;
  }

  // сохраняем текущего пользователя
  localStorage.setItem("currentUser", JSON.stringify(foundUser));

  // очищаем форму
  authForm.reset();

  // успешный вход
  showMessage(`Добро пожаловать, ${foundUser.email}`, "green");
});
