//business logic
var player1 = "";
var player2 = "";

var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
    this.tempscore += this.roll;
  }
}

Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ", your turn is over, pass the mouse!");
}

Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}
// User Interface
$(document).ready(function() {

      $("button#start").click(function(event) {
            player1 = new Player(true);
            player2 = new Player(false);
            $(".player-console").show();
            $(".start-menu").hide();

            var player1Name = $(".player1Name").val();
            $("#player1Name").text(player1Name);

            var player2Name = $(".player2Name").val();
            $("#player2Name").text(player2Name);

            player1.playerName = player1Name;
            player2.playerName = player2Name;
