//1.Print odd numbers in an array using anonymous function:
let arrayNumber = [5, 12, 32, 11, 15, 17, 19, 37, 33, 57, 55, 99, 101]
let resultArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        return item % 2 !== 0

    }))
})(arrayNumber);

console.log("All odd numbers in an array: " + resultArray)

