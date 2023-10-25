function dominant(arr){
    const r = [];

    let k = 0;

    for(let i=0; i<arr.length; i++){
        const condicion = arr[i] >= -1000 && arr[i] <= 1000; //condicion
        
        if (!condicion){ //Verificamos que la condicion propuesta se cumpla
            return 'Hay elementos fuera del rango establecido'; //Si no se cumple retorna un mensaje 

        } else if(arr[i] > arr[i+1] || arr[i+1] === undefined){ //Si la condicion se cumple  entonces agregara los dominantes a un nuevo arreglo r
            r[k] = arr[i];
            k++;
            
        }

    }
    
    return r;

} 

console.log(dominant([1,21,4,7,5])); // [ 21, 7, 5 ]
console.log(dominant([5,4,3,2,1])); // [ 5, 4, 3, 2, 1 ]
console.log(dominant([1,21,1001,7,5])); // Hay elementos fuera del rango establecido
console.log(dominant([9,-1001,4,5])); // Hay elementos fuera del rango establecido
