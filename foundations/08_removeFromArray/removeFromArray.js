
const removeFromArray = function(arr,number1,number2,number3) {
    arr = arr.filter(num =>(num !== number1 && num !== number2 && num !== number3));
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
