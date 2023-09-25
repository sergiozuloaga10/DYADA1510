//Factorial con recursividad, tarea corregida

function factorial(n){
    if(n<2){
        return 1
    }

    return n*factorial(n-1) //recursividad
}

console.log(factorial(2))