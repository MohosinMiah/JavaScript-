/*

Coding Challenge 01:

John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

*/

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
    console.log("It's a draw"); // outputs: It's a draw
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
    // outputs: Player Three is the winner with 280 points
} else {
    console.log("It's a draw");
}
