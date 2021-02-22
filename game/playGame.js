var board = new Array(6);
var turn
var player1
var player2
var won = false
var searchTen
var searchNine
var searchOne
var searchEleven
var countTen
var countNine
var countOne
var countEleven
var player1Wins = 0
var player2Wins = 0
const input = require('input')
const main = require('./main')

function getP1Wins() {
    return player1Wins
}

function getP2Wins() {
    return player2Wins
}

function initGame() {
    player1 = []
    player2 = []
    won = false
    turn = 1
    searchTen = 0
    searchNine = 0
    searchOne = 0
    searchEleven = 0
    countTen = 0
    countNine = 0
    countOne = 0
    countEleven = 0
    createBoard()
}

function createBoard() {
    won = false
    for(var i = 0; i < 6; i++) {
        board[i] = new Array(7)
    }
    for(var i = 0; i < 6; i++) {
        for(var j = 0; j < 7; j++) {
            board[i][j] = ' '
        }
    }
    printBoard(board)
}

function printBoard() {
    var outBoard = " 1 2 3 4 5 6 7"
    console.log(outBoard)
    for(var i = 0; i < 6; i++) {
        outBoard = '|'
        for(var j = 0; j < 7; j++) {
            outBoard += board[i][j]
            outBoard += '|'
        }
        console.log(outBoard)
    }
    placeTile()
}

function getLast(col) {
    if(!(col > 0 && col < 8)) return -2
    for(var i = 5; i >= 0; i--) {
        if(board[i][col - 1] === ' ') {
            return i
        }
    }
    return -1
}

function checkFour() {
    if(turn === 1 ){ // look for player 2
        player2.sort((a, b) => a - b)
        for(var j = 0; j < player2.length - 1; j++) {
            countTen = 0
            countNine = 0
            countOne = 0
            countEleven = 0
            searchTen = player2[j]
            searchNine = player2[j]
            searchOne = player2[j]
            searchEleven = player2[j]
            for(var i = j + 1; i < player2.length; i++) {
                if(Math.abs(player2[i] - searchTen) === 10) {
                    countTen++
                    searchTen = player2[i]
                }
                else if(Math.abs(player2[i] - searchNine) === 9) {
                    countNine++
                    searchNine = player2[i]
                }
                else if(Math.abs(player2[i] - searchOne) === 1) {
                    countOne++
                    searchOne = player2[i]
                }
                else if(Math.abs(player2[i] - searchEleven) === 11) {
                    countEleven++
                    searchEleven = player2[i]
                }
            }
            if(countTen === 3 || countNine === 3 || countOne === 3 || countEleven === 3) {
                console.log("\nPlayer 2 wins!")
                won = true
                player2Wins++
            }
        }
    }
    
    if(turn === 2 ){ // look for player 1
        player1.sort((a, b) => a - b)
        for(var j = 0; j < player1.length - 1; j++) {
            countTen = 0
            countNine = 0
            countOne = 0
            countEleven = 0
            searchTen = player1[j]
            searchNine = player1[j]
            searchOne = player1[j]
            searchEleven = player1[j]
            for(var i = j + 1; i < player1.length; i++) {
                if(Math.abs(player1[i] - searchTen) === 10) {
                    countTen++
                    searchTen = player1[i]
                }
                else if(Math.abs(player1[i] - searchNine) === 9) {
                    countNine++
                    searchNine = player1[i]
                }
                else if(Math.abs(player1[i] - searchOne) === 1) {
                    countOne++
                    searchOne = player1[i]
                }
                else if(Math.abs(player1[i] - searchEleven) === 11) {
                    countEleven++
                    searchEleven = player1[i]
                }
            }
            if(countTen === 3 || countNine === 3 || countOne === 3 || countEleven === 3) {
                console.log("\nPlayer 1 wins!")
                won = true
                player1Wins++
            }
        }
    }
}

async function placeTile() {
    try {
        if(won) {
            console.log("\n\n")
            throw error
        }
        var Column = await input.text("Choose a column:\n")
        var num = 0
        row = getLast(parseInt(Column))
        if(row === -1) console.log("That column is full!\n")
        else if(row === -2) console.log("Select a  viable column\n")
        else if(turn === 1) {
            board[row][parseInt(Column) - 1] = 'x'
            turn = 2
            num = row.toString()
            num += (parseInt(Column) - 1).toString()
            player1.push(parseInt(num))
        }
        else {
            board[row][parseInt(Column) - 1] = 'o'
            turn = 1
            num = row.toString()
            num += (parseInt(Column) - 1).toString()
            player2.push(parseInt(num))
        }
        checkFour()
        printBoard()
    }
    catch(e) {
        main.gamemenu()
    }
}

module.exports = {initGame, getP1Wins, getP2Wins}