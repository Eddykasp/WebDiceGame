function getPlayers() {
  var input = Number(document.getElementById("playersInput").value),
    str = "";
  if (isNaN(input)) {
    str = "Not a valid input.";
  } else {
    str = input + " players playing."
  };
  document.getElementById("playersLabel").innerHTML = str;
  return input;
}

function evaluateGame(scores) {
  var max = 0, i = 0,
  winners = [],
  evalLabel = document.getElementById("evaluation");
  for (i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      winners = [];
      max = scores[i];
      winners.push(i);
    } else if (scores[i] == max) {
      winners.push(i);
    }
  }
  evalLabel.innerHTML = "";
  for (i = 0; i < winners.length; i++) {
    evalLabel.innerHTML += "Player " + (Number(winners[i]) + 1) +"<br>";
  }
}

function playGame() {
  var players = getPlayers(),
  scores = [],
  i = 0,
  results = document.getElementById("results");
  results.innerHTML = ""
  for (i = 0; i < players; i++) {
    scores[i] = Math.floor(Math.random() * 6)+1;
    results.innerHTML += "Player " + (i + 1) + ": " + scores[i] + "<br/>";
  }
  evaluateGame(scores);
}
