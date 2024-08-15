console.log("Iterator stuff is happening");

let fruitChoices = [
    "oranges",
    "bananas",
    "mangoes"
];

for (let index = 0; index < fruitChoices.length; index++) {
    const element = fruitChoices[index];
    console.log(element);
}

for (let i = 0; i < 11; i++) {
    console.log(`This is the ${i} iteration of the loop.`);
}


fruitChoices.forEach(element => {
    element = element.toLocaleUpperCase();
    console.log(element + " from the forEach loop");
});

console.log(fruitChoices);

for (const fruit of fruitChoices) {
    console.log(fruit);
}

let fruitsChoicesAllCaps = fruitChoices.map((whatever) => {
    return whatever.toLocaleUpperCase();
})

console.log(fruitsChoicesAllCaps);
console.log(fruitChoices);

let nonCitrusFruits = fruitChoices.filter((fruit) => {
    // if one of these two conditions is true, the fruit is good!
    // fruit = "oranges" || fruit = "lemons"
    // NO!
    // if both of these conditions is true the fruti is good.
    // YES!
    return fruit != "oranges" && fruit != "lemon"
});

console.log(nonCitrusFruits);

let alexsFavouriteFruitIsAvailable = fruitsChoices.includes("mangoes");
console.log("Alex's favourite fruit is available: " + alexsFavouriteFruitIsAvailable);

// while loop checks CONDITION then does logic
// do while loop does logic then checks condition, will always perform action at least once.

// while(fruitChoices.length > 0) {
//     console.log(fruitChoices);
// }

// do {
//     console.log(fruitChoices);
// } while (conditon);