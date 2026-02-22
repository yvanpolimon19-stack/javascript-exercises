
const findTheOldest = function(array) {

    const currentYear = new Date().getFullYear();
    let greatestAge = 0
    let oldest = array[0];
    let age;

    for(var i = 0; i < array.length; i++){

        if ("yearOfDeath" in array[i]) {
            age = array[i].yearOfDeath - array[i].yearOfBirth;
        }

        else {
            age = currentYear - array[i].yearOfBirth;
        }

        if (age > greatestAge) {
            greatestAge = age;
            oldest = array[i];
        }
            
    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
