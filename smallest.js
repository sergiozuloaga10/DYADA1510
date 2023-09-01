/* 
Sergio Zuloaga Santa Maria       Grupo: 1510
Tarea 5 
*/

//Declaramos nuestras variables
var n = 0
var t = 0
var a = []
var m = 0
var mi = -1

//nuestra funcion para pedir el tamaño y elementos de nuestro arreglo
function pedir() {
    n = parseInt(prompt("Digite el tamaño del arreglo: "))
    for (let i = 0; i < n; i++) {
        t = parseInt(prompt(`Digite el elemento ${i + 1} del arreglo: `))
        a.push(t)
    }

    console.log(a)
}

//esta funcion es la que nos da el numero menor y su indice en el arreglo
function smallest() {
    m = a[0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] < m) {
            m = a[i]
            mi = i
        }
    }

    console.log(`El menor indice es ${mi} y contiene el elemento ${m}`)
}

pedir()
smallest()
