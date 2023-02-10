// File: game.js
var playerBank = 1000


// Start of the game
console.log("Welcome to the Blackjack.");
console.log("The player's starting bank is " + playerBank + ".");

// Place a bet
let betAmount = 25;
playerBet(betAmount);

// Deal initial cards
console.log("Dealing initial cards...");
playerDraw();
dealerDraw();
if (dealerHand.length > 0) {
  dealerDown.push(dealerHand[0]);
  console.log(
    "The dealer's facedown card is a " +
      dealerDown[0].name +
      " of " +
      dealerDown[0].suit +
      "."
  );
}
if (dealerHand.length > 1) {
  dealerUp.push(dealerHand[1]);
  console.log(
    "The dealer's faceup card is a " +
      dealerUp[0].name +
      " of " +
      dealerUp[0].suit +
      "."
  );
}


// Player turn
while (!playerBust && !dealerStand) {
  let playerChoice = prompt("Do you want to hit or stand?");
  if (playerChoice === "hit") {
    playerHit();
  } else if (playerChoice === "stand") {
    playerStand();
  }
}

// Dealer turn
while (!dealerBust && !dealerStand) {
  checkDealerDown();
  checkDealerUp();
}

// Determine winner
if (!playerBust && !dealerBust) {
  if (playerTotal > dealerTotal) {
    playerWin();
  } else if (dealerTotal > playerTotal) {
    dealerWin();
  } else {
    checkPush();
  }
} else if (playerBust) {
  dealerWin();
} else if (dealerBust) {
  playerWin();
}

// Game play functions

function checkBust() {
  if (playerTotal > 21) {
    console.log("The player has bust! The dealer wins.");
    playerBust = true;
  }
  if (dealerTotal > 21) {
    console.log("The dealer has bust! The player wins.");
    dealerBust = true;
  }
}

function checkPush() {
  if (playerTotal === 21 && dealerTotal === 21) {
    console.log("The game is a push.");
  }
}

function checkDealerDown() {
  if (dealerTotal <= 16) {
    dealerDraw();
    checkBust();
  }
}

function checkDealerUp() {
  if (dealerTotal >= 17) {
    dealerStand = true;
  }
}

function playerHit() {
  console.log("The player has chosen to hit.");
  playerDraw();
  checkBust();
}

function playerStand() {
  console.log("The player has chosen to stand.");
  checkDealerDown();
  checkDealerUp();
}

function dealerStand() {
  console.log("The dealer has chosen to stand.");
}

// Betting and winner determination functions

function playerBust() {
  console.log("The player has bust! The dealer wins.");
  playerBust = true;
}

function dealerBust() {
  console.log("The dealer has bust! The player wins.");
  dealerBust = true;
}

function playerBet(amount) {
  if (amount <= playerBank) {
    playerBank = playerBank - amount;
    console.log("The player has placed a bet of " + amount + ".");
    console.log("The player's bank is now " + playerBank + ".");
  } else {
    console.log("The player does not have enough funds to place this bet.");
  }
}

function playerWin() {
  playerBank = playerBank + 2 * playerBet;
  console.log(
    "The player has won the hand! The player's bank is now " + playerBank + "."
  );
}

function dealerWin() {
  console.log("The dealer has won the hand.");
}

