class Heap {

  constructor() {
    this.data = []
  }

  getParentIndex(idx) {
    return Math.round((idx - 2) / 2)
  }
  getLeftChildIndex(idx) {
    return idx * 2 + 1
  }
  getRightChildIndex(idx) {
    return idx * 2 + 2
  }

  peek() {
    return this.data[0]
  }

  poll() {
    const min = this.peek()
    if (this.data.length === 1) {
      this.data.pop()
    } else {
      this.data[0] = this.data.pop()
    }
    this._bubbleDown()
    return min
  }

  add(newNumber) {
    this.data.push(newNumber)
    this._bubbleUp()
  }

  _swap(idx1, idx2) {
    const swp = this.data[idx1]
    this.data[idx1] = this.data[idx2]
    this.data[idx2] = swp
  }

  size() {
    return this.data.length
  }

  print() {
    let range = [0, 0]
    let level = 0
    while (true) {
      console.log(this.data.slice(range[0], range[1] + 1))
      range = [range[1] + 1, range[1] + Math.pow(2, ++level)]
      if (range[0] >= this.data.length) {
        break
      }
    }
  }

}

class MinHeap extends Heap {
  _bubbleDown() {
    let idx = 0
    while (this.data[this.getLeftChildIndex(idx)] < this.data[idx]) {
      if (this.getRightChildIndex(idx) < this.data.length && this.data[this.getRightChildIndex(idx)] <= this.data[this.getLeftChildIndex(idx)]) {
        this._swap(idx, this.getRightChildIndex(idx))
        idx = this.getRightChildIndex(idx)
      } else {
        this._swap(idx, this.getLeftChildIndex(idx))
        idx = this.getLeftChildIndex(idx)
      }
    }
  }

  _bubbleUp() {
    let idx = this.data.length - 1
    while (idx > 0 && this.data[this.getParentIndex(idx)] > this.data[idx]) {
      this._swap(this.getParentIndex(idx), idx)
      idx = this.getParentIndex(idx)
    }
  }
}

class MaxHeap extends Heap {
  _bubbleDown() {
    let idx = 0
    while (this.data[this.getLeftChildIndex(idx)] > this.data[idx]) {
      if (this.getRightChildIndex(idx) < this.data.length && this.data[this.getRightChildIndex(idx)] >= this.data[this.getLeftChildIndex(idx)]) {
        this._swap(idx, this.getRightChildIndex(idx))
        idx = this.getRightChildIndex(idx)
      } else {
        this._swap(idx, this.getLeftChildIndex(idx))
        idx = this.getLeftChildIndex(idx)
      }
    }
  }

  _bubbleUp() {
    let idx = this.data.length - 1
    while (idx > 0 && this.data[this.getParentIndex(idx)] < this.data[idx]) {
      this._swap(this.getParentIndex(idx), idx)
      idx = this.getParentIndex(idx)
    }
  }
}

const lower = new MaxHeap()
const higher = new MinHeap()

const add = num => {
  if (lower.size() === 0) {
    lower.add(num)
  } else {
    if (lower.size() === higher.size()) {
      if (num <= higher.peek()) {
        lower.add(num)
      } else {
        lower.add(higher.poll())
        higher.add(num)
      }
    } else {
      if (num <= lower.peek()) {
        higher.add(lower.poll())
        lower.add(num)
      } else {
        higher.add(num)
      }
    }
  }
}

const getMedian = () => (lower.size() === higher.size() ? ((lower.peek() + higher.peek()) / 2).toFixed(1) : lower.peek().toFixed(1)).toString()

const printMedian = () => {
  console.log(getMedian())
}

module.exports.printMedian = printMedian
module.exports.getMedian = getMedian
module.exports.add = add

