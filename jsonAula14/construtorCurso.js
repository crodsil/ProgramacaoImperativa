// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
function Curso (nomeCurso, notaAprovacao, faltasMaximas, listaEstudantes)
{
    //parte 3
    this.nomeCurso=nomeCurso;
    this.notaAprovacao=notaAprovacao;
    this.faltasMaximas=faltasMaximas;
    this.listaEstudantes=listaEstudantes;   //array

    //parte 4        ...argumento                  ..adiciona no final do array

    //                                                spread operator
    this.adicionaAlunos=(array)=>this.listaEstudantes.push(...array);
    
    // parte 5
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