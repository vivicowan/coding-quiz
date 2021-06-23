var countdown = document.querySelector(".countdown");
var startPage = document.querySelector(".start-quiz")
var start = document.querySelector(".start-button");
var quiz = document.querySelector(".quiz");
var question = document.querySelector(".question");
var choices = document.querySelector(".choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var prev = document.querySelector(".previous")

var questions = [
	{
		question:"Commonly used data types DO NOT include:",
		choiceA:"1. strings",
		choiceB:"2. booleans",
		choiceC:"3. alerts",
		choiceD:"4. numbers",
		correct:"C"
	},{
		question:"The condition in an if/else statement is enclosed within ______.",
		choiceA:"1. quotes",
		choiceB:"2. curly brackets",
		choiceC:"3. parentheses",
		choiceD:"4. square brackets",
		correct:"C"
	},{
		question:"Arrays in JavaScript can be used to store _____.",
		choiceA:"1. numbers and strings",
		choiceB:"2. other arrays",
		choiceC:"3. booleans",
		choiceD:"4. all of the above",
		correct:"D"
	},{
		question:"String values must be enclosed within _____ when being assigned to variables.",
		choiceA:"1. quotes",
		choiceB:"2. curly brackets",
		choiceC:"3. commas",
		choiceD:"4. parentheses",
		correct:"A"
	},{
		question:"A very useful tool during development and debugging for printing content to the debugger is:",
		choiceA:"1. JavaScript",
		choiceB:"2. console.log",
		choiceC:"3. terminal/bash",
		choiceD:"4. for loops",
		correct:"B"
	}
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var secondsLeft = 0;
var timer; 
var score = 0;

function renderQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

function startQuiz(){
	renderCounter();
	startPage.style.display = "none";
	renderQuestion();
	quiz.style.display = "block";
}


function renderCounter() {
	secondsLeft = 75
	timer = setInterval(function () {
		if (secondsLeft < 0) {
			clearInterval(timer);
			doneRender();
		} else {
			countdown.textContent = "Timer: " + secondsLeft;
			secondsLeft--;
		}
	}, 1000);
}

function checkAnswer(answer){
	if( answer == questions[runningQuestion].correct){
		 answerIsCorrect();
	}else{
		answerIsWrong();
	}
	if(runningQuestion < lastQuestion){
		 runningQuestion++;
		 renderQuestion();
	}else{
		clearInterval(timer);	
		doneRender();
	}
}

// answer is correct
function answerIsCorrect(){
	score++;
	prev.textContent = "Correct!";
}

// answer is Wrong
function answerIsWrong(){
	secondsLeft -= 15;
	score--;
	prev.textContent = "Wrong!";
}

var inputCard = document.querySelector(".input-card");
var scoreInput = document.getElementById("score-text");
var submit = document.getElementById("submit-button");
var scoreList = document.getElementById("high-score-list");

var userScore = [];

function doneRender(){
	startPage.style.display = "none";
	quiz.style.display = "none";
	inputCard.style.display= "block";

	submit.addEventListener('click', function (event) {
		event.preventDefault();
	
		var userText = scoreInput.value.trim();
	
		if (userText === '') {
		  return;
		}
		userScore.push(userText);
		scoreInput.value = '';
	
		storeScores();
		highscoreRender();
	});
}

function highscoreRender(){
	scoreList.innerHTML = '';

	for (var i = 0; i < userScore.length; i++) {
	  var userName = userScore[i];
 
	  var li = document.createElement('li');
	  li.textContent = userName +"-"+ score;
	  li.setAttribute('data-index', i);

	  scoreList.appendChild(li);
	}
}

function init() {
	var storedScores = JSON.parse(localStorage.getItem('userScore'));
 
	if (storedScores !== null) {
	  userScore = storedScores;
	}
	highscoreRender();
}
 
function storeScores() {
	localStorage.setItem('userScore', JSON.stringify(userScore));
}
 
function scoreList(){
	
	var pastScores = JSON.parse(localStorage.getItem("pastScores"));
	if (!pastScores){
		pastScores = [];
	}
	localStorage.setItem("pastScores", JSON.stringify(pastScores));
 
	storeScores();
	highscoreRender();
}
 
init();
 