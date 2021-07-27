//json = javascript object notation - notação de objetos js
//trocar dados com outros sistemas
//compatibilidade com outras linguagens: c#, java, go
//padrão web
//não suporta comentários

// sintaxe:   {"propriedade" : "valor propriedade"}

let dadosJson='[{"funcionario" : "Maria", "idade" : 40, "valeTransporte" : true, "salario" : 5600.00, "filiacao" : ["Pedro","Teresa"]},{"funcionario" : "Chris", "idade" : 18, "valeTransporte" : false, "salario" : 15600.00, "filiacao" : ["Edilson","Cícera"]}]';

//console.log(dadosJson);
// console.log(typeof dadosJson);

//transformar de json para objeto literal
//desserializando ou parsing   JSON.parse()
let dadosObjeto=JSON.parse(dadosJson);
console.log(dadosObjeto);
// console.log(typeof dadosObjeto);

//console.log(dadosObjeto.salario.toFixed(2));

//console.table(dadosObjeto);
