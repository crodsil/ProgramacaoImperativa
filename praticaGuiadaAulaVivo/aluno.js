function Aluno(nome, faltas, cpf, notas){
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
  this.cpf = cpf;
  this.media = () => {
    let somaNotas = this.notas.reduce((acumulador, nota) => acumulador + nota);
    return (somaNotas / this.notas.length).toFixed(2);
  },
  this.addFaltas = () => {
    this.faltas += 1
  }
}

module.exports = Aluno;