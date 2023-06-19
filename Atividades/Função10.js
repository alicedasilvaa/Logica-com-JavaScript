function melhoresAlunos(estudantes) {
    var melhorAluno = null;
    var melhorMedia = -Infinity;
  
    for (var aluno in estudantes) {
      var notas = estudantes[aluno];
      var somaNotas = notas.reduce(function(acumulador, nota) {
        return acumulador + nota;
      }, 0);
  
      var media = somaNotas / notas.length;
  
      if (media > melhorMedia) {
        melhorAluno = aluno;
        melhorMedia = media;
      }
    }
  
    return { nome: melhorAluno, media: melhorMedia };
  }
  var notasEstudantes = {
    Alice: [6, 5.2, 9.9, 3],
    Felipe: [10, 8.6, 4.7, 8],
    Edu: [0.4, 3.7, 7.6, 9]
  };
  
  console.log(melhoresAlunos(notasEstudantes));
  
    