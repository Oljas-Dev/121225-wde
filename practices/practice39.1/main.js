// Контейнер, куда будем вставлять пост
const root = document.getElementById("root");

// Получаем кнопки "вперед" и "назад"
const left_trigger = document.querySelector(".left");
const right_trigger = document.querySelector(".right");
// Глобальная переменная для хранения текущего id поста
let post_number = 5;
let total_posts = 0;

// Функция отрисовки поста
function createPost(title, body) {
  // Очищаем контейнер перед вставкой нового поста
  root.innerHTML = "";

  // Создаем элементы для заголовка и текста
  const title_p = document.createElement("h2");
  const body_p = document.createElement("p");

  // Создаем контейнер для поста
  const container = document.createElement("div");

  // Заполняем элементы текстом
  title_p.innerText = title;
  body_p.innerText = body;

  // Добавляем css-классы
  container.classList.add("post");
  title_p.classList.add("post__header");

  // Вставляем заголовок и текст внутрь контейнера
  container.append(title_p, body_p);

  // Вставляем контейнер в root
  root.append(container);
}

// Функция загрузки поста
async function loadPost() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post_number}`,
    );

    if (!response.ok) {
      createPost(
        "Error loading post",
        `Don't panic it is just error: ${response.status}`,
      );
      return;
    }

    const data = await response.json();

    if (!data.id) {
      createPost("Error post not found");
      return;
    }

    const title = data?.title;
    const body = data?.body;

    createPost(title, body);

    return data;
  } catch (error) {
    createPost("Error loading post", "Couldn't load data");
  }
}

left_trigger.addEventListener("click", async () => {
  if (post_number <= 1) return;
  post_number--;
  await loadPost();
  updateButtons();
  console.log(post_number);
});

right_trigger.addEventListener("click", async () => {
  if (post_number < total_posts) {
    post_number++;
    await loadPost();
    updateButtons();
    console.log(post_number);
  }
});

async function fetchPostsCount() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");

    if (!response.ok) {
      throw new Error("Ошибка при получении списка постов");
    }

    const data = await response.json();

    total_posts = data.length;
  } catch (error) {
    console.error(error.message);
    total_posts = 0;
  }
}

function updateButtons() {
  left_trigger.disabled = post_number === 1;
  right_trigger.disabled = post_number === total_posts;
}

async function init() {
  await fetchPostsCount();
  await loadPost();
  updateButtons();
}

init();
