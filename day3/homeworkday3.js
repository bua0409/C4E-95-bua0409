// Write a script to ask users enter a sequence of numbers, the Numbers are separated by
// commas, calculate the sum of the numbers and show it to users
let numberSequence1 = prompt('Enter a sequence of numbers, seperated by commas(,)');
newArray1 = numberSequence1.split(",");
console.log(newArray1)
sumArray1 = 0
for (let i = 0; i < newArray1.length; i++) {
    let numberOfNewArray = Number(newArray1[i])
    sumArray1 = sumArray1 + numberOfNewArray
}
console.log(sumArray1)
// Write a script asking users to enter a sequence of numbers, the numbers are separated
// by commas, find the smallest number and log it out to users
let numberSequence1 = prompt('Enter a sequence of numbers, seperated by commas(,)');
newArray1 = numberSequence1.split(",");
console.log(newArray1)
let minOfNewArray1 = Number(newArray1[0])
for (let i = 1; i < newArray1.length; i++) {
    let numberOfNewArray1 = Number(newArray1[i])
    if (numberOfNewArray1 < minOfNewArray1) {
        minOfNewArray1 == numberOfNewArray1
    }
}
console.log(minOfNewArray1)

// Create an array containing at least 5 numbers, then ask users enter a number, perform a
// search to look for the number in the array, if the number is found, tell user that with the
// index of it in the array, if not, also tell them so
const arr = [3, 4, 6, -9, 10, -88, 2];
const findNumber = prompt('Enter a number')
let i = 0
let check = true
while (i < arr.length) {
    if (findNumber == arr[i]) {
        alert(`${findNumber} is found in my array at index ${i}`)
        check = false
        break;
    }
    i += 1
}

if (check == true) {
    alert(`${findNumber} is not found in my array`)

}
// Create an array to represent the sizes of your flock, and log all of your
// flock size, expected screen output:

const sheepSize = [5, 7, 300, 90, 24, 50, 75]
const month = prompt('how many month')
let countMonth = 1
while (countMonth <= month) {
    let biggestSheepSize = sheepSize[0]
    for (let i = 1; i < sheepSize.length; i++) {
        if (sheepSize[i] > biggestSheepSize) {
            biggestSheepSize = sheepSize[i]
        }
    }
    for (let j = 0; j < sheepSize.length; j++) {
        if (sheepSize[j] == biggestSheepSize) {
            sheepSize[j] = 8
        }

    }
    for (let k = 0; k < sheepSize.length; k++) {
        sheepSize[k] += 50
    }
    countMonth += 1
}
console.log(sheepSize)
let totalSheepSize = 0
for (let i = 0; i < sheepSize.length; i++) {
    totalSheepSize += sheepSize[i]
}
console.log(totalSheepSize)

//turtle exercise
const colors = ['red','gray','blue','purple','cyan']
const numberSquare = prompt('how many squares')
let length = 10 
let countSquare = 0
while (countSquare<numberSquare){
    color(colors[i])
    for (let i = 0; i < 4; i++) {
        fd(length);
        rt(90)
    }
    length += 10 
    countSquare += 1
}