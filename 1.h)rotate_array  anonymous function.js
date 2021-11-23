//8.Rotate an array by k times and return the rotated array using anonymous function:

let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log("Array roatated k times: " + resultArrayShifted)
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
