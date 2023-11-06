// Iteration 8: Making scoreboard functional

const scoreboard = document.getElementById('score-board')

let score = localStorage.getItem('score')

window.onload = ()=>{
    scoreboard.textContent = score
}

const playAgain = document.getElementById('play-again-button')

playAgain.onclick = () =>{
    window.location.href = "./game.html"
}