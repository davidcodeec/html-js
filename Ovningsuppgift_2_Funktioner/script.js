/* 

Uppgift: Skriv flera funktioner i JavaScript:

En funktion som returnerar summan av två tal.
En funktion som byter ut alla vokaler i en sträng till stora bokstäver.
En funktion som returnerar den minsta av tre tal.


*/

// Sum of numbers
const sum = (tal1,tal2) => {
    return tal1+tal2
} 

console.log(sum(5,5))



// En funktion som byter ut alla vokaler i en sträng till stora bokstäver.

const vowelsToUppercase = (str) => {
    const strToLowerCase = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let result = '';

    for (let char of strToLowerCase) {
        if (vowels.includes(char)) {
            result += char.toUpperCase(); // Convert the vowel to uppercase and add to the result
        } else {
            result += char; // Keep non-vowel characters as they are
        }
    }

    return result;
}

console.log(vowelsToUppercase('A sentence to check for all the vowels and convert to uppercase'));


// En funktion som byter ut alla vokaler i en sträng till stora bokstäver using RegEx

// En funktion som byter ut alla vokaler i en sträng till stora bokstäver.

const vowelsToUppercaseReg = (str) => {
    return str.replace(/[aeiou]/g, (match) => match.toUpperCase());
}

console.log(vowelsToUppercaseReg('A sentence to check for all the vowels and convert to uppercase'));



// En funktion som returnerar den minsta av tre tal.

const minstaTal = (tal1, tal2, tal3) => {
    if (tal1 <= tal2 && tal1 <= tal3) {
        return tal1;
    } else if (tal2 <= tal1 && tal2 <= tal3) {
        return tal2;
    } else {
        return tal3;
    }
}

console.log(minstaTal(5, 6, 7));


