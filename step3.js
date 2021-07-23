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
            if (i + j === 0) {
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

