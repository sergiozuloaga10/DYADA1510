class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Tarea de insertar
function bt_insert(root, value) {
    if (root === null) {
        return new Node(value);
    }

    if (root.value > value) {
        root.left = bt_insert(root.left, value);
    } else {
        root.right = bt_insert(root.right, value);
    }

    return root;
}

// Insertamos
let root = new Node(10);
root = bt_insert(root, 5);
root = bt_insert(root, 15);
root = bt_insert(root, 3);
root = bt_insert(root, 6);

console.log(root);
