// Ключ для localStorage
const STORAGE_KEY = 'todosStorage';

/**
 * Текущий выбранный фильтр
 * Возможные значения:
 * - all
 * - active
 * - completed
 */
let currentFilter = 'all';

// Получаем элементы со страницы
const tasks = document.getElementById('tasks');
const addTasksButton = document.querySelector('.addTasks-button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.new-entry');
const form = document.getElementById('addNewEntryForm');
const descriptionEntry = document.getElementById('descriptionEntry');
const dataEntry = document.getElementById('dataEntry');
const checkboxForm = document.getElementById('reminder');
const searchBtn = document.getElementById('searchBtn');
const search = document.getElementById('search');

const allTasks = document.getElementById('allTasks');
const activeTasks = document.getElementById('activeTasks');
const completedTasks = document.getElementById('completedTasks');

const dayTitle = document.querySelector('.header-info h2');
const dateTitle = document.querySelector('.header-info p');

/**
 * Получить массив задач из localStorage
 */
const getTodos = () => {
    const localStorageTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!localStorageTodos || !Array.isArray(localStorageTodos)) {
        return [];
    }

    return localStorageTodos;
};

/**
 * Сохранить массив задач в localStorage
 */
const saveTodos = (todos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

/**
 * Открытие модального окна
 */
const openModal = () => {
    modal.classList.add('active');
    modalContent.classList.add('active');
};

/**
 * Закрытие модального окна
 */
const closeModal = () => {
    modal.classList.remove('active');
    modalContent.classList.remove('active');
};

/**
 * Создание новой задачи
 */
const createTodo = (event) => {
    event.preventDefault();

    const description = descriptionEntry.value.trim();
    const startDate = dataEntry.value;
    const reminder = checkboxForm.checked;

    if (!description || !startDate) {
        alert('Заполните описание и дату');
        return;
    }

    const localStorageTodos = getTodos();

    const newTodo = {
        id: 'todo_' + Math.random().toString(16).slice(2),
        createdAt: new Date().toISOString(),
        startDate,
        description,
        reminder,
        done: false,
    };

    localStorageTodos.push(newTodo);
    saveTodos(localStorageTodos);

    form.reset();
    closeModal();
    renderTodos();
};

/**
 * Удаление задачи
 */
const deleteTodo = (todoId) => {
    const localStorageTodos = getTodos();
    const updatedTodos = localStorageTodos.filter(todo => todo.id !== todoId);

    saveTodos(updatedTodos);
    renderTodos();
};

/**
 * Переключение статуса выполнения задачи
 */
const toggleTodoDone = (todoId) => {
    const localStorageTodos = getTodos();

    const updatedTodos = localStorageTodos.map(todo => {
        if (todo.id === todoId) {
            return {
                ...todo,
                done: !todo.done,
            };
        }

        return todo;
    });

    saveTodos(updatedTodos);
    renderTodos();
};

/**
 * Установка активного таба
 */
const setActiveTab = (filter) => {
    currentFilter = filter;

    allTasks.classList.remove('active');
    activeTasks.classList.remove('active');
    completedTasks.classList.remove('active');

    if (filter === 'all') {
        allTasks.classList.add('active');
    }

    if (filter === 'active') {
        activeTasks.classList.add('active');
    }

    if (filter === 'completed') {
        completedTasks.classList.add('active');
    }

    renderTodos();
};

/**
 * Обновление текущей даты в header
 */
const renderCurrentDate = () => {
    const now = new Date();

    const weekdays = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    dayTitle.textContent = weekdays[now.getDay()];
    dateTitle.textContent = `${now.getDate()} ${months[now.getMonth()]}`;
};
const formatTodoDate = (dateString) => {
    if (!dateString) {
        return '';
    }

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return '';
    }

    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${day} ${month}, 11:30`;
};

/**
 * Рендер списка задач
 */
const renderTodos = () => {
    const localStorageTodos = getTodos();
    const searchValue = search.value.trim().toLowerCase();

    tasks.innerHTML = '';

    let filteredTodos = [...localStorageTodos];

    if (currentFilter === 'active') {
        filteredTodos = filteredTodos.filter(todo => !todo.done);
    }

    if (currentFilter === 'completed') {
        filteredTodos = filteredTodos.filter(todo => todo.done);
    }

    if (searchValue) {
        filteredTodos = filteredTodos.filter(todo =>
            todo.description.toLowerCase().includes(searchValue)
        );
    }

    if (filteredTodos.length === 0) {
        tasks.innerHTML = `
            <li style="padding: 16px; color: #79747E;">
                Задач нет
            </li>
        `;
        return;
    }

    filteredTodos.forEach(todo => {
        tasks.insertAdjacentHTML(
            'beforeend',
            `
                <li>
                    <label>
                        <input
                            type="checkbox"
                            ${todo.done ? 'checked' : ''}
                            onchange="toggleTodoDone('${todo.id}')"
                        >
                        <span></span>

                        <div>
                            <p>
                                ${formatTodoDate(todo.startDate)}
                            </p>
                            <p>${todo.description}</p>
                        </div>
                    </label>

                    <button
                        onclick="deleteTodo('${todo.id}')"
                        title="Удалить задачу"
                    >
                        ×
                    </button>
                </li>
            `
        );
    });
};

// Делаем функции доступными для inline-обработчиков из HTML-строк
window.deleteTodo = deleteTodo;
window.toggleTodoDone = toggleTodoDone;

// =========================
// Обработчики событий
// =========================

// Открыть модальное окно
addTasksButton.addEventListener('click', openModal);

// Закрыть модальное окно по клику на фон
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Закрыть модальное окно по кнопке reset
form.addEventListener('reset', () => {
    closeModal();
});

// Создание задачи
form.addEventListener('submit', createTodo);

// Поиск
search.addEventListener('input', renderTodos);
searchBtn.addEventListener('click', renderTodos);

// Табы
allTasks.addEventListener('click', () => setActiveTab('all'));
activeTasks.addEventListener('click', () => setActiveTab('active'));
completedTasks.addEventListener('click', () => setActiveTab('completed'));

// Первичная инициализация
renderCurrentDate();
renderTodos();