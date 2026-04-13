// Полиморфизм (наследование и переопределение)
// Родительский класс
class Transport {
  move() {
    console.log("Транспортное средство начинает движение...");
  }
}
// Наследник - автомобиль
class Car extends Transport {
  // Переопределяем метод родителя (Полиморфизм)
  move() {
    console.log("Машина едет по шоссе");
  }
}
// Наследник - велосипед
class Bicycle extends Transport {
  // Переопределяем метод родителя (Полиморфизм)
  move() {
    console.log("Велосипедист крутит педали и едет по велодорожке");
  }
}
const myTransport = new Transport();
const myCar = new Car();
const myBicycle = new Bicycle();
myTransport.move();
myCar.move();
myBicycle.move();

// Инкапсуляция (Валидация через Getter/Setter)
class Person {
  constructor(name) {
    this._name = name; // _ используется для реализации соглашения о "защищенном свойстве"
  }
  // Геттер: вызывается при обращении к person.name
  get name() {
    return this._name;
  }
  // Сеттер: вызывается при попытке  записи в person.name = '...'
  set name(newName) {
    // Проверяем не является ли новое имя пустой строкой, после удаления пробелов по краям строки
    if (newName.trim().length === 0) {
      console.error("Ошибка: имя не может быть пустым");
    } else {
      this._name = newName;
    }
  }
}

// Приватные свойства (символ #)
class Vehicle {
  // Объявляем приватное поле (обязательно в начале класса)
  #mileage = 0;
  constructor(initialMileage) {
    // Вызываем сеттер прямо в конструкторе для проверки начального значения
    this.mileage = initialMileage;
  }
  // Геттер для безопасного чтения пробега
  get mileage() {
    return `${this.#mileage} км`;
  }
  // Сеттер с защитой от некорректных данных (отрицательных) данных
  set mileage(value) {
    if (value < 0) {
      throw new Error("Ошибка: пробег не может быть отрицательным числом");
    } else {
      this.#mileage = value;
    }
  }
}

const myTesla = new Vehicle(100);
console.log(myTesla);
console.log(myTesla.mileage);
// console.log(myTesla.#mileage);
myTesla.mileage = 150;
console.log(myTesla.mileage);
// myTesla.mileage = -150;

// Задача: «Система расчёта зарплаты»
// Создайте базовый класс Employee (Сотрудник):
// У него должно быть приватное свойство #salary (зарплата).
// Реализуйте геттер для #salary, который возвращает строку с добавлением знака валюты (например, "5000$").
// Реализуйте сеттер для #salary, который проверяет: если число отрицательное, выводит ошибку "Зарплата не может быть меньше нуля", иначе устанавливает значение.
// Добавьте метод getDetails(), который выводит базовую информацию: "Это сотрудник компании".
// Создайте два класса-наследника:
// Developer: переопределите метод getDetails(), чтобы он выводил: "Это разработчик, он пишет код".
// Manager: переопределите метод getDetails(), чтобы он выводил: "Это менеджер, он управляет проектами".
// Проверка:
// Создайте объекты обоих классов.
// Попробуйте установить через сеттер отрицательную зарплату, а затем корректную.
// Вызовите метод getDetails() у каждого объекта, чтобы продемонстрировать полиморфизм.

class Employee {
  #salary = 0;
  constructor(name) {
    this.name = name;
  }

  get salary() {
    return `${this.#salary}$`;
  }

  set salary(value) {
    if (value < 0) {
      throw new Error("Зарплата не может быть меньше нуля");
    } else {
      this.#salary = value;
    }
  }

  getDetails() {
    return `Это сотрудник компании - ${this.name}`;
  }
}

class Developer extends Employee {
  constructor(name) {
    super(name);
  }
  getDetails() {
    console.log(this.name + " - Это разработчик, он пишет код");
  }
}
