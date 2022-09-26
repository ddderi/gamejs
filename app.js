const btnsci = document.getElementById("scissor")
const btnpap = document.getElementById("paper")
const btnroc = document.getElementById("rock")
const result = document.getElementById("result")
const computerChoice = document.getElementById("computer-choice")
const ownChoice = document.getElementById("own-choice")
const imgOwnChoice = document.getElementById("img-own-choice")
const imgComputerChoice = document.getElementById("img-computer-choice")
const imgResultChoice = document.getElementById("img-result-choice")
const possibleChoices = document.querySelectorAll('button')
const choices = ['scissor', 'paper', 'rock']
let resultimg 
let userChoice 
const randomComputerChoice = choices[Math.floor(Math.random() * choices.length)]


function getrandom(array){
    return array[Math.floor(Math.random() * choices.length)]
}

function getwinner(choice1, choice2){
    
    if ((choice1.innerHTML === 'scissor' && choice2.innerHTML === 'paper') || (choice1.innerHTML === 'paper' && choice2.innerHTML === 'rock') || (choice1.innerHTML === 'rock' && choice2.innerHTML === 'scissor'))
    {
        resultimg = 'win'
        result.innerHTML = 'User win'

    }
    else if ((choice1.innerHTML === 'paper' && choice2.innerHTML === 'scissor') || (choice1.innerHTML === 'scissor' && choice2.innerHTML === 'rock') || (choice1.innerHTML === 'rock' && choice2.innerHTML === 'paper'))
    { 
        resultimg = 'loose'
        result.innerHTML = 'Computer win';}
    else{
        resultimg = 'draw'
        result.innerHTML = 'draw';  
    }
}


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    ownChoice.innerHTML = userChoice
    imgOwnChoice.innerHTML=`<img src=\"./images/${ownChoice.innerHTML}.png\" width=\"300px\" height=\"300px\">`;
    computerChoice.innerHTML = getrandom(choices)
    imgComputerChoice.innerHTML=`<img src=\"./images/${computerChoice.innerHTML}.png\" width=\"300px\" height=\"300px\">`;
    
    getwinner(ownChoice, computerChoice)
    console.log(resultimg)
    imgResultChoice.innerHTML=`<img src=\"./images/${resultimg}.png\" width=\"300px\" height=\"300px\">`;
}));



