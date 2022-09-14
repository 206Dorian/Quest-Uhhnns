// var startClock = document.querySelector("#startbutton");

// var timeLeft = 3;

var question = document.getElementById("questions");

var choices = Array.from(document.getElementsByClassName("choices"));
console.log(choices);

var currentQuestions = {
};
var answer = true

var points = 0;

var questionNum
var questUuhhnns = [
  {
  question: "Who are the hosts of Uuhhnn",
  option1: "A Trixie",
  option2: "B Katya",
  option3: "C RuPaul",
  option4: "D Katya & Trixie",
  option5: "E Tattiana",
  answer: 4
  },
  {
  question: "Which queen won their AllStar season",
  option1: "A Trixie",
  option2: "B Katya",
  option3: "C Detox",
  option4: "D Katya & Trixie",
  option5: "E Tattiana",
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
  question: "Who is a bigger mess?",
  option1: "A Trixie",
  option2: "B Katya",
  option3: "C RuPaul",
  option4: "D Katya & Trixie",
  option5: "E Tattiana",
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



var timerEl = document.querySelector(".timer");
var mainEl = document.querySelector("main");

startClock.addEventListener("click", startTimer);

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
console.log(startClock)

