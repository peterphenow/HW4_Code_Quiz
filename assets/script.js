let questionDiv = document.querySelector("#questionDiv");
let beginQuizBtn = document.querySelector("#beginQuiz");
//create an array of questions and answers
let questions = [
  {
    question: "What does HTML stand for?",
    answers: {
      a: "Hot-Text Main Lingo",
      b: "Hypertext Markup Language",
      c: "Hey That's My Lefse",
      d: "How To Make Language",
    },
    correctAnswer: "b",
  },
  {
    question: "What does bootstrap do for websites?",
    answers: {
      a: "Eats your cookies",
      b: "Helps manipulate the DOM",
      c: "Creates a responsive framework",
      d: "Creates a strap to pull your footer",
    },
    correctAnswer: "c",
  },
  {
    question: "Which section of the HTML must the CSS link be placed?",
    answers: {
      a: "Head",
      b: "Body",
      c: "Footer",
      d: "Paragraph",
    },
    correctAnswer: "a",
  },
  {
    question: "What is an error or mistake that prevents a program from running called?",
    answers: {
      a: "Loop",
      b: "Tick",
      c: "Bug",
      d: "Whoopsie!",
    },
    correctAnswer: "c",
  },
  {
    question: "What does CSS do for HTML?",
    answers: {
      a: "Styles the page",
      b: "Allows the use of functions",
      c: "Calculates formulas",
      d: "Creates elements",
    },
    correctAnswer: "a",
  },
];
//variable to store current question
let q = questions.question;
let lastQuestion = questions.length;
let currentQuestion = 0;

//start quiz when button is clicked
beginQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
  let q = questions[currentQuestion];
  let answer1 = q.answers.a;
  let answer2 = q.answers.b;
  let answer3 = q.answers.c;
  let answer4 = q.answers.d;
  let correctAnswer = q.correctAnswer;

  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);
  console.log(correctAnswer);

  //Hide the start quiz button
  beginQuizBtn.style.display = "none";

  //render question and answer buttons
  questionDiv.innerHTML = `<p>${q.question}</p><br><button id=choiceA>${answer1}</button><br><button id=choiceB>${answer2}</button><br><button id=choiceC>${answer3}</button><br><button id=choiceD>${answer4}</button>`;
  //set variables for new answer buttons
  let choiceA = document.querySelector("#choiceA");
  let choiceB = document.querySelector("#choiceB");
  let choiceC = document.querySelector("#choiceC");
  let choiceD = document.querySelector("#choiceD");

  //add event listeners for new buttons
  choiceA.addEventListener("click", function () {
    if ("a" === correctAnswer) {
      alert("Correct");
      currentQuestion++;
      showResults();
    } else {
      alert("Wrong");
      currentQuestion++;
      showResults();
    }
  });

  choiceB.addEventListener("click", function () {
    if ("b" === correctAnswer) {
      alert("Correct");
      currentQuestion++;
      showResults();
    } else {
      alert("Wrong");
      currentQuestion++;
      showResults();
    }
  });

  choiceC.addEventListener("click", function () {
    if ("c" === correctAnswer) {
      alert("Correct");
      currentQuestion++;
      showResults();
    } else {
      alert("Wrong");
      currentQuestion++;
      showResults();
    }
  });

  choiceD.addEventListener("click", function () {
    if ("d" === correctAnswer) {
      alert("Correct");
      currentQuestion++;
      showResults();
    } else {
      alert("Wrong");
      currentQuestion++;
      showResults();
    }
  });
}

//checks if all questions have been answered, if yes then show results. If not, rerun startQuiz() with next question.
function showResults() {
  if (currentQuestion > lastQuestion - 1) {
    alert("Done");
  } else {
    startQuiz();
  }
}
