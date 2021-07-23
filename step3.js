const perf = require('execution-time')();

//Unique Characters Function:
const hasUniqueChars = (string) => {
    let count = 0 
    for (let i = 0; i < string.length; i++) {
        for (let j = i+1; j < string.length; j++) {
            if (string[i] === string[j]) {
                count++
            }
        }
    }
    if (count > 0) {
        return false;
    } else {
        return true;
    }
}

// estimated runtime ~1ms
// time complexity: O(n^2)
// space complexity: O(n)

perf.start();                     // Starts timer
hasUniqueChars('dkjfoqiejfhpqowiejpqoiwefpqwehjfquehfuuu3u3u3uu3u2ccbtytoquywer');
let resultsUnique = perf.stop(); 

console.log(resultsUnique)

// Sum Zero Function:
const sumZero = (array) => {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                count++
            }
        }
    }
    if (count > 0) {
        return true
    } else {
        return false
    }
}

// estimated runtime ~100 nanoseconds
// time complexity: O(n^2)
// space complexity: O(n)

perf.start();                     // Starts timer
sumZero([1,2,3]);
let resultsSum = perf.stop(); 

console.log(resultsSum)

//Longest Word Function

const longestWord = (array) => {
    let length = 0
    for (let i in array) {
        if (array[i].length > length) {
            length = array[i].length
        }
    }
    console.log(length)
}

longestWord(['dog','a','cart','me','friend','you'])

// Pangram Function

const isPangram = (sentence) => {
    let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    array = sentence.split('')
    console.log(array)
    console.log(chars)
    for (let i in array) {
        let index = chars.indexOf(array[i].toLowerCase())
        if (index !== -1) {
        chars.splice(index,1)
        console.log(chars)
        }
    }
    if (chars = []) {
        console.log(chars)
        return true
    }
}

isPangram("The quick brown fox jumps over the lazy dog!")