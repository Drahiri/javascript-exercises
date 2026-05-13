const palindromes = function (text) {
    return text === text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
