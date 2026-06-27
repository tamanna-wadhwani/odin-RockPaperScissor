console.log("Let's begin!");

let playAgain = "yes"; // initial value

while (playAgain.toLowerCase() === "yes") {
    let userInput = prompt("Enter your choice:\nRock\nPaper\nScissor");
    console.log("You chose:", userInput);

    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (computerChoiceNum === 1) {
        computerChoice = "Rock";
    } else if (computerChoiceNum === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor";
    }

    console.log("Computer chose:", computerChoice);

    if (computerChoice === userInput) {
        console.log("It's a Draw");
    }
    else if (
        (userInput === "Rock" && computerChoice === "Scissor") ||
        (userInput === "Paper" && computerChoice === "Rock") ||
        (userInput === "Scissor" && computerChoice === "Paper")
    ) {
        console.log("YOU WON :)");
    }
    else {
        console.log("Computer won :(");
    }

    // Ask if player wants to continue
    playAgain = prompt("Do you want to play again? (yes/no)");
}

       