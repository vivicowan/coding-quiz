var countdown = document.querySelector(".countdown");
var startPage = document.querySelector(".start-quiz")
var start = document.querySelector(".start-button");
var quiz = document.querySelector(".quiz");
var question = document.querySelector(".question");
var choices = document.querySelector(".choices");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");

var questions = [
	{
		question:"Commonly used data types DO NOT include:",
		choice1:"1. strings",
		choice2:"2.booleans",
		choice3:"3. alerts",
		choice4:"4. numbers",
		correct:"3"
	},{
		question:"The condition in an if/else statement is enclosed within ______.",
		choice1:"1. quotes",
		choice2:"2. curly brackets",
		choice3:"3. parentheses",
		choice4:"4. square brackets",
		correct:"3"
	},{
		question:"Arrays in JavaScript can be used to store _____.",
		choice1:"1. numbers and strings",
		choice2:"2. other arrays",
		choice3:"3. booleans",
		choice4:"4. all of the above",
		correct:"4"
	},{
		question:"String values must be enclosed within _____ when being assigned to variables.",
		choice1:"1. quotes",
		choice2:"2. curly brackets",
		choice3:"3. commas",
		choice4:"parentheses",
		correct:"1"
	},{
		question:"A very useful tool during development and debugging for printing content to the debugger is:",
		choice1:"1. JavaScript",
		choice2:"2. console.log",
		choice3:"3. terminal/bash",
		choice4:"4. for loops",
		correct:"2"
	}
];

var runningQuestion = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
	 choice4.innerHTML = q.choice4;
}

start.addEventListener("click", startQuiz);

function startQuiz(){
	alert("HELLO")
}