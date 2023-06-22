// Create a mouse object that has four properties and three methods

let mouse = {}

mouse.brand = 'Logitech'
mouse.color = 'black'
mouse.model = 'Hurricane'
mouse.size = 'small'
mouse.bluetooth = true

mouse.rightClick = function() {
    console.log('right-click!')
}
mouse.leftClick = function() {
    console.log('LEFT-CLICK!')
}
mouse.sroll = function() {
    console.log('Rrrrolliinnnn!')
}
nouse.leftButton = function() {
    console.log('Turn-page')
}


let apple = new mouse('Apple', 'white', 'STwo', 'Medium', 'yes')


// let mouse = {}

// mouse.brand = 'Logitech'
// mouse.color = 'gray'
// mouse.model = 'MK Ultra'
// mouse.wireless = true

// mouse.leftClick = function() {
//     console.log('LEFT CLICK!')
// }

// mouse.rightClick = function() {
//     console.log('RIGHT CLICK!')
// }
// mouse.scroll = function() {
//     console.log('JUMP JUMP JUMP!!')
// }

// let mouse2 = {}

// mouse2.brand = 'Logitech'
// mouse2.color = 'gray'
// mouse2.model = 'MK MACK'
// mouse2.wireless = true

// mouse2.leftClick = function() {
//     console.log('LEFT CLICK!')
// }

// mouse2.rightClick = function() {2
//     console.log('RIGHT CLICK!')
// }
// mouse2.scroll = function() {
//     console.log('JUMP JUMP JUMP!!')
// }

// let mouse3 = {}

// mouse3.brand = 'Apple'
// mouse3.color = 'silver2'
// mouse3.model = 'Apple Two'
// mouse3.wireless = true

// mouse3.leftClick = function() {
//     console.log('LEFT CLICK!')
// }

// mouse3.rightClick = function() {
//     console.log('RIGHT CLICK!')
// }
// mouse3.scroll = function() {
//     console.log('SLIDE TEO FINGERS ')
// }

function MakeCar(carMake,carModel,carColor,numOfDoors) {
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.blueTooth = true
    this.honk = function() {
        alert('BEEP BEEP PHUCKER')
    }
    this.lock = function() {
        alert(`Locked ${this.doors} doors!`)
    }
}

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let porsche911Turbo = new MakeCar('Porsche', 911, 'Phantom Black', 2)