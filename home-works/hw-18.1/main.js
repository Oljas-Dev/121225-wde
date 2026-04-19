class Shape {
  draw() {
    console.log("I can draw!");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("I can draw Rectangles!");
  }
}

class Circle extends Shape {
  draw() {
    console.log("I can draw Circles!");
  }
}

const rectangle = new Rectangle();
const circle = new Circle();

const shapesArray = [rectangle, circle];

shapesArray.forEach((shape) => {
  shape.draw();
});
