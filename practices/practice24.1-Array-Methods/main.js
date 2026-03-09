// Метод pop()

const drinks = ["coffee", "tea", "juice"];

/**
 * Метод pop()
 *
 * Что делает: удаляет последний элемент массива
 * Что принимает: ничего
 * Что возвращает: удаленный элемент массива
 */

const removeDrink = drinks.pop();

console.log("Удаленный элемент:", removeDrink);
console.log("Массив после pop():", drinks);

// Метод filter()
// Массив температур

const temperatures = [-5, 3, 12, -8, 7];

/**
 * Метод filter()
 * Что делает: создает новый массив с элементами,
 * которые проходят проверку в callback-функции
 *
 * Что принимает: callback-функцию
 * Параметры callback-функции:
 * 1 параметр - текущий элемент массива
 * 2 параметр - текущий индекс элемента массива
 * 3 параметр - исходный массив
 *
 * Что возвращает: новый массив с элементами, для которых callback вернул true
 */

const positiveTemperatures = temperatures.filter((temp) => {
  return temp > 0;
});

console.log("Положительные температуры:", positiveTemperatures);

// Метод sort()

const numbers = [45, 12, 8, 19, 30];

/**
 * Метод sort()
 *
 * Что делает: сортирует элементы массива
 *
 * Что принимает: функцию сравнения(необязательно)
 *
 * Параметры функции сравнения:
 * a - первый элемент
 * b - второй элемент
 *
 * Что должна вернуть функция:
 * - отрицательное число, тогда a идет раньше b
 * - 0, тогда порядок не меняется
 * - положительное число, тогда b идет раньше a
 *
 * Что возвращает: отсортированный массив
 */

// const numbers = [45, 12, 8, 19, 30];
// Сортировка по возрастанию
const sortNumbers = [...numbers];
sortNumbers.sort((a, b) => {
  return a - b;
});

console.log(sortNumbers);

// Массив городов
const cities = ["Berlin", "Tokyo", "Amsterdam", "Rome", "Bishkek"];

/**
 * По умолчанию sort() сортирует строки
 * по кодам Unicode (алфавитный порядок)
 */

const sortCities = [...cities];
// sortCities.sort((a, b) => {
//     /**
//      * Метод localCompare() сравнивает строки
//      *
//      * a.localCompare(b)
//      * вернет:
//      * - отрицательное число, тогда a идет раньше b
//      * - 0, тогда порядок не меняется
//      * - положительное число, тогда b идет раньше a
//      */
//     return b.localeCompare(a);
// });

// Сортируем по порядку
sortCities.sort();
// Переворачиваем массив
sortCities.reverse();
console.log(sortCities);

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
];

// Задача: отсортировать товары по цене по возрастанию

const sortedProducts = [...products];

sortedProducts.sort((a, b) => a.price - b.price);

console.log("Sorted products, cheap first:", sortedProducts);

// 2.Создайте массив строк. Напишите функцию, используя метод sort, чтобы отсортировать строки по их длине от самой короткой к самой длинной.

const words = ["apple", "banana", "kiwi", "orange", "grape"];

const sortedWords = [...words];

sortedWords.sort((a, b) => a.length - b.length);
console.log(sortedWords);
