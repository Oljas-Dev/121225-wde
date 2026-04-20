const multyColorBox = document.getElementById("multyColorBox");

const colors = ["#ff0000", "#00ff00", "#0000ff"];
const text = ["I ", "am ", "disco", "🕺"];
let str = "";
let count = 0;

function randomNumber(countCeil) {
  return Math.floor(Math.random() * countCeil);
}

function changeColor(int) {
  setInterval(function () {
    multyColorBox.style.backgroundColor = colors[randomNumber(colors.length)];
  }, int);
}

function showText() {
  if (count >= text.length) {
    console.log("Text is shown");
    return;
  }

  str = str + text[count];
  count++;
  multyColorBox.textContent = str;

  setTimeout(showText, 1000);
}

changeColor(1000);
showText();
