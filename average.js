let a = [2,9,7,8,6,10,5]
let sum = a[0]
let prom = 0

function average(){
    for(let i = 1; i<a.length; i++){
        sum = sum+a[i]
    }

    prom = sum/a.length

    return prom
}

console.log(average())