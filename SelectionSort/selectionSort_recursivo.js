let arr = [7,6,9,1,2,4,12,5,23,41,22,15,13]

function selectionSortr(arr, n=arr.length){
    //caso base: si n es igual a 0 o a 1 entonces terminamos
    if(n <= 1){
        return arr
    }

    
    let j = 0
    for(let i=1; i<n; i++){
        if(arr[i]>arr[j]){
            j = i
        }
    }

    if(j !== n-1){
        let aux = arr[n-1]
        arr[n-1] = arr[j]
        arr[j] = aux
    }

    selectionSortr(arr, n-1)

    return arr

}

console.log(selectionSortr(arr))


