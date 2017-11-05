const LinkedList = require('./linked_list.js')

const list = new LinkedList()
list.add(5)
    .add(7)
    .add(9)
    .add('red')
    .add(7)

console.log(list.toString())

list.remove(7)
    .remove(9)

console.log(list.toString())

console.log(list.get(1))