function Curso(nome, notaAprovacao, faltasMaxima ,listaEstudantes) {
  this.nome = nome,
  this.notaAprovacao = notaAprovacao,
  this.faltasMaxima = faltasMaxima,
  this.listaEstudantes = listaEstudantes,
  this.addAluno = (aluno) => curso.estudantes.push(aluno),
  this.aprovarAluno = (cpf) => {
    let aluno = this.listaEstudantes.find((el) => {
      return el.cpf === cpf
    })

    if(!aluno) return 'Esse aluno não existe!!!';

    let media = aluno.media();

    if(media >= this.notaAprovacao && aluno.faltas < this.faltasMaxima){
      return 'Parabens você passou 👏👏👏✍';
    } else if(aluno.faltas == this.faltasMaxima){
      let mediaDezPorcento = (media * 0.10) + media;
      if(mediaDezPorcento >= this.notaAprovacao){
        return 'Parabens você passou 👏👏👏✍';
      } else {
        return 'Infelizmente você foi reprovado(a) 😪';
      }
    } else {
      return 'Infelizmente você foi reprovado(a) 😪';
    }
  },
  this.alunosAprovadosReprovados = () => {
    return this.listaEstudantes.map((aluno) => {
      let resultado = this.aprovarAluno(aluno.cpf);

      return {
        nome: aluno.nome,
        cpf: aluno.cpf,
        mensagem: resultado
      }
    })
  }
}

module.exports = Curso;
