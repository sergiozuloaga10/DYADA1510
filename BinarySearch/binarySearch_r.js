const arr = [1,2,4,5,7,9,12,16,18,20,22,30]

function binarySearch(arr, ele, iz = 0, n = arr.length-1){
    if(iz > n){
        return -1
    }

    const mid = Math.floor((iz + n)/ 2)

    if(arr[mid] === ele){
        return arr[mid]
    }

    if(ele > arr[mid]){
        return binarySearch(arr, ele, mid+1, n)
    } else{
        return binarySearch(arr, ele, iz, mid-1)
    }
}

console.log(binarySearch(arr, 5))  //5

console.log(binarySearch(arr, 20)) //20

console.log(binarySearch(arr, 21)) //-1
