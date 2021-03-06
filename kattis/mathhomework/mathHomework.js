const readline = require('readline')

function findAns(params) {
        var b = parseInt(params[0])
        var d = parseInt(params[1])
        var c = parseInt(params[2])
        var l = parseInt(params[3])
        var n = Math.min(b, c, d)
        var n = parseInt(l / n)
        var once = false
        var ans = ""
        for(var i = 0; i <= n; i++) {
            for(var j = 0; j <= n; j++) {
                for(var k = 0; k <= n; k++) {
                    if((b*i + d*j + c*k) === l) {
                        if(once) ans += "\n"
                        ans += (i + " " + j + " " + k)
                        once = true
                    }
                }
            }
        }
        if(!once) ans = "impossible"
        return ans
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