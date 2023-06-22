// Create a street fighter constructor that makes fighting game 
// characters with 4 properties and 3 methods

// function MakeSFCharacter(punch,kick,catchPhrase,specialMove) {
//     this.punch = punch
//     this.kick = kick
//     this.catchPhrase = catchPhrase
//     this.specialMove = specialMove
//     this.taunt = function() {
//         console.log(`You can't handle my ${this.specialMove}`)
//     }
//     this.winning = function() {
//         console.log(`Haha! ${this.catchPhrase}`)
//     }
//     this.dash = function() {
//         console.log('Whooop, missed me!')
//     }
// }

// let ryu = new MakeSFCharacter('high','high','GET OVER HER', 'HADDDDUUUKEEEEEN')
// let kobra = new MakeSFCharacter('high', 'high', 'Gotcha again!', 'HYAAKARAA')
// let spike = new MakeSFCharacter('middle', 'high', 'Zumbale!', 'Not on this day, tormented soul')

function StreetFighterGuy(punch,kick,catchPhrase,specialMove) {
    this.punch = punch 
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function() {
        console.log(`You cant't handle my ${this.specialMove}`)
    }
    this.winning = function() {
        console.log(`Haha!${this.catchPhrase}`)
    }
    this.dash = function() {
        console.log('Whooop, missed me')
    }
}
let ryu = new StreetFighterGuy('high', 'high', 'Get over here!', 'Haduuuken' )
