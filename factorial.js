function factori(n){
    let num = n
    let fact

    if (n==0) {
        fact = 1
    } else{
        fact = num*factorial(num-1)
    }

    return fact
}

console.log(factori(7))