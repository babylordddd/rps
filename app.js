function getComputerChoice () {

    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];

}



function getHumanChoice () {

    let choice = prompt("rock, paper or scissors");
    return choice.toLowerCase();
}





let humanScore = 0;
let computerScore = 0;

function playRound () {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();


    console.log("Your choice: ", humanChoice);
    console.log("CPU choice: ", computerChoice);

    if (humanChoice === computerChoice){
        console.log("tie");
    }

    else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
    ){
        console.log("You win!");
        humanScore++;
    }

    else {
        console.log("You lose.");
        computerScore++;
    }


}

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound ();
        console.log("Your score: ", humanScore);
        console.log("My score: ", computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You are the winner!");
    }

    else {
        console.log("You are the loser");
    }
}

playGame();



