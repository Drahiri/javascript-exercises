function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}

const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        const oldestLived = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentLived = getAge(current.yearOfBirth, current.yearOfDeath);

        return oldestLived > currentLived ? oldest : current;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
