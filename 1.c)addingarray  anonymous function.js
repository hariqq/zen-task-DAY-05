//3.Sum of all numbers in an array using anonymous function:

let resultSumArray = (function (arrayNumber) {

    return (arrayNumber.reduce((currentTotal, item) => {

        return currentTotal + item

    }, 0))
})(arrayNumber);

console.log("Sum of numbers in an array: " + resultSumArray)
