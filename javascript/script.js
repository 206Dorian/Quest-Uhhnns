var startButton = document.querySelector("#startbutton");

var answerButtons = document.querySelector(".choices")

var choiceOne =document.querySelector("#answer1")
var choiceTwo =document.querySelector("#answer2")
var choiceThree =document.querySelector("#answer3")
var choiceFour =document.querySelector("#answer4")
var choiceFive =document.querySelector("#answer5")



// var question = document.getElementById("questions");

var choicesEl = Array.from(document.getElementsByClassName("choices"));


var currentQuestions = {
};
var answer = true

var timeLeft = 30;

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
    question: "What streaming service is Drag Race on?",
    choices: ["A The BBC", "B WOW Presents Plus", "C MSNBC", "D NPR", "E Its hard to know anymore"],
    answer: "E Its hard to know anymore"
  },

  {
    question: "Who's persona is Russian?",
    choices: ["A Trixie", "B Katya", "C RuPaul", "D Katya & Trixie", "E Tatiana"],
    answer: "B Katya"
  },

  {
    question: "Who made these queen famous?",
    choices: ["A Lady Bunny", "B Michelle Visage", "C RuPaul", "D Themselves", "E Tattiana"],
    answer: "D Themselves"
  },

  {
    question: "Who coined the phrase *Choices*?",
    choices: ["A Lady Bunny", "B Michelle Visage", "C RuPaul", "D Themselves", "E Tattiana"],
    answer: "E Tattiana",
  },
]

var score = 100
// let availableQuestions = [...questions]

startGame = () => {
  // questionCount = 0;
  score = 0
  // availableQuestions = [...questions]
  // console.log(availableQuestions);
  document.getElementById("quiz").classList.remove("hide")
  getNewQuestion();
  startTimer();
  startButton.disabled = true;
};

// const questionIndex = Math.floor(Math.random() * availableQuestions.length);
// let currentQuestion = availableQuestions[questionCount];

getNewQuestion = () => {
  console.log(questionCount)
 var currentQuestion = questions[questionCount]
  console.log(currentQuestion)
  document.getElementById("question").textContent = currentQuestion.question;

  for (i = 0; i < currentQuestion.choices.length; i++) {
    choicesEl[i].textContent = currentQuestion.choices[i]
    const optionButton = document.querySelector("answer"+i)
    choicesEl[i].append(optionButton)
  }
  // questionCount++;
  // console.log(questionCount)
}

function checkAnswer (event){
  let clickAnswer = event.target.textContent
  let correctAnswer = questions[questionCount].answer

  if (clickAnswer===correctAnswer){
    points+=5
    
  }
  else{
    timeLeft-5
points-=5
  }
questionCount++
if (questions.length>questionCount){
  getNewQuestion()
  
} else {
  console.log("quiz done")
  //quizdone(cleartimer) 
}
}
// choices.forEach(choice =.> {
//   var number = choice.dataset["number"];
//   choice.innerText = currentQuestions["choice + number"];
// })


var timerEl = document.querySelector(".timer");
var mainEl = document.querySelector("main");


function startTimer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " Seconds Left"
    if (timeLeft === 0) {
      clearInterval(timerInterval)
      return;
    }
  },

    1000);
}

// function startGame() {
//   startTimer()
  //in startGame remove class hide from question/answer container, needs an id in div, then hide start 
// };
console.log(startGame)

startButton.addEventListener("click", startGame);

// Quiz end statement 