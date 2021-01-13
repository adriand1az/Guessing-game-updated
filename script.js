'use strict';

// document.querySelector('.message').textContent = 'Correct Number'; // Changing the value on screen
// document.querySelector('.number').textContent = 13;

// // When using input types we must look at .value not textContent


// Creating a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

// Game logic
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    // When there is no input 
    if (!guess) { // If guess isnt a number or value
        document.querySelector('.message').textContent = 'No Number!';

        // When player wins
    } else if (guess > 20 || guess < 0) {
        document.querySelector('.message').textContent = 'Keep guess between 0 and 20';
    } else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;
            console.log(highScore)
            document.querySelector('.highscore').innerText = highScore;
        }
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').innerText = 'Correct Guess!';
        document.querySelector('.message').style.color = 'blue' // Changes text
        document.querySelector('body').style.backgroundColor = '#60b347'  // Changes backgroundcolor
        document.querySelector('.number').style.width = '60vw';
        // If not secret number
    } else if (guess !== secretNumber) {
        if (score > 1) {
            if (guess > secretNumber) {
                document.querySelector('.message').textContent = 'Too High';
            } else if (guess < secretNumber) {
                document.querySelector('.message').textContent = 'Too Low!';
            }
            score--
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You are out of guesses!';
            document.querySelector('.score').textContent = 0;
        }
    }
})

// Removing elements and restarting game when again is clicked
document.querySelector('.again').addEventListener('click',
    function () {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.message').innerText = 'Start guessing...';
        document.querySelector('.message').style.color = 'white' // Changes text
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = ''
    })