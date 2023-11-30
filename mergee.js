//Dado dos arreglos ordenados A, B; producir un nuevo arreglo C uniendo A y B

const arrA = [1, 2, 7, 9, 14, 23]
const arrB = [3, 8, 9, 10, 16, 18, 19]

function merge(A, B){
    let C = []

    let i = 0 // Índice para el arreglo A
    let j = 0 // Índice para el arreglo B
    let k = 0 // Indice para el arreglo C

    while (i < A.length && j < B.length) {
        if (A[i] <= B[j]) {
            C[k] = A[i]
            i++
        } else if (A[i] > B[j]) {
            C[k] = B[j]
            j++
        }

        k++
    }

    // Agregar los elementos restantes de A y B, si los hay
   
    while (i < A.length) {
        C[k] = A[i]
        i++
        k++
    }

    while (j < B.length) {
        C[k] = B[j]
        j++
        k++
    }

    return C
}

console.log(merge(arrA, arrB))
