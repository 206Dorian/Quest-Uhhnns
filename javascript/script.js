var startButton = document.querySelector("#startbutton");

var timeLeft = 90;

// var question = document.getElementById("questions");

var choices = Array.from(document.getElementsByClassName("choices"));
console.log(choices);

var currentQuestions = {
};
var answer = true

var points = 0;

var questionCount = 0;

var questions = [
  {
  question: "Who are the hosts of Uuhhnn",
  choices: ["A Trixie", "B Katya", "C RuPaul", "D Katya & Trixie", "E Tatiana"],
  answer: "D Katya & Trixie"
  },

  {
  question: "Which queen won their AllStar season",
  choices: ["A Trixie", "B Katya", "C Rupaul", "D Katya & Trixie", "E Tatiana"],
  answer: "A Trixie"
  },

{
  question: "What streaming service is Uuhhnn on?",
  choices: ["A The BBC", "B WOW Presents Plus", "C MSNBC", "D NPR","E Tatianna"],
  answer: "B WOW Presents Plus"
},

{
  question: "Who's persona is Russian?",
  choices: ["A Trixie", "B Katya", "C RuPaul", "D Katya & Trixie", "E Tatiana"],
  answer: "B Katya"
},

  {
  question: "Who made these queen famous?",
  choices:["A Lady Bunny", "B Michelle Visage", "C RuPaul", "D Themselves", "E Tattiana"],
answer: "D Themselves"
  },

  {
    question: "Who coined the phrase *Choices*?",
    choices: ["A Lady Bunny", "B Michelle Visage", "C RuPaul", "D Themselves", "E Tattiana"],
  answer: "E Tattiana",
    },
]


var score = 100

startGame = () => {
questionCount = 0;
score = 0
availableQuestions = [...questions]
console.log(avaialableQuestions);
getNewQuestion();
};

getNewQuestion = () => {
questionCount++;
const questionIndex = Math.floor(Math.random() * avaialableQuestions.length);
currentQuestion = avaialableQuestions [questionIndex];
question.innerText = currentQuestion;
}


choices.forEach( choice => {
var number = choice.dataset["number"];
choice.innerText = currentQuestions["choice + number"];
})


var timerEl = document.querySelector(".timer");
var mainEl = document.querySelector("main");



function startTimer() {
 var timerInterval = setInterval(function () {
 timeLeft--;
 timerEl.textContent = timeLeft + "Time Left"
  if (timeLeft === 0){
    clearInterval(timerInterval)
    return;
  }
}, 
  
  1000);
}

function startGame(){ 
  startTimer()
  //in startGame remove class hide from question/answer container, needs an id in div, then hide start 
};
console.log(startGame)

startButton.addEventListener("click", startGame);

//when timer starts questions appear, startGame 

//update question content create var in JS, update text content 

//tell Js which element to change, then update text cont accoringly