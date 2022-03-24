let backpack = [];

backpack.push('Pokeball')
backpack.push('Potion')
backpack.push('PokeDollars')

// backpack.shift()
backpack.splice(0, 1)

let stone = 'Water Stone'
backpack.push(stone)

backpack.pop()

// console.log(backpack.length)

backpack.push('great ball', 'antidote', 'revive')

let satchel = backpack.splice(2, 3)

// for(let i = 0; i < backpack.length; i++){
//     console.log(`This is the item at the index of ${i}:`, backpack[i])
// }

// for(let i = 0; i <2; i++){
//     console.log(backpack[i])
// }

// if(backpack.length > 2){
//     for(let i = 0; i < backpack.length; i++){
//         console.log(`This is the item at the index of ${i}:`, backpack[i])
//     }   
// }else{
//     for(let i = 0; i < 2; i++){
//         console.log(backpack[i])
//     }   
// }

// console.log(backpack)
// console.log(satchel)

// -----------------------------------------------------------------------------------------------------

let guessMe = 54

while (guessMe < 100) {
    console.log('----------------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log('divisible by 4 or 5, added 25', guessMe);
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log('divisible by 3', guessMe)
    } else {
        guessMe += 3
        console.log('added 3', guessMe)
    }
    guessMe += 22
    console.log('added 22', guessMe)
}

console.log('final value', guessMe)
