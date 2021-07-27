let curso = require('./construtorCurso');
let estudantes = require('./estudantes');


let curso1=new curso('Javascript',8,2,['Silvia','Sandro']);

//verificando se a lista de estudantes está aprovada ou reprovada
//agora não estamos mais trabalhando com o objeto aluno1, tivemos que trocar por estudantes
for (let i=0; i<estudantes.length; i++) {
    if(curso1.verificaAprovacao(estudantes[i])==true) {
        console.log('Aluno',estudantes[i].nome,'está APROVADO!');
    }
    else
    {
        console.log('Aluno',estudantes[i].nome,'está REPROVADO!');
    }
}




