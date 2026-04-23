// Находим все нужные элементы в DOM
const openButton = document.getElementById('openButton');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');

// Функция переключения состояния модального окна
// Если класс modal--hidden есть, тогда удаляем его, если нет, тогда добавляем
const toggleModal = () => {
    modal.classList.toggle('modal--hidden');
}

// Зарегистрируем событие "click" на кнопку открытия
openButton.addEventListener('click', () => {
    toggleModal();
});

modal.addEventListener('click', () => {
    toggleModal();
});

modalBody.addEventListener('click', (e) => {
    e.stopPropagation();
});

