let numerosPrimos = ["dois", "tres", "cinco"];

let numeros = ["um", "quatro", ...numerosPrimos];

//console.log(numeros);

let maiorNumero = [9, 8, 10];
let menorNumero = [3, 5, 6, ...maiorNumero]
Math.min(...menorNumero);

console.log(Math.min(...menorNumero));
