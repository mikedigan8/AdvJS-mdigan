const readline = require('readline')

function findAns(params) {
    var ans = (2 * Math.PI * (parseFloat(params) - 1)) / (2 * Math.PI)
    return ans.toFixed(2)
}

function start() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.on('line', (line) => {
        var params = line.split(' ')
        var ans = findAns(params)
        console.log(ans)
    })
}

if(require.main === module) {
    start()
}

module.exports = {findAns}