//Crie um construtor para ele e importe-o como o módulo aluno.
function Alunos(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    //métodos
    this.atualizaFaltas=()=>this.faltas+=1;
    this.calcularMedia=()=>((this.notas.reduce((total,el)=>total+el))/this.notas.length).toFixed(1);
               
}
module.exports=Alunos;
