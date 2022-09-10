const questuuhhnns = document.querySelector(#quest - uuhhnns);
const choices = Array.from(document.querySelector("choice-text"));

let currentQuestUuhhnns { }
console.log("");


let question = []
  question: "who is the hosts of Uuhhnn"
  option1: "A Trixie"
  option2: "B Katya"
  option3: "C RuPaul"
  option4: "D Katya & Trixie"
  answer: 4


  question: "who is the hosts of Uuhhnn"
  option1: "A Trixie"
  option2: "B Katya"
  option3: "C RuPaul"
  option4: "D Katya & Trixie"
  answer: 4


  question: "who is the hosts of Uuhhnn"
  option1: "A Trixie"
  option2: "B Katya"
  option3: "C RuPaul"
  option4: "D Katya & Trixie"
  answer: 4
  

  question: "who is the hosts of Uuhhnn"
  option1: "A Trixie"
  option2: "B Katya"
  option3: "C RuPaul"
  option4: "D Katya & Trixie"
  answer: 4


  
  question: "who is the hosts of Uuhhnn"
  option1: "A Trixie"
  option2: "B Katya"
  option3: "C RuPaul"
  option4: "D Katya & Trixie"
answer: 4



var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');


var message =
  'Hey Queen, are you ready';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  
  var timeInterval = setInterval(function () {
  
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 5000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();* /
