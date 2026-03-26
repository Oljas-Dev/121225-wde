// Ключ для localStorage
// Под этим ключом будет хранится массив задач
const STORAGE_KEY = "todosStorage";

/**
 * Текущий выбранный фильтр
 * Возможные значения:
 * - all
 * - active
 * - completed
 */
let currentFilter = "all";

// Получаем элементы со страницы
const tasks = document.getElementById("tasks");
const addTasksButton = document.querySelector(".addTasks-button");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".new-entry");
const form = document.getElementById("addNewEntryForm");
const descriptionEntry = document.getElementById("descriptionEntry");
const dataEntry = document.getElementById("dataEntry");
const checkboxForm = document.getElementById("reminder");
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const allTasks = document.getElementById("allTasks");
const activeTasks = document.getElementById("activeTasks");
const completedTasks = document.getElementById("completedTasks");
const dayTitle = document.querySelector(".header-info h2");
const dateTitle = document.querySelector(".header-info p");

// Работа с localStorage
/**
 * Функция получает массив из localStorage
 * localStorage хранит данные только в виде строк
 * Поэтому:
 * - читаем строку через localStorage.getItem(...)
 * - превращаем ее обратно в массив через JSON.parse(...)
 *
 * Если в localStorage ничего нет или значение по ключу не массив,
 * тогда возвращаем пустой массив []
 */
const getTodos = () => {
  const localStorageTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!localStorageTodos || !Array.isArray(localStorageTodos)) {
    return [];
  }
  return localStorageTodos;
};

/**
 * Функция сохраняет массив задач в localStorage
 * JSON.stringify(...) превращаем массив объектов в строку
 */
const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

// Открытие и закрытие модального окна
/**
 * Открытие модального окна
 * Добавляем класс active модальному фону и содержимому
 */
const openModal = () => {
  modal.classList.add("active");
  modalContent.classList.add("active");
};

/**
 * Закрытие модального окна
 * Убираем класс active у модального фона и содержимого
 */
const closeModal = () => {
  modal.classList.remove("active");
  modalContent.classList.remove("active");
};

// Создание новой задачи
const createTodo = (event) => {
  event.preventDefault();

  /**
   * Получаем значение из полей формы
   * trim() - это строчный метод, который убирает пробелы по краям строки
   */
  const description = descriptionEntry.value.trim();
  const startDate = dataEntry.value;
  const reminder = checkboxForm.checked;
  /**
   * Простая проверка:
   * если описание или дата пустые,
   * дальше ничего не делаем
   */
  if (!description || !startDate) {
    alert("Заполните описание и дату");
    return;
  }
  // Получаем текущие задачи из localStorage
  const localStorageTodos = getTodos();
  // Создаем объект новой задачи
  /**
   * id:
   * Math.random() возвращает случайной число от 0 до 1. Не включая 1
   * .toString(16) переводит число в строку в 16-ричную систему
   */
  const newTodo = {
    id: "todo_" + Math.random().toString(16),
    createdAt: new Date(),
    startDate,
    description,
    reminder,
    done: false,
  };
  // Добавляем новую задачу в массив
  localStorageTodos.push(newTodo);
  // Сохраняем обновленный массив в localStorage
  saveTodos(localStorageTodos);
  // Очищаем форму
  form.reset();
  // Закрываем модальное
  closeModal();
  // Перерисовать список задач
  renderTodos();
};

function deleteTodo(todoId) {
  console.log(todoId);
  const localStorageTodos = getTodos();

  const updatedTodos = localStorageTodos.filter((todo) => todo.id !== todoId);

  saveTodos(updatedTodos);

  renderTodos();
}

// Рендер списка задач
const renderTodos = () => {
  const localStorageTodos = getTodos();

  /**
   * Получаем текст из поиска
   * Приводим к нижнему регистру,
   * чтобы поиск не зависел от регистра
   */
  const searchValue = search.value.trim().toLowerCase();

  // Очищаем маркированный список задач
  tasks.innerHTML = "";

  // Создаем копию массива, чтобы дальше фильтровать
  let filteredTodos = [...localStorageTodos];

  // Фильтрация по табам(кнопкам)
  if (currentFilter === "active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.done);
  }
  if (currentFilter === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.done);
  }

  /**
   * Фильтрация по поиску.
   * .includes() проверяет, содержится ли подстрока в строке
   */
  if (searchValue) {
    filteredTodos = filteredTodos.filter((todo) =>
      todo.description.includes(searchValue),
    );
  }

  // Если список пуст, то выводим информацию в html-структуру
  if (filteredTodos.length === 0) {
    tasks.innerHTML = `
            <li style="padding: 16px; color: #79747E;">
                Задач нет
            </li>
        `;
    return;
  }

  // Проходим по задачам в массиве и вставляем в HTML-структуру
  filteredTodos.forEach((todo) => {
    tasks.insertAdjacentHTML(
      "beforeend",
      `
            <li>
                <label>
                    <input 
                        type="checkbox"
                        ${todo.done ? "checked" : ""}
                        onChange="toggleTodoDone('${todo.id}')"
                    >
                    <span></span>

                    <div>
                        <p>
                            ${todo.reminder ? "Reminder" : ""}
                        </p>
                        <p>
                            ${todo.description}
                        </p>
                    </div>
                </label>

                <button
                    onclick="deleteTodo('${todo.id}')"
                    title="Delete task"
                >
                    ×
                </button>
            </li>
        `,
    );
  });
};

// Обработка отправки формы
form.addEventListener("submit", createTodo);

// function addEventListener(typeEvent, callback){
//     if(typeEvent === true){ // Образно при определенных условиях
//         callback(); // Факт
//     }
// }

renderTodos();
