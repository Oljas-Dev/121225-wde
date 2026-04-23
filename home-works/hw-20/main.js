// Реализовать функцию, которая будет создавать элементы списка на основе массива данных. Каждый элемент списка должен содержать кнопку, при нажатии на которую будет происходить удаление этого элемента из списка.

const data = ["Яблоко", "Банан", "Апельсин", "Груша"];

const list = document.getElementById("list");

function createList(arr) {
  list.innerHTML = "";

  data.forEach((el, i) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = el;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Удалить";

    delBtn.addEventListener("click", () => {
      arr.splice(i, 1);
      createList(data);
    });

    li.append(span, delBtn);
    list.append(li);
  });
}

createList(data);
