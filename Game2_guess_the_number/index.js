let computerGuess;
let maxAttempt;
let userGuess = [];
let updateOutput = document.getElementById("output");
let updateUserGuessNumber = document.getElementById("takingGuess");
let music = new Audio("soundEffect.mp3");

const startNewGame = () => {
    document.getElementById("newGameButton").style.display= "block";
    updateUserGuessNumber.setAttribute("disabled", true);
    document.getElementById("takingGuess").style.display = "none";
    document.getElementById("gameInfo").style.display = "none";
}

// //main login of this game
let attempt = 0;
const checkGuess = () => {
    music.play();
    const userGuessNumber = Number(document.getElementById("takingGuess").value);
    userGuess = [...userGuess, userGuessNumber];

    document.getElementById("guessesNumber").innerHTML = userGuess;
    document.getElementById("countAttempt").innerText = ++attempt;


    if(userGuess.length < maxAttempt){

        if (userGuessNumber > computerGuess) {
            updateOutput.innerHTML = "Your Guess is high ";
            updateUserGuessNumber.value = "";
        }
        else if (userGuessNumber < computerGuess) {
            updateOutput.innerHTML = "Your Guess is low ";
            updateUserGuessNumber.value = "";
        }
        else {
            updateOutput.innerHTML = "You win the game.";
            updateUserGuessNumber.value = "";
            startNewGame();
        }
    }else{
        if (userGuessNumber > computerGuess) {
            updateOutput.innerHTML = `You loose the game. Guess number is : ${computerGuess}`;
            updateUserGuessNumber.value = "";
            document.getElementById("countAttempt").innerHTML = userGuess.length;
            startNewGame();
        }
        else if (userGuessNumber < computerGuess) {
            updateOutput.innerHTML =  `You loose the game. Guess number is : ${computerGuess}`;
            updateUserGuessNumber.value = "";
            document.getElementById("countAttempt").innerHTML = userGuess.length;
            startNewGame();
        }
        else {
            updateOutput.innerHTML = " You win the game.";
            updateUserGuessNumber.value = "";
            document.getElementById("countAttempt").innerHTML = userGuess.length;
            startNewGame();
        }
    }
}

const newGameStart = () => {
    window.location.reload();
}

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}
const startGame = () =>{
    document.getElementById("gameArea").style.display =  "block";
    document.getElementById("home").style.display =  "none";
}

const easyMode = () => {
    music.play();
    maxAttempt = 10;
    startGame();
}
const hardMode = () => {
    music.play();
    maxAttempt = 5;
    startGame();
}