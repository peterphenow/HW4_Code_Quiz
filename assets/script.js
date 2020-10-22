let questionDiv = document.querySelector("#questionDiv");
let beginQuizButn = document.querySelector("#beginQuiz");
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
beginQuizButn.addEventListener("click", startQuiz);

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
  beginQuizButn.style.display = "none";

  //render question and answer buttons
  questionDiv.innerHTML = `<p>${q.question}</p><br><button id=choiceA>${answer1}</button><br><button id=choiceB>${answer2}</button><br><button id=choiceC>${answer3}</button><br><button id=choiceD>${answer4}</button>`;
}

function showResults() {}
