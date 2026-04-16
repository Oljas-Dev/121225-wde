// Задание 1

// Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.

async function getPost() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.tpicode.com/posts?userId=1",
    );

    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error("Error message: ", error.message);
  }
}

getPost();

// Задание 2

// Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.

function divide(a, b) {
  if (b === 0) {
    console.error("Деление на ноль невозможно");
    return null;
  }

  return a / b;
}
