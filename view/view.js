//Creates the alphabet buttonss
var createAlphabet = function () {
    for (var i = 0; i < alphabet.length; i++) {
    btn = document.createElement("BUTTON"); // Create a <button> element
    t = document.createTextNode(alphabet[i]); // Create a text node
    track();
    btn.appendChild(t);                     // Append the text to <button>
    document.getElementById("button_alphabet").appendChild(btn); // Append <button> to <body>
    }
}

//Create guess of random word using '_'
function createGuess () {
  wordSel = words[chosenWord][0];
  wordSel = wordSel.replace(/\s/g, "_");
  console.log(wordSel);
  maxTries = 7;
  counter = 0;
  space = 0;
  answer();
}

//Put the '_' in list
function answer() {
  wordHolder = document.getElementById('hold');
  correct = document.createElement('ul');

  for (var i = 0; i < wordSel.length; i++) {
    correct.setAttribute('id', 'thisword');
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if (wordSel[i] === "-") {
      guess.innerHTML = "-";
      space = 1;
    } else {
      guess.innerHTML = "_";
    }
    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }
}

//Onclick function - keeps track of the counters, tries
function track() {
    btn.onclick = function () {
      var guess = (this.innerHTML);
      for (var i = 0; i < wordSel.length; i++) {
        if (wordSel[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (wordSel.indexOf(guess));
      if (j === -1) {
        maxTries -= 1;
        counter -=1;
        tries();
      } else {
        tries();
      }
    }
  }

//Show number of tries left (max:7)
function tries() {
  getTries.innerHTML = "Tries Left: " + maxTries;
  getScore.innerHTML = "Your score: " + counter;
    if (maxTries < 1) {
        alert( "Game Over");
        resetGame();
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space >= guesses.length) {
        //alert("Congratulation, you won!");
        win();
        //resetGame();
      }
    }
  }

function win() {
  window.setInterval(function() {
    if (confirm("Congratulation, you won! Do you want to play again?")) {
      resetGame();
      } else {
        window.close();
      }    
    },100);
}

//Reset button and calls resetGame function
resetButton.appendChild(btn_reset_txt);
resetButton.onclick = function() {resetGame();};
document.getElementById("reset").appendChild(resetButton);

