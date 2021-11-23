//4.Return all the prime numbers in an array using anonymous function:

let resultPrimeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(arrayNumber);

console.log("Prime numbers in an array: " + resultPrimeArray)
