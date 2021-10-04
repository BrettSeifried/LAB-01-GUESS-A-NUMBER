// Inputs
const userGuess = document.getElementById('input');
const button = document.getElementById('submit');
let randomNum = Math.floor(Math.random() * (20 - 0) + 1);

let numGuesses = 0;


// events
button.addEventListener('click', () =>{
  numGuesses++;
  console.log(numGuesses);
});



