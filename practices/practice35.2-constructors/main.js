function Hero(nickname, level, role) {
  // Operator new creates empty object and attaches 'this' to an empty object
  this.nickname = nickname; // constructor function attaches 'this' to an empty object
  this.level = level;
  this.role = role;

  // Adding a method
  this.getInfo = function () {
    console.log(`Hero: ${this.nickname} ${this.role}, level: ${this.level}`);
  };
}

const archer = new Hero("Legolas", 80, "Elf Archer"); // new - creates new empty object and constructor function fills it

archer.getInfo();

const rogue = new Hero("Garret", 10, "Thief");

rogue.getInfo();

// call, apply - creates new clone function and immedately calls it;

function updateStats(hp, mana) {
  this.hp = hp;
  this.mana = mana;
  console.log(`Stats ${this.name} updated: HP ${this.hp}, Mana ${this.mana}`);
}

const warrior = { name: "Gimli" };
const mage = { name: "Gandalf" };

updateStats.call(warrior, 150, 20);
updateStats.apply(mage, [80, 200]);

// bind - clones a function and attaches particular context, it doesn't call new function.

// Работа с bind
const boss = {
  name: "Dragon",
  health: 1000,
};
function takeDamage(amount) {
  this.health -= amount; // this.health = this.health - amount;
  console.log(`${this.name} получил урон! Осталось здоровья ${this.health}`);
}

// Создаем специальную функцию для нанесение урона именно дракону
const damageDragon = takeDamage.bind(boss);
damageDragon(50);
damageDragon(100);

// Создать функцию конструктор объекта Car, который имеет поля brand, model, year и метод print, который выводит в консоль все поля строкой.
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.print = function () {
    console.log(
      `Автомобиль ${this.brand} ${this.model}. год выпуска: ${this.year}`,
    );
  };
}
const tesla = new Car("Tesla", "Model S", 2023);
const bmw = new Car("BMW", "M5", 2021);
tesla.print();
bmw.print();

// 1.Написать функцию, которая принимает 2 аргумента и результат их деления записывает в this.result. Использовать метод apply().

const calculator = {
  result: 0,
};

function divide(a, b) {
  if (b === 0) {
    this.result = "Division by zero error";
  } else {
    this.result = a / b;
    return this.result;
  }
}

const resultDivide = divide.apply(calculator, [3, 0]);

console.log(resultDivide);
console.log(calculator.result);
