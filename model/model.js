var maxTries = 7;
var wordSel;
var chosenWord;
var guess;
var guesses=[];
var guessedLetters = [];        
var getTries = document.getElementById("triesLeft");
var getScore = document.getElementById("score");
var getAlphabet = document.getElementById("button_alphabet");
var reset = document.getElementById("reset");
var defintion;
var score;
var space;

var alphabet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o",
                    "p","q","r","s","t","u","v","w","x","y","z"];

//array of words
var words = [
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


