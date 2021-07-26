const Aluno = require('./aluno');
const Curso = require('./curso');

const estudantes = [
  new Aluno('Rafael Rodrigues', 2, '61761519026', [10,8,9,7]),
  new Aluno('Aline Ribeiro', 4, '84898563031', [8,8,7,7]),
  new Aluno('Gabriela Souza', 1, '73301081037', [10,8,9,7]),
  new Aluno('Rafael Rodrigues', 1, '77414052095', [6,8,9,7]),
  new Aluno('Sergio Cabral', 6, '86661353015', [5,5,6,7]),
];

const curso = new Curso('Marketing Digital', 3, 4, estudantes);

console.log(curso.alunosAprovadosReprovados());
console.log(curso.aprovarAluno('84898563031'));