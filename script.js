let input = document.querySelector("body");

let boom = new Audio("sounds/boom.wav");
let clap = new Audio("sounds/clap.wav");
let hihat = new Audio("sounds/hihat.wav");
let kick = new Audio("sounds/kick.wav");
let openhat = new Audio("sounds/openhat.wav");
let ride = new Audio("sounds/ride.wav");
let snare = new Audio("sounds/snare.wav");
let tink = new Audio("sounds/tink.wav");
let tom = new Audio("sounds/tom.wav");

input.addEventListener("keypress", (e) => {
  if (e.key === "q" || e.key === "Q") {
    boom.play();
  } else if (e.key === "w" || e.key === "W") {
    clap.play();
  } else if (e.key === "e" || e.key === "E") {
    hihat.play();
  } else if (e.key === "r" || e.key === "R") {
    kick.play();
  } else if (e.key === "t" || e.key === "T") {
    openhat.play();
  } else if (e.key === "y" || e.key === "Y") {
    ride.play();
  } else if (e.key === "u" || e.key === "U") {
    snare.play();
  } else if (e.key === "i" || e.key === "I") {
    tink.play();
  } else if (e.key === "o" || e.key === "O") {
    tom.play();
  }
});
