/**
 * POST-запрос
 *
 * В рамках данного запроса мы не получаем данные
 * мы их отправляем на сервер
 *
 * Используем тестовый API json placeholder
 * Он принимает данные и возвращает нам объект,
 * который якобы успешно записан в Базу Данных
 */
// Создаем объект, который хотим отправить на сервер
const newTask = {
  title: "Подготовить отчет",
  body: "Собрать данные и отправить до вечера",
  userId: 7,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(newTask),
  headers: {
    // Сообщаем серверу, что отправляем JSON
    "Content-Type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Не удалось создать запись поста на сервере");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Созданный пост: ", data);
  })
  .catch((error) => {
    console.error("Ошибка создания поста:", error.message);
  });
