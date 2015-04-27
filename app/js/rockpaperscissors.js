////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (computerMove === playerMove) {
        winner = 'tie';
    }
    else if ((playerMove === 'rock') && (computerMove === 'scissors')) {
        winner = 'player';
    }    
    else if ((playerMove === 'rock') && (computerMove === 'paper')) {
        winner = 'computer';
    }
    else if ((playerMove === 'paper') && (computerMove === 'rock')) {
        winner = 'player';
    }
    else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
        winner = 'computer';
    }
    else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
        winner = 'computer';
    }
    else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
        winner = 'player';
    }
    return winner;
}

function playToFive(playerWins, computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    playerWins = 0;
    computerWins = 0;
    
    while(playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        if (winner === 'player') {
            playerWins++;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. ' + winner + ' wins this round!');
            console.log('Current score is: Player: ' + playerWins + ' to Computer: ' + computerWins + '.');
        }
        else if (winner === 'computer') {
            computerWins++;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. ' + winner + ' wins this round!');
            console.log('Current score is: Player: ' + playerWins + ' to Computer: ' + computerWins + '.');
        }
        else if (winner === 'tie') {
        console.log('This round is a draw, play again.');
        }
    } 
    if (playerWins === 5) {
        console.log('Final winner is Player! With a total score of:');
    }
    else console.log('Final winner is Computer! With a total score of:');
    return [playerWins, computerWins];
}
