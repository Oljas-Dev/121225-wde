// Получаем элементы страницы
const statusElement = document.getElementById("status");
const button = document.getElementById("toggleButton");
/**
 * При загрузке страницы проверяем,
 * есть ли уже значения в localStorage
 *
 * Если его нет, тогда создаем начальное значение
 */
if (localStorage.getItem("flag") === null) {
  // Если ключа нет, записываем начально значение "0"
  localStorage.setItem("flag", "0");
}
// Функция для отображения значения из localStorage
function showValueFromLocalStorage() {
  /**
   * Получаем значение по ключу "flag"
   * getItem всегда возвращает строку или null
   */
  const value = localStorage.getItem("flag");
  statusElement.textContent = value;
}
showValueFromLocalStorage();
button.addEventListener("click", () => {
  // Получаем текущее значение
  const current = localStorage.getItem("flag");
  // Проверяем значение
  if (current === "0") {
    localStorage.setItem("flag", "1");
  } else {
    localStorage.setItem("flag", "0");
  }
  // После изменения снова отображаем значение
  showValueFromLocalStorage();
});

// 2. Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.

const textForm = document.getElementById("textForm");

textForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const textInput = document.getElementById("textInput").value;

  localStorage.setItem("text", textInput);
  console.log("Text was saved in localStorage.");
  textForm.reset();
});

// К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.

const loadBtn = document.getElementById("getTextFromLS");
const textInput = document.getElementById("textInput");

loadBtn.addEventListener("click", () => {
  const savedValue = localStorage.getItem("text");
  if (savedValue) {
    textInput.value = savedValue;
  } else {
    console.log("Data hasn't been saved yet");
  }
});
