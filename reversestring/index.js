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
function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
    
}

module.exports = reverse;
