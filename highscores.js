var prevScores = localStorage.getItem("pastScores");
var scoreListEl = document.getElementById("high-scores")
if(prevScores){
	prevScores = JSON.parse(prevScores);
} else {
	prevScores = [];
}

prevScores.reverse();

for (var i = 0; i < prevScores.length; i++){
	var li = document.createElement("li");
	li.textContent = prevScores[i];
	scoreListEl.appendChild(li);
}

