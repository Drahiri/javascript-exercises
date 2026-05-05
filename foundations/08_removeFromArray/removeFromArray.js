const removeFromArray = function (arr, ...nums) {
    for (const num of nums) {
        while (arr.includes(num)) {
            const index = arr.indexOf(num);
            arr.splice(index, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;