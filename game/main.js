const game = require('./playGame')
const rules = require('./rules')
const input = require('input')
var once = true
var response

async function gamemenu() {
    if(once) {
        once = false
        response = await input.text("Welcome to Connect 4!\nPlease Select an Option:\n1) Play the game\n2) Rules and instructions\n3) View Scores\n4) Exit\n")
    }
    else {
        response = await input.text("Please Select an Option:\n1) Play the game\n2) Rules and instructions\n3) View Scores\n4) Exit\n")
    }
    if(response === "1") game.initGame()
    else if(response === "2") rules.rules()
    else if(response === "3") {
        var time = "times"
        if(game.getP1Wins() === 1) time = " time"
        else time = " times"
        console.log("Player 1 has won " + game.getP1Wins() + time)
        if(game.getP2Wins() === 1) time = " time"
        else time = " times"
        console.log("Player 2 has won " + game.getP2Wins() + time + "\n\n")
        gamemenu()
    }
    else {
        console.log("Thanks for playing!\n")
        process.exit(0)
    }
}

if(require.main === module) {
    gamemenu()
}

module.exports.gamemenu = gamemenu