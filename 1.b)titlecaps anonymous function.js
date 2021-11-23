//2.Convert all the strings to title caps in a string array
let stringArray = ["akshay", 'is', 'a', 'smart', 'developer']

let resultStringArray = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase()

    }))
})(stringArray);

console.log("All upper case string in an array: " + resultStringArray)
