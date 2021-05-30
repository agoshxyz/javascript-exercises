// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



//Solution 1 v1.0.0
//We will make a string given integer and reverse it and if n<0 we will multiply the result with -1
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('')
//     if(n<0){
//         return parseInt(reversed) * -1
//     }
//     return parseInt(reversed)    
// }


//Solutin 1 v1.0.1
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')

    return parseInt(reversed) *Math.sign(n)
}

module.exports = reverseInt;
