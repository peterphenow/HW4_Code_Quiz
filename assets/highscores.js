//create variable to place score
let scoreEl = document.querySelector("#scoreList");
let listEl = document.createElement("li");

//add event listener for start over button
let startOverBtn = document.querySelector("#start-over");
startOverBtn.addEventListener("click", startOver);
//add event listener for clear scores button
let clearBtn = document.querySelector("#clear-scores");
clearBtn.addEventListener("click", clearScores);

function prependScore() {
  //set variables to help get items from local storage
  let score = localStorage.getItem("score");
  let initials = localStorage.getItem("initials");
  let scoreList = JSON.parse(localStorage.getItem("scoreList")) || [];

  //create string to append to scores
  listEl.textContent = initials + " - " + score;
  scoreEl.appendChild(listEl);
}

//run prependScore when page is loaded
prependScore();

//create function to start quiz over
function startOver() {
  //direct back to index.html
  location.href = `./index.html`;
}

//create function to clear local storage
function clearScores() {
  localStorage.removeItem("initials");
  localStorage.removeItem("score");
  //rerun function to update scores
  prependScore();
}
