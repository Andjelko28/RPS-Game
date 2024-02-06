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

function computerChoice() {
    let comp = choices[Math.floor(Math.random() * 3)];
    console.log(comp);
    return comp;
};


function ui() {
    let playerScore = 0;
    let computerScore = 0;
    let maxScore = 5;

    function playerSc() {
        playerScore++;
        if (playerScore >= maxScore) {
            alert("Player wins!");
            location.reload();
        } else {
            playerCount.textContent = playerScore;
        };
    }

    function computerSc() {
        computerScore++;
        if (computerScore >= maxScore) {
            alert(`Computer Wins! Your score is ${playerScore} to the computers ${computerScore}.`);
            location.reload();
        } else {
            computerCount.textContent = computerScore;
        }
    }
    return { playerSc, computerSc }
};


let game = ui();

function play(userSelection) {
    console.log(userSelection);
    let computerSelection = computerChoice();
    if (userSelection === computerSelection) {
        console.log('Draw');
    } else if (userSelection == 'paper') {
        if (computerSelection == 'rock') {
            game.computerSc();
        } else {
            game.playerSc()
        }
    } else if (userSelection == 'scissors') {
        if (computerSelection == 'paper') {
            game.computerSc();
        } else {
            game.playerSc();
        }
    } else if (userSelection == 'rock') {
        if (computerSelection == 'scissors') {
            game.computerSc();
        } else {
            game.playerSc();
        }
    };
}
play();
