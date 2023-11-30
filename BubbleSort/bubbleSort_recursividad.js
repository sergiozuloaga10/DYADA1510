let arr = [7,6,9,1,2,4,12,5,23,41,22,15,13]

function bubbleSortr(arr, n=arr.length){
    //caso base: si n===1 entoncesel arreglo ya ha sido ordenado
    if(n === 1){
        return arr
    }

    for(let i=0; i<n-1; i++){
        if(arr[i]>arr[i+1]){
            let aux = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = aux 
        }

    }

    //RECURSIVIDAD
    return bubbleSortr(arr, n-1)

}

console.log(bubbleSortr(arr))
