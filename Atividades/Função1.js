function verificarMaiorOuIgual(numero1, numero2) {
    if (numero1 > numero2) {
        return "O primeiro numero é maior que o segundo.";
    } else if (numero1 < numero2){ 
        return "O primeiro numero é menor que o segundo.";
    } else{ numero1 = numero2 
        return "O primeiro numero é igual ao segundo.";
    }
}

console.log(verificarMaiorOuIgual(5,3)); 
console.log(verificarMaiorOuIgual(2,8)); 
console.log(verificarMaiorOuIgual(9,9)); 
