const expect = require('chai').expect

const sort = (arr) => {
    if (!arr) {
        return [];
    }
    const res = arr.map(() => undefined)
    let start = 0
    let end = arr.length - 1
    arr.forEach(item => {
        if (item !== 0) {
            res[start++] = item
        } else {
            res[end--] = item
        }
    })
    return res
}

expect(sort([0, 3, 2, 0, 0])).to.be.eql([3, 2, 0, 0, 0])
expect(sort([0, 3, 0, 2])).to.be.eql([3, 2, 0, 0])
expect(sort([3, 2, 4, 1])).to.be.eql([3, 2, 4, 1])
expect(sort([1, 1, 1, 1, 1])).to.be.eql([1, 1, 1, 1, 1])
expect(sort([1, 1, 1, 0, 0, 1, 0, 1])).to.be.eql([1, 1, 1, 1, 1, 0, 0, 0])