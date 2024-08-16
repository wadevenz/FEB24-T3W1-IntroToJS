
console.log("Dice roller file loaded.");


// Function that rolls a dice
function rollDice(diceSize = 6) {
    console.log("Dice rolling function has been called with a die size of " + diceSize);

    let diceResult = Math.random() * diceSize;

    let floorDiceResult = Math.floor(diceResult) + 1;
    let ceilDiceResult = Math.floor(diceResult);


    // console.log(floorDiceResult, ceilDiceResult);

    return floorDiceResult;
}


// rollDice();
// rollDice(20);
// rollDice(10000);

// Function that rolls a 6-sided die
 const rollD6 = () => rollDice(6);

 console.log("rollD6 function result is: " + rollD6());

// Function that rolls a 20-sided die
const rollD20 = () => {
    // let diceResult = rollDice(20);
    // return diceResult;

    return rollDice(20);
}

let superAwesomeDiceResult = rollD20();

console.log("Super awesome dice result is: " + superAwesomeDiceResult);



function rollD20WithAdvantage() {
    let diceResults = [
        rollD20(),
        rollD20()
    ];

    let highestRoll = 0;

    diceResults.forEach((individualResult) => {
        if (highestRoll < individualResult) {
            highestRoll = individualResult;
        }
    })

    console.log(diceResults);
    
    return highestRoll;
}

console.log("Rolling 2 D20 with advantage: " + rollD20WithAdvantage());