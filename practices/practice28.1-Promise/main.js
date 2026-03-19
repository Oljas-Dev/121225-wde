Promise.resolve("Пользователь успешно найден").then((result) => {
  console.log("Результат resolve:", result);
});

// Promise.reject() создает и возвращает промис, который сразу считается отклоненным
Promise.reject("Не удалось получить список товаров").catch((error) => {
  console.log("Результат reject:", error);
});

// Promise.all()
/**
 * Функция получает информацию о клиенте.
 * Имитация сетевого запроса: ответ придет через 1200мс
 */
function getCustomerInfo() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("Клиент: Александр");
    }, 1200);
  });
}

/**
 * Функция получает информацию о доставке.
 * Имитация сетевого запроса: ответ придет через 2000мс
 */
function getDeliveryInfo() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("Доставлено");
    }, 2000);
  });
}

/**
 * Функция получает информацию об оплате.
 * Имитация сетевого запроса: ответ придет через 800мс
 */
function getPaymentInfo() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("Оплата прошла успешно");
    }, 800);
  });
}

loadOrderDetails()
  .then((result) => {
    /**
     * В result придет массив значений
     * Порядок будет таким же, как порядок промисов в Promise.all(),
     * даже если какой-то из них выполнится быстрее
     */
    console.log("Все данные по заказу загружены");
    console.log(result);
    // Можно отдельно обратиться к каждому элементу массива
    console.log("1:", result[0]);
    console.log("2:", result[1]);
    console.log("3:", result[2]);
  })
  .catch((error) => {
    /**
     * Если хотя бы один промис завершится с ошибкой,
     * тогда весь Promise.all перейдет в catch
     */
    console.error("Ошибка при загрузке данных заказа", error);
  });
