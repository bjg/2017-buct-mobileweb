const BinaryTree = require('./binary_tree.js')

const tree = new BinaryTree()
tree.add(5)
    .add(7)
    .add(1)
    .add(12)
    .add(9)
    .add(7)
    .add(99)
    .add(-1)
    .add(0)
    .add(-100)

console.log(tree.toString())

tree.remove(5)
    .remove(-100)
    .remove(0)

console.log(tree.toString())

console.log(tree.search(0))
console.log(tree.search(99))



