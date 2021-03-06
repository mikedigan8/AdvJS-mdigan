const mathHomework = require('./mathHomework')

var params1 = ['2','4','4','14']
var ans1 = "1 0 3\n1 1 2\n1 2 1\n1 3 0\n3 0 2\n3 1 1\n3 2 0\n5 0 1\n5 1 0\n7 0 0"

var params2 = ['100','80','60','240']
var ans2 = "0 0 4\n0 3 0\n1 1 1"

var params3 = ['2','4','6','9']
var ans3 = "impossible"

test('Case with lots of options', () => {
    expect(mathHomework.findAns(params1)).toBe(ans1)
})

test('Case with many legs', () => {
    expect(mathHomework.findAns(params2)).toBe(ans2)
})

test('Case with impossible output', () => {
    expect(mathHomework.findAns(params3)).toBe(ans3)
})