// Micro desafio - Passo 1
// let aluno = require('./construtorAluno');
let curso = require('./construtorCurso');
let aluno = require('./construtorAluno');

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
//crie um objeto aluno

let aluno1= new aluno ('José',9,[10,8,9.5,2]);
console.log('Faltas:',aluno1.faltas);
console.log('Faltas atualizadas: ',aluno1.atualizaFaltas());
console.log('Faltas atualizadas: ',aluno1.atualizaFaltas());
console.log('Faltas:',aluno1.faltas);
console.log('Média: ',aluno1.calcularMedia());


let curso1=new curso('Javascript',8,2,['Silvia','Sandro']);
curso1.adicionaAlunos(['Mateus','Natália','Giulia']);
console.log('Lista de alunos: ',curso1.listaEstudantes);




  



