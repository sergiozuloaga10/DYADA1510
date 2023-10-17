let arr = [9,4,6,7,3,23,17,12,1,8]

function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                let aux = arr[j]
                arr[j] = arr[i]
                arr[i] = aux

            }

        }
    }

    return arr
}

console.log(selectionSort(arr))
