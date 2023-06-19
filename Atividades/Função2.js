function calcularQuantidadeDeDias (Idade){
    if (Idade < 0){
        return "Idade inválida. Digite um valor não negativo.";
    } else{
        var quantidadeDias = Idade * 365;
        return "Quantidade de dias correspondente com a idade é:" + quantidadeDias + "dias.";
        }
} 

console.log(calcularQuantidadeDeDias(45));
console.log(calcularQuantidadeDeDias(94));
console.log(calcularQuantidadeDeDias(-34));