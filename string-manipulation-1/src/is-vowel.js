/* exported isVowel */
// Convert letter to lowercase to set up a standard
// Compare letter to a, e, i, o, u
// If it matches, return true
// Otherwise, return false

function isVowel(char) {
  var lowerChar = char.toLowerCase();
  if (lowerChar === 'a') return true;
  if (lowerChar === 'e') return true;
  if (lowerChar === 'i') return true;
  if (lowerChar === 'o') return true;
  if (lowerChar === 'u') return true;
  else return false;
}
