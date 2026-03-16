const person = {
  name: "John",
  age: 25,
};

/**
 * JSON.stringify - метод, который преобразуем переданное значение в строку,
 * потому что localStorage умеет хранить только строки
 */
localStorage.setItem("person", JSON.stringify(person));
// получаем строку из localStorage
const savedPerson = localStorage.getItem("person");
console.log(typeof savedPerson);

// JSON.parser - метод, который преобразуем строку обратно в сущность JS (объект, массив)
const parsedPerson = JSON.parse(savedPerson);
console.log(typeof parsedPerson, parsedPerson);

// 1.Опишите две функции: writeLocalStorage и readLocalStorage. Функции должны записывать или считывать объекты в localStorage соответственно.
function writeLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readLocalStorage(key) {
  const data = localStorage.getItem(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

const user = {
  name: "Dart Weyder",
  theme: "dark",
};

writeLocalStorage("user", user);
const receivedData = readLocalStorage("user");
console.log(receivedData);
