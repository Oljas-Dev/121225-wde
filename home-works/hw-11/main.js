const login = "test@test.com";
const pass = "11111111";

const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let loginName = document.getElementById("loginName").value;
  let passField = document.getElementById("passField").value;

  if (loginName === login && passField === pass) {
    alert("Sign in is successfull");
    signInForm.reset();
  } else {
    alert("Your login or password doesn't match");
    signInForm.reset();
  }
});

// Задание 1

// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).

// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.
