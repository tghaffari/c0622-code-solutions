/* exported titleCase */
// Convert the inputted string to lower case
// Create a new array of the inputted title
// Go through each word in the array and capitalize the first letter of each word.
// If the word is Javascript, make it JavaScript. Replace the old word with the correct word in the array.
// If the word is Api, make it API . Replace the old word with the correct word in the array.
// if the word is not the first word in the title but contains an 'insignificant' word, make it lower case
// and replace the old word with the new word in the array.
// If the word contains a dash, capitalize the letter after the dash and add the new word to the array by replacing the old word
// If there's a colon in the string, capitalize the word after the colon, regardless of what it is. Replace the old word with the new word in the array
// Concatenate the array into a string with a space between each letter.
// Return the new string from the function.

function titleCase(title) {
  var titleLowerCase = title.toLowerCase();
  var titleArray = titleLowerCase.split(' ');

  for (var i = 0; i < titleArray.length; i++) {
    var word = titleArray[i];
    var firstChar = word[0];
    firstChar = firstChar.toUpperCase();
    var remainingLetters = word.slice(1);
    remainingLetters = remainingLetters.toLowerCase();
    var capWord = firstChar + remainingLetters;
    titleArray.splice(i, 1, capWord);

    if (titleArray[i].includes('Javascript')) {
      var jsArray = titleArray[i].split('');
      for (var a = 0; a < jsArray.length; a++) {
        if (jsArray[a] === 's') {
          jsArray[a] = 'S';
        }
      }
      var jsString = jsArray.join('');
      titleArray.splice(i, 1, jsString);

    } else if (titleArray[i] === 'Api') {
      var newWord = 'API';
      titleArray.splice(i, 1, newWord);

    } else if ((titleArray[i] === 'Like' || titleArray[i] === 'And' || titleArray[i] === 'Or' ||
        titleArray[i] === 'Nor' || titleArray[i] === 'But' || titleArray[i] === 'A' ||
        titleArray[i] === 'An' || titleArray[i] === 'The' || titleArray[i] === 'As' ||
        titleArray[i] === 'At' || titleArray[i] === 'By' || titleArray[i] === 'For' ||
        titleArray[i] === 'In' || titleArray[i] === 'Of' || titleArray[i] === 'On' ||
        titleArray[i] === 'Per' || titleArray[i] === 'To') && i !== 0) {
      titleArray.splice(i, 1, titleArray[i].toLowerCase());

    }

    if (titleArray[i].includes('-')) {
      word = titleArray[i];
      var index = word.indexOf('-');
      firstChar = word[index + 1].toUpperCase();
      var firstHalf = word.slice(0, index);
      var secondHalf = word.slice(index + 2);
      newWord = firstHalf + '-' + firstChar + secondHalf;
      titleArray.splice(i, 1, newWord);
    }

    if (titleArray[i].includes(':')) {
      var colonWordIndex = i;

    }
  }
  if (colonWordIndex !== undefined) {
    var capWordIndex = colonWordIndex + 1;
    var nextWord = titleArray[capWordIndex];
    firstChar = nextWord[0].toUpperCase();
    remainingLetters = nextWord.slice(1);
    capWord = firstChar + remainingLetters;
    titleArray.splice(colonWordIndex + 1, 1, capWord);
  }
  var titleString = titleArray.join(' ');
  return titleString;
}
