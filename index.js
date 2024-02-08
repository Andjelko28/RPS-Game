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


function gameCreator() {

    let playerChoice = '';
    let computerChoice = '';
    let playerScore = 0;
    let computerScore = 0;
    let maxScore = 5;
    let choices = ['rock', 'paper', 'scissors'];

    const getPlayerScore = () => playerScore;
    const getComputerScore = () => computerScore;
    const getMaxScore = () => maxScore;
    const getPlayerChoice = () => playerChoice;
    const getComputerChoice = () => computerChoice;

    const setPlayerChoice = (choice) => playerChoice = choice;
    const setComputerChoice = (choice) => computerChoice = choice;

    const incrementPlayerScore = () => playerScore++;
    const incrementComputerScore = () => computerScore++;

    function computeChoice() {
        let comp = choices[Math.floor(Math.random() * 3)];
        console.log(comp);
        return comp;
    };

    return { getPlayerScore, getComputerScore, getMaxScore, incrementPlayerScore, incrementComputerScore, computeChoice, getPlayerChoice, getComputerChoice, setPlayerChoice, setComputerChoice }
}

function uiCreator() {
    const updateTextContent = (element, value) => element.textContent = value;

    return { updateTextContent }
}

const game = gameCreator();
const ui = uiCreator();


function play(userSelection) {
    console.log(userSelection);
    game.setPlayerChoice(userSelection);
    let computerChoice = game.computeChoice();
    game.setComputerChoice(computerChoice);

    if (game.getPlayerChoice() === game.getComputerChoice()) {
        console.log('Draw');
    } else if (game.getPlayerChoice() == 'paper') {
        if (game.getComputerChoice() == 'rock') {
            game.incrementPlayerScore();
            ui.updateTextContent(player, game.getPlayerScore());
        } else {
            game.incrementComputerScore();
            ui.updateTextContent(comp, game.getCompScore());
        }
    } else if (game.getPlayerChoice() == 'scissors') {
        if (game.getComputerChoice() == 'paper') {
            game.incrementPlayerScore();
            ui.updateTextContent(player, game.getPlayerScore());
        } else {
            game.incrementComputerScore();
            ui.updateTextContent(comp, game.getCompScore());
        }
    } else if (game.getPlayerChoice() == 'rock') {
        if (game.getComputerChoice() == 'scissors') {
            game.incrementPlayerScore();
            ui.updateTextContent(player, game.getPlayerScore());
        } else {
            game.incrementComputerScore();
            ui.updateTextContent(comp, game.getCompScore());
        }
    };
}
play();
