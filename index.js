//media queries/ global variables
var answerButton = document.querySelector('.get-answer-button');
var input = document.querySelector('.question-input');
var form = document.querySelector('form');
var eightBall = document.querySelector('.magic-8-ball');
var answer = document.querySelector('.answer');
var questionAsked = document.querySelector('.question-asked');

var possibleAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt.',
  'Yes - definitely',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later',
  'Better not tell you now.',
  'Cannot predict now',
  'Concentrate and ask again.',
  'Don/t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful'
]


//eventlisteners
answerButton.addEventListener('click', getAnswer);
//functions
function randomAnswer(possibleAnswers){
  return Math.floor(Math.random() * possibleAnswers.length)
};

function getAnswer() {
  event.preventDefault();
  questionAsked.innerText = input.value
  answer.innerText = possibleAnswers[randomAnswer(possibleAnswers)];
  hideBall();
};

function hideBall(){
  eightBall.classList.add("hidden");
}


//click get answer
//see question AND a random answerButton
//input field then clears
// when question and answer appear 9 ball disappears.
