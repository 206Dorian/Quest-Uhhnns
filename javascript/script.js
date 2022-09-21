var startButton = document.querySelector("#startbutton");

var timeLeft = 3;

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
  options: ["A Trixie", "B Katya","C RuPaul","D Katya & Trixie","E Tatiana"],
  answer: "D Katya & Trixie"
  },
  {
  question: "Which queen won their AllStar season",
  option1: "A Trixie",
  option2: "B Katya",
  option3: "C Rupaul",
  option4: "D Katya & Trixie",
  option5: "E Tatiana",
  answer: 1
  },
{
  question: "What streaming service is Uuhhnn on?",
  option1: "A The BBC",
  option2: "B WOW Presents Plus",
  option3: "C MSNBC",
  option4: "D NPR",
  option5: "E Tatianna",
  answer: 2
},
{
  question: "Who's persona is Russian?",
  option1: "A Trixie",
  option2: "B Katya",
  option3: "C RuPaul",
  option4: "D Katya & Trixie",
  option5: "E Tatiana",
  answer: 2
},

  {
  question: "Who made these queen famous?",
  option1: "A Lady Bunny",
  option2: "B Michelle Visage",
  option3: "C RuPaul",
  option4: "D Themselves",
  option5: "E Tattiana",
answer: 4
  },

  {
    question: "Who coined the phrase *Choices*?",
    option1: "A Lady Bunny",
    option2: "B Michelle Visage",
    option3: "C RuPaul",
    option4: "D Themselves",
    option5: "E Tattiana",
  answer: 5
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