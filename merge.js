/**
 * Dados dos arreglos ordenados A, B; producir un nuevo arreglo C ordenado ascendentemente uniendo A y B 
 * 
 * A = [1, 5, 7, 9, 11, 12]       N = 5
 *               i
 * B = [3, 4, 9, 10]          M = 4
 *                j
 * C = [1, 3,  ]
 *            k
 *
 *  Comparar los dos elementos más pequeños.
 *  El más pequeño, lo voy a sacar de su arreglo para ingresarlo al nuevo
 *       
 *       [1, 3, 4, 5, 7, 9, 9, 10, 11]
 * 
 * Merge(A, B)
 * // input: dos arreglos A y B ordenados
 * // output: la unión de A y B ordenada
 */

function merge(arrayA, arrayB) {
    let i = 0;
    let j = 0;
    let k = 0;
    const result = [];
  
    while (i < arrayA.length && j < arrayB.length) { // -observacion--
      if (arrayA[i] <= arrayB[j]) {
        result[k] = arrayA[i];
  
        if (i < arrayA.length) {
          i++;
        }
      } else {
        result[k] = arrayB[j];
  
        if (j < arrayB.length) {
          j++;
        }
      }
      k++;
    }

    while (i < arrayA.length) { //ambos ehile se agregan por si hubo algun elemento sin agregar
        result[k] = arrayA[i];
        i++;
        k++;
      }
    
      while (j < arrayB.length) {
        result[k] = arrayB[j];
        j++;
        k++;
      }
  
    return result;
  }
  
  const arrA = [1, 5, 7, 9, 11, 12] ;
  const arrB = [3, 4, 9, 10];
  
  console.log(merge(arrA, arrB)); // 

  /*--observacion--
  La sentencia del while:
     while (result.length < arrayA.length + arrayB.length) el tamaño de los arreglos no es el 
     mismo, debido a que estamos comparando 2 arreglos para unirlos y ordenarlos no se pueden 
     agregar todos los elementos debido a la lógica de comparación y asignación que se realiza 
     dentro del while (debido a que un arreglo es mas grande que el otro) por lo que se unen 
     hasta el limite del arreglo mas pequeño y el resto de elementos del arreglo mas grande se 
     deben agregar desde otro bucle aparte, como la sentencia de while que propuso en la clase 
     dice que se ejecutara hasta que result.length sea igual a la suma del tamaño de los 
     arreglos a y b, al unirse en el arreglo result quedaron elementos sin agregar del arreglo 
     b, y como se especifico qu el tamaño del arreglo result seria hasta 10 solo llego hasta 
     result[8] por lo que los ultimos espacios los relleno con undefined*/
  