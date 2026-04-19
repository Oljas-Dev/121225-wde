function Counter(count) {
  this.count = count;

  this.increment = function () {
    this.count++;
  };
  this.decrement = function () {
    this.count--;
  };
}

const counter = new Counter(0);

counter.increment();

console.log(counter.count); // Ожидаемый вывод: 1

counter.decrement();

console.log(counter.count); // Ожидаемый вывод: 0
