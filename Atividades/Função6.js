function repetir(elemento, quantidade) {

    if (typeof quantidade !== 'number' || quantidade < 0 || !Number.isInteger(quantidade)) {
      return "A quantidade deve ser um número inteiro não negativo.";
    }
  
    var arrayResultado = [];
  
    for (var i = 0; i < quantidade; i++) {
      arrayResultado.push(elemento);
    }
  
    return arrayResultado;
  }

console.log(repetir("teste", 8)); 
console.log(repetir(5, 9)); 
console.log(repetir("abc", 0)); 
console.log(repetir(2, -9)); 
console.log(repetir(true, 8)); 
