const main = require('./main')
const input = require('input');

async function rules() {
    console.log("The rules are simple: Try to build a row of four\n" +
                    "checkers while keeping your opponent from doing the\n" +
                    "same. Sounds easy, but it's not! The vertical strategy\n" +
                    "creates a unique challenge: you must think in a whole\n" +
                    "new way to block your opponent's moves!\n\n")
    console.log("OBJECT:\nBe the first player to get four of your checker in a row\n" +
                            "--horizontally, vertically, or diagonally.\n\n")
    console.log("HOW TO PLAY:\n1) Decide who plays first. Players will alternate turns\n" +
                                "   after playing a checker.\n" + 
                                "   NOTE: The player starting the first game will play\n" +
                                "   in the next game.\n" +
                                "2) On your turn, select a column number and hit \"Enter\"\n" +
                                "   to drop one of your checkers down ANY of the slots.\n" +
                                "3) Play alternates until one player gets FOUR checkers of\n" +
                                "   of his or her color in a row. The four in a row can be\n" +
                                "   horizontal, vertical, or diagonal.\n\n")
    console.log("HOW TO WIN:\nIf you're the first player to get four of your checkers in\n" +
                                "a row, you win the game!\n\n")
    var ans = await input.text("Press enter to return to game menu\n")
    main.gamemenu()
}

module.exports = {rules}