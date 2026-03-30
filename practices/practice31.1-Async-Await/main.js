function getWheather() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("It is sunny today");
    }, 2000);
  });
}

function showWeather() {
  console.log("Fetching weather");
  getWheather()
    .then((wheather) => {
      console.log("Result", wheather);
    })
    .catch((error) => {
      console.log("Error", error);
    })
    .finally(() => {
      console.log("Response is here. Fetching is over.");
    });
}

// async/await
async function showWeather2() {
  console.log("Запрашиваем погоду");
  // конструкция try...catch
  try {
    const result = await getWheather();
    console.log("Результат:", result);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
showWeather2();

// 1.Сделайте 3 запроса на сервер https://jsonplaceholder.typicode.com/ с использованием синтаксиса async/await.

async function fetchJSON(url, method = "GET") {
  const response = await fetch(url, {
    method: method,
  });

  if (!response.ok) {
    throw new Error(`Fetch error ${response.status}`);
  }

  return await response.json();
}

async function makeThreeRequests() {
  try {
    const post = await fetchJSON(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log("Post: ", post);

    const user = await fetchJSON(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    console.log("User: ", user);

    const todo = await fetchJSON(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("Todo: ", todo);
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

makeThreeRequests();

async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
        // how do we get id: 101?
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      throw new Error("Ошибка сохдания поста");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка", error.message);
  }
}
createPost();

const urls = [
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/users",
];
async function fetchAllData(urls) {
  try {
    const requests = urls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const data = await Promise.all(
      responses.map((response) => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status}`);
        }
        return response.json();
      }),
    );
    return data;
  } catch (error) {
    console.error("Error: ", error.message);
  }
}
// fetchAllData(urls)
//   .then((result) => {
//     console.log("All data: ", result);
//   })
//   .catch((error) => {
//     console.error("Fetch data errors:", error.message);
//   });

async function start() {
  try {
    const result = await fetchAllData(urls);
    console.log("All data: ", result);
  } catch (error) {
    console.error("Fetch data errors:", error.message);
  }
}
start();
