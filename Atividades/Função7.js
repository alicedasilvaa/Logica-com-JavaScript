function filtro(array) {
    var numeros = [];
  
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        numeros.push(array[i]);
      }
    }
  
    return numeros;
  }
  console.log(filtro(["Js", 2, "hoje", 4, 5, 7, "teste"])); 
  console.log(filtro(["teste", "tentativa"])); 
  console.log(filtro([5, "seis", 7, "oito", 9])); 
  console.log(filtro([30, 40, "cinquenta", 60, 70])); 
    