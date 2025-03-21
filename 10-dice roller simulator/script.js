/* learn utf
search keyword dice utf
UTF-16 Encoding:0x2680 --> but when we deal with in html then some method had beenn aplly remove 0x and place \u thats it but lerarn more
learn about also canvas-api
https://www.compart.com/en/unicode/U+2680 */


const simulatorContainer = document.getElementById("simulator-container");
const diceDisplay = document.getElementById("dice-display");
const rollButton = document.getElementById("roll-button");
const rollResult = document.getElementById("roll-result");

rollButton.addEventListener("click", rollDice);

const diceFaces = [
    "\u2680",
    "\u2681",
    "\u2682",
    "\u2683",
    "\u2684",
    "\u2685"
];

function rollDice() {    
    const diceValue = Math.round(Math.random()*5)
    
    diceDisplay.innerText = diceFaces[diceValue]
    rollResult.innerText = `You rolled a ${diceValue + 1}!`;
}

diceDisplay.innerText = diceFaces[5];