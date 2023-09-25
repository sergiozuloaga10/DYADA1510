//Serie Gregory-Leibniz por iteracion

function calcPi(numero_iteraciones){
    let pi = 0
    for(let n = 0; n < numero_iteraciones; n++){ //decidi utilizar 'n' en lugar de 'i' para que tenga mejor relacion con la formula
        let divisor = 2*n+1
        if(n % 2 === 0){
            pi+=1 / divisor
        } else{
            pi-=1 / divisor
        }
    }
    
    return 4*pi
}

console.log(calcPi(10000000))