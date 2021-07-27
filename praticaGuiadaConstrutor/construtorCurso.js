// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
const Alunos = require('./construtorAluno');


function Curso (nomeCurso, notaAprovacao, faltasMaximas, listaEstudantes)
{
    this.nomeCurso=nomeCurso;
    this.notaAprovacao=notaAprovacao;
    this.faltasMaximas=faltasMaximas;
    this.listaEstudantes=listaEstudantes;
    this.adicionaAlunos=(array)=>this.listaEstudantes.push(...array);
    
    //verificar se média do aluno é maior ou igual à média do curso e faltas<faltas máximas.
    this.verificaAprovacao=(aluno)=>{
        //  console.log(aluno);
        // console.log(aluno.calcularMedia());
         if (aluno.calcularMedia()>=this.notaAprovacao && aluno.faltas<this.faltasMaximas)
        {
            return true;
        }
        else if (aluno.calcularMedia()>=this.notaAprovacao*1.1 && aluno.faltas===this.faltasMaximas)
        {
            return true;
        }
        else {
            return false;
        }
    }
}
        
module.exports=Curso;