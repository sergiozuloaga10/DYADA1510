function secuencia(n){
    //Caso base: si n es 0 entonces el algoritmo por recursividad ha terminado
    if(n === 0){
        console.log(n)
        return
    }

    //Divide y venceras: Dividimos el problema en 2

    //Parte 1: Imprimimos el numero n
    console.log(n)

    //Parte 2: Llamamos a la funcion a sí misma con el numero anterior n-1
    secuencia(n-1)

}

secuencia(15)
