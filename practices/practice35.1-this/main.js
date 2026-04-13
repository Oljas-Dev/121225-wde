// this - ссылка на текущий контекст. Текущий контекст - это объект, в котором прописан this

const PORT = 3000;
function greeting(name) {
  // локальная область видимости, которая определяется лексическим окружением
  function dopFunc() {}
}
const obj = {
  // независимый контекст в рамках глобального контекста
  name: "Alex",
};
// находимся в глобальном контексте
console.log(this);
// Глобальная переменная через var
var globalHero = "Бэтмен";
console.log(this.globalHero);
function showContext() {
  console.log(this);
}
showContext();

function outer() {
  function inner() {
    console.log("Внутренняя функция", this);
  }
  inner();
}
outer();

// let spacecraft = {
//     model: 'Falcon 9',
//     launch: function () {
//         console.log(`Ракета ${this.model} запущена`);
//     }
// }
// let cloneSpacecraft = spacecraft;
// spacecraft = null;
// // spacecraft.launch();
// cloneSpacecraft.launch();

const spacecraft = {
  model: "Falcon 9",
  launch: function () {
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc();
    console.log(`Ракета ${this.model} запущена`);
  },
};
// spacecraft.launch();
spacecraft.launch();

const test = console;

test.log("Experiment");

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log(this.tagName);
});

// 1.Создать объект person со свойствами name и age и с методом myAge, который будет выводить сообщение в консоль с использованием свойства age объекта.

const person = {
  name: "John",
  age: 25,
  myAge: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
};

person.myAge();

// 1.Создать объект calculator с методами add и multiply и свойством result, равному 0, которые будут принимать два числа и возвращать их сумму и произведение соответственно в переменную result.

const calculator = {
  result: 0,
  add(a, b) {
    this.result = a + b;
    console.log(this.result);
  },
  multiply(a, b) {
    this.result = a * b;
    console.log(this.result);
  },
};

calculator.add(2, 2);
calculator.multiply(2, 4);
