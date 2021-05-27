// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//Soultion 1
//We will reverse a string and will compare to the initial one and return true or false
function palindrome(str) {

    const reversedString = str.split('').reverse().join('')
    return reversedString === str
}
palindrome('abba')
module.exports = palindrome;
