// Задание 1
// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

const root = document.querySelector(".root");

const blockBlue = document.createElement("div");
blockBlue.style.cssText =
  "background-color: blue; width: 100px; height: 100px;";

root.append(blockBlue);

blockBlue.addEventListener("mouseenter", () => {
  blockBlue.style.backgroundColor = "red";
});
blockBlue.addEventListener("mouseleave", () => {
  blockBlue.style.backgroundColor = "blue";
});

// Задание 2
// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".

// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент.

const colorBlock = document.createElement("div");
// блок с id "colorBlock"
colorBlock.setAttribute("id", "colorBlock");

const colorButton = document.createElement("button");
// кнопка с id "colorButton"
colorButton.setAttribute("id", "colorButton");
colorButton.textContent = "change to random color";

root.append(colorBlock, colorButton);

colorBlock.style.cssText =
  "background-color: lightgreen; width: 100px; height: 100px; margin: 24px 0;";

colorButton.addEventListener("click", () => {
  // Используйте Math.random() для генерации RGB-компонент
  colorBlock.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
});
