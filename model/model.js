let maxTries = 7;
let wordSel;
let chosenWord;
let guess;
let guesses=[];
let guessedLetters = [];        
let getTries = document.getElementById("triesLeft");
let getScore = document.getElementById("score");
let getAlphabet = document.getElementById("button_alphabet");
let reset = document.getElementById("reset");
let defintion;
let score;
let space;

let alphabet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o",
                    "p","q","r","s","t","u","v","w","x","y","z"];

//array of words
let words = [
    ["electricity","a form of energy resulting from the existence of charged particles."],
    ["tattoo","a form of body modification where a design is made by inserting ink under the skin."],
    ["sushi","a Japanese dish made of cold cooked rice with raw fish, vegetables, wrapped with seaweed."],
    ["hungry","feeling the need to eat food."],
    ["javascript","an object-oriented computer programming language commonly used to create interactive effects within web browsers"],
    ["elephant","a large mammal with two tusks and a long trunk."],
    ["blue","a color intermediate between green and violet like the sky or sea on a sunny day."],
    ["wonderful","inspiring delight, pleasure, or admiration; extremely good; marvelous."],
    ["icecream","a delicious frozen dessert."],
    ["facebook","a popular social networking website."],
    ["tiger","a large orange and black striped feline."],
    ["water","a colorless, transparent, odorless, tasteless liquid."],
];


