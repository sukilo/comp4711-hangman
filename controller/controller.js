let chosenWord = Math.floor(Math.random() * words.length);
let wordDef = words[chosenWord][1];
let defn = document.createElement("P");
let textDef = document.createTextNode(wordDef);
defn.appendChild(textDef);
document.getElementById("definition").appendChild(defn);
