function multiplicacaoSemOperador(a, b) {
    
    if (a === 0 || b === 0) {
      return 0;
    }
  
    if (a === 1) {
      return b;
    }
    if (b === 1) {
      return a;
    }
  
    if (a > b) {
      return a + multiplicacaoSemOperador(a, b - 1);
    } else {
      return b + multiplicacaoSemOperador(a - 1, b);
    }
  }

console.log(multiplicacaoSemOperador(6, 9));  
console.log(multiplicacaoSemOperador(3, 14)); 
console.log(multiplicacaoSemOperador(8, 7));  
