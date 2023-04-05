'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// this is what happens if we click the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // to avoid repetitive code i created a function which decreaces score in case of wrong number input
  const wrongAnsver = function () {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = score - 1;
      displayMessage('😢 You Lost!');
    }
  };

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
    wrongAnsver();

    // When guess is not secret number, so it is higher or lower
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    wrongAnsver();

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // check for the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// play the game again. I reseted all conditions conditions
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
