// const x = "SPANKED THE"
// console.log(x)
let apples = 10
let oranges = 5
let x;
if(apples > oranges){
    x = apples - oranges
    console.log(`Firman has ${x} more apples than oranges`)    
}   else {
    console.log( "I have more oranges than apples")
}

const juiceMaker = (apples,oranges) => apples * oranges  
const juiceMaker = (apples,oranges) => {
    return apples * oranges
} 
juiceMaker( 3,4)
console.log(juice(3,4)) 