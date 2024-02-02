"use strict";

let counterNumber = 0;
const increase = () => {
  const incBtn = document.querySelector("#increase");
  counterNumber++;
  document.querySelector(".counterNum").textContent = counterNumber;
};
const decrease = () => {
  const decBtn = document.querySelector("#decrease");
  counterNumber--;
  document.querySelector(".counterNum").textContent = counterNumber;
};
document.querySelector("#increase").addEventListener("click", () => {
  increase();
  let sound1 = new Audio("sounds/positive-sound.wav");
  sound1.play();
  if (counterNumber > 0) {
    document.querySelector(".counterNum").style.color = "black";
  }
});
document.querySelector("#decrease").addEventListener("click", () => {
  decrease();
  let sound2 = new Audio("sounds/negative-sound.wav");
  sound2.play();
  if (counterNumber < 0) {
    document.querySelector(".counterNum").style.color = "red";
  }
});
