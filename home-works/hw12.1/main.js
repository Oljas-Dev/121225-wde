// Создайте массив объектов с полями "название" и "год". Напишите функцию, используя метод sort, чтобы отсортировать объекты по году от самого старого к самому новому.

const movies = [
  { title: "Inception", year: 2010 },

  { title: "The Dark Knight", year: 2008 },

  { title: "Interstellar", year: 2014 },

  { title: "The Matrix", year: 1999 },
];

movies.sort((a, b) => {
  return a.year - b.year;
});

console.log(movies);

// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод reduce, чтобы объединить все имена в одну строку через запятую.

const people = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 22 },
];

const res = people.reduce((acc, person, i) => {
  return acc + (i > 0 ? ", " : "") + person.name;
}, "");

console.log(res);
