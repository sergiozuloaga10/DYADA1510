//Fibonacci con recursividad, tarea corregida

function fib(n){
    if(n<3){
        return 1
    }

    return fib(n-2)+fib(n-1) //recursividad
}

console.log(fib(8))