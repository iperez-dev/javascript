const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Madrid", "Rome", "Berlin", "Paris"],
    correctIndex: 3,
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    correctIndex: 0,
  },
];

let currentQuestionIndex = 0;

nextButton.addEventListener("click", showNextQuestion);

function showNextQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () =>
      checkAnswer(index, currentQuestion.correctIndex)
    );
    optionsElement.appendChild(button);
  });

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    nextButton.disabled = true;
  }
}

function checkAnswer(selectedIndex, correctIndex) {
  if (selectedIndex === correctIndex) {
    alert("Correct!");
  } else {
    alert("Incorrect! Please try again.");
  }
}
