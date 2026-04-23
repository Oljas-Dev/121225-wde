// Получаем элементы со страницы по их id
const modal = document.getElementById("modal");
const openButton = document.getElementById("openButton");
const footerCloseButton = document.getElementById("footerCloseButton");
const closeButton = document.getElementById("closeButton");
const resultForm = document.getElementById("result");

/**
 * Открытие модального окна
 *
 * showModal() - специальный метод тега dialog,
 * который открывает окно в модальном режиме
 *
 * Это значит:
 * 1. Окно появляется поверх страницы
 * 2. Остальная страница остается недоступной для взаимодействия
 * 3. Автоматически показывает backdrop (фон позади модального окна)
 */
openButton.addEventListener("click", () => {
  resultForm.textContent = "";
  modal.showModal();
});

// Закрываем окно по нажатию на крестик
closeButton.addEventListener("click", () => {
  modal.close();
});
// Закрываем окно по нажатию на кнопку внизу "Закрыть"
footerCloseButton.addEventListener("click", () => {
  modal.close();
});
/**
 * Дополнительно:
 * dialog можно скрыть клавишей esc автоматически,
 * если окно открыто с помощью метода showModal()
 */

// Закрытие по клику вне внутренней области окна
modal.addEventListener("click", (event) => {
  /**
   * event.target - элемент, по которому был клик
   * Если это сам dialog, значит клик был вне контента
   */
  console.log(event.target);
  if (event.target === modal) {
    modal.close();
  }
});

modal.addEventListener("close", () => {
  if (modal.returnValue === "confirm") {
    resultForm.textContent = "Файл удален";
  } else if (modal.returnValue === "cancel") {
    resultForm.textContent = "Удаление отменено";
  } else {
    resultForm.textContent = "Окно закрыто без выбора";
  }
});
