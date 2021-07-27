//Crie um construtor para ele e importe-o como o módulo aluno.
//parte 1
function Alunos(nome, faltas, notas) {
    //notas =array
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;   //receber como array [9,2,10,5] =4

    //parte 2
    //métodos
    this.atualizaFaltas=()=>this.faltas+=1;   //this.faltas=this.faltas+1
    this.calcularMedia=()=>((this.notas.reduce((total,el)=>total+el))/this.notas.length).toFixed(1);
               
}
module.exports=Alunos;
