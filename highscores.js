// Delcaring variable that mainpulate the DOM
var card = document.querySelector(".card")
var prevScores = localStorage.getItem("userScores");
var scoreListEl = document.getElementById("high-scores")
var clear = document.getElementById("clearme");


// Pasting same highscoreRender function that puts score in a list and sorts them
function highscoreRender(){
	scoreListEl.innerHTML = '';

	for (var i = 0; i < userScore.length; i++) {
	  var userName = userScore[i].name;
 
	  var li = document.createElement('li');
	  li.textContent = userName +":"+ userScore[i].score;
	  li.setAttribute('data-index', i);

	  scoreListEl.appendChild(li);
	}
}

// Checks local storage if anything was saved and displays it 
function init() {
	var storedScores = JSON.parse(localStorage.getItem('userScore'));
 
	if (storedScores !== null) {
	  userScore = storedScores;
	}
	highscoreRender();
}

// When button is clicked, the userScore array is emptied and local storage is set to empty.
clear.addEventListener("click", clearScores)

function clearScores() {
	userScore = [];
	localStorage.setItem('userScore', JSON.stringify(userScore));
	init();
}

// Calling function init to initialize the browsers local storage 
init();





