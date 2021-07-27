let calcularNotas = {
  nome: 'Rafael',
  numeroDoArquivo: '2309874',
  listaDeNotas: [10, 8, 10],
  nota(notaDeAprovacao) {
    let result = this.listaDeNotas.reduce((acumulador, valor) => {
      return acumulador += valor
    });

    let media = result / this.listaDeNotas.length;

    if(media >= notaDeAprovacao) {
      console.log('Parabéns, você passou :)');
    } else {
      console.log('Infelizmente você não passou :(');
    }
  },
}

calcularNotas.nota(10);