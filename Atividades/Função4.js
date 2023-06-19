function inverso(valor) {
    if (typeof valor === 'boolean') {
      return !valor;
    } else if (typeof valor === 'number') {
      return -valor;
    } else {
      return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`;
    }
  }
  console.log(inverso(true));   
  console.log(inverso(67));     
  console.log(inverso(9.44));   
  console.log(inverso("teste"));  
    