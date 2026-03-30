const products = [
  { name: "Apple", price: 12 },
  { name: "Banana", price: 24 },
  { name: "Orange", price: 50.01 },
  { name: "Mango", price: 20 },
  { name: "Pineapple", price: 10 },
];

const hasExpensiveItem = (itemsArr) => {
  const res = itemsArr.some((item) => item.price > 50);
  return res;
};

console.log(hasExpensiveItem(products));
