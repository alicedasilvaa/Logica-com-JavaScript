function segundoMaiorNumero(array) {
    
    if (array.length < 2) {
      return "O array precisa ter pelo menos dois números.";
    }
  
    var maior = Math.max.apply(null, array);
  
    var arraySemMaior = array.filter(function(numero) {
      return numero !== maior;
    });
  
    var segundoMaior = Math.max.apply(null, arraySemMaior);
  
    return segundoMaior;
  }
  console.log(segundoMaiorNumero([1, 2, 3, 4, 5])); 
  console.log(segundoMaiorNumero([3, 8, 10, 5])); 
  console.log(segundoMaiorNumero([100, 200, 300, 400])); 
  console.log(segundoMaiorNumero([98])); 
    