const vowels = ['a','e','i','o','u']

function contarTildes(cadena) {
    let contador = 0
    
    
    for (let i = 0; i < cadena.length; i++) {
      if (
        cadena[i] === 'a' ||
        cadena[i] === 'e' ||
        cadena[i] === 'i' ||
        cadena[i] === 'o' ||
        cadena[i] === 'u'
      ) {
        contador++
      }
    }
    
    return contador
}
  
const texto = "María quería jugar pero había tíldes por ahí"
console.log(contarTildes(texto))
  