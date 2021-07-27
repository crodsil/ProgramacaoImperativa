
//parte 7
const aluno = require('./construtorAluno');
let aluno1= [
    new aluno ('Silvia',1,[10,8,9.5,9]),
    new aluno ('Mateus',1,[9,7,2.5,10]),
    //para testar o número de faltas iguais e a média com 10% acima da média do curso que é 8 então terá que ser maior que 8.8
    new aluno ('Chris',2,[9,9,9,8]),     /// média 8.8
    new aluno ('Natália',2,[10,10,10,10]),
    new aluno ('Giulia',1,[7.5,8,4,9]),
    new aluno ('Sandro',3,[5,10,9.5,9])

    
]

module.exports=aluno1;
