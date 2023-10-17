let arr = [9,4,6,7,3,23,17,12,1,8]

function burbbleSort(arr){
    let finalizado = false

    while(finalizado === false){
        finalizado = true
        for(let i=0; i<arr.length-1; i++){
             if(arr[i]>arr[i+1]){
                 let aux = arr[i]
                 arr[i] = arr[i+1]
                 arr[i+1] = aux
                 
                 finalizado = false
             }
         } 
 
     }

    return arr
}

console.log(burbbleSort(arr))
