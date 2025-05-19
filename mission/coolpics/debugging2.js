// debugging.js
const PI = 3.14;

function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}

let area = circleArea(3);
console.log("Area1:", area);

area = circleArea(4);
console.log("Area2:", area);
