// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// At this problem we are going to reverse a string into an 
// array then we will reverse that array into a string and return it
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     reversedString = arr.join('');
//     return reversedString

// }



//Solutin 1 version 1.01
// function reverse(str) {
//     return str.split('').reverse().join('')
// }



// Solution 2
// function reverse(str) {
//     let reversed = '';

//     for(let character of str){
//         reversed = character + reversed;
//     }

//     return reversed
// }

function reverse(str) {
    return str.split('').reverse().join('')
    }


reverse("hello")
module.exports = reverse;
