function waitForTime(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ожидание завершено");
    }, ms);
  });
}

waitForTime(3000).then((message) => {
  console.log(message);
});
