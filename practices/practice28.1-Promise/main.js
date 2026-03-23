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

/**
 * Пример работы Promise.any()
 *
 * Promise.any() возвращает первый успешный (fulfilled) промис.
 *
 * Важно:
 * - игнорирует ошибки (rejected)
 * - если ВСЕ промисы упали, тогда будет ошибка AggregateError
 */
// Создаем 3 промиса
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Ошибка в promise1"); // отклоняется
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3); // успешный результат
  }, 2500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5); // тоже успешный, но позже
  }, 2000);
});
/**
 * Используем Promise.any()
 */
Promise.any([promise1, promise2, promise3])
  .then((result) => {
    /**
     * result - это значение ПЕРВОГО успешного промиса
     *
     * В нашем случае:
     * promise1 -> ошибка (игнорируется)
     * promise2 -> первый успешный -> вернется 3
     * promise3 -> уже не важен
     */
    console.log("Результат:", result); //  3
  })
  .catch((error) => {
    /**
     * Этот блок выполнится ТОЛЬКО если:
     * все промисы завершились с ошибкой
     *
     * error - это AggregateError
     */
    console.log("Все промисы завершились с ошибкой");
    console.log(error);
  });

/**
 * Пример работы Promise.race()
 *
 * Promise.race() возвращает результат первого завершившегося промиса
 * (не важно: успех или ошибка)
 */
// Промис, который выполняется быстро
function fetchDataFast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Данные загружены быстро"); // через 1 секунду
    }, 1000);
  });
}
// Промис, который выполняется медленно
function fetchDataSlow() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Данные загружены медленно"); // через 3 секунды
    }, 3000);
  });
}
/**
 * Используем Promise.race()
 */
Promise.race([fetchDataFast(), fetchDataSlow()]).then((result) => {
  /**
   * Вернется результат ПЕРВОГО завершившегося промиса
   *
   * fetchDataFast -> 1 секунда
   * fetchDataSlow -> 3 секунды
   *
   * победит fetchDataFast
   */
  console.log(result); // 'Данные загружены быстро'
});
