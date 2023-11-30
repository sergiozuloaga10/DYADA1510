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

// Lo vimos en clase: busqueda
function search(root, t) {
    if (root === null || root.value === t) {
        return root.value;
    }

    if (root.value > t) {
        return search(root.left, t);
    } else {
        return search(root.right, t);
    }
}

// Insertamos
let root = new Node(10);
root = bt_insert(root, 5);
root = bt_insert(root, 15);
root = bt_insert(root, 3);
root = bt_insert(root, 7);

console.log(search(root, 5)); // Devuelve el nodo con valor 15

