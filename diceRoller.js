
console.log("Dice roller file loaded.");


// Function that rolls a dice
function rollDice(diceSize = 6) {
    console.log("Dice rolling function has been called with a die size of " + diceSize);

    let diceResult = Math.random() * diceSize;

    let floorDiceResult = Math.floor(diceResult) + 1;
    let ceilDiceResult = Math.floor(diceResult);


    console.log(diceResult);
}


// rollDice();
rollDice(20);
// rollDice(10000);

// Function that rolls a 6-sided die



// Function that rolls a 20-sided die

