
var startButton = document.querySelector(".startbutton");

var timeLeft = 3;

var questuuhhnns = document.querySelector("#quest-uuhhnns");

var choices = Array.from(document.querySelector("choice-text"));

var timerEl = document.querySelector('.timer');
var mainEl = document.querySelector('main');

let currentQuestUuhhnns 
let answer = true
let question = [
  {
  question: "who are the hosts of Uuhhnn",
  option1: "A Trixie",
  option2: "B Katya",
  option3: "C RuPaul",
  option4: "D Katya & Trixie",
  answer: 4
  },

  {
  question: "Which queen won their AllStar season",
  option1: "A Trixie",
  option2: "B Katya",
  option3: "C Detox",
  option4: "D Katya & Trixie",
  answer: 1
  },
{
  question: "What streaming service is Uuhhnn on?",
  option1: "A The BBC",
  option2: "B WOW Presents Plus",
  option3: "C MSNBC",
  option4: "D NPR",
  answer: 2
},

{
  question: "Who is a bigger mess?",
  option1: "A Trixie",
  option2: "B Katya",
  option3: "C RuPaul",
  option4: "D All of the above",
  answer: 2
},

  {
  question: "Who made these queen famous?",
  option1: "A Lady Bunny",
  option2: "B Michelle Visage",
  option3: "C RuPaul",
  option4: "D Themselves",
answer: 4
  },
]
var score = 100

startButton.addEventListener("click", countdown);

function countdown() {
  var timerInterval = setInterval(function () {

 timeLeft--;
 timerEl.textContent = timeLeft + "Time Left"
  if (timeLeft === 0){
    clearInterval(timerInterval)
    return
  }
}, 
  
  1000);
}

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }
startButton.setAttribute("style", "font-size:50px");
// countdown();
