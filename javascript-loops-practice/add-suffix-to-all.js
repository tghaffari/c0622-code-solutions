/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWordsList = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = word + suffix;
    newWordsList.push(newWord);
  }
  return newWordsList;
}
