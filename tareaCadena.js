function contarTildes(cadena) {
    const vocalesTilde = "áéíóúÁÉÍÓÚ"
    let contador = 0
    
    
    for (let i = 0; i < cadena.length; i++) {
      if (vocalesTilde.includes(cadena[i])) {
        contador++
      }
    }
    
    return contador
}
  
const texto = "María quería jugar pero había tíldes por ahí"
console.log(contarTildes(texto))
  