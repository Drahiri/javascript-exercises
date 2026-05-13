const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyz1234567890";

const palindromes = function (text) {
    const smallLetters = text.toLowerCase();
    let noPunctuation = "";
    for (let letter of smallLetters) {
        if (ALPHANUMERIC.includes(letter)) {
            noPunctuation += letter;
        }
    }

    const reversed = noPunctuation.split("").reverse().join("");

    return noPunctuation === reversed;
};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;