class Smartphone {
  // Конструктор инициализирует объект при вызове new Smartphone(...)
  constructor(brand, model, price) {
    // this указывает на конкретный создаваемый в текущий момент экземпляр (объект)
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  displayInfo() {
    console.log(`Смартфон: ${this.brand} ${this.model}, цена: ${this.price}`);
  }
}
// Создание экземпляров (объектов)
const phone1 = new Smartphone("Apple", "iPhone 17 Pro", 2000);
const phone2 = new Smartphone("Samsung", "Galaxy S24", 1800);
phone1.displayInfo();
phone2.displayInfo();

// Наследование классов
class Appliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  turnOff() {
    console.log(`${this.name} включен в розетку`);
  }
}
class WashingMachine extends Appliance {
  constructor(name, power, loadCapacity) {
    // super() вызывает конструктор родителя
    // super() необходимо обязательно вызвать перед использованием this
    super(name, power);
    this.loadCapacity = loadCapacity;
  }
  turnOff() {
    super.turnOff(); // вызываем логику метода turnOff из родительского класса
    console.log(`Начинаем цикл стирки на ${this.loadCapacity} кг`);
  }
  spin() {
    console.log(`${this.name} начал отжим`);
  }
}

// ●Создайте класс Circle, который принимает радиус при создании.
// ●У класса должен быть метод getArea(), который возвращает площадь круга.
// ●У класса также должен быть метод getCircumference(), который возвращает длину окружности круга.
// ●Создайте экземпляр класса и выведите результаты вызова методов.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getCircumference() {
    return Math.PI * 2 * this.radius;
  }
}
const myCircle = new Circle(10);
console.log(`Радиус круга: ${myCircle.radius}`);
console.log(`Площадь круга: ${myCircle.getArea().toFixed(2)}`);
console.log(`Длина круга: ${myCircle.getCircumference().toFixed(2)}`);

const smallCircle = new Circle(5);
console.log(`Радиус круга: ${smallCircle.radius}`);
console.log(`Площадь круга: ${smallCircle.getArea().toFixed(2)}`);
console.log(`Длина круга: ${smallCircle.getCircumference().toFixed(2)}`);

// // ●Создайте класс Rectangle, который принимает ширину и высоту при создании.
// ●У класса должен быть метод getArea(), который возвращает площадь прямоугольника.
// ●У класса также должен быть метод getPerimeter(), который возвращает периметр прямоугольника.
// ●Создайте экземпляр класса и выведите результаты вызова методов.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return (this.width + this.height) * 2;
  }
}

const result = new Rectangle(5, 10);
console.log(`Площадь прямоугольника: ${result.getArea()}`);
console.log(`Периметр прямоугольника: ${result.getPerimeter()}`);
