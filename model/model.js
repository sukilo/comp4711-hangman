let maxTries = 7;
let wordSel;
let guess;
let guesses=[];
let guessedLetters = [];        
let getTries = document.getElementById("triesLeft");
let getScore = document.getElementById("score");

let resultText = document.getElementById("button_alphabet");
let btn;
let text;
let reset = document.getElementById("reset");
let defintion;
let score = 0;

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

//Randomly chooses a word from the array
let chosenWord = Math.floor(Math.random() * words.length);

//Display chosen word's definition
let wordDef = words[chosenWord][1]; //the chosen word's def
let textDef = document.createTextNode(wordDef); //creates text of the def
let defn = document.createElement("P"); // create P element
defn.appendChild(textDef); // append text of def to P element
document.getElementById("definition").appendChild(defn); // append ^ to the html
