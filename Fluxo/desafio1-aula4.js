
//A pessoa deve medir mais de 1.40m e menos de 2 metros.
//Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
//Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

let tamanho = 1.10

if(tamanho > 1.40 && tamanho < 2.00) {
    console.log("Acesso autorizado")
}  else if (tamanho < 1.40 && tamanho > 1.20 ) {
    console.log("Acesso autorizado somente com acompanhante");
} else {
    console.log("Acesso negado");
}