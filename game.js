// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

gameStart()

var clicked = 0

var number1 = document.getElementById('number1') 
var number2 = document.getElementById('number2')
var number3 = document.getElementById('number3')

function gameOver(){
    localStorage.setItem('score',score)
    window.location.href = "./gameover.html"
}


function gameStart(){
    
    let num1 = Math.ceil(Math.random() * 100)
    let num2 = Math.ceil(Math.random() * 100)

    var number1 = document.getElementById('number1') 
    var number2 = document.getElementById('number2')
    var number3 = document.getElementById('number3')

    number1.textContent = num1
    number2.textContent = num2
    let indexPicked = Math.floor(Math.random() * 5);

switch(indexPicked){
    case 0: 
    number3.textContent = num1+num2
    break

    case 1: 
    number3.textContent = num1-num2
    break

    case 2: 
    number3.textContent = num1*num2
    break

    case 3: 
    number3.textContent = (num1/num2).toFixed(1)
    break

    case 4: 
    number3.textContent = num1%num2
    break
}  
    clicked+=1

    if(clicked==15){
        gameOver()
    }
    

}

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const mul = document.getElementById('mul')
const divide = document.getElementById('divide')
const modulus = document.getElementById('modulus')
let score = 0
plus.onclick = () =>{
    if(number1.textContent + number2.textContent == number3.textContent){
        score+=1
    }
    gameStart()
    timer.textContent = 20
    console.log(score)
    console.log('clicked')
}
minus.onclick = () =>{
    if(number1.textContent - number2.textContent == number3.textContent){
        score+=1
    }
    gameStart()
    timer.textContent = 20
    console.log(score)
    console.log('clicked')
}
mul.onclick = () =>{
    if(number1.textContent * number2.textContent == number3.textContent){
        score+=1
    }
    gameStart()
    timer.textContent = 20
    console.log(score)
    console.log('clicked')
}
divide.onclick = () =>{
    if(number1.textContent / number2.textContent == number3.textContent){
        score+=1
    }
    gameStart()
    timer.textContent = 20
    console.log(score)
    console.log('clicked')
}
modulus.onclick = () =>{
    if(number1.textContent % number2.textContent == number3.textContent){
        score+=1
        
    }
    gameStart()
    timer.textContent = 20
    console.log(score)
    console.log('clicked')
}


const timer = document.getElementById('timer')
timer.textContent = 20

const timeDecrement  = setInterval(() => {
    timer.textContent -=1
    if(timer.textContent == 0){
        gameStart()
        timer.textContent = 20
    }
}, 1000);
