// Пример 1
function parseUser(jsonString) {
  try {
    // Попытаемся распарсить JSON
    const user = JSON.parse(jsonString);
    // Если все ок, тогда возвращаем результат
    return user;
  } catch (error) {
    // Если произошла ошибка, мы попадаем в catch
    // Объект ошибки будет записан в параметр error
    // Логируем ошибку и возвращаем null
    console.error("Ошибка парсинга JSON", error.message);
    return null;
  }
}
console.log(parseUser('{"name": "Alex"}'));
console.log(parseUser("{name: Alex}"));

// Пример 2. throw
function registerUser(user) {
  try {
    if (!user.email) {
      throw new Error("Email обязателен");
    }
    if (!user.password) {
      throw new Error("Password обязателен");
    }
    console.log("Пользователь успешно зарегистрирован", user);
  } catch (error) {
    console.error("Ошибка регистрации пользователя", error.message);
  }
}
registerUser({ email: "example@test.com", password: 12345 });

// Пример 3. finally
function connectToDatabase() {
  let connection;
  try {
    console.log("Подключение к БД...");
    connection = { connected: true };
    // имитация ошибки
    throw new Error("Ошибка подключения");
  } catch (error) {
    console.error("Ошибка:", error.message);
  } finally {
    console.log("Закрытие соединение с БД");
    if (connection) {
      connection = null;
    }
  }
}
connectToDatabase();
