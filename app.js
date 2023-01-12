const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')

let userChoice;
let computerChoice;
let result;
 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResults()
}))

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1

    if(randomNum === 1) {
        computerChoice = "Rock"
    }
    if(randomNum === 2) {
        computerChoice = "Paper"
    }
    if(randomNum === 3) {
        computerChoice = "Scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResults() {
    if(computerChoice === userChoice) {
        result= "It's a draw!"
    }
    if(computerChoice === 'Rock' && userChoice === "Paper") {
        result= "You Win!"
    }
    if(computerChoice === 'Rock' && userChoice === "Scissors") {
        result= "You Lost!"
    }
    if(computerChoice === 'Paper' && userChoice === "Rock") {
        result= "You Lost!"
    }
    if(computerChoice === 'Paper' && userChoice === "Scissors") {
        result= "You Win!"
    }
    if(computerChoice === 'Scissors' && userChoice === "Paper") {
        result= "You Lost!"
    }
    if(computerChoice === 'Scissors' && userChoice === "Rock") {
        result= "You Lost!"
    }

   resultDisplay.innerHTML = result;
    
   
}
