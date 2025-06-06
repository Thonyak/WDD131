function getGrades(inputSelector) {
  const grades = document.querySelector(inputSelector).value;
  const gradesArray = grades.split(",");
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  return cleanGrades;
}

function lookupGrade(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  } else {
    points = 0; // F or invalid input
  }
  return points;
}

function calculateGpa(grades) {
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  const totalPoints = gradePoints.reduce((total, num) => total + num, 0);
  const gpa = totalPoints / gradePoints.length;
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  document.querySelector(selector).innerText = gpa;
}

function clickHandler() {
  const grades = getGrades("#grades");
  const gpa = calculateGpa(grades);
  outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
