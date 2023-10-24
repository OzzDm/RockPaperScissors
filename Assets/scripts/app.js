const choices = ['rock', 'paper', 'scissors']
const computerChoiceEl = document.querySelector('#computer-choice')
const playerChoiceEl = document.querySelector('#player-choice')
const messageEl = document.querySelector('h1')
const choice = document.querySelectorAll('button')
// console.log(choice)

choice.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerChoice = e.target.id
        const computerChoice = choices[Math.floor(Math.random()*3)]
        playerChoiceEl.textContent = playerChoice
        computerChoiceEl.textContent = computerChoice
        if((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock'))
            messageEl.textContent = 'You lose!'
        else if(playerChoice === computerChoice)
            messageEl.textContent = 'Draw!'
        else 
            messageEl.textContent = 'You Win!'
    })
})

