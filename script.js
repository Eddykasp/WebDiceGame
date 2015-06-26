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
  var players = getPlayers();
}
