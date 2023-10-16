const arr = [1,2,4,5,7,9,12,16,18,20,22,30]
let mid = 0

function binarySearch(arr, ele){
    let iz = 0
    let n = arr.length-1

    while(iz <= n){
        mid = Math.floor((iz + n)/2)
       
        if (arr[mid] < ele){
            iz = mid + 1
        }else if(arr[mid] > ele){
            n = mid - 1
        }else{
            return arr[mid]
        }
    }

    return -1
}

console.log(binarySearch(arr, 5))  //5

console.log(binarySearch(arr, 20)) //20

console.log(binarySearch(arr, 21)) //-1
