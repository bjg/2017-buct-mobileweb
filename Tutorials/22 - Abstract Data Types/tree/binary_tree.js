class BinaryTree {
    // Semantics of an ordered set (i.e. no duplicates)
    constructor() {
        this.root = null
    }

    add(value) {
        const insertNode = (subtree, value) => {
            if (subtree === null) {
                return new node(value)
            } else {
                if (value < subtree.value) {
                    subtree.left = insertNode(subtree.left, value)
                } else if (value > subtree.value) {
                    subtree.right = insertNode(subtree.right, value)
                } else {
                    // Do nothing as value already exists
                }
            }
            return subtree
        }
        this.root = insertNode(this.root, value)
        return this
    }

    remove(value) {
        const findMin = (subtree) => {
            while (subtree.left !== null) {
                return findMin(subtree.left)
            }
            return subtree.value
        }
        const deleteNode = (subtree, value) => {
            if (subtree !== null) {
                if (value < subtree.value) {
                    subtree.left = deleteNode(subtree.left, value)
                } else if (value > subtree.value) {
                    subtree.right = deleteNode(subtree.right, value)                
                } else {
                    if (subtree.left === null && subtree.right === null) {
                        // Case 1: Leaf node
                        return null
                    } else if (subtree.left === null) {
                        // Case 2: No left sub-tree
                        return subtree.right
                    } else if (subtree.right === null) {
                        // Case 2: No right sub-tree
                        return subtree.left
                    } else {
                        // Case 3: Has both sub-trees
                        subtree.value = findMin(subtree.right)
                        subtree.right = deleteNode(subtree.right, subtree.value)
                    }
                }
            }
            return subtree            
        }
        this.root = deleteNode(this.root, value)
        return this
    }

    search(value) {
        const dfs = (subtree) => {
            if (subtree === null) {
                return false
            }
            if (subtree.value < value) {
                return dfs(subtree.right)
            } else if (subtree.value > value) {
                return dfs(subtree.left)
            } else {
                return true
            }
        }
        return dfs(this.root)
    }

    toString() {
        // In-order travseral
        const dfs = (subtree, repr) => {
            if (subtree !== null) {
                repr = dfs(subtree.left, repr)
                if (repr.length !== 1) {
                    repr += ', '
                }
                repr += subtree.value
                repr = dfs(subtree.right, repr)
            }
            return repr
        }
        return dfs(this.root, '[') + ']'
    }
}

class node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

module.exports = BinaryTree