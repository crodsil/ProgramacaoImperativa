const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numerosDivididos(array) {
  let total = array.reduce((acumulador, numero) => acumulador + numero );

  return array.map(numero => total / numero);

}

console.log(numerosDivididos(numeros));

const nomes = ['Rachel', 'Ana', 'Beatriz', 'Pedro', 'João'];

function nomesMaior(arrayNomes, numero) {
  return arrayNomes.filter(nome => nome.length > numero)
}

console.log(nomesMaior(nomes, 4))

const alunos = [
  {nome: 'lucas', nota: 6},
  {nome: 'ana', nota: 8},
  {nome: 'matheus', nota: 7},
  {nome: 'joão', nota: 5},
  {nome: 'hugo', nota: 9},
  {nome: 'caio', nota: 10}
]

function ordenarNomes(array) {
  return array.sort((a, b) => {
    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
  });
}
console.log(ordenarNomes(alunos));


function ordenarNotas(array) {
  return array.sort((a, b) => {
    return b.nota - a.nota
  });
}
console.log(ordenarNotas(alunos))