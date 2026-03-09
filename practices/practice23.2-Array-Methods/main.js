// Пример для метода push()
const cities = ["London", "Paris"];
// Добавляем в конец массива элемент с помощью метода push()
// push() изменяет исходный массив и возвращает новую длину массива
cities.push("Tokyo");
console.log(cities);

// Пример для метода push() c несколькими элементами
const scores = [10, 20];
// Добавляем сразу несколько элементов в конец массива
scores.push(30, 40, 50);
console.log(scores);

// Создаем пустой массив
const numbers = [];
// С помощью цикла добавляем числа в массив
for (let i = 1; i <= 5; i++) {
  // push() добавляет текущее значение i в конец массива
  numbers.push(i);
}
console.log(numbers);

const numbers2 = Array.from(
  { length: 10 },
  (num) =>
    (num = Math.floor(Math.random() * 999)
      .toString()
      .padStart(3, "0")),
);

console.log(numbers2);

const colors = [];
const oldColors = ["red", "green", "blue"];
for (let i = 0; i < oldColors.length; i++) {
  colors.push(oldColors[i]);
}
console.log(colors);

// Работа с forEach()
const animals = ["cat", "dog", "rabbit"];
animals.forEach((animal, indexAnimal) => {
  console.log(`Животное: ${animal}. Под индексом: ${indexAnimal}`);
});

// Пример forEach(). Изменение исходного массива
const temperatures = [10, 15, 20, 25];
// Пройдемся по каждому элементу массива
temperatures.forEach((value, index, array) => {
  // Увеличиваем температуру на 5 градусов
  array[index] = value + 5;
});
console.log(temperatures);

// Пример map()
// Массив чисел
const nums = [2, 4, 6, 8];
// Метод map() создает новый массив
// с результатами выполнения callback-функции (return)
const doubled = nums.map((num, index) => {
  if (index === 4) {
    return num * 2;
  }
  return num;
});
console.log(doubled);

// Cумма текущего и предыдущего элемента массива.
const result = nums.map((value, index, array) => {
  if (index === 0) {
    return value;
  }
  return value + array[index - 1];
});
console.log(result);

// 1.Используя метод map(), создайте новый массив, содержащий квадратный корень каждого элемента числового массива.

const numArray = [4, 25, 49, 9, 144];

const newNumArray = numArray.map((num) => {
  return Math.sqrt(num);
});
console.log(newNumArray);
