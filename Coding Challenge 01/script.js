// assigning values
var playerOneHeight = 150;
var playerOneAge = 20;
var playerTwoHeight = 160;
var playerTwoAge = 18;

// calculating scores
var playerOneScore = playerOneHeight + playerOneAge * 5;
var playerTwoScore = playerTwoHeight + playerTwoAge * 5;

// checking conditions
if (playerOneScore > playerTwoScore) {
    console.log("Player One is the winner with " + playerOneScore + " points");
} else if (playerOneScore < playerTwoScore) {
    console.log("Player Two is the winner with " + playerTwoScore + " points");
} else {
    console.log("It's a draw");
}

// assigning values
var playerThreeHeight = 155;
var playerThreeAge = 25;

// calculating scores
var playerThreeScore = playerThreeHeight + playerThreeAge * 5;

// checking conditions
if (playerOneScore > playerTwoScore && playerOneScore > playerThreeScore) {
    console.log("Player One is the winner with " + playerOneScore + " points");
} else if (playerTwoScore > playerOneScore && playerTwoScore > playerThreeScore) {
    console.log("Player Two is the winner with " + playerTwoScore + " points");
} else if (playerThreeScore > playerOneScore && playerThreeScore > playerTwoScore) {
    console.log("Player Three is the winner with " + playerThreeScore + " points");
} else {
    console.log("It's a draw");
}
