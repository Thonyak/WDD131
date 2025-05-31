// ===================================
// Activity 1 - Map and DOM Output
// ===================================
 const steps = ["one", "two", "three"];  

function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate).join("");

document.querySelector("#myList").innerHTML = stepsHtml;

// ===================================
// Activity 2 - Convert Grades to GPA Points
// ===================================
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  if (grade === "A") return 4;
  else if (grade === "B") return 3;
  else return 0; // default if grade is something else
}

const gpaPoints = grades.map(convertGradeToPoints); // [4, 3, 4]

// ===================================
// Activity 3 - Calculate GPA with Reduce
// ===================================
const gpa = gpaPoints.reduce((total, points) => total + points, 0) / gpaPoints.length;
console.log("GPA:", gpa);

// ===================================
// Activity 4 - Filter Short Words
// ===================================
const words = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortWords = words.filter(word => word.length < 6);
console.log("Short words:", shortWords); // ["peach", "apple", "grape"]

// ===================================
// Activity 5 - indexOf to Find Number
// ===================================
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

const luckyIndex = myArray.indexOf(luckyNumber);
console.log("Index of lucky number:", luckyIndex); // 2  
