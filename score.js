// Iteration 8: Making scoreboard functional

const scoreboard = document.getElementById('score-board')

// let score = localStorage.getItem('score')

function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Get the 'laptopId' parameter from the URL
const score= getUrlParam('score');

window.onload = ()=>{
    scoreboard.textContent = score
}

const playAgain = document.getElementById('play-again-button')

playAgain.onclick = () =>{
    window.location.href = "./game.html"
}