let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]; 

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//let sumEl = document.querySelector("#sum-el");

function startGame() {
    return renderGame();
}

function renderGame() {
    sumEl.textContent = "sum: " + sum;
    cardsEl.textContent = "cards: " + cards[0] + " " + cards[1];

    if (sum <= 20) {
        message = "do you want to draw a new card";
    } else if (sum === 21) {
        message = "wohoo! youve got Blackjack";
        hasBlackJack = true;
    } else {
        message = "youre out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("drawing new card");
    let Card = 7;

    sum += Card;
    renderGame();
}
