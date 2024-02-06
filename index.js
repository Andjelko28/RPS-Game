function off() {
    document.getElementsByClassName('overlay')[0].style.display = "none";
}

let rock = document.querySelector('.rock').addEventListener('click', () => {
    play('rock');
})
let paper = document.querySelector('.paper').addEventListener('click', () => {
    play('paper');
})
let scissors = document.querySelector('.scissors').addEventListener('click', () => {
    play('scissors');
})

let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let playerCount = document.querySelector('.p-count');
let computerCount = document.querySelector('.c-count');
let choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let maxScore = 5;

function computerChoice() {
    let comp = choices[Math.floor(Math.random() * 3)];
    console.log(comp);
    return comp;
};


function play(userSelection) {
    console.log(userSelection);
    let computerSelection = computerChoice();
    if (userSelection === computerSelection) {
        console.log('Draw');
    } else if (userSelection == 'paper') {
        if (computerSelection == 'rock') {
            computerScore++;
            computerCount.textContent = computerScore;
        } else {
            playerScore++;
            playerCount.textContent = playerScore;

        }
    } else if (userSelection == 'scissors') {
        if (computerSelection == 'paper') {
            computerScore++;
            computerCount.textContent = computerScore;
        } else {
            playerScore++;
            playerCount.textContent = playerScore;
        }
    } else if (userSelection == 'rock') {
        if (computerSelection == 'scissors') {
            computerScore++;
            computerCount.textContent = computerScore;
        } else {
            playerScore++;
            playerCount.textContent = playerScore;
        }
    };
    if (playerScore == maxScore) {
        alert('Player win!')
        location.reload();
    } else if (computerScore == maxScore) {
        alert("Computer wins!");
        location.reload();
    }
}
play();

