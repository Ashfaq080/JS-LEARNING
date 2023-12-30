// to guess the number we have to create a random number for that we have a method
// console.log(parseInt(Math.random() * 100 + 1))    // we can use math.round() also to get interger. we got the value and hold it in a variable

let randomNumber  = parseInt(Math.random() * 100 +1);
console.log(randomNumber);

// now select the submit button
const submit = document.querySelector('#submit')

//2. we want user input also
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowORhi')
const startOver = document.querySelector('.resultParas')

//we are going to inject some values, for that
const p = document.createElement('p')

let prevGuess = [] // prevGuess is for to show the user how many number it enterde wrong and we will wrape the numbers in array and show it to user
let numGuess = 1  //it is know that the value start it from 1 and it is also used for remainig gusse value

let playGame = true    // whenever you create a game we have to ensure that the value shlould match the condition let us suppose you have some coins in a game and it's gets over so condition become false or game over for that to start a game value should be true.

if (playGame) {
    submit.addEventListener('click', (ele)=>{
        ele.preventDefault(); // this is to prevent the value to move in any where
        //we want uservalue
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}


// know to design some functions to use 

function validateGuess(guess) {
    // this function is for validation to check it should be a number in between 1 to 100, not more than that not less than that.
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1){
        alert('Please enter a number greater than 1')
    } else if (guess > 100){
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }  else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    // this is to check and print a message whather the value is too low or too high
    if (guess === randomNumber) {
        displayMessage(`You guess it right and Number is: ${randomNumber}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO high`)
    }
}

function displayGuess(guess) {
    //this method will clean the values to restart the game, cleaning the values to update for new one
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess ++;
    remainig.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    //this method will display the method, we used DOM here.
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    //this method to end the game
    userInput.value = ''
    userInput.setAttribute('disapled', ''); //setAttribute is in key value pair.
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false ; // to stop the game
    newGame()
}

function newGame() {
    //to rstart or for new game.
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remainig.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}
