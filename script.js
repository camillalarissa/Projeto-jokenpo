const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playGame(humanChoice, playMachine())


}

const playMachine = () => {

    const choices = ['stone', 'paper', 'scissors']
    const randonNumber = Math.floor(Math.random() * 3)


    return choices[randonNumber]
}

const playGame = (human, machine) => {

    console.log('Humano: ' + human + "Máquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === 'paper' && machine === 'stone') || (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Máquina!"
    }

}