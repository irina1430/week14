const container = document.querySelector(".container");
const divGrades = document.querySelector(".grades");
const divAverage = document.querySelector(".averageScore");
const list = document.getElementById("list");
const grades = [];
while (grades.length < 12) {
  grades.push(Math.floor(Math.random() * 101));
}
console.log(grades);
const displayGrades = (grades) => {
  divGrades.innerHTML = `Оценки студентов: ${grades}`;
};
displayGrades(grades);

function getAverageScore() {
  const average = grades.reduce((a, b) => a + b) / grades.length;
  return Math.floor(average);
}
console.log(getAverageScore(grades));
divAverage.innerHTML = `Средняя оценка студентов: ${getAverageScore(grades)}`;

const maxNumber = Math.max(...grades);
console.log(maxNumber);
const maxNumberItem = document.createElement("li");
maxNumberItem.textContent = `Максимальная оценка: ${maxNumber}`;
list.appendChild(maxNumberItem);

const minNumber = Math.min(...grades);
console.log(minNumber);
const minNumberItem = document.createElement("li");
minNumberItem.textContent = `Минимальная оценка: ${minNumber}`;
list.appendChild(minNumberItem);

const positiveGrades = grades.filter(function (grades) {
  return grades > 60;
});
console.log(positiveGrades.length);
const positiveGradesItem = document.createElement("li");
positiveGradesItem.textContent = `Количество положительных оценок: ${positiveGrades.length}`;
list.appendChild(positiveGradesItem);

const negativeGrades = grades.filter(function (grades) {
  return grades < 60;
});
console.log(negativeGrades.length);
const negativeGradesItem = document.createElement("li");
negativeGradesItem.textContent = `Количество отрицательных оценок: ${negativeGrades.length}`;
list.appendChild(negativeGradesItem);

const convertedGrades = grades.map((grade) => {
  if (grade < 20) return "E";
  if (grade < 40) return "D";
  if (grade < 60) return "C";
  if (grade < 80) return "B";
  return "A";
});

console.log(convertedGrades);

const letterGrades = document.createElement("li");
letterGrades.textContent = `Переведенные оценки: ${convertedGrades}`;
list.appendChild(letterGrades);
