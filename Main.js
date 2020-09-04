const fs = require('fs')
const readline = require('readline')
const path = require('path')
const Queue = require('./index');


async function processLineByLine() {
    const actionsPath = path.join(__dirname, 'actions.txt')
    const fileStream = fs.createReadStream(actionsPath)

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })

    const userQueue = new Queue()
    for await (const line of rl) {
        const commandArray = line.split(',')
        const command = commandArray[0]
        const args = commandArray.slice(1)
        console.log('Action:', command)
        console.log('Arguments:', args)
        switch (command) {
            case ('ADD'): {
                userQueue.add(...args)
                break
            }
            case ('REMOVE_USER'): {
                userQueue.removeByUser(...args)
                break
            }
            case ('MOVE'): {
                userQueue.move(...args)
                break
            }
            case ('REVERSE'): {
                userQueue.reverse()
                break
            }
            case ('SWAP'): {
                userQueue.swap(...args)
                break
            }
            case ('REMOVE_POSITION'): {
                userQueue.removeByPosition(...args)
                break
            }
            case ('PRINT'): {
                userQueue.print()
                break
            }
            default: {
                return
            }
        }
        console.log('Result:', userQueue.data)
    }
}

processLineByLine()