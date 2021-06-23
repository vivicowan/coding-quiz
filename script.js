// Declaring all variables that are manipulating the DOM
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

// Putting all questions in an array to use index to switch to a different question and choices.
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
		question:"What does HTML stand for?",
		choiceA:"1. HyperText Markup Language",
		choiceB:"2. Had Too Many Lollipops",
		choiceC:"3. Hope To Meet Larry",
		choiceD:"4. Hiking The Mountain Later",
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

// Declaring variables for functions
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var secondsLeft = 0;
var timer; 
var score = 0;

// Rendering a question function
function renderQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// When start is clicked, then the startQuiz runs and calls renderCounter and renderQuestion to display both in HTML.
start.addEventListener("click", startQuiz);

function startQuiz(){
	renderCounter();
	startPage.style.display = "none"; // Hiding home page to show questions
	renderQuestion();
	quiz.style.display = "block";
}

// Sets time to 75 seconds and counts down, if it reaches zero then quiz ends and doneRender is called.
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

// function that is connected to HTML to check whether correct or incorrect answer was chosen
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
	score += 20;
	prev.textContent = "Correct!";
}

// answer is Wrong
function answerIsWrong(){
	secondsLeft -= 15;
	score -= 5;
	prev.textContent = "Wrong!";
}

// Declaring varables for score functionality
var inputCard = document.querySelector(".input-card");
var scoreText = document.getElementById("score-text");
var scoreInput = document.getElementById("score-input");
var submit = document.getElementById("submit-button");
var scoreList = document.getElementById("high-score-list");

var userScore = []; // user score is an empty array to store our objects

// doneRender switches to last page where score is given and user is asked to input initials
function doneRender(){
	startPage.style.display = "none";
	quiz.style.display = "none";
	inputCard.style.display= "block";
	scoreText.textContent = "Your final score is: " + score;
}

// When submit is clicked, the object with name and score is created and is sorted from greatst number to smallest
submit.addEventListener('click', function (event) {
	event.preventDefault();
	
	var userText = scoreInput.value.trim(); 
	var newScore = {};

	if (userText === '') { // this condition is made if the input is empty, nothing is displayed
	  return;
	}
	newScore = {name:userText,score:score}; // newScore is the object that is placed in the empty array userScore
	userScore.push(newScore);
	scoreInput.value = '';
	
	userScore.sort(function(a, b) {
	return b.score - a.score;
   });

	storeScores();
	highscoreRender();
});

// Dispays the scores in a list fashion to user
function highscoreRender(){
	scoreList.innerHTML = '';

	for (var i = 0; i < userScore.length; i++) {
	  var userName = userScore[i].name;
 
	  var li = document.createElement('li');
	  li.textContent = userName +":"+ userScore[i].score;
	  li.setAttribute('data-index', i);

	  scoreList.appendChild(li);
	}
}

// This funtion checks for anything stored in local storage and saves it to browser
function init() {
	var storedScores = JSON.parse(localStorage.getItem('userScore'));
 
	if (storedScores !== null) {
	  userScore = storedScores;
	}
	highscoreRender();
}

// This function stringifies and set key in localStorage to userScore array
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
 