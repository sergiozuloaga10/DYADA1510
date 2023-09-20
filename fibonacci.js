function fibo(num){
    let A = []
    let n = num

    let a = 1
    let b = 1
    let c = 0

    for(let i = 0; i<n; i++){
        A.push(a)
        c = a + b
        a = b
        b = c
    }

    return A
}

console.log(fibo(8))