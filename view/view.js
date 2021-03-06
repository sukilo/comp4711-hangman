/*Creates the alphabet buttons*/
function createAlphabet() {
  for (let i = 0; i < alphabet.length; i++) {
    btn = document.createElement("BUTTON"); // Create a <button> element
    text = document.createTextNode(alphabet[i]); // Create a text node
    btn.appendChild(text);   // Append the text to <button>
    document.getElementById("button_alphabet").appendChild(btn); // Append <button> to <body>
    track(); 
  }
}

/*Create fn to choose a random word and then replacing with '_' for guessing*/
function createGuess () {
  wordSel = words[chosenWord][0];
  wordSel = wordSel.replace(/\s/g, "_");
  console.log(wordSel);
  maxTries = 7;
  score = 0;
  createSpaces();
}

/*Create the spaces '_' using ul li*/ 
function createSpaces(){
  wordHolder = document.getElementById("guessingSpaces");
  correct = document.createElement("ul");
  for (let i = 0; i < wordSel.length; i++) {
    correct.id="thisSpace";
    guess = document.createElement("li");
    
    if (wordSel[i] === "_") {
      guess.innerHTML = "_";
    } else {
      guess.innerHTML = "_";
    }
    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }
}

/*Onclick function - keeps track of the score, tries*/
function track() {
    btn.onclick = function () {
      let guess = (this.innerHTML);
      this.onclick = null;
      this.style.backgroundColor = "#387263";
      
      for (let i = 0; i < wordSel.length; i++) {
        if (wordSel[i] === guess) { 
          guesses[i].innerHTML = guess; 
          score += 1;
        } 
      }
      
      let value = (wordSel.indexOf(guess));
      if (value === -1) { //if clicked wrong btn, indexOf shows -1
        maxTries -= 1;
        score -=1;
        tries();
      } else {
        tries();
      }
    }
  }

/*Show number of tries left (max:7) and display text when you win/lose*/
function tries() {
  getTries.innerHTML = "Tries Left: " + maxTries;
  getScore.innerHTML = "Your score: " + score;
    if (maxTries < 1) {
      resultText.innerHTML= "Game Over";
    }
    for (let i = 0; i < guesses.length; i++) {
      if (score >= guesses.length) {
        resultText.innerHTML="Congratulation, you won!";
     }
  }
}

/* Load all function during start up */
window.onload = function() {
  if(window.location.href.match('hangman.html')!= null){
    createAlphabet();
    createGuess();
    track();
    tries();
  }
}

