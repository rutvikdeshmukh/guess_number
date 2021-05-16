'use strict';
function generating_secreat_number() {
  return Math.trunc(Math.random() * 20) + 1;
}

let highscore = 0;
let scoreCounter = 20;
let high = 0;
let secreatNumber = generating_secreat_number();
function guess_correctly() {
  if (scoreCounter > highscore) {
    highscore = scoreCounter;
  }
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.number').textContent = secreatNumber;
  document.querySelector('.message').textContent = 'Guessed Correctly 🥳';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}
function setting_values() {
  if (scoreCounter > 0) {
    if (high === 1) {
      document.querySelector('.message').textContent = 'Prediction is High😟';
      high = 0;
    } else {
      document.querySelector('.message').textContent = 'Prediction is Low😟';
    }

    scoreCounter = scoreCounter - 1;
    document.querySelector('.score').textContent = scoreCounter;
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent =
      'You have Lost the Game 😭';
  }
}

const check = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = 'Wrong value Entered';
  } else if (guess === secreatNumber) {
    guess_correctly();
  } else if (guess > secreatNumber) {
    high = 1;
    setting_values();
  } else if (guess < secreatNumber) {
    setting_values();
  }
};
const again = function () {
  scoreCounter = 20;
  document.querySelector('.score').textContent = scoreCounter;
  document.querySelector('.message').textContent = 'Start guessing...';
  secreatNumber = generating_secreat_number();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', again);
