const output = document.getElementById("output");
const btn = document.getElementById("btn");
const message = document.querySelector(".message");

let outputNumber = 0;

btn.addEventListener("click", () => {
  outputNumber++;
  output.textContent = outputNumber;

  const fifthClick = outputNumber % 5 === 0;

  if (!fifthClick) {
    output.removeAttribute("style");
    output.classList.toggle("bg");
  } else {
    output.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
  }

  if (outputNumber === 10) {
    message.classList.remove("hide");
    btn.textContent = "start again";
    outputNumber = 0;
  }
  if (outputNumber > 0) {
    message.classList.add("hide");
    btn.textContent = "click me";
  }
});
