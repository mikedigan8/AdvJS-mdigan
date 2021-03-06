const sanic = require('./sanic')

var params1 = 2.00
var ans1 = "1.00"

var params2 = 1.10
var ans2 = "0.10"

var params3 = 1000.00
var ans3 = "999.00"

test('Default case', () => {
    expect(sanic.findAns(params1)).toBe(ans1)
})

test('Minimum radius', () => {
    expect(sanic.findAns(params2)).toBe(ans2)
})

test('Maximum radius', () => {
    expect(sanic.findAns(params3)).toBe(ans3)
})