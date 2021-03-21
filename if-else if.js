// const number = prompt("Enter a number: ")
// if (number > 0){
//     console.log("The number is positive")
// }
// else if (number == 0){
//     console.log("The number is 0")
// }
// else{
//     console.log("The number is negative0")
// }

// console.log("The if...else if...else statement isn't easy")

const password = 'p@ss12'
if (password.length >= 12 && password.includes('@')){
    console.log("that password is mighty strong")
}
else if(password.length >= 8 && password.includes('@') && password.length > 5){
    console.log("that password is strong enough");
}
else {
    console.log("that password is not strong enough")
}