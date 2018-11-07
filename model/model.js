var maxTries = 7;
var wordSel;
var chosenWord;
var guess;
var guesses=[];
var guessedLetters = [];        
var getTries = document.getElementById("triesLeft");
var getScore = document.getElementById("score");
var defintion;
var score;
var space;

var alphabet = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o",
                    "p","q","r","s","t","u","v","w","x","y","z"];

//array of words
var words = [
    ["electricity","a form of energy resulting from the existence of charged particles."],
    ["tattoo","an indelible mark or figure fixed upon the body by insertion of pigment under the skin."],
    ["sushi","a Japanese dish consisting of small balls or rolls cold cooked rice served with raw fish, vegetables, or egg."],
    ["hungry","feeling or displaying the need for food."],
    ["javascript","an object-oriented computer programming language commonly used to create interactive effects within web browsers"],
    ["amazing","causing great surprise or wonder; astonishing."],
    ["blue","of a color intermediate between green and violet, as of the sky or sea on a sunny day."],
    ["wonderful","inspiring delight, pleasure, or admiration; extremely good; marvelous."],
    ["pokemon","a video game, card game, or other toy featuring certain Japanese cartoon characters."],
    ["facebook","a popular social networking website"],
    ["tiger","a very large solitary cat with a yellow-brown coat striped with black and becoming increasingly rare."],
    ["water","a colorless, transparent, odorless, tasteless liquid."],
];

//var resetButton = document.createElement("BUTTON");
//var btn_reset_txt = document.createTextNode("Reset");

