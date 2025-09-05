'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'CORRECT NUMBER';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 6; //txtcont ta chnge korchi so just textcont = this not the Element
document.querySelector('.score').textContent = 5;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

//// Button ////

//we need to use an event listener. Now, an event is something that happens on the page like a mouse click,or a mouse moving, or a key press, or many other events.
//with an event listener, we can wait for a certain event to happen, and then react to it.

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
*/
/////// game logic /////////
/*let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // When there is no input

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ NO NUMBER';
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // guess is wrong
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      // because 1 thkle pore -- hoye to 0 teh jacche but change hoche na likh

      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
 ///ANSWER//////
document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  // ABAR INITIALISE KORAR DORKAR NAI JUST SECRET NUMBER DILEI HOBE

  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
//////// CORRECTION-
document.querySelector('.again').addEventListener('click', function () {
  // SCORE SET KORE dile better
  score = 20; // ekhn value pass korte pari
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // ABAR INITIALISE KORAR DORKAR NAI JUST SECRET NUMBER DILEI HOBE

  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//////////Refactoring code///////
-refactoring basically means to restructure the code
but without changing how it works.
-it improves the code
and eliminate duplicate code.
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input

  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ NO NUMBER';
    displayMessage('⛔️ NO NUMBER');
  }
  // When player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!';

    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  // SCORE SET KORE dile better
  score = 20; // ekhn value pass korte pari
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // ABAR INITIALISE KORAR DORKAR NAI JUST SECRET NUMBER DILEI HOBE

  //document.querySelector('.message').textContent = 'Start guessing..';

  displayMessage('Start guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
