// let i = 5
// do{
//     console.log('val of i is ', i)
//     i++
// }
// while(i < 5)

let sum = 0
let number = 0

do{
    sum += number
    number = parseInt(prompt('Enter a number:'))
}
while (number >= 0)

console.log(`The sum is ${sum}.`)