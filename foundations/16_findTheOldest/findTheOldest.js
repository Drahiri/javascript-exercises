const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        const oldestLived = oldest.yearOfDeath - oldest.yearOfBirth;
        const currentLived = current.yearOfDeath - current.yearOfBirth;
        return oldestLived > currentLived ? oldest : current;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
