function somaArray(array) {
    var soma = 0;
  
    for (var i = 0; i < array.length; i++) {
      soma += array[i];
    }
  
    return soma;
  }
  console.log(somaArray([1, 2, 3, 4, 5])); 
  console.log(somaArray([6, -8, 9, 3])); 
  console.log(somaArray([])); 
  console.log(somaArray([300])); 
    