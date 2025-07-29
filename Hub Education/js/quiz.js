
const questions = [
  { question: "¿Qué es HTML?", answers: ["Lenguaje de programación", "Lenguaje de marcado", "Base de datos"], correct: 1 },
  { question: "¿Qué significa CSS?", answers: ["Color Style System", "Cascading Style Sheets", "Creative Style Syntax"], correct: 1 },
  { question: "¿JavaScript se ejecuta en el navegador?", answers: ["Sí", "No", "Solo en móviles"], correct: 0 }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(idx);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  const q = questions[current];
  if (index === q.correct) score++;
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  document.getElementById("next-btn").style.display = "none";
  if (current < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("score", score);
    window.location.href = "results.html";
  }
}

window.onload = loadQuestion;
