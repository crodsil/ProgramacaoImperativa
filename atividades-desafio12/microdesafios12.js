const numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const numerosImpares = numerosPares.map(numero => numero -1);
console.log(numerosImpares);

const numerosFormatados = numerosPares.reduce((acumulador, numero) => acumulador + numero);
console.log(numerosFormatados);

const animais = ['Elefante', 'Tucano', 'Leão', 'Girafa'];
animais.forEach(animal => console.log('O animal é ' + animal))

const nomes =['Maria', 'Beatriz', 'Rosana', 'Maria'];
const filtrarNomes = nomes.filter(nome => nome === 'Maria');
console.log(filtrarNomes)