/* exported isVowel */
// Convert letter to lowercase to set up a standard
// Compare letter to a, e, i, o, u
// If it matches, return true
// Otherwise, return false

function isVowel(char) {
  var lowerChar = char.toLowerCase();
  if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' ||
  lowerChar === 'o' || lowerChar === 'u') return true;
  else return false;
}
