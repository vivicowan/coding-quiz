var prevScores = localStorage.getItem("userScores");
var scoreListEl = document.getElementById("high-scores")
var clear = document.getElementById("clearme");

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

function init() {
	var storedScores = JSON.parse(localStorage.getItem('userScore'));
 
	if (storedScores !== null) {
	  userScore = storedScores;
	}
	highscoreRender();
}


clear.addEventListener("click", clearScores)

function clearScores() {
	userScore = [];
	localStorage.setItem('userScore', JSON.stringify(userScore));
	init();
}


init();





