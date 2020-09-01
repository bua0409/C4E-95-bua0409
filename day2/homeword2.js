// 3.write a program to print out
//     a. 7 numbers, starting from 0(no user input)
for (let i = 0; i < 7; i++) {
    console.log(i);

}
console.log('het')
// b. n Number,starting from 0, n entered by user 
let n = prompt('Enter a ')
for (let i = 0; i < n; i++) {
    console.log(i)

}
console.log('het')
n = prompt('Enter a ')
for (let i = 3; i < n; i++) {
    console.log(i)

}
console.log('het')
n = prompt('Enter a ')
let c = prompt('Enter c')
for (let i = c; i < n; i++) {
    console.log(i)
}
console.log('het')
n = prompt('Enter a ')
c = prompt('Enter c')
for (let i = c; i < n; i += 3) {
    console.log(i)

}
console.log('het')
n = prompt('Enter a ')
c = prompt('Enter c')
let s = prompt('Enter s')
for (let i = c; i < n; i += s) {
    console.log(i)

}
console.log('het')
// 4.Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
n = prompt('Enter n to calculate factorial')
let factorial_Of_n = 1
for (let i = 1; i < n + 1; i++) {
    factorial_Of_n = factorial_Of_n * i

}
alert('the factorial of' + n + 'is' + factorial_Of_n)
// 5. Write a program asking users their age, and then decide if they are old enough to view a 14+ content
let age = prompt('how old are you')
if (age >= 14) {
    alert('Enjoy!')
}
else {
    alert('you should not see it')
}
// 7. Write a program asking user to enter two numbers, x and n, then check if x is in lower
// half or higher half of n
alert('Exercise 7')
n = prompt('Enter n')
x = prompt('Enter x')
if (x < n / 2) {
    alert('x is in lower half of n')
}
else {
    alert('x is in higher half of n')
}
// 8. Write a script to check if a number is even (divisible by 2) or odd number
let y = prompt('enter y')
if (y % 2 == 0) {
    alert('this is an even number')
}
else {
    alert(' this is an odd number')
}
// ⦁	Write a program to print out
// ⦁	 L’s and H’s, half L’s, half H’s (L means low, H means high)
let LH = prompt('enter the total number of Ls and Hs')
let Ls = 0
let Hs = 0
while (i <= LH) {
    Ls += 1
    i += 1
    Hs += 1
    i += 1
}
console.log(Ls + 'Ls')
console.log(Hs + 'Hs')
// Write a script to calculate the BMI (Body Mass Index) of a person,
const mass = Number(prompt("Enter your weight in kilograms"))
const height = Number(prompt("Enter your height in meters"))
let BMI = mass / (height * height);
if (BMI <= 16) {
    alert("Severely underweight");
} else if (BMI <= 18.5) {
    alert("Underweight");
} else if (BMI <= 25) {
    alert("Normal");
} else if (BMI <= 30) {
    alert("Overweight");
} else {
    alert("Obese");
}
// exercise 11
// a square
for (let i = 0; i < 4; i++) {
    fd(100)
    rt(90)
}
// a triangle
for (let i = 0; i < 3; i++) {
    fd(100)
    rt(60)
}
//a pentagon
for (let i = 0; i < 5; i++) {
    fd(100)
    rt(360 / 5)
}
//a hexagon
for (let i = 0; i < 6; i++) {
    fd(100)
    rt(360 / 6)
}
//exercise 12
const edges = prompt('how many edges')
if (n = 3) {
    for (let i = 0; i < 3; i++) {
        fd(100)
        rt(60)
    }
}
else if (n > 3) {
    for (let i = 0; i < edges; i++) {
        fd(100)
        rt(360 / edges)
    }
}
const polygons = prompt('how many polygons you want?')
let edges_Of_Polygons = polygons +2
let length = 100
while (edges_Of_Polygon>=3){
        for (let i = 0; i < edges_Of_Polygons; i++) {
            fd(length)
            rt(360 / edges_Of_Polygons)
        }
        length -= 10
        edges_Of_Polygons -=1
        if(edges_Of_Polygons=3){
            for (let i = 0; i < 3; i++) {
                fd(length)
                rt(60)
            }
            break;
        }
}