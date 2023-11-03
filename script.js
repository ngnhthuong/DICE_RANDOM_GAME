// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnBuild = document.querySelector('.btn--new');
const activePlayer = document.querySelectorAll('.player');
const namePlayer = document.querySelectorAll('.name');


const score = [0, 0];
let currentScore = 0;
let currentActivePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function resetGame() {
    score[0] = 0;
    score[1] = 0;
    console.log(score);
    currentScore = 0;
    currentActivePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    activePlayer[0].classList.remove('player--winner');
    activePlayer[1].classList.remove('player--winner');
    activePlayer[1].classList.remove('player--active');
    activePlayer[0].classList.remove('player--active');
    activePlayer[0].classList.add('player--active');
}

function winner(){
    activePlayer[currentActivePlayer].classList.add('player--winner');
    namePlayer[currentActivePlayer].textContent = 'Winner 🏅!';
}

function checkWinner(){
    if(score[currentActivePlayer] >= 100 && namePlayer[currentActivePlayer].textContent === 'Winner 🏅!'){
        resetGame();
    }
}

// btn random dice 
btnRoll.addEventListener('click', function () {
    // Generate 
    checkWinner();
    const dice = Math.trunc(Math.random() * 6 + 1)
    // display
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check conditional
    if (dice !== 1) {
        currentScore += dice;
        document.querySelector(`#current--${currentActivePlayer}`).textContent = currentScore;
    } else {
        changePlayer();

    }
})

btnHold.addEventListener('click', function () {
    checkWinner();
    score[currentActivePlayer] += currentScore;
    currentActivePlayer === 0 ? score0El.textContent = score[0] : score1El.textContent = score[1];
    if (score[currentActivePlayer] >= 100) {
        winner();
    } else {
        changePlayer();
    }
})

btnBuild.addEventListener('click', function () {
    resetGame();
})


const changePlayer = function () {
    currentScore = 0;
    document.querySelector(`#current--${currentActivePlayer}`).textContent = currentScore;
    currentActivePlayer = currentActivePlayer === 0 ? 1 : 0;
    if (currentActivePlayer === 0) {
        activePlayer[0].classList.add('player--active')
        activePlayer[1].classList.remove('player--active');
    } else {
        activePlayer[1].classList.add('player--active');
        activePlayer[0].classList.remove('player--active');
    }
}







// 'use strict';
// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');

// let scorePlayer0 = document.getElementById('score--0');
// let scorePlayer1 = document.getElementById('score--1');

// let playerActive = document.querySelectorAll('.player');
// console.log(playerActive);

// let currentScore0 = document.getElementById('current--0');
// let currentScore1 = document.getElementById('current--1');
// let currentScore = 0;
// const flag = parseInt(Math.random() * 50 +1);

// console.log(flag);

// let score = [0,0]
// scorePlayer0.textContent = score[0];
// scorePlayer1.textContent = score[1];

// document.querySelector('.btn--roll').addEventListener('click', function(){
//     for (let i = 0; i < playerActive.length; i++){
//         if( i == 0 && playerActive[i].classList.contains('player--active')){
//                 let diceRan = Math.floor(Math.random() * 6) + 1;
//                 let image = document.querySelector('.dice');
//                 image.src = `dice-${diceRan}.png`;
//                 currentScore = currentScore + diceRan;
//                 if(currentScore > flag) {
//                     currentScore = 0;
//                     player0.classList.remove('player--active');
//                     player1.classList.add('player--active');
//                     currentScore0.textContent = 0;
//                     break;
//                 }
//                 currentScore0.textContent = currentScore;  
//                 document.querySelector('.btn--hold').addEventListener('click',function(){
//                     scorePlayer0.textContent = parseInt(scorePlayer0.textContent) + parseInt(currentScore);
//                     currentScore = 0;
//                     player0.classList.remove('player--active');
//                     player1.classList.add('player--active');
//                     currentScore0.textContent = 0;
//                 }) 
//                 if(!playerActive[i].classList.contains('player--active')) {
//                     break;
//                 }
//         } else if(i == 1 && playerActive[i].classList.contains('player--active')) {
//             let diceRan = Math.floor(Math.random() * 6) + 1;
//             let image = document.querySelector('.dice');
//             image.src = `dice-${diceRan}.png`;
//             currentScore = currentScore + diceRan;
//             if(currentScore > flag) {
//                 currentScore = 0;
//                 player1.classList.remove('player--active');
//                 player0.classList.add('player--active');
//                 break;
//             }
//             currentScore1.textContent = currentScore;  
//             document.querySelector('.btn--hold').addEventListener('click',function(){
//                 console.log('what');
//                 scorePlayer1.textContent = parseInt(scorePlayer1.textContent) + parseInt(currentScore);
//                 currentScore = 0;
//                 player1.classList.remove('player--active');
//                 player0.classList.add('player--active');
//             }) 
//             if(!playerActive[i].classList.contains('player--active')) {
//                 break;
//             }
//         }
//     }


// });



