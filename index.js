//assume that the position of a user first in the queue starts at 1 not 0

class Queue {
    constructor() {
        this.data = []
    }
    add(userId) {
        if (this.data.includes(userId)) return false
        this.data.unshift(userId)
        return this.data.indexOf(userId)
    }

    removeByUser(userId) {
        if (!this.data.includes(userId)) return false
        const queueAfterRemovingUser = this.data.filter((id) => id !== userId)
        this.data = queueAfterRemovingUser
        return true
    }

    removeByPosition(position) {
        if (typeof this.data[this.data.length - position] === 'undefined') return false
        this.data.splice(this.data.length - position, 1)
        return true
    }

    move(fromPosition, toPosition) {
        if (typeof this.data[this.data.length - fromPosition] === 'undefined' || typeof this.data[this.data.length - toPosition] === 'undefined') return false
        const user = this.data[this.data.length - fromPosition]
        const dataCopy = [...this.data]
        dataCopy.splice(this.data.length - fromPosition, 1)
        dataCopy.splice(this.data.length - toPosition, 0, user)
        this.data = dataCopy
        return true
    }

    swap(position1, position2) {
        if (typeof this.data[this.data.length - position1] === 'undefined' || typeof this.data[this.data.length - position2] === 'undefined') return false
        const user1 = this.data[this.data.length - position1]
        const user2 = this.data[this.data.length - position2]
        this.data.splice(this.data.length - position1, 1, user2)
        this.data.splice(this.data.length - position2, 1, user1)
        return true
    }

    reverse() {
        this.data = this.data.reverse()
        return true
    }

    print() {
        let position = 1
        for (let i = this.data.length - 1; i >= 0; i--) {
            console.log(`{${position}}:{${this.data[i]}}`)
            position++
        }
        return true
    }
}

module.exports = Queue;
