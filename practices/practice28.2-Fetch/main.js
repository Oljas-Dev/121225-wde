/**
 * fetch() по умолчанию делает GET-запрос
 *
 * Мы обращаемся к серверу по URL: https://jsonplaceholder.typicode.com/todos/1
 *
 * Сервер возвращает ответ в виде объекта Response, который мы получаем из Promise
 * Далее мы преобразуем ответ в JSON и выводим результат в консоль
 */

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    /**
     * response - это объект ответа от сервера
     *
     * У него есть важные свойства:
     * - status - HTTP-статус ответа, например 200
     * - ok - true, если запрос успешный (статусы 200-299)
     * - json() - метод, который читает тело ответа и преобразует его в JS-объект
     */
    console.log("Статус ответа:", response.status);
    console.log("Успешный ли запрос:", response.ok);
    return response.json();
  })
  .then((data) => {
    /**
     * data - javaScript-объект(сущность),
     * который мы получили после response.json()
     */
    console.log(data);
  })
  .catch((error) => {
    /**
     * catch() срабатывает, если произошла ошибка в одном из then()
     * Например, проблема с сетью, неправильный адрес(URL)
     */
    console.error("Произошла ошибка при сетевом запросе:", error);
  });

//   Используя fetch сделать запрос на https://jsonplaceholder.typicode.com/todos и после получения ответа вывести все id туду в консоль.
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Не удалось получить список задач");
    }
    return response.json();
  })
  .then((todos) => {
    console.log(todos);
    const newTodos = todos.map((todo) => {
      return { id: todo.id, title: todo.title };
    });
    console.log(newTodos);
    newTodos.forEach((newTodo) => {
      console.log(`id: ${newTodo.id}, title: ${newTodo.title}`);
    });
  })
  .catch((error) => {
    console.error("Ошибка при загрузке задач:", error.message);
  });
