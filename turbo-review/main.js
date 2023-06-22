// *********Variables**********

// Declare a variable and assign it to your fav drink as a string. 
// Make sure there is no whitespace on either side of the string,
// and print the value to the console

let favBev = ' Carajillo '
favBev = favBev.trim()
// console.log(favBev)

// Declare a variable, assign it a string of multiple words, 
// and check to see if one of the words is "apple".

let str = "ford gmc kia vw pontiac whooptiee"

if (str.search('car') !== -1) {
    console.log('yes')
} else {
    // console.log('It\'s not in there!')
} 

// ******Functions*******

// Create a function that returns rock, paper, or scissors as randomly as possible


function rockPaperScissors() {
    let random = Math.random()
    if (random < .33) {
        return 'rock'
    } else if (random < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
console.log(rockPaperScissors())

// ********Conditionals*******

// Create a function that takes in a choice (rock, paper, or scissors)
// and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(plyrChoice) {
    let botChoice = rockPaperScissors()
    if ((plyrChoice === 'rock' && botChoice === 'scissors') ||
        (plyrChoice === 'paper' && botChoice === 'rock') ||
        (plyrChoice === 'scissors' && botChoice === 'paper')) {
        console.log ('You Win!')
    } else if (plyrChoice === botChoice) {
        console.log('It\'s a FAT Tie!!')
    } else {
        console.log('Bot Wins!!')
    }
}
// checkWin('rock')


// *******Loops*******

// Create a function that takes an array of choices. 
// Play the game x times where x is the number of choices in the array. 
// Print the results of each game to the console.

function playGameXTimes(arr) {
    arr.forEach( choice => checkWin(choice))
}
playGameXTimes( ['rock', 'paper', 'scissors'] )