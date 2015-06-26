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

function playGame() {
  var players = getPlayers(),
  scores = [],
  i = 0,
  results = document.getElementById("results");
  for (i = 0; i < players; i++) {
    scores[i] = Math.floor(Math.random() * 6)+1;
    results.innerHTML += "Player " + (i + 1) + ": " + scores[i] + "<br/>";
  }
}
