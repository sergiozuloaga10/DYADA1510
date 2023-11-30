const arr = [12,3,4,6,8,2,20,17,31];

function mergeSort(arr){
    //caso base:
    if(arr.length === 1){
        return arr;
    }

    const mid = Math.floor(arr.length/2);

    //Divide y venceras
    const a1 = arr.slice(0, mid);
    const a2 = arr.slice(mid);

    //Recursividad
    return mergeSort(mergeSort(a1), mergeSort(a2));
}

function merge(a1, a2){
    let arr = [];
    let i = 0; // Índice para el arreglo a1
    let j = 0; // Índice para el arreglo a2
    let k = 0; // Indice para el arreglo arr

    while (i < a1.length && j < a2.length) {
        if (a1[i] <= a2[j]) {
            arr[k] = a1[i];
            i++;
        } else if (a1[i] > a2[j]) {
            arr[k] = a2[j];
            j++;
        }
        k++;
    }

        while (i < a1.length) {
            arr[k] = a1[i];
            i++;
            k++;
        }
    
        while (j < a2.length) {
            arr[k] = a2[j];
            j++;
            k++;
        }

    return arr;
}

console.log(mergeSort(arr));
