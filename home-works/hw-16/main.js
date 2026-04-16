async function getTodods() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getTodods();

async function getTodosArr() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
    );

    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getTodosArr();
