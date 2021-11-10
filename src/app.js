import "./style.css";

window.onload = function() {
  //write your code here
  randomCard();
};

function randomCard() {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K"];
  const suits = ["♦", "♥", "♠", "♣"];

  const randomValue = Math.floor(Math.random() * values.length);
  const randomSuit = Math.floor(Math.random() * suits.length);
  const cardValue = values[randomValue];
  const cardSuit = suits[randomSuit];
  let entity;
  if (cardSuit === "♦" || cardSuit === "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }

  const top = document.querySelector(".top");
  top.innerHTML = `<span>${cardSuit}</span>`;
  const middle = document.querySelector(".middle");
  middle.innerHTML = `${cardValue}`;
  const bottom = document.querySelector(".bottom");
  bottom.innerHTML = `<span>${cardSuit}</span>`;
}
