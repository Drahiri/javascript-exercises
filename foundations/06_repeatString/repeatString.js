const repeatString = function (text, repeats) {
    if (repeats < 0) {
        return "ERROR";
    }

    let res = "";
    for (let i = 0; i < repeats; i++) {
        res += text;
    }

    return res;
};

// Do not edit below this line
module.exports = repeatString;
