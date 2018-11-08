var chosenWord = Math.floor(Math.random() * words.length);
var wordDef = words[chosenWord][1];
var defn = document.createElement("P");
var textDef = document.createTextNode(wordDef);
defn.appendChild(textDef);
document.getElementById("definition").appendChild(defn);
