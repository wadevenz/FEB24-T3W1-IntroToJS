
console.log("Dice roller file loaded.");

// Is a closure, because rollDice is a function
// console.log(rollDice(20));

// Not a closure, because rollD20 is a const variable
// console.log(rollD20());

/**
 * Function that rolls a dice
 * @param {number} [diceSize=6] Maximum dice size to roll
 * @returns {number}
 */
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

/**
 * Function that rolls a 6-sided die
 * @returns {number}
 */
 const rollD6 = () => rollDice(6);

 console.log("rollD6 function result is: " + rollD6());

/**
 * Function that rolls a 20-sided die
 * @returns {number}
 */
const rollD20 = () => {
    // let diceResult = rollDice(20);
    // return diceResult;

    return rollDice(20);
}

let superAwesomeDiceResult = rollD20();

console.log("Super awesome dice result is: " + superAwesomeDiceResult);

// Declare without assignment
let diceResults;

/**
 * Roll two dice, return the highest result
 * @returns {number}
 */
function rollD20WithAdvantage() {
    let tempDiceResults = [
        rollD20(),
        rollD20()
    ];

    let highestRoll = 0;

    tempDiceResults.forEach((individualResult) => {
        if (highestRoll < individualResult) {
            highestRoll = individualResult;
        }
    })

    console.log(tempDiceResults);
    
    return highestRoll;
}

console.log("Rolling 2 D20 with advantage: " + rollD20WithAdvantage());

// console.log("First roll in advantage rolls is: " + diceResults[0]);

// console.log(tempDiceResults);

// let and var can be changed after declaration
// let diceResulChangeable = rollD20();
// diceResulChangeable = rollD20();

// // const cannot be changed after declaration
// const diceResulConstant = rollD20()
// diceResulConstant = rollD20();



const diceRollerSystem = {
    rollDice: rollDice,
    rollD20: rollD20,
    rollD6: rollD6,
    rollTwentySided: rollD20,
    advantageD20: rollD20WithAdvantage,
    nestedStuff: {
        nestedRollD20: rollD20,
        someNestedFunction: () => {
            console.log(this.nestedRollD20);
            console.log("hello from a function inside a nested object");
        },
        someNestedGoodFunction: function() {
            console.log(this.nestedRollD20());
            console.log("Hello from the good nested function");
        }
    }
}

console.log("Rolling D20 with advantage and result is: " + diceRollerSystem.advantageD20());

console.log(this);
console.log(diceRollerSystem.nestedStuff.someNestedGoodFunction());
console.log(diceRollerSystem.nestedStuff.someNestedFunction());
console.log(Object.keys(diceRollerSystem));
console.log(Object.keys(diceRollerSystem.nestedStuff));