let cache = { 0: 0, 1: 1 };

const fibonacci = function (n) {
    if (n in cache) {
        return cache[n];
    }
    else {
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return cache[n];
    }
};

// Do not edit below this line
module.exports = fibonacci;
