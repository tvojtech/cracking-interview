const getMedian = require('./heaps').getMedian
const add = require('./heaps').add

const expect = require('chai').expect

const fs = require('fs')

let input = fs.readFileSync('./heaps.data/input', 'utf8')
let output = fs.readFileSync('./heaps.data/output', 'utf8')

input = input.split('\n').slice(1)
output = output.split('\n')

for (let idx = 0; idx < input.length; ++idx) {
  add(Number(input[idx]))
  expect(getMedian(), `idx = ${idx}`).to.equal((output[idx]))
}
