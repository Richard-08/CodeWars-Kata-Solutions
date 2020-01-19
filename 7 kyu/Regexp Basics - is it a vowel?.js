/* Implement String#vowel? (in Java StringUtils.isVowel(String)), which should return true if given object is a vowel, false otherwise.
 */

////////////////////////////Solution////////////////////////////

String.prototype.vowel = function() {
    return /^[aouie]$/i.test(this);
  };